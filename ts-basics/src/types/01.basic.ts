/* 타입스크립의 기본 타입 11가지 */

// 01. number
// 부동 소수 값을 데이터로 갖는 타입

function addNumber(num1: number, num2: number) {
  return num1 + num2;
}
addNumber(5, 10);

// 02. string
// 텍스트 데이터 타입

function addString(str1: string, str2: string) {
  return str1 + str2;
}
addString("안녕", "하세요");
addString("hello", "world");

// 03. boolean
// 참/거짓(true/false) 값을 데이터로 갖는 타입

let isLogin: boolean = false;

// 04. any
// 타입 검사를 하지 않고, 그 값들이 컴파일 시간에 검사를 통과하길 원할 때 사용하는 타입 (권장 X)

let isLoggedIn: any = "뭐가 오든 오류 안 남";

// 05. object
// 원시 타입이 아닌 타입
// 원시 타입 👉 number, string, boolean, bigint, symbol, null, 또는 undefined

const userInfo: object = { id: "user-01", password: "12345" };

// 06. array
// 자바스크립트처럼 값을을 배열로 사용할 수 있게 해주는 타입.

// 06-1. 배열 요소들을 나타내는 타입 뒤에 []

let list: number[] = [1, 2, 3, 4, 5];

// 06-2. 제네릭 배열 타입 (Array<elemType>)

let list2: Array<number> = [1, 2, 3, 4, 5];

// 07. unknown
// 아직 어떤 타입이 들어올지 모를 경우, 다양한 타입을 집어넣어야할 경우 사용하는 타입
// unknown 타입엔 모든 자료 다 집어넣을 수 있으며 자료를 넣어도 타입은 그대로 unknown이 유지됨
// any와 다른 점은 unknown 타입에는 아무것도 할 수 없음

let userID: unknown = "abcde";
userID = true;
userID = 123;
userID = "hello";

// 08. union
// OR(||) 연산자와 비슷한 의미를 가지며 지정된 타입의 값만 사용 가능

let 이름: string | number = "kim";
let 나이: string | number = 30;

function loginData(id: string, pw: string | number) {
  // blabla ...
  console.log(id, pw);
  alert(`${id}님, 어서오세요!`);
}
loginData("Lee", "1234");
loginData("Park", 4567);

// 09. conditional
// 조건부 타입, 타입 관계 검사로 표현된 조건에 따라 두 가지 가능한 타입 중 하나를 선택
// T extends U ? X : Y (T가 U에 할당 가능한지에 따라서 X와 Y중 하나의 타입을 선택)

type IsString<T> = T extends string ? "yes" : "no";
type sample1 = IsString<"가나다라">; // yes
type sample2 = IsString<1234>; //no
type sample3 = IsString<true>; //no

// 'T'와 'U'가 같은 타입이면 'Yes' 타입을, 다른 타입이면 'No' 타입을 반환
type IsSameType<T, U> = T extends U ? (U extends T ? "Yes" : "No") : "No";
type Result1 = IsSameType<string, string>; // 'Yes'
type Result2 = IsSameType<string, number>; // 'No'
type Result3 = IsSameType<"a" | "b", string>; // 'No'

// 10. type alias
// 새로운 타입을 정의, interface와 유사하나 interface로 표현할 수 없거나 유니온 또는 튜플을 사용해야할 때 type alias 사용

// 원시 타입에 별칭을 정하는 것은 권장 X
type Name = string;
type Age = number;

const movvi: Name = "Peanut";
const age: Age = 20;

// 객체에 별칭주기
type MovviMember = {
  name: string;
  nickName: string;
  age: number;
  isDirector: boolean;
};

const Peanut: MovviMember = {
  name: "김성용",
  nickName: "Peanut",
  age: 20,
  isDirector: true,
};

// 11. interface
// 함수의 param에 객체의 속성 타입을 정의 할 수 있습니다. 상속을 통해 확장이 필요할 때 사용

interface Peanut {
  name: string;
  nickName: string;
  age: number;
  isDirector: boolean;
}

function printName(person: Peanut) {
  console.log(person.name); // "김성용"
  console.log(person.nickName); // "Peanut"
  console.log(person.age); // 20
  console.log(person.isDirector); // true
}
