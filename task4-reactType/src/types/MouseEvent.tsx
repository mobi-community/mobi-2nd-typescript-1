import { useState } from "react";
import React from "react";

const MouseEventComponent = () => {
  const [input, setInput] = useState({
    text: "",
    option: "",
  });

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked!", event);
    alert("버튼 눌림ㅋ");
  };
  // React.MouseEvent : 이벤트의 속성 타입이며, 제네릭에는 해당 이벤트가 발생한 태그(정확히 말하면 HTML 노드)의 타입을 준다.
  //옆에 태그 타입을 넣는 이유는 ? 태그에 해당하는 이벤트의 속성, 메서드를 사용하기 위해서, 관례니까.

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // React.ChangeEvent : 주로 폼 요소의 변화에 대한 이벤트를 처리한다. (ex: input, select, textarea)
  // e.target.value를 통해 입력한 요소의 값에 접근 가능.

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("폼 제출 성공ㅋㅋ");
  };

  enum Gender {
    male = "남자", //index0
    female = "여자", //1
    secret = "비밀", //2
  }

  const genderArr = Object.entries(Gender);
  console.log(genderArr[0]);
  //Object. => key,value 배열로 바꿔주는 메서드
  //Object.keys()
  //Object.values()
  //Object.entries() => key, value 모두 가져올 수 있는 메서드 - 중첩배열됨
  // zzzz 진짜 쉽넼ㅋ 역시 취미 타입스크립트 이대경
  return (
    <>
      <form onSubmit={onSubmit} id="myForm">
        <input
          onChange={onChange}
          type="text"
          name="name"
          placeholder="닉네임을 입력해 주세요."
        />
        <hr />
        <select onChange={onChange}>
          {genderArr.map((gender, index) => {
            const [key, value] = gender;
            return (
              <option key={index} value={key}>
                {value}
              </option>
            );
          })}
        </select>
        <hr />
        <button>form submit</button>
      </form>
      <button onClick={onClick}>onClickBtn</button>
    </>
  );
};

export default MouseEventComponent;
