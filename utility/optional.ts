const optional = 1;
export default optional;

interface User {
  id: number;
  name?: string;
  age?: number;
  gender: "m" | "f";
}

const userObj: User = {
  id: 1,
  //   name: "daniel",
  gender: "m",
};
console.log(userObj);
