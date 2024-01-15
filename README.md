### TypeScript CheckList

타입스크립트 첫 주차를 진행하면서 알게된 내용 체크해보기
최대한 나만의 표현으로 서술해보기

<br />

- Amy

```
1. 나는 타입스크립트가 무엇인지 남에게 설명할 수 있다

   🤔 >>    타입스크립트는 자바스크립트의 단점을 보완해줄 수 있는 슈퍼셋!
            정적인 언어에 해당하는 유연한 자바스크립트를 보다 안전하게 사용할 수 있습니다.

2. 나는 타입스크립트에 어떠한 타입들이 있는지 알고 사용할 수 있다

   😣 >>    대략 알겠으나.. 제대로 사용하기 위해선 더 많은 공부가 필요합니다.

3. 추론이 가능한 데이터에 타입을 주어야할 필요가 있을까?

   🤔 >>    추론이 가능한 경우의 타입 부여는 상황에 따라 선택하는게 좋을 것 같아요.
            아직은 타입스크립트에 미숙한 시기이기 때문에 현시점 기준으로는 주는 것이 좋다고 생각됩니다.
            좀 더 익숙해진다면 혼자할 때는 가독성 때문에 사용을 지양할 것 같고,
            협업 중이라면 동료 개발자와 논의 후 결정할 것 같습니다.

4. 속성의 값이 자동 완성 되지않는 객체를 발견하였다. 이는 타입 세이프티할까?

   😏 >>    자동 완성이 되지 않는다? 이건 타입 언세이프티... 아닌가요?

5. 타입스크립트를 사용하면 개발 문서화를 어느 정도는 대체할 수 있을까? 이유와 방법은?

   😃 >>    JS Doc의 역할을 어느 정도 하고 있기 때문에 상당 부분 대체 가능하다고 생각합니다.

6. 타입스크립트의 단점은 무엇이고 이를 극복하고 해소하려먼 어떤 시도를 할 수 있을까요?

   😔 >>    알아본 단점들 중 체감되는 타입스크립트의 단점은 러닝커브인 것 같습니다.
            아무래도 영어를 하기 위해 단어와 문법을 외우듯이... 타입을 잘 사용하기 위해선
            제대로 알고 있어야 하니까 열심히 외워야 될 것 같습니다.

7. 나는 리엑트로 타입스크리트 프로젝트를 생성하고 적용할 수 있다

   🥺 >>    아직은 ts-form 폴더에 만든 것처럼 뚱땅뚱땅 형식으로 밖에 못 만들어요..
            타입스크립트의 원활한 적용을 위해... 암기 화이팅

```

<br />

- Jack

```
1. 나는 타입스크립트가 무엇인지 남에게 설명할 수 있다 👌

타입스크립트는 자바스크립트의 단점을 극복하고, 대규모 및 복잡한 프로젝트에서 안정성과 생산성을 향상시키기 위해 만들어진 언어

2. 나는 타입스크립트에 어떠한 타입들이 있는지 알고 사용할 수 있다 😵‍💫
아직 모든 타입들을 자유롭게 사용 가능하진 않습니다. 좀 더 숙달이 필요할 듯 합니다.

3. 추론이 가능한 데이터에 타입을 주어야할 필요가 있을까? 🤔

아직까지는 공부가 더 필요하지만 일단은 추론이 가능한 데이터에 관련해서는 타입을 줄 필요가 없다고 생각합니다.

4. 속성의 값이 자동 완성 되지않는 객체를 발견하였다. 이는 타입 세이프티할까? 😮

직접적으로 타입 세이프티와 관련이 있는 것은 아니나 타입의 정의가 명확하지 않거나 개발 환경이 타입 정보를 정확하게 해석을 못하고 있을 것 같습니다.

5. 타입스크립트를 사용하면 개발 문서화를 어느 정도는 대체할 수 있을까? 이유와 방법은? 😯

타입스크립트는 코드 내에서 사용되는 타입, 인터페이스, 클래스 등의 해당 코드의 사용 방법과 구조를 이해하는데 도움을 줍니다. 그러므로 자체적인 문서화 역할을 가지고 있다고 생각합니다.
타입스크립트는 타입을 정의해서 확인 가능하고, 자바스크립트의 JS DOC와 같은 TS DOC를 가지고 있습니다.

6. 타입스크립트의 단점은 무엇이고 이를 극복하고 해소하려먼 어떤 시도를 할 수 있을까요? ⁉️ 😕

개발 시간 증가,라이브러리 호환성 문제,타입 오류의 발생 가능성 등 다양한 단점이 있지만 저에게 당장 가장 큰 단점은 긴 러닝커브라고 생각합니다. 극복하고 해소하는 방법은.. 아직은 더 많은 공부가 필요하다고 생각합니다.

7. 나는 리엑트로 타입스크리트 프로젝트를 생성하고 적용할 수 있다. 😕  아직은 오래 걸리고 많이 버벅이긴 하지만 화이팅!!


```

<br />

- Levi

```
1. 나는 타입스크립트가 무엇인지 남에게 설명할 수 있다
   자바스크립트의 확장된 언어로 자바스크립트에 타입을 부여한 언어.
   동적 타입 언어인 자바스크립트와 다르게 개발자가 코드를 작성할 때
   변수 및 함수의 타입을 지정할 수 있어 코드의 가독성 및 유지보수성을 향상시킬 수 있습니다.

2. 나는 타입스크립트에 어떠한 타입들이 있는지 알고 사용할 수 있다
타입스크립트에는 기본 타입과 유틸리티 타입이 있습니다. 1주차 진행을 하면서 많은 타입을
   써봤지만 유틸리티 타입에 대해서는 아직 공부가 많이 필요할거 같습니다.

3. 추론이 가능한 데이터에 타입을 주어야할 필요가 있을까?
   상황에 따라 다르겠지만 코드의 가독성 및 유지보수를 위해서 사용해야 한다고 생각합니다.

4. 속성의 값이 자동 완성 되지않는 객체를 발견하였다. 이는 타입 세이프티할까?
   타입 세이프티 하지 않습니다. 속성 값이 자동완성 되지 않는 객체는 개발자가 실수로
   올바르지 않은 속성을 사용했을때 런타임 에러를 발생시킬 수 있다고 생각합니다.

5. 타입스크립트를 사용하면 개발 문서화를 어느 정도는 대체할 수 있을까? 이유와 방법은?
   타입스크립트로 작성한 코드에 주석을 추가하거나타입 정보를 명시하면서 코드 자체가
   문서화 역할을 할 수 있다고 생각합니다.

6. 타입스크립트의 단점은 무엇이고 이를 극복하고 해소하려먼 어떤 시도를 할 수 있을까요?
   타입스크립트는 자바스크립트를 기반으로 하면서 추가적인 정적 타입 시스템을 가지고 있기
   때문에 러닝커브가 존재한다고 생각합니다.

7. 나는 리엑트로 타입스크리트 프로젝트를 생성하고 적용할 수 있다
   이 부분은 아직 많이 부족한 거 같습니다. 앞으로 패스를 진행하고 공부를 하면서
   보완해야 될 거 같습니다.

```
