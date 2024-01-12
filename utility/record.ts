// record
// 특정 타입의 모든 속성의 값을 일정한 타입으로 매핑 시켜줌
// 객체 키 벨류 한 번에 타입 지정

//record의 정의
//Record<Key, Value>
//키가 Key이고 값이 Value인 객체 타입을 생성함.

type PersonType = {
  name: string;
  age: number;
};

type PersonRecord = Record<keyof PersonType, string>; ///string | number | symbol 만 들어간다.
// keyof -> 객체의 속성 이름을 문자열 유니온 타입으로 가져옴 / "name", "age"
const person1: PersonRecord = {
  name: "daniel",
  age: "24",
  // age: 24,  24는 number 라서 에러 남
};

// Record<keys, type>
// Keys속성 키가 이고 속성 값이 type인 객체 유형을 생성합니다. 이 유틸리티는 한 유형의 속성을 다른 유형에 매핑하는 데 사용할 수 있습니다.

interface UserInfo {
  age: number;
  hobby: string;
}

type UserName = "kimi" | "rin" | "daniel";

const users: Record<UserName, UserInfo> = {
  kimi: { age: 20, hobby: "yoga" },
  rin: { age: 21, hobby: "drawing" },
  daniel: { age: 22, hobby: "typescript" }, //so easy guy
};

users.kimi;
