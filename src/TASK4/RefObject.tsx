//useRef의 반환 타입에 대해서 먼저 알아본다.

interface MutableRefObject<T> {
  current: T;
}

interface RefObject<T> {
  readonly current: T | null;
}
//두 종류의 반환 타입이 있으며 RefObject.current는 수정이 불가능하다는 것을 확인할 수 있다.

useRef<T>(initialValue: T): MutableRefObject<T>
//제네릭 타입과 initialValue의 타입이 T로 일치하는 경우, MutableRefObject<T>를 반환한다.
// Mutable이라는 단어에서 확인할 수 있듯이 Ref.current 자체에 대한 수정이 가능하다.

useRef<T>(initialValue: T | null): RefObject<T>
//initialValue의 타입이 null을 허용하는 경우, RefObject<T>를 반환한다. Ref.current 자체에 대한 수정이 불가능하다.

useRef<T = undefined>(): MutableRefObject<T | undefined>
//제네릭 타입이 undefined인 경우(타입을 제공하지 않은 경우), MutableRefObject<T | undefined>를 반환한다.




import React, { useEffect, useRef } from 'react';

interface MyComponentProps {
  text: string;
  num:number;
}

const MyComponent: React.FC<MyComponentProps> = ({ text, num }) => {
  // useRef 함수를 사용하여 RefObject 생성하고 제네릭으로 해당 Ref의 타입을 지정
  const myRef = useRef<HTMLDivElement>(null);
  const myNumberRef = useRef<number>(num);

  useEffect(() => {
    // RefObject를 통해 Ref에 접근
    if (myRef.current) {
      console.log(myRef.current.textContent); //"Hello, TypeScript!"
    }
    //textContent는 DOM 요소의 텍스트 콘텐츠를 나타내는 속성
  }, []);

  useEffect(() => {
    myNumberRef.current += 1  
  }, [])// 이니셜밸류 null 이면 수정 불가 => 에러나요

  return <div ref={myRef}>{text}</div>;
};

const App: React.FC = () => {
  return <MyComponent text="Hello, TypeScript!" num={123} />;
};

export default App;

// 이니셜벨류가 null 이면 수정 불가
