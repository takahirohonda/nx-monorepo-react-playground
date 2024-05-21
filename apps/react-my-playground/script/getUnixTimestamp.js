const now = Date.now();
// Calculate the timestamp for 24 hours from now (in milliseconds)
// const expiresAt = now + (24 * 60 * 60 * 1000);

// 10 days
const expiresAt = now + (24 * 60 * 60 * 1000 * 10);

// Convert the timestamp to seconds (Unix timestamp is in seconds)
const expiresAtUnixTimestamp = Math.floor(expiresAt / 1000);

console.log(`unix timestamp 24 hours from now: ${expiresAtUnixTimestamp}`)