// number string boolean

// 1, number
let A = 3;
let B = 5;

// return 반환값의 타입 :number
function addNumber(a: number, b: number): number {
    return a + b;
}

console.log(addNumber(A, B));
//8

const age: number = 24; // 부럽다
console.log(age);

// 2, string
const nickName: string = 'daniel';
console.log(nickName);

//tsconfig
//noImplicitReturns : true 반환값 타입 설정 안하면 경고

// 타입추론을 지정해서 명시적으로 지정하지 않아도 되지만, 유지보수와 가독성을 위해 씁니다
function welcome(name: string): string{
    return `${name}님 환영합니다!:)`;
}

console.log(welcome('kimi'));

// 3, boolean=
let isBool: boolean = true;
console.log(isBool);

const isDog: boolean = false;

// 타입자체가 false로 인식이 됨 => string x , 리터럴 타입 <-> any

if (isDog) {
    console.log('멍멍');
} else {
    console.log('야옹');
}

// 다른 것과 공유가안됨 export해주어야함 (독립된 모듈)
const basic = 1;
export default basic;
