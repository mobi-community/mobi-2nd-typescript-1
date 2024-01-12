// PropsWithChildren타입은 말 그대로 children을 가진 props 타입을 의미합니다.

// TypeScript로 개발된 리액트 컴포넌트에서 children을 명시적으로 사용하고 싶을 때 사용하는 타입이라고 보시면 됩니다.

// PropsWithChildren은 아래와 같이 Generic과 함께 사용하면 됩니다.

import { PropsWithChildren, ReactElement } from "react";

type Children = {
  children: ReactElement;
};

type MyComponentProps = Children & {
  title: string;
};

type MyComponentProps = PropsWithChildren<{
  title: string;
}>;

function MyComponent(props: MyComponentProps) {
  const { title, children } = props;

  return (
    <div>
      <p>{title}</p>
      {children}
    </div>
  );
}

export default MyComponent;
