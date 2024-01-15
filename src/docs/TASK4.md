### **TASK.4 React의 Typescript**

react는 meta team에서 만든 JavaScript를 활용한 Frontend 개발을 위한 Framework 입니다.

JavaScript특성 상 리엑트 개발에 있어 더욱이 많은 라이브러리를 프로젝트에 응용하면서 그들이 정의한 함수나 컴포넌트를 가져다가 사용해야하는 경우가 많습니다.

이 경우, 내가 만든 함수가 아니기 때문에 타입이 추론되지 않고 내가 직접 타입을 정의하기도 어려운 상황이 연출되는데 이를 위해서JavaScript의 라이브러리나 프레임워크에서는 typescript를 정의하여 사용할 수 있도록 해주고 있답니다!

React의 경우도 마찬가지입니다! React에서 개발자들의 편의성을 위해 만들어낸 타입이 무엇이 있는지 고민해보고 이를 활용하는 예시를 모두 작성해보세요

```
1. React.FC

- React 18버전 이전까지 FC 사용을 지양했던 이유와 이제 다시 사용할 수 있는 이유는 무엇일까?
- 만약 FC를 사용할 수 없는 환경이라면 이유는 무엇이고 어떻게 대처가 가능한가

2. ReactNode
3. ReactElement
4. PropsWithChildren
5. PropsWithRef

- React에서 ref prop은 HTML 엘리먼트에 직접 접근하기 위해서 사용된다. ref는 컴포넌트를 통해 자식 중 하나에 전달할 수 있다. 하지만 함수형 컴포넌트는 인스턴스가 없어서 ref 속성을 사용할수 없기 때문에, 커스텀한 컴포넌트로는 ref를 전달할 수 없다.

그래서 React Component에서 ref prop을 전달하기 위해서는 forwardRef()라는 함수를 사용해야 한다. React Component를 forwardRef() 함수로 감싸주면, 컴포넌트 함수는 2번째 매개변수를 갖게 되는데 이를 통해 ref prop을 넘길 수 있다.

- forwardRef
커스텀 컴포넌트에서 ref를 통한 직접 제어가 필요할 때, React.forwardRef를 사용하면 부모 컴포넌트로부터 하위 컴포넌트로 ref를 전달할 수 있다. ref를 HTML 요소의 속성으로 넘겨줌으로써 함수 컴포넌트에서 ref를 통한 제어가 가능해진다.

- display name
타입스크립트에서 forwardRef 사용 시 'Component definition is missing display name' 에러가 발생한다. 이는 forwardRef() 함수를 호출할 때 익명 함수를 넘기게 되면 브라우저에서 React 개발자 도구를 사용할 때 컴포넌트의 이름이 나오지 않아 발생한다. 이를 해결하기 위해서는 CustomInput.displayName = "CustomInput"; 와 같이 함수 호출의 결과를 displayName에 설정하거나, CustomInput = forwardRef(CustomInput); 와 같이 forwardRef() 함수의 호출 결과로 기존 컴포넌트를 대체하는 방법이 있다.



6. RefObject
7. SetStateAction
8. Dispatch
9. MouseEvent, ChangeEvent, FormEvent, HTML<>Element (HTMLDivElement, ...etc)
```
