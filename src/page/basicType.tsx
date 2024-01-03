// 타입스크립트의 기본 타입

// 01. number
// 돼지 저금통
const piggyBank = (Flamingo: number, General: number) => {
  return Flamingo * 500 + General * 100;
};

piggyBank(5, 10);

//02. string
// 선물 바구니
const presentBasket = (fruit: string, snack: string) => {
  return "선물로" + fruit + "와" + snack + "을 받았다!";
};

presentBasket("사과", "다이제");

// 03. boolean
// 설문조사
const survey = (maritalStatus: boolean, university: boolean) => {
  const marry = maritalStatus ? "기혼" : "미혼";
  const univ = university ? "대졸" : "고졸";

  return `저는 ${marry}에 ${univ}입니다`;
};
survey(false, true);

//04. any   -- 모든 타입 할당 가능
let notSure: any = 19950308; //number
notSure = "이건 쓰는 걸 권장하지 않음"; //string
notSure = false; //boolean

// 05.object
// 신분증
const idCard = (obj: { name: string; birth: number }) => {
  let answer: string = "";
  for (let i = 0; i < Object.keys(obj).length; i++) {
    answer += `${Object.keys(obj)[i]} : ${Object.values(obj)[i].toString()}`; // name : Noel birth : 990308
  }
  return answer;
};
idCard({ name: "Noel", birth: 990308 });

// key : value 인자 갯수만큼 반복해서 보여주기 object함수를 사용해서 name : Noel , birth : 990308
//  Object.keys(obj) = ['name', 'birth']

// 06. array

const array: number[] = [1, 2, 4, 7, 11, 16, 22, 29, 37];
console.log(`현재배열 : ${array}`);
