// enum 상수 집합 나타냄
// 변수들을 하나의 그룹으로 묶고 싶을 때 사용
// 특정 값의 집합을 정의하며 이는 코드를 더 가독성 있고 유지보수 하기 쉽게 만듬.

enum Sports {
  football, // index 0
  basketball, // index 1
  baseball, // index 2
}

//const enum

const sports = {
  football: 0, // index 0
  basketball: 1, // index 1
  baseball: 2, // index 2
};

// enum
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

let selectedColor: Color = Color.Red;
console.log(selectedColor); // Output: 'RED'

enum Status {
  Ready,
  Waiting,
}

// 다른 열거형 유형의 열거형 값은 호환되지 않는 것으로 간주됩니다.

// let status = Status.Ready;
// status = Color.Green; // Error❌

enum Level {
  NOVICE,
  INTERMEDIATE,
  ADVANCED,
  MASTER,
}

enum Permissions {
  READ = "읽기",
  WRITE = "쓰기",
  DELETE = "삭제",
}

type TUserPermission = keyof typeof Permissions;
//enum의 키를뽑아서 타입을 만드는 문법(참고)

//사실 객체임
const PermissionKey: string[] = Object.keys(Permissions);
const PermissionValues: string[] = Object.values(Permissions);
console.log(PermissionKey); //[ 'READ', 'WRITE', 'DELETE' ]
console.log(PermissionValues); //[ '읽기', '쓰기', '삭제' ]

let kimi: TUserPermission[] = ["READ", "WRITE"];
let daniel: TUserPermission[] = ["READ", "WRITE", "DELETE"];
let rin: TUserPermission[] = [];

function getPermission(user: TUserPermission[]) {
  user.forEach((e) => {
    console.log(`${Permissions[e]} 권한이 있습니다.`);
  });
}

getPermission(kimi);
getPermission(daniel);
getPermission(rin);

const enumm = 1;
export default enumm;

//const enum을 사용하는 것이 좋다. (enum의 값을 사용할 게 아니라면?)
// 이놈;;;;;;;
