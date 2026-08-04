export const DEFAULT_SYNC_KEY = 'PADHLEBSDK';

/**
 * Push current Veto points & sprint state to cloud via ntfy.sh
 */
export async function pushSyncData(syncKey, payload) {
  const key = (syncKey || DEFAULT_SYNC_KEY).trim().toUpperCase();
  const topic = `sprintset_sync_${key}`;
  const url = `https://ntfy.sh/${topic}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Title': 'SprintsetSync'
      },
      body: JSON.stringify({
        ...payload,
        syncKey: key,
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
 * Pull latest Veto points & sprint state from cloud via ntfy.sh
 */
export async function pullSyncData(syncKey) {
  const key = (syncKey || DEFAULT_SYNC_KEY).trim().toUpperCase();
  const topic = `sprintset_sync_${key}`;
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
        if (item && item.event === 'message' && item.message) {
          const parsed = JSON.parse(item.message);
          if (parsed && typeof parsed === 'object') {
            latestPayload = parsed;
            break;
          }
        }
      } catch (e) {
        // Skip unparseable lines
      }
    }
    return latestPayload;
  } catch (err) {
    console.error('Cloud Pull Sync Error:', err);
    return null;
  }
}

/**
 * Generate Veto Deep Link URL for mobile app launch
 */
export function generateVetoDeepLink(unclaimedPoints, conversionRate = 100, syncKey = DEFAULT_SYNC_KEY) {
  const minutes = Math.floor(unclaimedPoints / (conversionRate || 100));
  const key = (syncKey || DEFAULT_SYNC_KEY).trim().toUpperCase();
  return `veto://claim-reward?points=${unclaimedPoints}&minutes=${minutes}&syncKey=${encodeURIComponent(key)}`;
}
