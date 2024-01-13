// pick
// 특정 타입에서 지정된 속성만을 선택하여 새로운 타입을 생성함.å

type PersonType = {
  name: string;
  age: number;
};

type PersonPick = Pick<PersonType, "name">;

const person4: PersonPick = {
  name: "daniel",
  // age : 24, age는 선택하지 않았기 때문에 에러 남
};

// Pick <T,K>

interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

// id 와 name만 가져와서 쓸 수 있음
const master: Pick<User, "id" | "name"> = {
  id: 1,
  name: "Peanut",
};

//pick
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

type BasicProduct = Pick<Product, "id" | "name">;

const product1: BasicProduct = {
  id: 123,
  name: "다이슨 슈퍼 울트라 초 미세먼지 진공 청소기",
};

const pick1 = 1;
export default pick1;
