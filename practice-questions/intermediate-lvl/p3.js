// Problem 3: API Data Formatter (Fetch + Array Methods)
// Objective
// Fetch data from an API and transform it using modern JavaScript array methods.
// Input
// Assume the API returns the following data:

// [
//   { id: 1, name: "Amit", active: true },
//   { id: 2, name: "Neha", active: false }
// ]

// Requirements:
// Fetch data using fetch
// Handle API failure gracefully
// Filter only active users
// Transform data into the format:

// { userId: 1, userName: "Amit" }

// Expected Output
// [
//   { userId: 1, userName: "Amit" }
// ]

async function fetchData(url) {
    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error("Filed to fetch data");
        }

        const data = await response.json();

        return data
        .filter(({ active }) => active)
        .map(({ id, name}) => ({
            userId: id,
            userName: name,
        }));

    } catch (err) {
        console.log("Error",err);
        return [];
    }
}

fetchData("/api/users").then(result => {
  console.log(result);
});
