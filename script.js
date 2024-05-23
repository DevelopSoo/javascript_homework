// 4강 문제8)
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

// 8-1)
localStorage.setItem("user", JSON.stringify(user));

// 8-2)
const userData = JSON.parse(localStorage.getItem("user"));
console.log(userData);

// 8-3)
userData.나이 = 30;
localStorage.setItem("user", JSON.stringify(userData));
// 혹은
localStorage.setItem(
  "user",
  JSON.stringify({
    ...userData,
    나이: 30,
  })
);

// 8-4)
localStorage.removeItem("user");
console.log(localStorage.getItem("user"));

// 문제1)
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));
