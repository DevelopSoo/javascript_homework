document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".title").textContent = "제목아니다";
});

function sum(num1, num2) {
  console.log(num1 + num2);
}

// 예시 출력
sum(1, 2);

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("짝수입니다");
  } else {
    console.log("홀수입니다");
  }
}

// 예시 출력
isEvenOrOdd(10); // 짝수입니다
isEvenOrOdd(11); // 홀수입니다

let name = "병수";
let age = 20;

console.log("이름:", name);
console.log("나이:", age);
