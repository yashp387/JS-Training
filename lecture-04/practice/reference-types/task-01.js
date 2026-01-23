/* Goal: Extract nested data safely without crashing if a property is missing. 

Requirements:
Given a user object that might be missing the address or zip property.
Log the zip code. If missing, log "N/A".
Use Optional Chaining (?.) and Nullish Coalescing (??). */

const user1 = { name: "Alice", address: { zip: 90210 } };
const user2 = { name: "Bob" };
function getZip(user) {
  return user?.address?.zip ?? "N/A";
}

console.log(getZip(user1));
console.log(getZip(user2));