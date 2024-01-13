import React, { useState } from "react";
import "./App.css";
import { Pet } from "./model/pet";
import Store from "./Store";
import { MainPage } from "./types/ReactNode";
import { ParentComponent2 } from "./types/PropsWithRef";
import { RefType1 } from "./types/RefObject";

// 이 객체에 타입을 주는 것!
// typealias
let data: Pet = {
  name: "나비",
  category: "RussianBlue",
  age: 4,
  address: {
    city: "Seoul",
    detail: "somewhere",
    zipCode: 10248,
  },
  snack: [{ name: "츄르", price: 10000 }],
};

const App: React.FC = () => {
  // 제네릭: useState함수에 뭘 넣을지 어떻게알아?
  // useState를 부르는 순간 타입을 지정하고 싶을때 선언
  // 앞으로 useState는 Pet타입으로 쓰이게됩니다.
  const [myPet, setMyPet] = useState<Pet>(data);

  return (
    <div className="App">
      {/* props의 타입을 지정해줘야해요 */}
      {/* <Store data={myPet} /> */}
      {/* <MainPage /> */}
      {/* <ParentComponent2 /> */}
      <RefType1 />
    </div>
  );
};

export default App;
