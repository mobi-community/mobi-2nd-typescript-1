// type alias와 interface의 차이를 이해해보기

// - 각각 type alias와 interface로 타입을 정의하고 주석을 통해 차이점을 작성
// - 비교를 통해 무엇을 사용하는게 좋을지 자기 의견을 자유롭게 써볼 것

// type 유니온타입으로도 줄 수 있다 ,자유롭게 사용할 수 있는 느낌
// interface는 객체안에 한번 담아서 줘야한다..컴파일 시간이 더 증가한다? 옛날말이다 요즘은 별 차이가 없다.

// 선언할 때에 차이가 있다..
{
  type CustomString = string;
  const str: CustomString = "";

  // ❌
  interface CustomStringByInterface {
    age: string;
  }
  //타입은 원시타입을 정의할 수 있지만 인터페이스는 불가능하다.
  interface CustomStringByInterface {
    name: string;
  }
  //타입은 선언을 합치지 못하고
  //interface는 같은 이름의 여러 선언을 합칠 수 있다.
}

{
  type Fruit = "apple" | "lemon";
  type Vegetable = "potato" | "tomato";

  type Food = Fruit | Vegetable;
  // 'apple' | 'lemon' | 'potato' | 'tomato'
  const apple: Food = "apple";
}

interface Fruit = string | number;

type collect = string | number;

//인터페이스는 유니온 타입을 사용할 수 없지만 타입은 사용할 수 있다.

type Animals = [name: string, age: number];
const cat: Animals = ["", 1];

// 인터페이스는 튜플 타입을 사용하 수 없지만 타입은 사용이 가능하다.
// 튜플 : 튜플은 길이와 각 요소마다의 타입이 고정된 배열이다

{
  interface Parent {
    printName: (name: number) => void;
  }

  interface Child extends Parent {
    printName: (name: string | number) => void;
  }
}

{
  type Parent = {
    printName: (name: number) => void;
  };

  type Child = Parent & {
    // 여기서 두 printName은 intersection 된다.
    // 이것은 `(name: number | string) => void`과 같다.
    printName: (name: string) => void;
  };
} // 인터페이스는 extends, 타입은 intersection을 사용한다.
// Intersection 타입은 여러 타입의 결합으로, 모든 타입의 속성을 포함하는 새로운 타입을 만든다.
// type ABIntersection = A & B;
//interface ABIntersection extends A, B {}

type Vegetable = "potato" | "tomato";

{
  type VegetableOption = {
    [Property in Vegetable]: boolean;
  };

  const option: VegetableOption = {
    potato: true,
    tomato: false,
  };

  // "potato" | "tomato"
  type VegetableAlias = keyof VegetableOption;
}

{
    interface VegetableOption {
      // ❌ 매핑된 타입은 프로퍼티나 메서드로 선언할 수 없다.
      [Property in Vegetable]: boolean;
    }
  }

{
    const potato = { name: 'potato', weight: 1 };// name이 string이고 weight number
  
    // type Vegetable = {
    // name: string;
    // weight: number;
    // }
    type Vegetable = typeof potato;
  
    const tomato: Vegetable = {
      name: 'tomato',
      weight: 2,
    };
}//unknown 타입을 다룰 때, typeof를 사용하여 타입을 확인할 수 있다.  타입으로만 가능하고, 인터페이스는 불가하다.
