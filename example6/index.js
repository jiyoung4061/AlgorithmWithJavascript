let sample = [];

let firstField = [
  [1, 0, 0, 0, 0],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1],
];
let secondField = [
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 3],
  [0, 0, 0, 0, 4],
  [0, 2, 0, 0, 2],
  [4, 5, 0, 2, 0],
];

for (let i = 0; i < firstField.length; i++) {
  sample[i] = new Array(firstField[0].length);
}

/*
    0, 4 => 0, 0
    1, 4 => 0, 1
    2, 4 => 0, 2
    3, 4 => 0, 3
    4, 4 => 0, 4

    0, 3 => 1, 0
    1, 3 => 1, 1
    2, 3 => 1, 2
    3, 3 => 1, 3
    4, 3 => 1, 4

    0, 2 => 2, 0
    1, 2 => 2, 1
    2, 2 => 2, 2
    3, 2 => 2, 3
    4, 2 => 2, 4
*/

//두번째 밭을 -90도 회전
for (let i = 0; i < secondField.length; i++) {
  for (let j = 0; j < secondField[0].length; j++) {
    sample[i][j] = secondField[j][secondField[0].length - 1 - i];
    sample[i][j] += firstField[i][j];
  }
}

let result = "";
for (const item of sample) {
  result += String.fromCharCode(parseInt(item.join(""), 8)); //배열을 ''를 기준으로 합쳐줌
}
console.log(result);
