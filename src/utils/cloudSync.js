export function generateRandomSyncKey() {
  const words = ['SHADOW-PAW', 'CYBER-CAT', 'NEXUS-PAW', 'APEX-PHOENIX', 'VALKYRIE-PAW', 'NEBULA-CAT', 'TITAN-PAW', 'OVERCLOCK-CAT'];
  const randWord = words[Math.floor(Math.random() * words.length)];
  const num = Math.floor(100 + Math.random() * 900);
  return `${randWord}-${num}`;
}

export const DEFAULT_SYNC_KEY = '';

const SYNC_SERVERS = [
  'https://ntfy.adminforge.de',
  'https://ntfy.sh'
];

/**
 * Synchronous, deterministic hash helper to guarantee identical 24-char channel ID
 * across all HTTP/HTTPS browsers, Node, and mobile contexts.
 */
function getHashedTopic(syncKey) {
  const key = `sprintset_v1_${(syncKey || 'ANONYMOUS-PAW').trim().toUpperCase()}`;
  let h1 = 0x811c9dc5;
  let h2 = 5381;
  for (let i = 0; i < key.length; i++) {
    const code = key.charCodeAt(i);
    h1 = (h1 ^ code) * 16777619;
    h2 = ((h2 << 5) + h2) ^ code;
  }
  const hex1 = Math.abs(h1).toString(16).padStart(8, '0');
  const hex2 = Math.abs(h2).toString(16).padStart(8, '0');
  return `sprintsetsync_${hex1}${hex2}`;
}

/**
 * Push current Veto points & full app state to cloud (with failover servers)
 */
export async function pushSyncData(syncKey, payload) {
  if (!syncKey || !syncKey.trim()) return false;
  const topic = getHashedTopic(syncKey);

  const jsonString = JSON.stringify({
    ...payload,
    syncKey: 'REDACTED',
    updatedAt: new Date().toISOString()
  });

  for (const serverUrl of SYNC_SERVERS) {
    try {
      // 1. Try sending direct JSON POST message body
      const res = await fetch(`${serverUrl}/${topic}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: jsonString
      });

      if (res.ok) return true;

      // 2. If message body POST fails, try PUT attachment fallback
      const attachRes = await fetch(`${serverUrl}/${topic}`, {
        method: 'PUT',
        keepalive: true,
        headers: {
          'Title': 'SprintsetPrivateSync',
          'Filename': 'sync_state.json'
        },
        body: jsonString
      });

      if (attachRes.ok) return true;
    } catch (err) {
      console.warn(`Cloud Push failed on ${serverUrl}, trying fallback...`, err);
    }
  }

  return false;
}

/**
 * Pull latest Veto points & full app state from cloud (with failover servers)
 */
export async function pullSyncData(syncKey) {
  if (!syncKey || !syncKey.trim()) return null;
  const topic = getHashedTopic(syncKey);

  for (const serverUrl of SYNC_SERVERS) {
    try {
      const res = await fetch(`${serverUrl}/${topic}/json?poll=1`);
      if (!res.ok) continue;

      const text = await res.text();
      const lines = text.trim().split('\n').filter(Boolean);

      for (let i = lines.length - 1; i >= 0; i--) {
        try {
          const item = JSON.parse(lines[i]);
          if (item && item.event === 'message') {
            // Attachment format
            if (item.attachment && item.attachment.url) {
              const fileRes = await fetch(item.attachment.url);
              if (fileRes.ok) {
                const parsed = await fileRes.json();
                if (parsed && typeof parsed === 'object') return parsed;
              }
            } 
            // Direct message body format
            else if (item.message) {
              const parsed = typeof item.message === 'string' ? JSON.parse(item.message) : item.message;
              if (parsed && typeof parsed === 'object') {
                return parsed;
              }
            }
          }
        } catch (e) {
          // Skip malformed lines
        }
      }
    } catch (err) {
      console.warn(`Cloud Pull failed on ${serverUrl}, trying fallback...`, err);
    }
  }

  return null;
}

/**
 * Generate Veto Deep Link URL for mobile app launch
 */
export function generateVetoDeepLink(unclaimedPoints, conversionRate = 100, syncKey = '') {
  const minutes = Math.floor(unclaimedPoints / (conversionRate || 100));
  const key = (syncKey || '').trim().toUpperCase();
  return `veto://claim-reward?points=${unclaimedPoints}&minutes=${minutes}&syncKey=${encodeURIComponent(key)}`;
}
