// Write a function that takes a url and retry count, calls the API, and retries the request up to the given number of times if the API call fails.

async function fetchData(url, retries) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    if (retries <= 0) {
      throw error;
    }
  }
  return fetchData(url, retries - 1);
}

fetchData("https://jsonplaceholder.typicode.com/comments?postId=1", 3)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
