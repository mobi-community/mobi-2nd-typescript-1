// satisfies (만족 시키다)
/*
  주로 안전하게 타입 표명(Type Assertion)을 하기 위해 사용한다.
  
  * Type Assertion (타입 단언)
  변수의 타입을 개발자가 명시적으로 지정하는 방법
  컴파일러에게 "나는 이 변수를 이 타입으로 취급해도 괜찮음ㅋㅋ"라고 하는 느낌?

  Type Assertion 방식
  1. <> (JSX 문법이랑 겹쳐서 잘 안씀)
  2. as
  3. satisfies
*/

// 1번 간단한 타입 좁히기
// 1-1. 어노테이션 지정, typeof 조건문 사용
type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

const palette1: Record<Colors, string | RGB> = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
};
//palette1.red.map(0); // ❌ 타입이 string이 올지 RGB가 올지 확정 지을 수 없기 때문에 map 사용 불가
//palette1.green.toUpperCase(); // ❌타입이 string이 올지 RGB가 올지 확정 지을 수 없기 때문에 toUpperCase 사용 불가
// 따라서 typeof 조건문 활용
if (typeof palette1.green === "string") {
  palette1.green.toUpperCase();
}
// 매번 조건문을 쓰면 귀찮다??
// 1-2. satisfies 사용
const palette2 = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<Colors, string | RGB>;
palette2.green.toUpperCase(); //  satisfies사용으로 타입을 좁혀 조건문 없이 해당 타입에 맞는 메서드 사용 가능

// ----------------------------------------------------------------------------------------------------------------

// 2번 간결한 타입 체크
// 2-1. 어노테이션으로 했을 때
// 타입 지정
interface Data {
  a: "A" | "B" | "C";
  b: number;
  c: string;
  d: string[];
}
// Partial로 선택적으로 타입 가져옴
const baseData1: Partial<Data> = {
  //Partial<Data>
  a: "A",
  b: 1,
};

// const data1: Data = {
//   ...baseData1, // baseData1 타입은 a,b가 아니라 Partial타입으로 판단하기 때문에 사용 불가능
//   c: "foo",
//   d: ["asd"],
// };

// 2-2. satisfies 사용
const baseData2 = {
  a: "A",
  b: 1,
} satisfies Partial<Data>;

const data2: Data = {
  ...baseData2, // satisfies사용으로 Data 타입의 a,b를 만족하기 때문에 사용 가능
  c: "foo",
  d: ["asd"],
};

// ----------------------------------------------------------------------------------------------------------------

// 3번 안전한 타입 단언

// 3-1. as를 썼을 때
interface User {
  name: string;
  nickname: string;
  major: "frontend" | "backend"; // 속성 추가.
}

// 에러가 날 상황인데 as 때문에 그냥 통과된다
// as : 타입을 점검하지 않음
const user2 = {
  name: "daniel",
  nickname: "장곡동 지단",
} as User;

// 3-2. satisfies 사용
const user = {
  name: "daniel",
  nickname: "장곡동 지단",
}; //satisfies User as User; // 에러 발생시켜 줌
// satisfies사용으로 타입이 만족하는지 확인한 다음 as로 단언하기 때문에 안전하게 타입을 단언 할 수 있음
/*
  TypeScript는 타입 추론을 통해 대부분의 상황에서 타입을 추론할 수 있기 때문에,
  명시적인 타입 단언이 필요한 경우를 제외하고는 사용을 최소화하는 것이 좋다.
*/
