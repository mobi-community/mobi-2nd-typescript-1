// PropsWithChildren -> children을 가진 props 타입을 의미합니다.
// react컴포넌트의 프로퍼티(props) 중에서 children이라는 프로퍼티를 포함하는 경우에 사용되는 generic타입
// PropsWithChildren를 사용하면 컴포넌트의 자식 요소에 대한 타입 정보를 명시적으로 다룰 수 있음!

//children을 명시적으로 사용하고 싶을 떄 사용하는 타입이다.

import { PropsWithChildren, ReactNode } from "react";
// 소스 코드 : P에 chilren이 자동으로 삽입되는 것을 볼 수있다.
//children?: ReactNode 을 안쓰는 효과!

//제네릭에 속성을 정의해서 props의 타입을 정의하면 된다.
//children은 자동으로 들어간다.
// 일반적인 컴포넌트 타입

//T P U => 제네릭
type PropsWithChildrenCode<P = unknown> = P & {
  children?: ReactNode | undefined;
};

type MyComponentProps1 = {
  prop1: string;
  prop2: number;
  children: ReactNode;
};
// 이때 children 프롭을 사용해야 한다면?

type MyComponentProps2 = PropsWithChildren<{
  prop1: string;
  prop2: number;
}>;

const MyComponent = ({ prop1, prop2, children }: MyComponentProps2) => {
  return (
    <div>
      <p>{prop1}</p>
      <p>{prop2}</p>
      {children}
    </div>
  );
};
