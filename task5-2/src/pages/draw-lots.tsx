import { FC, MouseEvent, useState } from "react";
import styled from "styled-components";
import NAButton from "../components/button";
import NAInput from "../components/input";

const DrawLots: FC = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const drawLotsItem: string[] = [
    "아이폰 15",
    "아이팟",
    "배민5만원",
    "비트코인 10주",
    "꽝!",
    "백화점 상품권 20만원",
    "늙지",
    "민지",
    "또 꽝!",
    "육개장 12개월분",
  ];

  const onPickMeUp = (e: MouseEvent<HTMLElement>) => {
    const randomIdx = Math.floor(Math.random() * drawLotsItem.length);
    const randomItem = drawLotsItem[randomIdx];
    alert(name + "님께서 " + randomItem + "에 당첨되었습니다 !!! ");
    setText("");
  };

  return (
    <Wrapper>
      <p>이름을 입력하고 랜덤 선물을 뽑아보세요!</p>
      <Container>
        <NAInput
          setName={setName}
          placeholder={"이름을 입력하세요"}
          text={text}
          setText={setText}
        />
        <NAButton onClick={onPickMeUp}>당첨보기</NAButton>
      </Container>
    </Wrapper>
  );
};

export default DrawLots;

// 이름 입력하는거 인풋 하나 있고 뽑기 버튼 하나 있고
// 이름 입력하고 뽑기 누르면 ~~님이 ~~를 뽑았습니다.
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  & > input {
    width: 60%;
  }

  & > button {
    width: 40%;
  }
`;
