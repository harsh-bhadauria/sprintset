const CLOUD_API_BASE = 'https://api.restful-api.dev/objects';

export const DEFAULT_SYNC_KEY = 'PADHLEBSDK';

/**
 * Push current Veto points & sprint state to cloud
 */
export async function pushSyncData(syncKey, payload) {
  const key = (syncKey || DEFAULT_SYNC_KEY).trim().toUpperCase();
  try {
    const res = await fetch(CLOUD_API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `sprintset_sync_${key}`,
        data: {
          ...payload,
          syncKey: key,
          updatedAt: new Date().toISOString()
        }
      })
    });
    if (!res.ok) return false;
    const json = await res.json();
    if (json && json.id) {
      localStorage.setItem(`sprintset_cloud_id_${key}`, json.id);
    }
    return true;
  } catch (err) {
    console.error('Cloud Push Sync Error:', err);
    return false;
  }
}

/**
 * Pull latest Veto points & sprint state from cloud
 */
export async function pullSyncData(syncKey) {
  const key = (syncKey || DEFAULT_SYNC_KEY).trim().toUpperCase();
  const savedId = localStorage.getItem(`sprintset_cloud_id_${key}`);
  
  if (savedId) {
    try {
      const res = await fetch(`${CLOUD_API_BASE}/${savedId}`);
      if (res.ok) {
        const json = await res.json();
        if (json && json.data) return json.data;
      }
    } catch (e) {
      // Fallback if savedId expired
    }
  }

  try {
    const res = await fetch(CLOUD_API_BASE);
    if (res.ok) {
      const list = await res.json();
      const targetName = `sprintset_sync_${key}`;
      const matches = (Array.isArray(list) ? list : []).filter(item => item && item.name === targetName);
      if (matches.length > 0) {
        const latest = matches[matches.length - 1];
        if (latest.id) {
          localStorage.setItem(`sprintset_cloud_id_${key}`, latest.id);
        }
        return latest.data || null;
      }
    }
  } catch (err) {
    console.error('Cloud Pull Sync Error:', err);
  }
  return null;
}

/**
 * Generate Veto Deep Link URL for mobile app launch
 */
export function generateVetoDeepLink(unclaimedPoints, conversionRate = 100, syncKey = DEFAULT_SYNC_KEY) {
  const minutes = Math.floor(unclaimedPoints / (conversionRate || 100));
  const key = (syncKey || DEFAULT_SYNC_KEY).trim().toUpperCase();
  return `veto://claim-reward?points=${unclaimedPoints}&minutes=${minutes}&syncKey=${encodeURIComponent(key)}`;
}
