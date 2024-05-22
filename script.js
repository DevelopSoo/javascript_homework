// 문제1)
const people = [
  { 이름: "철수", 나이: 19, 성별: "남" },
  { 이름: "짱구", 나이: 20, 성별: "남" },
  { 이름: "유리", 나이: 21, 성별: "여" },
];

console.log(people);

// 문제2)
const container = document.querySelector(".container");

people.forEach((person) => {
  container.innerHTML += `
    <div>
      <h1>
        이름: ${person.이름}
      </h1>
      <h2>
        나이: ${person.나이}
      </h2>
      <h2>
        성별: ${person.성별}
      </h2>
    </div>
    <hr/>
  `;
});

// 문제3)
const 여자사람찾기 = people.find((person) => person.성별 === "여");
console.log(여자사람찾기);

// 문제4)
const 남자사람들 = people.filter((person) => person.성별 === "남");
console.log(남자사람들);

// 문제5)
const 늙은사람들 = people.map((person) => {
  return {
    이름: person.이름,
    나이: person.나이 + 10,
    성별: person.성별,
  };
});

console.log(people);
console.log(늙은사람들);

// 문제6)
const copy = [...people];
copy.sort((a, b) => b.나이 - a.나이);
console.log(people);
console.log(copy);

// 문제7)
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

const { 이름, 나이, 주소 } = user;
console.log(`${이름} ${나이} ${주소}`);

// 문제8) 다음 시간에
