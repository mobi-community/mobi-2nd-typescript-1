// conditional 조건부 타입
// interface 중복선언가능 자동병합
// 삼항 연산자 느낌


// void는 TypeScript에서 사용되는 타입 중 하나로, 함수가 어떤 값을 반환하지 않을 때 사용됩니다.
//void 타입의 변수에는 undefined 또는 null만 할당할 수 있습니다. 
// 이는 주로 함수가 반환하는 값이 명시적으로 없음을 나타낼 때 사용된다. 

// onClick : () => void
interface Animal {
    live(): void;
}

interface Animal {
    name: string;
}
//자동 병합

// 상속
interface Dog extends Animal {
    bark(): void;
}

type NumOrStr = Dog extends Animal ? number : string; //number
