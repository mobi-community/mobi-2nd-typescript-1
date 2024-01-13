//partial : 부분적으로
//<>의 타입의 모든 프로퍼티를 ?(optional)로 만들어 버리는 타입
//// 특정 타입의 모든 속성의 값을 선택적으로 만들어줌

interface Address {
  email: string;
  address: string;
}

const address1: Partial<Address> = {
  email: "123@naver.com",
};

const address2: Partial<Address> = {
  address: "서울시 강남구",
};

const address3: Partial<Address> = {};

type PersonType = {
  name: string;
  age: number;
};
// 원래는 PersonType에 name, age 타입이 있기 때문에 둘다 포함해야 함
const person: PersonType = {
  name: "daniel",
  age: 24,
};
// partial을 사용하면 타입을 선택적으로 사용할 수 있기 때문에 원하는 타입만 사용할 수 있음.
type PersonPartial = Partial<PersonType>;
const person2: PersonPartial = {
  name: "daniel",
};

// partial

interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}
/**
interface User {
    id?: number;
    name?: string;
    age?: number;
    gender?: "m" | "f"
}
 */

let admin: Partial<User> = {
  id: 1,
  name: "Peanut",
};

const partial = 1;
export default partial;
