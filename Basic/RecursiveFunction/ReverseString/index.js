//문자열 뒤집기
let str = "jiyoung";
let result = "";

while (true) {
  if (str.length == 1) {
    result += str;
    break;
  }
  let arrayOfStr = str.split("");
  // console.log(arrayOfStr);
  result += String(arrayOfStr.pop()); //pop : 뒤에걸 하나 뽑음 <-> slice : 앞에서 하나 뽑음
  str = arrayOfStr.join("");
  // console.log(str);
}

// console.log(result);

function makeStringReversed(str) {
  if (str.length == 1) {
    return str;
  }
  return str[str.length - 1] + makeStringReversed(str.slice(0, str.length - 1)); // 역순(순서 바뀌면 정순)
}

console.log(makeStringReversed("jiyoung"));
