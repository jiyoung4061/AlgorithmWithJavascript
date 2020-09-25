let n = 100;

console.log((n * (n + 1)) / 2); // 복잡도 : O(1)

let s = 0;
for (let i = 1; i < n + 1; i++) {
  s += i;
}
console.log(s); // 복잡도 : O(n)

let t = 1;
for (let i = 1; i < 6; i++) {
  t *= i;
}
console.log(t);

function f(n) {
  if (n <= 1) {
    //종료조건
    return 1;
  } else {
    return n + f(n - 1);
  }
}

console.log(f(100));

function s(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * s(n - 1);
  }
}

console.log(s(5));
