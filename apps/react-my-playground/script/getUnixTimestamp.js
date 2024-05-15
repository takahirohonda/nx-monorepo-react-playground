const now = Date.now();
// Calculate the timestamp for 24 hours from now (in milliseconds)
const twentyFourHoursLater = now + (24 * 60 * 60 * 1000);
// Convert the timestamp to seconds (Unix timestamp is in seconds)
const unixTimestamp = Math.floor(twentyFourHoursLater / 1000);

console.log(`unix timestamp 24 hours from now: ${unixTimestamp}`)