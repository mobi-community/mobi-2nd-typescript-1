// 2. 생산성 (자동완성)

// 예시 1
// math.js
function sum(a, b) {
  return a + b;
}
var total = sum(10, 20);
total.toLocaleString();

// 자바스크립트에서는 total이라는 변수의 타입을 인지하지 못함.
// 따라서 Number에서 제공하는 toLocaleString을 자동완성 받을 수 없음.
// 그러나 타입스크립트를 작성하면 아래의 total2가 number타입인걸 인식하고 있기 때문에
// Number에서 제공하는 toLocaleString을 자동완성 할 수 있음.

function sum2(a: number, b: number): number {
  return a + b;
}
var total2 = sum2(10, 20);
total2.toLocaleString();

// 예시 2

function upperName(name) {
  const firstIndex = name[0].toUpperCase();
  return name.replace(name[0], firstIndex);
}
upperName("noel");

// 위 함수는 이름을 받아서 첫 글자를 대문자로 바꿔주는 함수이다.
// name의 타입이 정해지지 않아서 toUpperCase가 자동완성되지 않지만
// 타입스크립트를 사용하면 아래와 같이 자동완성이 가능하다

function upperName2(name: string) {
  const firstIndex = name[0].toUpperCase();
  return name.replace(name[0], firstIndex);
}
upperName2("noel");
