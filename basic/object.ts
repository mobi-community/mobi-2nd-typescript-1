let person: object;

//{}와 []가 할당 가능한 타입이다.
person = { name: "rin" };
person = [];

//나머지 원시 타입의 값들은 할당이 불가능하다.
//중요한 것은 배열이 할당 가능하다는 것!
//배열은 객체이니깡

//근데 이렇게 굳이 object 속성으로 줄 필요가 있나 싶음...
//ts쓰는 이유가 없음

// object 객체 타입
let obj: object = { name: "NAME", age: 24 }; // any 타입처럼 모든 타입 할당 가능 *배열도 가능
