enum DIRECTION {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

console.log(DIRECTION.UP); //enum일 때 해당하는 값이 모두 자동완성 됨!

function sum(a: number, b: number): number {
  return a + b;
}

let total = sum(10, 20);
total.toLocaleString();
// number 타입을 알고 있기 때문에 toLocaleString()메서드가 자동완성 됨!

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  // 여기서 자동완성이 name과 age 프로퍼티를 제안함
  name: "kimi",
  age: 2, // ;; !!
};
