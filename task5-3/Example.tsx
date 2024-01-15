// 1. interface 중복 선언이 가능하다. (자동 병합 됨.)

interface IRin {
  name: string;
  hobby: string;
  height: number;
  sleep: () => void;
}

interface IRin {
  age: number;
}

const rin: IRin = {
  name: "rin",
  hobby: "drawing",
  height: 167,
  age: 20,
  sleep: () => {
    console.log("sleep");
  },
};

// 2. typeAlias는 원시값, 객체 다 타입 정의가능 vs interface는 주로 객체를 정의할 때 사용됨

type Age = number | string; //typeAlias로 원시값 타입 가능
interface IAge {} //무조건 객체타입

// 3. 확장할 때 interface는 extends를 사용, type alias는 &(인터섹션)을 사용

// interface는 확장 할 때 extends를 사용
interface IMember {
  name: string[];
}
interface IMemberCount extends IMember {
  count: number;
}

type TMember = {
  name: string[];
};

// ㅋㅋ 실험실 🧑‍🔬🧑‍🔬👩‍🔬🔬🧪🥽🥼
//type + type = &
//type + interface = &
//interface + type = extends
//interface + interface = extends
//extends 문법은 interface 문법
//& 문법은 type 문법
//결론 : type과 interface 는 서로 합칠 수 있다.

type TMemberCount = {
  count: number;
} & TMember;

type AAA = {
  age: number;
} & IMember;

const aaa: AAA = {
  age: 12,
  name: ["daniel", "kimi", "rin"],
};
//타입을 interface로 확장하는 것도 가능
interface MemberCount2 extends TMember {
  count: number;
}

type Str = {
  name: string;
};

type Num = {
  name: number;
};

type StrOrNum = Num | Str;

//다음과 같이 유니언 타입을 확장하는 것은 불가 ❌
// interface MemberCount3 extends StrOrNum {
//   count: number;
// }

// 확장 typeAlias
// type Owner = OwnerTypeAlias & { name: string };

// 4. type Alias 다양한 형태의 타입을 정의함 (유니온 타입, 조건부 타입) 타입을 만들때는 Type Alias가 더 유용하다.

// 리터럴 값의 유니온 타입 => 타입만 됨
// string타입이 아니라, red, green 값을 갖는 리터럴 타입
type MainColor = "red" | "green";

//객체 유니온 타입은 => 모두 된다.
interface Color {
  mainColor: "red" | "green";
}

interface Shape {
  mainShape: "circle";
}
type ColorAndShape = Color | Shape;

const ex: ColorAndShape = {
  mainColor: "red",
  mainShape: "circle",
};

// 5. class의 타입을 정의할때는 둘다 되지만, interface를 주로 사용(implements)

interface ITodo {
  id: number;
  title: string;
  content: string;
}

type TTodo = {
  id: number;
  title: string;
  content: string;
};

class ClassTodo implements TTodo {
  //typescript에서는 클래스 프러퍼티를 사전 선언해야 한다.
  id: number; //1
  content: string;
  title: string;

  //생성자
  constructor(id: number, content: string, title: string) {
    //프로퍼티 앞에 this
    this.id = id;
    this.content = content;
    this.title = title;
  }

  //메소드
  getId() {
    console.log(this.id);
  }
}

//붕어빵 속 슈붕ㅋㅋ 슈크림
const todo = new ClassTodo(1, "안녕", "제목");

// 6. unknown타입을 다룰 때 typeof를 사용해서 타입을 확인: typeAlias에서만 가능
function confirmUnknown(value: unknown): void {
  if (typeof value === "string") {
    //value가 문자열 일 때
    console.log(`It is ${value.toLowerCase()}`);
  } else if (typeof value === "number") {
    //value가 숫자일 때 처리
    console.log(`It is ${value.toFixed(2)}`);
  } else {
    console.log(`It is Unknown Type`);
  }
}
//test
confirmUnknown(true); // result: It is Unknown Type

// 7. interface는 객체 타입을 설정할 때 사용할 수 있으며, 원시 자료형에는 사용할 수 없다.
interface StringAndNumber {
  //문자열과 숫자를 가지는 인터페이스
  stringValue: string;
  numberValue: number;
}
//타입을 사용해야 하는 경우
//1. 원시 타입을 정의할 경우
//2. 튜플 타입을 정의할 경우
//3. 함수 타입을 정의할 경우
//4. 유니온 타입을 정의할 경우
//5. 매핑된 타입을 저의할 경우

//interface를 사용하면 좋은 경우 : 객체에 이름을 부여할 떄, props를 만들때
