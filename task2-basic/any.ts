// any 모든 타입
let anyType: any;
anyType = 1;
anyType = '1';
anyType = false;


function addNumber2(a: any, b: any): number {
    return a + b;
}

console.log(addNumber2(3, 5));
console.log(addNumber2('뽀또', '예감')); // ??
//any는 타입 검사를 포기한다는 선언과 같다.

