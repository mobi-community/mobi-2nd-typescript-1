import { useState } from "react";

const MouseEventComponent = () => {
  const [input, setInput] = useState({
    text: "",
    option: "",
  });

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked!", event);
    alert("버튼 눌림ㅋ");
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("폼 제출 성공ㅋㅋ");
  };

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
          <option value={"남자"}>남자</option>
          <option value={"여자"}>여자</option>
          <option value={"비밀"}>비밀</option>
        </select>
        <hr />
        <button>form submit</button>
      </form>

      <button onClick={onClick}>onClickBtn</button>
    </>
  );
};

export default MouseEventComponent;
