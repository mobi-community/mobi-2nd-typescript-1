import { useRef } from "react";
// react + typescript 에서 useRef를 사용할 때 타입 예시

const RefTypes3 = () => {
  //1. 제네릭에 HTMLInputElement 을 안주면 => React.MutableRefObject<null>
  //2. 제네릭에 HTMLInputElement 를 주면 => React.RefObject<HTMLInputElement>

  //2번의 경우에는 current를 직접 변경시킬 수 없다
  const inputRef = useRef(null); //제네릭 : undefined => ref 타입 3번
  return (
    <>
      <input ref={inputRef} />
    </>
  );
};

const RefTypes2 = () => {
  //1. 제네릭에 HTMLInputElement 을 안주면 => React.MutableRefObject<null>
  //2. 제네릭에 HTMLInputElement 를 주면 => React.RefObject<HTMLInputElement>

  //2번의 경우에는 current를 직접 변경시킬 수 없다. 접근만 가능
  const inputRef = useRef<HTMLInputElement>(null); //ref 타입 2번

  return (
    <>
      <input ref={inputRef} />
    </>
  );
};

//값을 변경해야 할때는 타입과 초기값을 일치시킨다.
//useRef(initialValue: T):: MutableRefObject(1,3번) 이 타입이 된다.
export const RefType1 = () => {
  const countRef = useRef<number>(0);

  const onCountPlus = () => {
    countRef.current++;
    console.log(`카운터: ${countRef.current}`);
  };

  return (
    <>
      <button onClick={onCountPlus}>+</button>
    </>
  );
};

//* createRef나 useRef와 함께 사용하여 DOM 요소에 대한 참조를 생성할 때 사용
//null => dom 요소를 조작
//값 => 값이 있는 변수, 값을 변경
