// 피보나치 수열(앞에 두 수의 합을 다음 수로 결정함)
// ex. 1 1 2 3 5 8 13 ...

// M1. for문을 사용
let a = 1;
let b = 1;

for (let i = 0; i < 5; i++) {
  let c = a + b;
  a = b;
  b = c;
}
//   console.log(b);

// M2. 재귀함수사용
function fibonacci(number) {
  if (number == 1 || number == 2) {
    return 1;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(7));
