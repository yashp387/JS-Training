// Assignment-03 -> Role access using switch case

let role = "ADMIN"

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