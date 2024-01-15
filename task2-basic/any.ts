// any 모든 타입
let anyType: any;
anyType = 1;
anyType = "1";
anyType = false;

function addNumber2(a: any, b: any) {
  return a + b;
}

const result1 = addNumber2(3, 5); //any, numberX
//any는 타입 검사를 포기한다는 선언과 같다.
//daniel : 이럴거면 자바스크립트쓰지ㅋ
