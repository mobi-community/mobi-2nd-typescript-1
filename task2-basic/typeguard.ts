//타입 검사 함수 1
function isNumber(value: unknown): value is number {
    //return 문이 true일 때 value는 number 타입이 된다는 뜻-> is는 return안에서  불린 값
    return typeof value === 'number';
}

function processValue(value: unknown): void {
    //unknown => number 타입 방패
    if (isNumber(value)) {
        console.log('Processed number:', value.toFixed(2));
    } else {
        console.log('Value is not a number');
    }
}

processValue(42); // Processed number: 42.00
processValue('abc'); // Value is not a number

//타입 검사 함수 2 : 공통 프로퍼티로 검사 (kind)

type Foo = {
    kind: 'foo'; // 리터럴 타입
    foo: number;
};
type Bar = {
    kind: 'bar'; // 리터럴 타입
    bar: number;
};

function doStuff(arg: Foo | Bar) {
    if (arg.kind === 'foo') {
        console.log(arg.foo); // ㅇㅋ
        // console.log(arg.bar); // Error!❌
    } else {
        // 백퍼 Bar겠군.
        // console.log(arg.foo); // Error!❌
        console.log(arg.bar); // ㅇㅋ
    }
}

const foo: Foo = {
    kind: 'foo',
    foo: 12,
};

// 타입 검사 함수 3 : in ) 특정 property가 존재하는지를 확인하는 연산자
interface A {
    x: number;
}
interface B {
    y: string;
}
// 프로퍼티는 속성명 -> x라는 속성명이 있냐??
// 'x' in q -> ㅇㅇ 있음 ㅋ -> in 안에 있녀
// 매개변수 
// q: a인지 b인지?
function doStuff2(q: A | B) {
    if ('x' in q) {
       //interface가 A임.
    } else {
      //interface가 B임.
    }
}

// doStuff2()
const instanceQ : A = {
  x: 12
}

doStuff2(instanceQ)


// 타입 검사 함수 4
//instanceof 는 class를 구별할 수 있는 타입 가드
class Developer {
    developer() {
        console.log('업무 중');
    }
}

class Designer {
    design() {
        console.log('업무 중');
    }
}

const work = (worker: Developer | Designer) => {
    if (worker instanceof Developer) {
        worker.developer();
    } else {
        worker.design();
    }
};
