// 타입을 주어야하는 경우와 주지 않아도 되는 경우를 구분하여 타입을 정의하세요

let seongyong = {
  age: 20,
  height: 190,
};

// 위와 같은 경우 매개변수의 타입으로 반환값의 타입을 유추할 수 있을 때 사용하지 않을 것 같다.
type Profile = {
  age: number;
  height: number;
};

function log(obj: Profile) {
  console.log(obj.height);
  return obj;
}

// console.log(obj.height)와 같이 타입을 추론하지 못할 때 사용해야 한다.

const am = log(seongyong);
console.log(am.age);
/*
type Person = {
  age: number;
  height?: number;
};

let seongyong: Person = {
  age: 20,
  height: 190,
};

function log(obj: Person): Person {
  if (obj.height !== undefined) {
    console.log(obj.height);
  }
  return obj;
}

const a: Person = log(seongyong);
console.log(a.age);
*/
