// 문제1)
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));

// 문제2)
async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await response.json();
  console.log(json);
}

fetchPosts();

// 문제3)
async function tryCatchFetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

tryCatchFetchPosts();
