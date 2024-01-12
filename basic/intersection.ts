interface Person {
    name: string;
    age: number;
}

interface Developer {
    name: string;
    skill: number;
}
//나는 남자이거나 여자이다. => 합집합 -> 타입은 반대다 => 교집합
//ts의 속성이 많다 => 해당하는 객체가 줄어든다.  ->  그래서 합집합

// Capt 타입은 person과 developer의 속성을 모두 포함한 새로운 타입이 된다
type CaptUnion = Person | Developer; //공통적인 속성 밖에 없음 
type CaptIntersection = Person & Developer; //더 까다롭다...이게 되기가 더 까다롭다..type이 많다..

/*
    {
        name: string;
        age: number;
        skill: string;
    }
*/


// 제네릭
// Function that takes two objects and returns their intersection
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const mergedObject = mergeObjects({ name: 'John' }, { age: 30 });
// mergedObject has the type { name: string, age: number }
