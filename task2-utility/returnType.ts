// ReturnType<T> 문자열을 반환하는 함수의 타입 지정
type MyFunctionType = () => string;

type ResultType = ReturnType<MyFunctionType>; //string: 반환타입

function sendData(a: number, b: number) {
  return {
    a: `${a}`,
    b: `${b}`,
  };
}

type Data = {
  a: string;
  b: string;
};

function consoleData(data: Data) {
  console.log(JSON.stringify(data));
}

type ReturnData = ReturnType<typeof sendData>; // ReturnData 타입은 sendData의 반환 타입이 자동 지정 된다.
//type ReturnData = {
//   a: string;
//   b: string;
// }
//반환값이 바뀌어도 일일이 type 수정을 안해도 된다.
//특정 함수의 출력을 다른 함수에서 가져와야 하는 경우에 매우 유리하다.⭐️

// 출처: https://itchallenger.tistory.com/638 [Development & Investing:티스토리]
