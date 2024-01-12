/* 타입스크립트의 유틸리티 타입 11가지 */

// 01. enum ⭐️
// 여러 값들에 미리 이름을 정의하여 열거해 두고 사용하는 타입
// 열거, 매겨진 값을 사용해 enum 멤버의 이름을 알아낼 수 있음

enum Color {
  white = "#ffffff",
  red = "#F1061A ",
  orange = "#FA7804",
  yellow = "#FAEB04",
  green = "#3BE80D",
  darkGreen = "#065823",
  blue = "#2ACAF9",
  navy = "#0C188F",
  purple = "#6111DD",
  black = "#000000",
}

let RedColor: Color = Color.red;
console.log(RedColor);

// 02. as const ⭐️

const num = 42; // type: number
const str = "Hello"; // type: string

const constNum = 42 as const; // type: 42
const constStr = "Hello" as const; // type: Hello

// 03. record
// 타입 Type의 프로퍼티 키의 집합으로 타입을 생성, 타입의 프로퍼티를 다른 타입에 매핑 시키는데 사용

type postContents = Record<string, string>;

let post: postContents = {
  title: "hello, world",
  contents:
    "hello, world! hello, world! hello, world! hello, world! hello, world! hello, world! hello, world",
};

// 04. partial
// 모든 프로퍼티를 선택적으로 만드는 타입, 주어진 타입의 모든 하위 타입 집합을 나타내는 타입을 반환
interface Person {
  name: string;
  age: number;
}

type PartialPerson = Partial<Person>;

const partialPerson: PartialPerson = {};

partialPerson.name = "Peanut";
partialPerson.age = 26;

// 05. omit
// Omit<T,K>로 표현, T에서 모든 프로퍼티를 선택한 다음 K를 제거한 타입을 구성

interface Mobi {
  name: string;
  age: number;
  isMember: boolean;
}

type MobiPreview = Omit<Mobi, "isMember">;

const mobi: MobiPreview = {
  name: "Chestnut",
  age: 19,
};

// 06. pick
// Pick<T,K>로 표현, T에서 프로퍼티 K의 집합을 선택해 타입을 구성
interface Mobi {
  name: string;
  age: number;
  isMember: boolean;
}

type MobiInfo = Pick<Mobi, "name" | "age">;

const Mobi: MobiPreview = {
  name: "Chestnut",
  age: 19,
};

// 07. extract
// Extract<T,U>로 표현, T에서 U에 할당 할 수 있는 모든 속성을 추출하여 타입을 구성 (Exclude와 반대되는 개념)
// type Extract<T, U> = T extends U ? T : never;

type Animal = "Cat" | "Dog" | "Pig";
type Pet = "Cat" | "Dog";

type myPet = Extract<Animal, Pet>;

// 08. return type
// ReturnType<T>으로 표현, 함수 T의 반환 타입으로 구성된 타입을 만듦

declare function Peanuts(): { name: string; age: number };

type MobiType0 = ReturnType<() => string>;
type MobiType1 = ReturnType<(s: string) => void>;
type MobiType2 = ReturnType<<Peanuts>() => Peanuts>;
type MobiType3 = ReturnType<
  <Peanuts extends MobiStudy, MobiStudy extends number[]>() => Peanuts
>;
type MobiType4 = ReturnType<typeof Peanuts>;
type MobiType5 = ReturnType<any>;

// 09. optional

interface SignUpData {
  email: string;
  password: string;
  nickname: string;
  name: string;
  age?: number;
  phone?: number;
  location?: string;
}

// 10. satisfies
// 유니온 타입과 호환되는 타입의 메소드 호출 시도 시 정적 에러 발생 X
// 정확히 props의 타입을 추론, value의 메소드를 사용
// 타입 추론과 오타 검사를 동시에 할 수 있음
// 객체의 타입 검사용으로 사용

const palette = {
  purple: [100, 9, 240],
  navy: [31, 12, 188],
  blue: [12, 202, 162],
} satisfies Record<"purple" | "navy" | "blue", [number, number, number]>;

const grade = {
  a: 90,
  b: "B",
  c: 70,
  f: 60,
} satisfies Record<"a" | "b" | "c" | "f", number | string>;

// 11. generic
// 재사용성이 높은 컴포넌트를 만들 때 자주 활용.
// 특히, 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용

// 제네릭 타입을 기본으로 쓰는 방법
type MyProfile<T> = {
  hobby: Array<T>;
};

// extends generic type
type StudentType = {
  fullName: string;
  nickName: string;
  age: number;
};

const StudentDetail = <T extends StudentType>(detail: T) => ({
  fullName: "TopDragon",
  nickName: "Peanut",
  age: 20,
  isDirector: true,
});
