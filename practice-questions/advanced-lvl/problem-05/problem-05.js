// Problem 5: Normalize Inconsistent API Responses

// Objective:-
// Convert inconsistent API data into a normalized structure.

// Input:-
// const apiResponse = [
//   { id: 1, name: "A", tags: "x,y,z" },
//   { id: 2, name: "B", tags: ["x", "y"] },
//   { id: 3, name: "C" }
// ];

// Requirements:-
// Normalize tags into arrays
// Create a lookup object keyed by id
// Fill missing properties with defaults
// Do not mutate the original response

// Expected Outcome:-
// {
//   1: { id: 1, name: "A", tags: ["x","y","z"] },
//   2: { id: 2, name: "B", tags: ["x","y"] },
//   3: { id: 3, name: "C", tags: [] }
// }

const apiResponse = [
  { id: 1, name: "A", tags: "x,y,z" },
  { id: 2, name: "B", tags: ["x", "y"] },
  { id: 3, name: "C" },
];

const normalizeData = (data) => {
  return data.reduce((acc, item) => {
    const { id, tags, ...rest } = item;

    let normalizedTags = [];

    if (Array.isArray(tags)) {
      normalizedTags = [...tags];
    } else if (typeof tags === "string") {
      normalizedTags = tags.split(",").map((t) => t.trim());
    }

    acc[id] = {
      id,
      ...rest,
      tags: normalizedTags,
    };
    return acc;
  }, {});
};

const result = normalizeData(apiResponse);
console.log(result);
