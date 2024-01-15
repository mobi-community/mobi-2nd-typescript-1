type Person = {
  age: number;
  height: number;
};

let seongyong: Person = {
  age: 20,
  height: 190,
};

//&(타입 합성)
//{name: string} & {age:  number} = {name: string, age: number}

/*
(1) 리턴 값의 타입을 안주는 경우: 
매개변수의 타입값을 지정해서 return의 obj의 값이 자동추론이 되기 때문

매개변수의 타입과 일치하는 등 매개변수의 타입으로 충분히 ts가 반환값의
타입을 유추할 수 있어서 리턴값의 타입을 굳이 안줘도 될 때

*/

function log(obj: Person) {
  console.log(obj.height);
  return obj;
}

/*
(2) 리턴 값의 타입을 주는 경우: 
매개변수의 타입지정 만으로는 반환값의 타입을 추론하지 못할때.
*/

function log2(obj: Person): Person & { name: string } {
  console.log(obj.height);
  return {
    ...obj,
    name: "peanut",
  };
}

//log({age: 10});
//log({height: 200});
// ? => 타입의 속성이 다 있어도 되고 , 없어도 되는...그 타입이 왜 있는지?

const a = log(seongyong);
const b = log2(seongyong);
console.log(a.age);
console.log(a.height);
console.log(b.name);
