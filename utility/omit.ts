//omit
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

type ProductWithoutBrand = Omit<Product, "brand">;
//속성을 1-2개만 빼야 할 때 좋을듯?

const product2: ProductWithoutBrand = {
  id: 123,
  name: "다이슨 슈퍼 울트라 미세먼지 소음 차단 진공 청소기",
  price: 200000000,
  stock: 10,
};

// Omit <T,K>

interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

// 특정 프로퍼티를 생략. (id 와 name만 가져와서 쓸 수 있음)
const master2: Omit<User, "age" | "gender"> = {
  id: 1,
  name: "Peanut",
};

// omit
// 특정 타입에서 지정된 속성을 제외한 나머지 속성을 가지는 새로운 타입을 생성함.
type PersonType = {
  name: string;
  age: number;
};

type PersonOmit = Omit<PersonType, "name">;
const person3: PersonOmit = {
  // name: "daniel", ❌ name을 제외하기로 했기 때문에 에러 남
  age: 24,
};

const omit1 = 1;
export default omit1;
