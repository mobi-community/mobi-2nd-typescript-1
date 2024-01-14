// React 애플리케이션에서 화면을 만드는데 사용되는 기본 구성 요소

//const element = <div>Hello, World!</div>;
//const element = React.createElement('div', null, 'Hello, World!');
/*
여기서 'div'는 HTML 태그명, null은 속성, 그리고 'Hello, World!'은 자식 요소입니다.
 이것이 ReactElement입니다.

이 ReactElement는 React에 의해 이해되고, 실제 HTML로 변환되어 화면에 표시됩니다. 
그리고 React는 이러한 과정을 통해 가상 DOM을 관리하여 성능을 최적화합니다.

간단히 말하면, 
ReactElement는 React 애플리케이션에서 UI를 만들 때 사용하는 기본적인 도구라고 생각하면 됩니다.
 JSX를 사용하면 이러한 ReactElement를 더 쉽게 작성할 수 있습니다.
*/

const MyComponent = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a React component.</p>
    </div>
  );
};
//
import React from "react";

const MyComponents = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello, World!"),
    React.createElement("p", null, "This is a React component.")
  );
};

interface ReactElement<
  P = any,
  T extends string | JSXElementConstructor<any> =
    | string
    | JSXElementConstructor<any>,
> {
  type: T;
  props: P;
  key: Key | null;
}
/*
하지만 JSX를 사용하는 것이 일반적이고 가독성이 좋습니다. 
JSX 코드는 Babel과 같은 도구를 통해 일반 JavaScript 코드로 변환되기 때문입니다.

간단히 말해서, ReactElement를 사용하는 일반적인 방법은 JSX를 사용하여 React 컴포넌트를 작성하는 것입니다. 
JSX는 ReactElement를 보다 쉽게 생성할 수 있도록 해주는 편리한 문법입니다.
*/
