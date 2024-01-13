useRef는 2가지의 리턴 타입을 가지고 있는데 MutableRefObject와 RefObject의 차이는 다음과 같다.

MutableRefObject: current의 값이 변경 가능한 객체이다
RefObject: current 프로퍼티의 값이 readonly로 변경할 수 없다

useRef의 타입 3가지

1. useRef(initialValue: T):: MutableRefObject
   제네릭 타입 T와 초깃값이 T로 일치하는 경우, 리턴 타입은 MutableRefObject<T> 가 된다.
   ref 객체의 current 프로퍼티를 직접 변경할 수 있다

   ex) 카운터로 ref의 값을 +1 씩 증가시키는 경우

2. useRef(initialValue: T | null) : RefObject
   초깃값이 null인 경우, 리턴 타입은 RefObject<T>로 객체의 .current 프로퍼티 값을 직접 변경할 수 없다.  
   readonly 로 속성 바뀜

```jsx
 const inputRef = useRef();

 return (
 <>
 <input ref={inputRef}>
 </>
 )
```

ex) input에 접근하기 위해 ref<HTMLInputElement> 를 적은 경우. 값을 변경할 필요가 없고 dom 요소에 접근만 필요한 경우

3. useRef<T = undefined>(): MutableRefObject<T | undefined>
   제네릭 타입이 undefined 즉, 타입을 지정하지 않은 경우 리턴 타입은
   MutableRefObject<T | undefined> 가 된다.

ex) ref의 값에 null을 넣고 타입을 지정하지 않은 경우
