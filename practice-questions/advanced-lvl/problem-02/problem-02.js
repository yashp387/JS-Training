// Problem 2: User Activity & Action Aggregation
// Objective:-
// Process user activity logs and user action records to generate a summarized report per user, aggregating time spent and counting repeated activity/action types.

// Input:-
// You are given an array of user activity logs. Each log contains:
// userId
// type (activity/action type)
// duration (in minutes – optional for some actions)

// const activities = [
//   { userId: 1, type: "login", duration: 5 },
//   { userId: 2, type: "browse", duration: 20 },
//   { userId: 1, type: "browse", duration: 15 },
//   { userId: 3, type: "login", duration: 3 },
//   { userId: 2, type: "logout", duration: 2 },
//   { userId: 1, type: "logout", duration: 1 },
//   { userId: 1, type: "login", duration: 4 } // repeated action for same user
// ];

// Requirements:-
// Group all entries by userId
// For each user:
// Calculate total time spent (sum of duration)
// Maintain a counter for each activity/action type
// If the same type appears multiple times for the same user, increment the counter
// Use reduce to perform aggregation
// Implement the logic inside an object method
// Use this appropriately
// Handle missing properties safely (e.g., missing duration defaults to 0)

// Constraints:-
// Do not mutate the original input array
// No external libraries

// Expected Outcome:-
// {
//   1: {
//     totalTime: 25,
//     login: 2,
//     browse: 1,
//     logout: 1
//   },
//   2: {
//     totalTime: 22,
//     browse: 1,
//     logout: 1
//   },
//   3: {
//     totalTime: 3,
//     login: 1
//   }
// }


const activities = [
  { userId: 1, type: "login", duration: 5 },
  { userId: 2, type: "browse", duration: 20 },
  { userId: 1, type: "browse", duration: 15 },
  { userId: 3, type: "login", duration: 3 },
  { userId: 2, type: "logout", duration: 2 },
  { userId: 1, type: "logout", duration: 1 },
  { userId: 1, type: "login", duration: 4 },
];

const analyticsSystem = {
  logs: activities,

  generateReport() {
    return this.logs.reduce((acc, log) => {
      const { userId, type, duration = 0 } = log;

      if (!acc[userId]) {
        acc[userId] = { totalTime: 0 };
      }

      const userStats = acc[userId];

      userStats.totalTime += duration;

      userStats[type] = (userStats[type] || 0) + 1;

      return acc;
    }, {});
  },
};

const result = analyticsSystem.generateReport();
console.log(result);
