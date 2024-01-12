export type Pet = {
    name: string;
    category: string;
    age: number;
    // 타입안에 타입만들기
    address: Address;
    snack: Snack[];
};

//type Alias
// ts type 대문자로 설정하는 것이 관례 (다른 변수와 헷갈리니까)

export type Address = {
    city: string;
    detail: string;
    zipCode: number;
};

export type Snack = {
    name: string;
    price: number;
};