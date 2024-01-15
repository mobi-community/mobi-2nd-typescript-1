// 1. MouseEvent
import { MouseEvent, ChangeEvent, useState } from "react";

type CustomMouseEvent = MouseEvent<HTMLElement>;

const MouseEventForm = () => {
  const clickHandler = (event: CustomMouseEvent) => {
    // code ....
  };

  return <div onClick={clickHandler}>Mouse Click</div>;
};

// 2. ChangeEvent

const changeValueForm = () => {
  const [Value, setValue] = useState("");

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value); // changeEvent 사용하지 않으면 target에 접근 불가
  };

  return <input type="text" onChange={changeValue} />;
};

// 3. FormEvent

//handleSubmit은 일반적으로 HTML <form> 요소에서 발생하는 submit 이벤트를 처리하는 함수의 이름
// 이 함수는 주로 폼 데이터를 수집하고 제출하는 로직을 담당하며, 일반적으로 onSubmit 이벤트 핸들러로 등록됩니다.
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  // form 요소에서 발생하는 이벤트를 다루기 위한 타입.
  event.preventDefault(); // 기본 동작을 막기 위해 호출
  console.log("Form submitted!");
};

const MyForm: React.FC = () => {
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields go here */}
      <button type="submit">Submit</button>
    </form>
  );
};

// 4. HTML<>Element

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  console.log("Button clicked!");
}; // html 요소의 속성? HTMLElement 은 모든 HTML요소 타입의 최상위 타입이다. 모든 타입에 사용가능.
// 하지만 구분해서 사용하는 이유는 HTMLInputElement경우 HTMLInputElement에서만 사용할 수 있는 속성이 있다(ex. value)

const MyButton: React.FC = () => {
  return <button onClick={handleClick}>Click me</button>;
};

export default MyButton;
