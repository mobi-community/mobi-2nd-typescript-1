## TypeScript

<img src="https://github.com/55555-Jyeon/Boilerplate/assets/134191817/8d9c85da-6218-4fdc-98bc-c31be4132161" />

TS keyword <br />
**JavaScript and More** + **A Result yo Can Trust** + **Safety at Scale**

<br />

## | What is TypeScript ?

### 타입이 있는 JavaScript의 상위 집합

<br />

#### Q. 타입스크립트는 자바스크립트의 어떠한 점을 극복하기 위해 개발 되었을까?

<br />

- JavaScript의 문제는 무엇일까?

  동일 연산자는 (==) 인수를 강제로 변환하여(coerces), 예기치 않은 동작을 유발 <br />
  존재하지 않는 프로퍼티의 접근을 허용 <br />
  프로젝트에서는 규모가 커질수록 코드가 복잡해지고, 디버그와 테스트 공수가 증가 <br />

    <br />

- TypeScript가 갖는 특징은 무엇일까?  
  <br />

  **정적 타입 지원** <br />

  자바스크립트의 동적 타이핑은 런타임에 타입 오류가 발생할 가능성을 높입니다. <br />
  타입스크립트는 정적 타이핑을 도입하여 개발자가 코드를 작성하면서 타입 오류를 사전에 발견(컴파일 시점에 파악)하고 예방할 수 있도록 합니다.

    <br />

  Java Script

  ```javascript
  function add(x, y) {
    return x + y;
  }
  ```

  Type Script

  ```javascript
  function add(x: number, y: number): number {
    return x + y;
  }
  ```

    <br />

  **코드 가독성 향상** <br />

  정적 타이핑의 도입으로 강력한 타입 추론을 제공함으로써 코드의 가독성 향상 ➡️ 코드 이해에 용이

    <br />

  **타입 체크를 위한 인터페이스 (interface)** <br />

  인터페이스를 통해 객체의 타입을 명확하게 정의할 수 있으며 주로 변수, 함수, 클래스에 사용 가능하다. <br />
  인터페이스는 여러가지 타입을 갖는 프로퍼티로 이루어진 새로운 타입을 정의하는 것과 유사하다. <br />
  인터페이스에 선언된 프로퍼티 또는 메소드의 구현을 강제해 일관성을 유지한다. <br />
  ⚠️ 타입 체크에서 중요한 것은 값을 실제로 가지고 있는 것이다. ➡️ 덕 타이핑 <br />
  <br />

  Java Script

  ```javascript
  function printUserInfo(user) {
    console.log(`name: ${user.name}, age: ${user.age}`);
  }
  ```

  Type Script

  ```javascript
  interface User {
    name: string;
    age: number;
  }

  function printUserInfo(user: User): void {
    console.log(`name: ${user.name}, age: ${user.age}`);
  }
  ```

  'void'는 타입스크립트에서 사용되는 타입 중 하나로 '비어있음', '아무것도 반환하지 않음'을 의미한다. <br />
  위 코드에서 printUserInfo 함수는 어떤 값도 반환하지 않기 때문에 반환 타입으로 'void'를 사용하였음

    <br />

  **클래스 및 모듈 시스템의 강화** <br />

  자바스크립트는 프로토타입 기반의 객체 지향 언어로서 클래스 및 모듈화 부분이 명확 X <br />
  타입스크립트는 ES6 및 그 이후의 표준을 기반으로 하여 클래스 및 모듈 시스템을 명시적으로 지원하고, 코드의 구조를 개선합니다.

    <br />

  **도구 및 개발자 경험 향상** <br />

  타입스크립트 컴파일러는 자동 완성, 타입 체크 등의 기능을 제공 ➡️ 개발 생산성 향상 및 디버깅 용이

    <br />

  **대규모 프로젝트 지원** <br />

  타입스크립트는 대규모 프로젝트에서 높은 수준의 안정성과 유지보수성을 제공하기 위해 설계 <br />
  타입 시스템과 모듈 시스템을 활용하여 복잡한 코드베이스를 효과적으로 관리할 수 있도록 지원

     <br />

  **자바스크립트의 최신 기능 지원** <br />

  타입스크립트는 ECMAScript의 최신 버전을 지원하여 개발자들이 최신 자바스크립트 기능을 사용할 수 있도록 도와줌.
  이를 통해 개발자들이 언어의 발전에 따라 새로운 기능을 적극적으로 적용할 수 있게 함<br />

    <br />

#### Q. 어떻게 활용해야 타입스크립트의 개발 의도에 맞추어 사용할 수 있을까?

<br />

- TypeScript의 개발 의도는 무엇일까?

  타입스크립트는 자바스크립트의 단점을 극복하고, 대규모 및 복잡한 프로젝트에서 안정성과 생산성을 향상시키기 위해 만들어진 언어

  <br />

- 어떻게 활용하면 좋을까?

<br />

---
