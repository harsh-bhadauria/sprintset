/**
 * Veto Offline Coupon Cryptographic Helper
 * Uses Web Crypto AES-GCM + Base64URL encoding
 */

export function arrayBufferToBase64Url(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64 = btoa(binary);
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function base64UrlToArrayBuffer(base64url) {
  let base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
    base64 += '=';
  }
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

/**
 * Derive 256-bit AES-GCM key from pairing key via SHA-256
 */
async function deriveAesKey(pairingKey) {
  const keyText = pairingKey || 'sprintset-veto-default-secret';
  const encodedKey = new TextEncoder().encode(keyText);
  const hash = await window.crypto.subtle.digest('SHA-256', encodedKey);
  return window.crypto.subtle.importKey(
    'raw',
    hash,
    { name: 'AES-GCM' },
    false,
    ['encrypt', 'decrypt']
  );
}

/**
 * Generate an encrypted Base64URL coupon string
 * @param {string} pairingKey - User defined shared secret key
 * @param {Object} payload - { sprintId, minutes, nonce, timestamp }
 * @returns {Promise<string>} Base64URL string
 */
export async function generateVetoCoupon(pairingKey, payload) {
  try {
    const key = await deriveAesKey(pairingKey);
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const jsonStr = JSON.stringify(payload);
    const data = new TextEncoder().encode(jsonStr);

    const ciphertext = await window.crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      key,
      data
    );

    const combined = new Uint8Array(iv.byteLength + ciphertext.byteLength);
    combined.set(iv, 0);
    combined.set(new Uint8Array(ciphertext), iv.byteLength);

    return arrayBufferToBase64Url(combined);
  } catch (err) {
    console.error('Failed to generate Veto coupon:', err);
    return null;
  }
}

/**
 * Decrypt a Base64URL coupon string (used for testing or reference)
 * @param {string} pairingKey 
 * @param {string} couponBase64Url 
 * @returns {Promise<Object>} Decrypted payload
 */
export async function decryptVetoCoupon(pairingKey, couponBase64Url) {
  try {
    const key = await deriveAesKey(pairingKey);
    const combinedBuffer = base64UrlToArrayBuffer(couponBase64Url);
    const combined = new Uint8Array(combinedBuffer);

    const iv = combined.slice(0, 12);
    const ciphertext = combined.slice(12);

    const decrypted = await window.crypto.subtle.decrypt(
      { name: 'AES-GCM', iv },
      key,
      ciphertext
    );

    const jsonStr = new TextDecoder().decode(decrypted);
    return JSON.parse(jsonStr);
  } catch (err) {
    console.error('Failed to decrypt Veto coupon:', err);
    throw err;
  }
}
