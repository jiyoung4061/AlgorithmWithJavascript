let res = "";
let number = "123123";
while (true) {
  if (number.length == 1) {
    res += parseInt(number, 10);
    break;
  }

  let ArrayOfNumber = number.split("");
  console.log(ArrayOfNumber);
  res += parseInt(ArrayOfNumber.pop(), 10);
  number = ArrayOfNumber.join("");
  console.log(number);
}

console.log(res);

function SumOfNumber(num) {
  if (num.length == 1) {
    return parseInt(num, 10);
  }
  return (
    parseInt(num[num.length - 1], 10) +
    SumOfNumber(num.slice(0, num.length - 1))
  ); //더하는거라서 순서 상관X
}

console.log(SumOfNumber("123123"));
