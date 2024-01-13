// 1. interface 중복 선언이 가능하다. (자동 병합 됨.)

interface IRin {
    name: string;
    hobby: string;
    height: number;
    sleep: () => void;
}

interface IRin {
    age: number;
}

const rin: IRin = {
    name: 'rin',
    hobby: 'drawing',
    height: 167,
    age: 20,
    sleep: () => {
        console.log('sleep');
    },
};

// 2. typeAlias는 원시값, 객체 다 타입 정의가능 vs interface는 주로 객체를 정의할 때 사용됨

type Age = number; //typeAlias로 원시값 타입 가능
interface IAge {} //무조건 객체타입

// 3. 확장할 때 interface는 extends를 사용, type alias는 &(인터섹션)을 사용

// interface는 확장 할 때 extends를 사용
interface Member {
    name: string[];
}
interface MemberCount extends Member {
    count: number
}

// 확장 typeAlias
// type Owner = OwnerTypeAlias & { name: string };

// 4. type Alias e다양한 형태의 타입을 정의함 (유니온 타입, 조건부 타입) 타입을 지지고 볶고 할 때는 type Alias가 더 유용.

// 5. class의 타입을 정의할때는 interface를 주로 사용(implements)

// 6. unknown타입을 다룰 때 typeof를 사용해서 타입을 확인: typeAlias에서만 가능

// 7. interface는 객체 타입을 설정할 때 사용할 수 있으며, 원시 자료형에는 사용할 수 없다.

//타입을 사용해야 하는 경우
//1. 원시 타입을 정의할 경우
//2. 튜플 타입을 정의할 경우
//3. 함수 타입을 정의할 경우
//4. 유니온 타입을 정의할 경우
//5. 매핑된 타입을 저의할 경우
