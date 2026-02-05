// # JS: Async Data Aggregation Using Promises

// You are required to fetch related data from multiple APIs and create a summary.

// ## Steps:
// - Fetch a user
// - Fetch posts for that user
// - Fetch comments for one of the posts
// - Combine the results into a single summary object

// ## Example:

// ```js
// summary: {
//   user: "Leanne Graham",
//   postCount: 10,
//   commentCount: 5
// }

const API_BASE = "https://jsonplaceholder.typicode.com";

async function fetchData() {
  try {
    const [userRes, postRes] = await Promise.all([
      fetch(`${API_BASE}/users/1`),
      fetch(`${API_BASE}/posts?userId=1`),
    ]);
    if (!userRes.ok || !postRes.ok) {
      throw new Error("Failed to fetch data");
    }

    const user = await userRes.json();
    const posts = await postRes.json();

    const comments = await fetch(`${API_BASE}/comments?postId=${posts[0].id}`);

    const comment = await comments.json();

    const summary = {
      user: user.name,
      postCount: posts.length,
      commentCount: comment.length,
    };

    console.log("Summary", summary);
    return summary;
  } catch (err) {
    console.log("Error:", err.message);
  }
}

fetchData(API_BASE);