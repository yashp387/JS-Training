// Assignment-03 -> Role access using switch case

const role = "USER"

switch (role) {
    case "ADMIN":
        console.log("Full access");
        break;
    case "USER":
        console.log("Limited access");
        break;
    case "MANAGER":
        console.log("Moderate access");
        break;
    default:
        console.log("Invalid role");
        break;
}


// second waym to solve using object
const roles = {
    "ADMIN" : "full access",
    "USER" : "Limited access",
    "MANAGER" : "Moderate access"
}
console.log(roles[role] || "Invalid role");