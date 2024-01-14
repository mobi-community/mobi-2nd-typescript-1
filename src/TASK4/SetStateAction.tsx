import { Dispatch, SetStateAction, useEffect } from "react";
import { useState } from "react";

export const Parent = () => {
  const [animalName, setAnimalName] = useState("dog"); // 초기값을 넣으니까 animalName은 타입이 유추할 수 있어

  return (
    <>
      <div>animalName:{animalName}</div>
      {animalName === `pig` && <div>子コンポーネントで`pig`を設定しました</div>}
      <Child setAnimalName={setAnimalName} />
    </>
  );
}; // 정수현 1.15 여기서 잠들다.
// 이제 일어나다 ㅠㅠ

type Props = {
  setAnimalName: Dispatch<SetStateAction<string>>; // 얘는 타입을 유추하기 위해서 이렇게 씀. 이렇게 쓰지않고 인스턴스로 보내면 에러뜸
};

export const Child = ({ setAnimalName }: Props) => {
  useEffect(() => {
    const newAnimalName = `pig`;
    setAnimalName((name: string) => name + newAnimalName);
  }, []);

  return <div>子コンポーネント</div>;
};
/*
=> 타입추론을 위해 TypeScript에게 알려주는 역할

SetStateAction을 사용하는 이유는 TypeScript에서 상태 업데이트를 더 명시적이고 정확하게 타입화하기 위해서입니다.
  => 유지보수와, 런타임 에러방지를 위해서
*/
