//최댓값, 최솟값
let a = [10, 20, 30, 1, 2, 3, 5, 9, 11];

//sort를 사용해 최솟값 최댓값 구하기 => X(틀린 방법)
a.sort(); //a정렬
console.log(a[0]); //최솟값 출력
console.log(a[a.length - 1]); //최댓값 출력
console.log(a); // [1, 10, 11, 2, 20, 3, 30, 5, 9]
//sort() : 사전식 정렬 => 1다음 2가아니라 1x가 다음으로 옴

// M1. Math함수 사용하기
// 기본 사용법
console.log(Math.max(10, 20));
console.log(Math.min(10, 20));
//   console.log(Math.max(a)); // 결과 : NaN
console.log(Math.max.apply(null, a)); // 이렇게 써줘야함
console.log(Math.min.apply(null, a));

// M2. for문 사용
let max = a[0];
let min = a[0];
for (const iterator of a) {
  if (iterator > max) {
    //max값 구하기
    max = iterator;
  }
  if (iterator < min) {
    min = iterator;
  }
}
console.log(max);
console.log(min);

// M3. reducer 사용하기
const reducer1 = (accumulator, currentValue) => accumulator + currentValue;
const reducer2 = (accumulator, currentValue) => accumulator - currentValue;
const reducer3 = (accumulator, currentValue) => accumulator > currentValue ? accumulator : currentValue;
// 1  accumulator = 6 , currentValue = 5 -> 6
// 2  accumulator = 6 , currentValue = 4 -> 6
// ...
const reducer4 = (accumulator, currentValue) => accumulator < currentValue ? accumulator : currentValue;
console.log(a.reduce(reducer1));
console.log(a.reduce(reducer2)); //첫 값에서 그 뒤에값들을 뺌
console.log(a.reduce(reducer3)); //최댓값 출력
console.log(a.reduce(reducer4)); //최솟값 출력
