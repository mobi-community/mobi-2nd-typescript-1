// union
// OR연산자 같은 느낌.
let unionValue: string | number;
unionValue = '문자열';
unionValue = 10;
let unionArr: (number | boolean)[] = [1, 2, 3, true, false];
let unionArray: Array<number | string> = [1, 2, 3, 'true', 'false'];

function getAge(age: number | string) {
    if (typeof age == 'number') {
        age.toFixed(); //number의 메서드
    } else {
        age.toUpperCase(); //string의 메서드
    }
}

type TDesigner = {
    name: string;
    designSkill: string;
    type: 'designer';
};

type TDeveloper = {
    name: string;
    programmingLanguage: string;
    type: 'developer';
};

// interface UIDesigner extends Designer {
//   age: number;
// }

// typeof는 원시값만 검사 가능하다.
function introduce(someone: TDesigner | TDeveloper) {
    if ('designSkill' in someone) {
        // someone은 TDesigner 라는 뜻
        console.log(someone.type)
    }else{
      console.log(someone.type)
    }
} 

function introduce2(someone: TDesigner | TDeveloper) {
  if (someone.type === "designer") {
      // someone은 TDesigner 라는 뜻
      console.log(someone.type)
  }else{
    console.log(someone.type)
  }
} 

