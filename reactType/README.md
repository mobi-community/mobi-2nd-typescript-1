# React.FC

- <b>React Function Component</b> 의 줄임말로 함수 컴포넌트를 정의할 때 사용되는 타입
- React 버전 15.6.0부터 도입됨
- 속성(props)에 대한 타입을 지정. 이를 통해 TS는 해당 컴포넌트가 어떤 속성을 받아야하는지 알 수 있고, 코드 작성 중 정보를 활용할 수 있다.

```tsx
interface AppProps {
  name: string;
}

const App: React.FC<AppProps> = (props) => {
  return <div></div>;
};
```

React.FC의 제네릭에 Props의 타입인 AppProps를 전달한 것을 볼 수 있다.

### 18버전 이전에 React.FC 를 지양했던 이유

#### 1. props에 기본적으로 <b>children</b>이 기본 props로 들어가 있다.

```tsx
  type PropsWithChildren<P> = P & {children? : ReactNode | undefined}

  => children이 ?(optional) 로 들어간 것을 확인 가능
```

- children을 props로 전달 안하고 children을 써도 에러가 안난다.
- 타입스크립트를 사용하는 이유 중 하나가 정확한 타입을 지정하면서 자바스크립트 코드의 안정성을 향상 시키는 부분인데
  기본으로 들어가 있는 children은 이를 존중하지 않는다.

- 타입스크립트의 제네릭 문법을 지원하지 않는다.

-> 제네릭 문법을 활용하여 props를 사용할 경우, FC타입을 사용하면 컴포넌트에 제네릭 값을 전달할 수 없다.

```jsx
  type GenericProps<T> = {
  props: T,
  callback : (e : T) => void;
  }

  const Component = <T>(props:GenericProps<T>) => {...}
```

=> 위와 같이 일반 Props를 Type으로 설정할 때에는 제네릭을 사용할 수 있지만, React.FC를 사용하면 <>에 propType
이 들어가기 때문에 Prop의 제네릭을 사용하기가 힘들다.
`React.FC<Props<string>>` 이런 방식으로 제네릭 안에 제네릭을 넣어야 하는데..

#### 2. defaultProps 속성이 적용되지 않았었다!

-> FC타입으로 선언된 컴포넌트에서는 `defaultProps`가 정상적으로 동작하지 않음.</br>
즉, defaultProps를 사용하여 props의 초기값을 설정해도 값을 인식하지 못했다

```tsx
type GreetingsProps = {
  name: string;
  mark: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name, mark }) => (
  <div>
    Hello, {name} {mark}
  </div>
);

Greetings.defaultProps = {
  mark: "!", // 유효하지 않음.
};

export default Greetings;
```

### 이제 다시 사용할 수 있는 이유 (React.18 버전에서의 업데이트)

#### 1. 18버전 이상에서는 children은 더 이상 props 타입에 암묵적으로 포함되지 않으며 명시적으로 선언해야 한다.

<a href="https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210">해당 이슈 깃허브 PR</a>

```jsx
// 이전
const Component: React.FC = () => {
  return <div />;
};
// No error
<Component>123</Component>;

// 이후
<Component>123</Component>;
// error
// Type '{ children: string; }' has no properties in common with type 'IntrinsicAttributes'.
```

#### 2. React.FC를 사용할 때 컴포넌트가 ReactElement가 아닌 ReactNode를 반환하도록 변경되었다.

React18 이전 버전에서는 React.FC를 사용할 때 컴포넌트가 ReactElement를 반환하여, 컴포넌트에서 숫자나 문자열, undefined 같은 값을 반환하면 TS에서 오류를 발생시키는 문제가 있었다.

하지만 React18 에서는 ReactNode를 반환하도록 변경되면서 위와 같은 문제가 사라졌다.

```tsx
//before
const Component: React.FC<AppProps> = () => {
  return 123;
  //❌ error
  // Type 'number' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
};
```

```tsx
//after
const Component: React.FC = () => {
  return 123; //✅ 에러 안남
};
```

### 결론

React.FC의 고질적인 문제가 사라졌으니, 이제 사용할 수 있는 타입이 되었다. React.FC를 쓰는 것은 프로젝트의 컨벤션이나 개발자의 판단에 따라 선택해서 사용하면 되겠다!

https://www.totaltypescript.com/you-can-stop-hating-react-fc

---

### React.ReactNode

`ReactNode` 타입은 jsx 내에서 사용할 수 있는 모든 요소의 타입을 의미한다. </br>
`string`, `null`, `undefined`를 포함하는 가장 넓은 범위의 타입이다. </br>
`ReactElement`의 슈퍼셋이다. </br>
`children`의 타입을 정의할 때 자주 쓰이는 타입이다.
(\*컴퓨터 과학에서 슈퍼셋이란 특정한 언어의 모든 기능을 포함하면서, 다른 기능까지 포함하도록 향상 또는 확장된 것을 의미한다고 합니다.)

```tsx
type ReactNode =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;
```

### React.ReactElement

`createElement`함수를 통해 생성된 객체 타입이다. `ReactNode`와는 달리 원시 타입을 허용하지 않으며, `jsx` 요소만을 허용한다.앞서 말했다시피, `ReactNode`가 `ReactElement`를 포함하는 상위 개념이다.

참고 : CreateElement란?

```tsx
<div name="kimi">Hello, {name}</div>;

//createElement의 결과물
React.createElement(
  "div",
  {
    name: "kimi",
  },
  "Hello, ",
  name
);
```

createElement 함수가 반환한 모든 객체는 ReactElement의 인터페이스를 따르고 있다. 즉, jsx를 사용하면 createElement에
의해 ReactElement가 만들어진다!
