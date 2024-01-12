// unknown 알 수 없는 타입
let unknownType: unknown;
unknownType = false;
unknownType = '1';
unknownType = 1;
//unknown은 모든 타입의 값을 할당할수 있다

//반대는 x
let unknownX: unknown;
//let nickName: string = unknownX; ❌
//'unknown' 형식은 'string' 형식에 할당할 수 없습니다.

/*
    unknown과 any의 차이점
    any = 모든 타입 허용 느낌
    unknown = 어떤 타입인지 모른다 느낌

    unknown이 any보다 타입이 안정적인 이유
    -> any는 모든 타입과 연산을 허용하지만, unknown은 타입이 뭔지 모르기 때문에 아무런 연산도 수행하지 못함.
    (unknown으로 연산을 수행하려면 명시적으로 타입을 확인해야 함.)
*/

//any타입과의 차이점
//any는 타입을 지정하지 않은거나 마찬가지
//unknown은 ts 컴파일러가 개발자한테

// 타입 확인 후 연산 수행 (typeof)
//unknown 타입일 때는 연산이나 메서드를 사용할 수 없다.
if (typeof unknownType === 'number') {
    console.log(unknownType + 9);
}

function assertString(input: unknown): string {
    return (input as string).toUpperCase();
}

const result = assertString('Hello'); // Valid

//ts 컴파일러 왈 : 변수가 unknown 타입이라서 잘 모르겠으니까 너가 타입을 정확히 지정해줘!

