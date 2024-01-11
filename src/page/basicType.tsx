// 타입스크립트의 기본 타입

// 01. number
// 돼지 저금통
const piggyBank = (Flamingo: number, General: number): number => {
  return Flamingo * 500 + General * 100;
};

piggyBank(5, 10);

//02. string
// 선물 바구니
const presentBasket = (fruit: string, snack: string) => {
  return "선물로" + fruit + "와" + snack + "을 받았다!";
};

presentBasket("사과", "다이제");

// 03. boolean
// 설문조사
const survey = (maritalStatus: boolean, university: boolean) => {
  const marry = maritalStatus ? "기혼" : "미혼";
  const univ = university ? "대졸" : "고졸";

  return `저는 ${marry}에 ${univ}입니다`;
};
survey(false, true);

//04. any   -- 모든 타입 할당 가능
let notSure: any = 19950308; //number
notSure = "이건 쓰는 걸 권장하지 않음"; //string
notSure = false; //boolean

// 05.object
// 신분증
const idCard = (obj: { name: string; birth: number }) => {
  let answer: string = "";
  for (let i = 0; i < Object.keys(obj).length; i++) {
    answer += `${Object.keys(obj)[i]} : ${Object.values(obj)[i].toString()}`; // name : Noel birth : 990308
  }
  return answer;
};
idCard({ name: "Noel", birth: 990308 });

// key : value 인자 갯수만큼 반복해서 보여주기 object함수를 사용해서 name : Noel , birth : 990308
//  Object.keys(obj) = ['name', 'birth']

// 06. array

const array: number[] = [1, 2, 4, 7, 11, 16, 22, 29, 37];
console.log(`현재배열 : ${array}`);

// 07. unknown
// unknown 타입은 any 타입과 동일하게 모든 값을 허용하지만, 할당된 값이 어떤 타입인지 모르기 때문에 함부로 프로퍼티나 연산을 할 수 없습니다.
let uk: unknown = 4;
uk = "maybe a string instead";

// OK definitely a boolean
uk = false;

//any는 모든 접근을 허용하지만 unknown은 타입을 좁혀야 위와 같은 접근을 허용한다.

const unknownVal: unknown = "string";
const anyVal: any = "string";

if (typeof unknownVal === "string") {
  console.log(unknownVal[1]); // Ok
}

anyVal[1]; // Ok

// 08. union
// 미성년자와 나이
function getAge(age: number | string) {
  if (typeof age === "number") {
    console.log(`당신의 나이는 ${age}입니다.`);
  }
  if (typeof age === "string") {
    console.log(`당신은 ${age}입니다.`);
  }
  return new TypeError("나이 혹은 미성년자를 입력하세요");
}

// 09. conditional
// 떡볶이 브랜드, 가격
// type이름은 isDduckboki , 조건은 "떡볶이"가 type의 인자로 들어가면 string[], 아니면 number[]
// type 두 개 정의, 각각 이름은 yupDduck, price / 둘 다 isDduckboki의 타입을 상속받고,
// yupDduck은 isDduckboki인자로 "떡볶이" price는 12000을 받는다.
// yupDduck 타입의 a를 선언하고 배열 안에 ["엽떡반반, 주먹밥, 쿨피스"]
// price타입의 b를 선언하고 배열 안에 [12000, 3000, 1000]
type isDduckboki<T> = T extends "떡볶이" ? string[] : number[];

type yupDduck = isDduckboki<"떡볶이">;
type price = isDduckboki<12000>;

const a: yupDduck = ["엽떡반반", "주먹밥", "쿨피스"];
const b: price = [12000, 3000, 1000];

// 10. type alias
// 신체검사
type Point = {
  height: number;
  weight: number;
};

function printCoord(pt: Point) {
  console.log("당신의 키는 " + pt.height);
  console.log("당신의 몸무게는 " + pt.weight);
}

printCoord({ height: 100, weight: 100 });

// 11. interface 껍데기 틀..
// 붕어빵 장사
interface FishBread {
  type: string;
  number: number;
}

function makeFishBread(fb: FishBread) {
  console.log(`${fb.type}을 ${fb.number}개 주문했어요!`);
}
makeFishBread({ type: "슈붕", number: 4 });

// 타입스크립트의 유틸리티 타입
// 1. enum
// 요일 열거 타입
enum Week {
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday",
  THURSDAY = "thursday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
}
const today = Week.FRIDAY; //friday
console.log(today); //friday

// 2. as const 타입을 더욱 강력하게 명시하고자 할 때 사용
const Colors = {
  red: "#FF0000",
  blue: "#0000FF",
  green: "#008000",
}; // as const 안붙인거

const Color = {
  red: "#FF0000",
  blue: "#0000FF",
  green: "#008000",
} as const; // 붙인거

// 3. record
// 컵라면 자판기
interface RamenInfo {
  price: number;
  maker: string;
}

type RamenName = "신라면" | "너구리" | "불닭볶음면";

const Ramen: Record<RamenName, RamenInfo> = {
  신라면: { price: 1500, maker: "농심" },
  너구리: { price: 1300, maker: "농심" },
  불닭볶음면: { price: 1700, maker: "삼양" },
};

Ramen.너구리; //{ price: 1300, maker: "농심" },

// 4. partial
// 이상형
interface IdealType {
  height: number;
  looks: string;
}

type MyIdeal = Partial<IdealType>;
const me: MyIdeal = {}; // 가능
const you: MyIdeal = { height: 155 }; // 가능
const all: MyIdeal = { height: 158, looks: "얼굴이 작은 사람" }; // 가능

// 5. omit
// 장바구니
type Basket = {
  fruits: string;
  meals: string;
  drink: string;
};

type newBasket = Omit<Basket, "drink">;

const user: newBasket = {
  fruits: "체리",
  meals: "양념 갈비",
  // drink 속성이 빠져있다.
};

// 6. pick
// 회원정보
type Member = {
  name: string;
  phone: string;
  gender: string;
};

type newMember = Pick<Member, "name" | "phone">;

const mem1: newMember = {
  name: "유체리",
  phone: "010-1234-5678",
  // gender만 빼고 두개 고름
};

// 7. extract
// 동물입양소
type Animal = "Dog" | "Cat" | "Bird" | "Fish";

type Pet = "Dog" | "Cat";

type MyPets = Extract<Animal, Pet>;

const myPets: MyPets = "Dog"; // 'Dog' 또는 'Cat'만 가능

// 8. returntype
function greet(): string {
  return "Hello, world!";
}

type GreetingReturnType = ReturnType<typeof greet>;

const greeting: GreetingReturnType = "Hello, world!";

// 9. optional
// 학교 점심 급식
type Cafeteria = {
  meal: string;
  sideDish: string;
  drink?: string;
};

const dayMeal: Cafeteria = {
  meal: "짜장면",
  sideDish: "단무지",
};

typeof dayMeal.drink; // undefined

//10. satisfies
type MyState = StateName | StateNumber;

type StateName = "Seoul" | "Busan" | "Iksan";

type StateNumber = number;

type User = {
  birthState: MyState; // string, number
  stateNum: MyState;
};
const satisfiesUser = {
  birthState: "Iksan",
  stateNum: 63,
} satisfies User;

// 11. generic

function logText1(text: string): string {
  return text;
}
// 우리는 인자의 타입 + 반환값의 타입

function logText2(text: any): any {
  return text;
}

// 인자도 몰라 + 반환값도 몰라

function logText3<T>(text: T): T {
  return text;
}

// <T> 타입

// #1
const text1 = logText3<string>("Hello Generic");
const text2 = logText3<number>(123456);
// #2
//const text = logText1(12345); // 안됌
