### **TASK.5 React의 Typescript**

1. 타입을 주어야하는 경우와 주지 않아도 되는 경우를 구분하여 타입을 정의하세요

````
let seongyong = {
age: 20,
height: 190,
}

function log(obj){
console.log(obj.height)
return obj
}

const a = log(seongyong)
console.log(a.age)
​```

2. react-typescript project 만들어보기
````

CRA or Vite를 사용하여 타입스크립트 기본 프로젝트를 생성하하여 init하세요

- npx create-react-app [프로젝트 명] --template typescript
- npm create vite@latest [프로젝트 명] --template react-ts

```

3. 생각 해보기
```

type alias와 interface의 차이를 이해해보기

- 각각 type alias와 interface로 타입을 정의하고 주석을 통해 차이점을 작성
- 비교를 통해 무엇을 사용하는게 좋을지 자기 의견을 자유롭게 써볼 것

```


4. react-typescript 적용하기
```

interfact나 type-alias 중 아무거나 사용해도 괜찮습니다.
그러나 React.FC를 반드시 활용할 것, 모든 변수와 props는 자동완성 되어야할 것

아래의 typescript-project에 javascript로 작성된 react function에
필요에 따라 typescript를 부여해보세요

npm install or yarn 이후 실행 해야합니다.

```

```
