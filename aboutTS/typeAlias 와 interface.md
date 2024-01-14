### type alias와 interface의 차이를 이해해보기

- 각각 type alias와 interface로 타입을 정의하고 주석을 통해 차이점을 작성
- 비교를 통해 무엇을 사용하는게 좋을지 자기 의견을 자유롭게 써볼 것

<br />

---

<br />

#### type alias

새로운 타입을 정의 <br />
원시값, 유니온 타입, 튜플 등도 타입으로 지정 가능 <br />
extends 또는 implements 불가능 <br />
유니온 또는 튜플을 사용 시 유리 <br />

```typescript
type Movvi = {
  fullName: string;
  nickname: string;
  age: number;
  gender: string;
  isDirector: boolean;
};

let Peanut: Movvi = {
  fullName: "김성용",
  nickname: "Peter",
  age: 20,
  gender: "male",
  isDirector: true,
};
```

<br />

#### interface

extends 또는 implements 가능 <br />
상속을 통해 확장해야 하는 경우 유리 <br />

```typescript
interface userInfo {
  name: string;
  age: number;
}

interface extendsUserInfo extends userInfo {
  gender: string;
}

interface signInData {
    email : string,
    password : string,
}

interface signUpData extends signInData {
    username : string,
    phone : number,
    location : string,
}

interface todoListData {
    title : string,
    content : string,
    date : number,
    // 만약에 작성자 정보를 가져오고 싶으면..?
    user :
}
interface todoWriter extends userInfo {}

interface todoList extends todoListData {
    tagnumber: number,
    userpassword: string,
    classification : string,
}
```

<br />

---
