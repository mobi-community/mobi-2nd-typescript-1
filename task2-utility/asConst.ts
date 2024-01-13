// as const
// 타입을 고정시킨다ㅋㅋ

// as const는 type assertion의 한 종류로써 리터럴 타입의 추론 범위를 줄이고 값의 재할당을 막기 위한 목적으로 만들어졌습니다.

const language = {
  korean: "ko", // "ko"로 추론, readonly 프로퍼티로 변경
  english: "en", // "en"로 추론, readonly 프로퍼티로 변경
} as const;
//상수 중에 상수
// Error: Cannot assign to 'korean' because it is a read-only property ❌
// language.korean = 'kkk';
// Error: Cannot assign to 'english' because it is a read-only property. ❌
// language.english = 'eee';

// as const를 사용하면 원시 타입이든 참조 타입이든 값의 재할당을 막아버리기 때문에 의도치 않은 변경으로 인한 오류를 없앨 수 있습니다
// 리터럴 타입의 추론 범위가 리터럴 값 자체로 한정되면서 좀 더 안전하게 코드를 작성할 수 있습니다.

const Colors = {
  red: "#FF0000",
  blue: "#0000FF",
  green: "#008000",
} as const;
//as const를 붙이면 객체의 모든 값들이 readonly의 리터럴 값을 가지게 됩니다.

enum COLOR {
  red,
  blue,
  green,
}

//enum과 의 공통점
//1. 자동완성 기능을 활용 가능
//2. 객체의 프로퍼티들이 모두 readonly로 다루어짐

//enum과의 차이점.
//1. 목적: enum은 연관된 상수들을 하나의 집단으로 묶어 추상화 하기 위해
//as const는 타입 단언의 한 종류로 리터럴 타입의 추론 범위를 줄이고
//값의 재할당을 막기 위해 만들어짐.

const greetingConst = "hello"; //hello
let greetingLet = "hello"; //string

let greetingLet2 = "hello" as const; //hello
//값을 리터럴 타입으로 만들어줌. 재할당 불가능.

//배열이나 객체의 경우 const여도 속성을 바꿀 수 있지만
//as const를 쓰는 순간 모든 속성이 읽기 전용, 리터럴 타입으로 바뀌어 불가능

// const language = {
//   korean: "ko",
//   english: "en",
// } as const;

//✅ https://velog.io/@logqwerty/Enum-vs-as-const
