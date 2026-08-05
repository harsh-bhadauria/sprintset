import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL = 'https://asbkmjefruvscjpyxhto.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_kiNFNLlDfzXQhlshTlneYg_UUzzt960';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export function generateRandomSyncKey() {
  const words = ['SHADOW-PAW', 'CYBER-CAT', 'NEXUS-PAW', 'APEX-PHOENIX', 'VALKYRIE-PAW', 'NEBULA-CAT', 'TITAN-PAW', 'OVERCLOCK-CAT'];
  const randWord = words[Math.floor(Math.random() * words.length)];
  const num = Math.floor(100 + Math.random() * 900);
  return `${randWord}-${num}`;
}

/**
 * Deterministic hash helper for syncKey channel IDs
 */
export function getCleanSyncKeyId(syncKey) {
  if (!syncKey || !syncKey.trim()) return '';
  return `sync_${syncKey.trim().toUpperCase().replace(/[^A-Z0-9_-]/g, '_')}`;
}

/**
 * Push current app state to Supabase table
 */
export async function pushSupabaseSync(syncKey, payload) {
  const syncId = getCleanSyncKeyId(syncKey);
  if (!syncId || !supabase) return false;

  try {
    const { error } = await supabase
      .from('user_sync_data')
      .upsert({
        id: syncId,
        payload: {
          ...payload,
          updatedAt: new Date().toISOString()
        },
        updated_at: new Date().toISOString()
      }, { onConflict: 'id' });

    if (error) {
      console.error('Supabase Push Error:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Supabase Push Exception:', err);
    return false;
  }
}

/**
 * Pull latest app state from Supabase table
 */
export async function pullSupabaseSync(syncKey) {
  const syncId = getCleanSyncKeyId(syncKey);
  if (!syncId || !supabase) return null;

  try {
    const { data, error } = await supabase
      .from('user_sync_data')
      .select('payload, updated_at')
      .eq('id', syncId)
      .maybeSingle();

    if (error) {
      console.error('Supabase Pull Error:', error);
      return null;
    }
    return data?.payload || null;
  } catch (err) {
    console.error('Supabase Pull Exception:', err);
    return null;
  }
}

/**
 * Delete sync payload for a specific Sync Key from Supabase table
 */
export async function deleteSupabaseSync(syncKey) {
  const syncId = getCleanSyncKeyId(syncKey);
  if (!syncId || !supabase) return false;

  try {
    const { error } = await supabase
      .from('user_sync_data')
      .delete()
      .eq('id', syncId);

    if (error) {
      console.error('Supabase Delete Error:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Supabase Delete Exception:', err);
    return false;
  }
}

/**
 * Subscribe to real-time WebSockets on Supabase for a specific Sync Key
 */
export function subscribeToRealtimeSync(syncKey, onRemoteUpdate) {
  const syncId = getCleanSyncKeyId(syncKey);
  if (!syncId || !supabase) return () => {};

  const channel = supabase
    .channel(`public:user_sync_data:${syncId}`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'user_sync_data',
        filter: `id=eq.${syncId}`
      },
      (payload) => {
        if (payload.new && payload.new.payload) {
          onRemoteUpdate(payload.new.payload);
        }
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}

/**
 * Sign in with Google OAuth via Supabase
 */
export async function signInWithGoogle() {
  if (!supabase) return;
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin + window.location.pathname
    }
  });
  if (error) {
    console.error('Google Auth Error:', error);
    alert(`Google Sign-In Error: ${error.message}`);
  }
}

/**
 * Sign out current authenticated user
 */
export async function signOutGoogle() {
  if (!supabase) return;
  await supabase.auth.signOut();
}
