// PropsWithRef
// react에 ref를 사용하기 위한 타입
// 예시 보는데 이해 안됨ㅋ

//forwardRef : react에서 props로 ref를 바로 넘기는 것은 불가능하다.
//React 컴포넌트는 기본적으로 ref라는 props를 가지고 있어 그것과 겹치기 때문에,
//ref 사용시 forwardRef 사용을 권장한다.
//React함수형 컴포넌트에서 ref prop을 사용하기 위해 사용해야 하는 함수가 forwardRef이다.

import { PropsWithRef, forwardRef, useRef } from "react";

//ref의 타입을 React.ForwardedRef을 써주어야 한다.
const ChildComponent = forwardRef<HTMLInputElement>(
  //MutableRefObject<T | null>
  (props, ref) => {
    return <input type="text" ref={ref} />;
  }
);

export const ParentComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef?.current?.focus();
  };

  return (
    <div>
      <ChildComponent ref={inputRef} />
      <button onClick={handleFocus}>forwardRef 인풋 포커스</button>
    </div>
  );
};

//PropsWithRef는 React.FC에서 props로 ref를 사용하기 위해 만든 타입

export const ParentComponent2 = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef?.current?.focus();
  };

  return (
    <>
      <Input ref={inputRef} />
      <button onClick={handleFocus}>PropsWithRef 인풋 포커스</button>
    </>
  );
};

type InputProp = {
  ref: React.Ref<HTMLInputElement>;
};
//이렇게만 사용하면 ref를 잘 전달할 수 없다

const Input: React.FC<PropsWithRef<InputProp>> = forwardRef(({ ref }) => {
  return <input ref={ref} />;
});
//useImperativeHandle를 사용하는 링크
//https://dygreen.tistory.com/entry/React-forwardRef-%EC%82%AC%EC%9A%A9%EB%B2%95

//https://blog.leaphop.co.kr/blogs/35

//ref 타입 오류 수정
//https://velog.io/@jungsangu/Typescript%EC%97%90%EC%84%9C-React-forwardRef-%ED%83%80%EC%9E%85-%EC%97%90%EB%9F%AC
