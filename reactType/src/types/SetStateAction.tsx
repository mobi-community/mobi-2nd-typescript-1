//SetStateAction
//새로운 상태를 나타내는 값 또는 이전 상태를 이용하여 새로운 상태를 계산하는 함수를 받을 수 있는 유니온 타입
import { useState, SetStateAction, Dispatch } from "react";

//type SetStateAction<S> = S | ((prevState: S) => S);

const Parent = () => {
  const [count, setCount] = useState<number>(0);

  type SetStateAction<S> = S | ((prevState: S) => S); //setCount(1); //setCount((Prev) => prev + 1);
  //실제로 상태를 어떻게 업데이트할지에 대해
  type Dispatch<A> = (value: A) => void;
  //상태 업데이트 '함수 타입'
  //동작만 정의하고 반환은 X (업데이트만 수행)

  setCount(0);

  setCount((prev) => prev + 1);
  //dispatch : setCount() 의 타입
  //SetStateAction : prev => prev + 1 | 0 의 타입
  //(prevState: number) => number | number

  //setCount : React.Dispatch<SetStateAction<number>>

  const onPlusCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={onPlusCount}></button>
      <ChildComponent setCount={setCount} />
    </>
  );
};

type ChildProps = {
  setCount: Dispatch<SetStateAction<number>>; // props로 set함수를 받을 때 타입을 지정해주는 친구
};

const ChildComponent = ({ setCount }: ChildProps) => {
  const onReset = () => {
    setCount(0);
  };

  return <button onClick={onReset}>reset</button>;
};
