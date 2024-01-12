/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @description Add two numbers.
 */

function sum(a, b) {
  return a + b;
}

/**
 * @param {string} person 'daniel','kimi','hyerin' 중 하나의 값이여야 합니다.
 * @returns {string} hobby배열에서 해당하는 취미의 인덱스를 반환합니다.
 * @description 해당 사람에 맞는 취미를 반환합니다.
 */

const hobby = ["soccer", "yoga", "drawing"];

function getHobbyIndex(person) {
  if (person === "daniel") {
    return 0;
  } else if (person === "kimi") {
    return 1;
  } else {
    return 2;
  }
}

console.log(getHobbyIndex(rin)); //2

const docsJS = 1;
export default docsJS;
