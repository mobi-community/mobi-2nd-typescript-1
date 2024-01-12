//3. 안정적인 개발 환경 (컴파일 단계에서의 에러 검출)

// 예시 1
// math.js

function sum(a, b) {
  return a + b;
}

//sum(10, 20); // 30
// sum('10', '20'); // 1020
// 위는 두 숫자의 합을 구하는 함수이다.
// 우리가 저 함수를 사용해서 얻고싶고자 하는 값은 a + b 의 number값이다.
// 그러나 타입스크립트가 아닌 js문법에서 숫자가 아닌 문자열을 할당할 경우 ("10", "20")
// 1020이라는 문자열을 반환한다.
// 타입스크립트를 사용한다면 이와같은 의도하지 않은 경우의 코드를 예방할 수 있다.
// 예시는 아래와 같다.

// math.ts
function sumTs(a: number, b: number) {
  return a + b;
}
//sumTs(10, 20); // 30
//sumTs('10', '20'); // Error: '10'은 number에 할당될 수 없습니다.

// 예시 2
//js

function greet(person) {
  return "Hello, " + person.name;
}

const user = { name: "John", age: 30 };

console.log(greet(user)); // "Hello, John"
console.log(greet({ name: "Alice" })); // "Hello, Alice"
console.log(greet({ name: "Bob", age: "25" })); // "Hello, Bob25"

// ts
interface Person {
  name: string;
  age?: number; // 선택적 속성
}

function greet2(person: Person): string {
  return "Hello, " + person.name;
}

const userts: Person = { name: "John", age: 30 };

console.log(greet2(userts)); // "Hello, John"
// 컴파일 오류: 객체가 'name' 속성을 가져야 함
console.log(greet2({ name: "Alice" }));
// 컴파일 오류: 'age' 속성의 타입이 일치하지 않음
console.log(greet2({ name: "Bob", age: 25 }));
