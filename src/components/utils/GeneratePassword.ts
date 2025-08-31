export function generateSecurePassword(length: number): string {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
  const randomValues = new Uint32Array(length);
  crypto.getRandomValues(randomValues); // secure randomness

  return Array.from(randomValues, val => charset[val % charset.length]).join('');
}
