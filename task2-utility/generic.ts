//변신 로보트변신 로보트
/*
타입이 정해짐 -> 함수의 인자에도 타입이 생김 
-> 함수에 타입이 정해져서 다른 타입이 들어올 때 재사용을 못함 
그래서!
-> 제네릭을 써서 타입을 변신 로보트로 만듬 -> 함수를 여러개 만들 필요가 없어짐
*/

// generic 함수의 매개변수 처럼 나중에 대입하도록 하여 재사용성을 높이기 위한 타입??
// generic을 통해 타입을 지정하면 런타임 시점이 아니라 컴파일 시에 타입이 지정된다.
// 타입을 명시적으로 지정할 수 있기 떄문에 타입 안정성을 강화할 수 있다.

//function 제네릭
function getText<T>(text: T): T {
  return text;
}

//화살표 함수 제네릭
const logText = <T>(text: T): T => {
  return text;
};

//<T>꺽쇠 안에 넣는 타입으로 모든 T가 해당 타입으로 바뀜.

// 인터페이스 제네릭
interface Pair<T, U> {
  first: T;
  second: U;
}

// 사용 예제
let pair1: Pair<number, string> = { first: 1, second: "two" };
let pair2: Pair<string, boolean> = { first: "three", second: true };

/**
 * 제네릭은 타입스크립트에서 강력하고 유연한 도구로,
 * 다양한 타입에서 재사용 가능한 코드를 작성할 수 있도록 도와줍니다.
 * 함수, 클래스, 인터페이스 등에서 활용할 수 있으며, 코드의 일반성과 타입 안정성을 증진시키는 데에 기여합니다.
 */

type Person = {
  name: string;
  age: number;
};
type PartialType<T> = {
  [P in keyof T]?: T[P];
};

const partialType: PartialType<Person> = {
  name: "aa",
  age: 12,
};

const partial1 = 1;
export default partial1;
