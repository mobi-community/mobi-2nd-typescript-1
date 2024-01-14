// ReactNode
// 리액트가 랜더링할 수 있는 모든 것을 허용하는 타입
// 주로 받을 props에 구체적인 타입을 알 수 없거나, 어떠한 타입도 허용하고 싶을 때 사용!
//children타입을 정의할 때 자주 사용
import { ReactNode } from "react";
import React from "react";
//children Props의 타입이 정의 x
interface HeaderProps {
  children: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <div>{children}</div>;
};

export const MainPage: React.FC = () => {
  return (
    <div>
      <Header>자식ㅋ </Header>
    </div>
  );
};

/////////////////////////////선//////////////////////////////////

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

// Container는 문자열, 숫자, react요소 등을 자식으로 받을 수 있게됨
// 동적으로 변하는 자식이나 여러타입의 자식을 가질 수 있도록 하는 데에 유용하게 사용됨
export const MyContainer: React.FC = () => {
  return (
    <Container>
      <p>Hello</p>
      <button>눌러보셈</button>
    </Container>
  );
};
