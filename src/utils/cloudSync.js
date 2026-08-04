export function generateRandomSyncKey() {
  const words = ['SHADOW-PAW', 'CYBER-CAT', 'NEXUS-PAW', 'APEX-PHOENIX', 'VALKYRIE-PAW', 'NEBULA-CAT', 'TITAN-PAW', 'OVERCLOCK-CAT'];
  const randWord = words[Math.floor(Math.random() * words.length)];
  const num = Math.floor(100 + Math.random() * 900);
  return `${randWord}-${num}`;
}

export const DEFAULT_SYNC_KEY = '';

/**
 * SHA-256 hash helper to turn user key into unguessable 24-char channel ID
 */
async function getHashedTopic(syncKey) {
  const key = (syncKey || 'ANONYMOUS-PAW').trim().toUpperCase();
  try {
    const msgUint8 = new TextEncoder().encode(`sprintset_private_v1_${key}`);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return `sprintset_sync_${hex.slice(0, 24)}`;
  } catch (err) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash |= 0;
    }
    return `sprintset_sync_priv_${Math.abs(hash)}`;
  }
}

/**
 * Push current Veto points & full app state to cloud
 */
export async function pushSyncData(syncKey, payload) {
  if (!syncKey || !syncKey.trim()) return false;
  const key = syncKey.trim().toUpperCase();
  const topic = await getHashedTopic(key);
  const url = `https://ntfy.sh/${topic}`;

  try {
    const res = await fetch(url, {
      method: 'PUT',
      keepalive: true,
      headers: {
        'Title': 'SprintsetPrivateSync',
        'Filename': 'sync_state.json'
      },
      body: JSON.stringify({
        ...payload,
        syncKey: 'REDACTED',
        updatedAt: new Date().toISOString()
      })
    });
    return res.ok;
  } catch (err) {
    console.error('Cloud Push Sync Error:', err);
    return false;
  }
}

/**
 * Pull latest Veto points & full app state from cloud
 */
export async function pullSyncData(syncKey) {
  if (!syncKey || !syncKey.trim()) return null;
  const key = syncKey.trim().toUpperCase();
  const topic = await getHashedTopic(key);
  const url = `https://ntfy.sh/${topic}/json?poll=1`;

  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const text = await res.text();
    const lines = text.trim().split('\n').filter(Boolean);
    
    let latestPayload = null;
    for (let i = lines.length - 1; i >= 0; i--) {
      try {
        const item = JSON.parse(lines[i]);
        if (item && item.event === 'message') {
          // New Format: Always an attachment to bypass 4KB limit
          if (item.attachment && item.attachment.url) {
            const fileRes = await fetch(item.attachment.url);
            if (fileRes.ok) {
              const parsed = await fileRes.json();
              if (parsed && typeof parsed === 'object') return parsed;
            }
          } 
          // Old Format: Inline JSON (fails if >4KB)
          else if (item.message) {
            const parsed = JSON.parse(item.message);
            if (parsed && typeof parsed === 'object') {
              return parsed;
            }
          }
        }
      } catch (e) {
        // Skip malformed lines
      }
    }
    return null;
  } catch (err) {
    console.error('Cloud Pull Sync Error:', err);
    return null;
  }
}

/**
 * Generate Veto Deep Link URL for mobile app launch
 */
export function generateVetoDeepLink(unclaimedPoints, conversionRate = 100, syncKey = '') {
  const minutes = Math.floor(unclaimedPoints / (conversionRate || 100));
  const key = (syncKey || '').trim().toUpperCase();
  return `veto://claim-reward?points=${unclaimedPoints}&minutes=${minutes}&syncKey=${encodeURIComponent(key)}`;
}
