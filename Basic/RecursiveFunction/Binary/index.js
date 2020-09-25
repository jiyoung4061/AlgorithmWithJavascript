//11 -> 2진수로

let res = "";
let x = 11;

while (true) {
  if (x % 2 == 0) {
    res += "0"; //+=을 사용하게되면 res뒤에 붙어서 결과값이 뒤집어져서 나옴
    //=> 따라서 res = '0'+ res를 사용하거나
    // M2. 뒤집어주는 함수 사용
  } else {
    res += "1";
  }

  x = Math.floor(x / 2);
  /*
            Math.ceil(): 소수점 올림
            Math.floor(): 소수점 버림
            Math.round(): 소수점 반올림
            */
  if (x == 1 || x == 0) {
    res += String(x);
    break;
  }
}

console.log(res.split("").reverse().join(""));
//split() : string을 배열로 만들어줌
//reverse() : 뒤집어줌
//join() : 배열을 문자열로

//재귀함수 사용하기
function makeBinary(number) {
  if (number == 1 || number == 0) {
    return String(number);
  }

  return makeBinary(Math.floor(number / 2)) + String(number % 2); //순서 중요함!
}

console.log(makeBinary(11));
