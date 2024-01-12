// React.FC (FunctionComponent)

// React 함수형 컴포넌트 타입
// props(P)와 context를 입력으로 받아 ReactElement 또는 null을 반환한다.
// <P = {}>
// props 타입을 지정하는 제네릭 타입 매개변수
// 기본값으로 빈 객체가 설정되어 있다.

// (1) props: PropsWithChildren
// P 타입에 children 속성이 포함된 타입 (React 18 전까지)

// (2) context

// React의 Context API를 통해 전역으로 데이터를 전달하거나 공유할 수 있게 해준다.
// 컴포넌트 계층 구조를 따라 props로 데이터를 일일이 넘기지 않아도 컴포넌트 간 데이터 공유를 가능케 한다.
// useContext , Context.Consumer 를 통해 context의 값을 읽어올 수 있다.

// (3) propTypes, contextTypes

// 함수형 컴포넌트가 받아올 props/context의 유효성 검사
// 주로 개발 환경에서, 컴포넌트에 전달되는 props/context의 타입 검사 후 잘못된 타입이 전달되면 에러 메세지를 출력한다.

// (4) defaultProps

// 함수형 컴포넌트에 기본적으로 제공되는 props의 값들을 설정할 때 사용된다.
// 부모 컴포넌트에서 특정 props를 제공하지 않았을 때, defaultProps에 지정된 값으로 대체된다.
// 하지만 클래스 컴포넌트 방식으로 defaultProps를 따로 지정해주기 보다는 구조 분해 할당 시 default Parameters를 지정해주는 방식이 함수형 컴포넌트 구현에 더 좋다.

// (5) displayName

// 컴포넌트의 이름을 지정할 때 사용된다.
// 개발 환경에서 디버깅 시 컴포넌트의 이름을 표시하기 위해 주로 사용한다.

import { FC } from "react";

type UserProps = {
  name: string;
  cart: string[];
};

const UserBox: FC<UserProps> = ({ name, cart }) => {
  return (
    <div>
      <div>name: {name}</div>
      <div>cart: {cart.length}</div>
    </div>
  );
};

// 1. React 18버전 이전까지 FC 사용을 지양했던 이유는?

// children prop이 암시적이었음
// React 18 버전으로 업데이트 되기 전, React.FC는 type이 ReactNode인 children을 암시적으로 가졌다.

// 원래 TS의 의도대로라면,
// React.FC를 사용하지 않은 아래의 방법처럼 children을 다루고 있지 않은 컴포넌트에 children을 넘겨줄 경우 에러로 처리해야 했다.
// 하지만 어떠한 에러도 발생하지 않았꼬 children의 존재가 가능한지 여부조차 파악할 수 없게 하였으므로, TS를 사용하는 목적과 부합하지 안흠

// 2. 이제는 다시 사용할 수 있는 이유??

//  React.FC 타입에서 암묵적인 children 선언이 제거
// children을 선언하지 않고 사용한 경우 에러가 발생하며, children을 사용하려면 명시적으로 선언해주어야 한다.

type Props = {
  children: React.ReactNode;
};

const CodeSnippet: React.FC<Props> = ({ children }) => <div>{children}</div>;
