// 01. React.FC
// - React 18버전 이전까지 FC 사용을 지양했던 이유와 이제 다시 사용할 수 있는 이유는 무엇일까?
// - 만약 FC를 사용할 수 없는 환경이라면 이유는 무엇이고 어떻게 대처가 가능한가
// React.FC는 React에서 사용되는 타입스크립트 용어로, "Function Component"의 약자이다.

/*
함수형 컴포넌트(FC)는 초기에 상태나 라이프사이클 메서드를 사용하기 어려웠기 때문에, 더 많은 기능이 필요한 경우
클래스형 컴포넌트를 사용하는 것이 일반적이였음. 
리액트 16.8부터 Hooks가 도입되면서 함수형 컴포넌트(FC)에서도 상태 및 라이프사이클을 효과적으로 관리할 수 있게 됨.
함수형 컴포넌트(FC)를 사용할 수 없는 환경이라면 클래스형 컴포넌트를 사용해서 클래스의 특성을 활용해 많은 기능을 
사용할 수 있음. 예를 들어 라이프사이클 메서드를 활용해 컴포넌트의 상태 변화에 따라 동작을 수행할 수 있음.
*/

// 02. ReactNode
// children 속성의 타입으로 가장 많이 사용하는 타입 -> jsx 내에서 사용할 수 있는 모든 요소의 타입 (string, null, undefined 등을 포함하는 가장 넓은 범위를 갖는 타입)
// 어떤 props을 받을 건데, 구체적으로 어떤 타입이 올지 알 수 없거나, 어떠한 타입도 모두 받고 싶다면 ReactNode로 지정해주는 것이 좋음
// 클래스형 컴포넌트는 render메소드에서 ReactNode를 리턴
import { ReactNode, FC } from "react";

type PostProps = {
  title: string;
  content: ReactNode;
};

export const Posts = ({ title, content }: PostProps) => {
  return (
    <div>
      {title}
      {content}
    </div>
  );
};

// 03.  ReactElement
// createElement 함수를 통해 생성된 컴포넌트만을 허용하는 타입
// 함수형 컴포넌트는 ReactElement를 리턴

import { createElement } from "react";

const GreetingsJSX = () => {
  return <div>Hello, world!</div>;
};

const GreetingsTSX = () => {
  return createElement("div", {
    children: "Hello, world!",
  });
};

// 04. PropsWithChildren
import { PropsWithChildren } from "react";

interface Example {
  name: string;
}

const ExampleComponent: FC<PropsWithChildren<Example>> = ({
  name,
  children,
}) => {
  return (
    <div>
      <div>{name}</div>
      {children}
    </div>
  );
};

// 05. PropsWithRef
// React 함수형 컴포넌트에서 ref prop을 사용하기 위해 사용해야 하는 함수 = forwardRef()
// 일반 React.FC에서 Ref를 prop으로 사용 = PropsWithRef

// "ref" extends keyof P ? 👉 "ref" 라는 속성이 P 의 속성들 중에 포함되어 있는지 검사하는 조건식
// P extends { ref?: infer R } ? 👉 P 가 { ref?: infer R } 형태일 때, ref의 타입을 추론하는 조건식
// string extends R ? 👉 R 이 string으로 추론 가능한지 확인하는 조건식

import { Ref, RefObject, PropsWithRef, useRef, useEffect } from "react";

type InputProps = {
  inputRef: Ref<HTMLInputElement>;
};

const FormInput: FC<PropsWithRef<InputProps>> = ({ inputRef }) => {
  return <input ref={inputRef} />;
};

// 06. RefObject

const RefExample: FC = () => {
  const ref: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.backgroundColor = "red";
    }
  }, []);
  return <div ref={ref}>Hello World</div>;
};

// 07. SetStateAction && 08. Dispatch
// setState 메소드의 경우에는 react 라이브러리의 Dispatch, SetStateAction 메소드를 호출하여 사용

import { SetStateAction, Dispatch } from "react";

interface ButtonProps {
  setState: Dispatch<SetStateAction<boolean>>;
}

const Button: FC<ButtonProps> = ({ setState }) => {
  return <button onClick={() => setState((prev) => !prev)}>click me!</button>;
};

// 09. MouseEvent, ChangeEvent, FormEvent, HTML<>Element (HTMLDivElement, ...etc)

import { ChangeEvent, MouseEvent, FormEvent, useState } from "react";

// MouseEvent

const handleClick = (e: MouseEvent<HTMLButtonElement>) => {};

// ChangeEvent
const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const checkValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return <input type="text" onChange={checkValue} />;
};

// FormEvent
const Todolist = () => {
  const [value, setValue] = useState("");
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={value} placeholder="입력하세요"></input>
      <button>제출하기</button>
    </form>
  );
};
