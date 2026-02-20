// JS Convert Promise Chain to async/await
// 1
// Description
// You are given a function implemented using Promise chaining.
// Rewrite the same logic using 
// async / await 
// .
// Do not change the behaviour.
// Existing code:
// function getUserPostTitles(userId) {
// return fetch(`/users/${userId}`)
// .then(res => res.json())
// .then(user => {
// return fetch(`/posts?userId=${user.id}`);
// })
// .then(res => res.json())
// .then(posts => {
// return posts.map(p => p.title);
// });
// }
// Rewrite the above function using 
// Constraints
// async / await
// Use 
// Do not use 
// async / await 
// .
// .then()
//  or 
// .catch()
// Untitled
// Behaviour must remain the same
// Return the same result

async function getUserPostTitles(userId) {
    const userResponse = await fetch(`/users/${userId}`);
    const user = await userResponse.json();

    const postResponse = await fetch(`/posts?userId=${user.id}`);
    const post = await postResponse.json();

    return post.map(p => p.title);
}