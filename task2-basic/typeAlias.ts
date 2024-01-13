type Pet = {
    name: string;
    category: string;
    age: number;
    // 중첩 타입
    address: Address;
    snack: Snack[];
};

// 🔴TASK5 - 3. 생각해보기 과제
//type Alias! vs interface
//1. interface 중복 선언이 가능하다. (자동 병합 됨.)
//2. typeAlias는 더 다양한 형태의 타입을 정의함 vs interface는 주로 객체나 클래스를 정의할 때 사용됨
//3. 확장할 때 interface는 extends를 사용, type alias는 &(인터섹션)을 사용.
//4. 복잡한 타입을 정의할 때는 type Alias가 더 유용
//5. class의 타입을 정의할때는 interface를 주로 사용(implements)
//6. unknown타입을 다룰 때 typeof를 사용해서 타입을 확인: typeAlias에서만 가능

/**
 * 결론적으로 타입은 인터페이스의 거의 모든 기능을 커버한다.
 * 그러나 인터페이스는 항상 확장 가능하고, 타입은 그렇지 않다.
 * 그러므로 경우에 따라서 선택하여 사용해야 한다.
 * 가급적 프로젝트내에서 일관된 기준에 따라 선택해야 한다. (보통은 타입 엘리어스)
 */

type TPerson = {
    name: string;
};

interface Student extends TPerson {
    age: number;
}

//공통점
//1. 중첩 타입 선언 가능
// ts type 대문자로 설정하는 것이 관례 (다른 변수와 헷갈리니까)

type Address = {
    city: string;
    detail: string;
    zipCode: number;
};

type Snack = {
    name: string;
    price: number;
};

// type alias 내가 정의하는 타입 변수
// 첫 글자는 대문자로 쓰는게 법임.
type Movie = {
    title: string;
    rating: number;
};
const printMovie = (mv: Movie) => {
    console.log('제목 :' + mv.title);
    console.log(mv.rating - 1);
};
printMovie({ title: '어벤져스', rating: 5 });
