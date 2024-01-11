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

// 04. partial
// 모든 프로퍼티를 선택적으로 만드는 타입, 주어진 타입의 모든 하위 타입 집합을 나타내는 타입을 반환

// 05. omit
// Omit<T,K>로 표현, T에서 모든 프로퍼티를 선택한 다음 K를 제거한 타입을 구성

// 06. pick
// Pick<T,K>로 표현, T에서 프로퍼티 K의 집합을 선택해 타입을 구성

// 07. extract
// Extract<T,U>로 표현, T에서 U에 할당 할 수 있는 모든 속성을 추출하여 타입을 구성

// 08. returntype
// ReturnType<T>으로 표현, 함수 T의 반환 타입으로 구성된 타입을 만듦

// 09. optional

// 10. satisfies

// 11. generic
// 재사용성이 높은 컴포넌트를 만들 때 자주 활용.
// 특히, 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용
