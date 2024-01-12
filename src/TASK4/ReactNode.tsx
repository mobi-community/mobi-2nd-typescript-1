//ReactNode : 컴포넌트가 받는 자식 요소의 타입을 더 유연하게 만들기 위해서
import React, { ReactNode } from "react";

interface MyComponentProps {
  children: ReactNode;
}

const MyComponent: React.FC<MyComponentProps> = ({ children }) => {
  return <div>{children}</div>;
};
