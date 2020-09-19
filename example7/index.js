// let cross = [
//     //1사분면
//     [[1, 5, 0, 1, 0],
//     [0, 1, 6, 7, 0],
//     [6, 2, 3, 2, 1],
//     [1, 0, 1, 1, 1],
//     [0, 2, 0, 1, 0]],
//     //2사분면
//     [[0, 3, 0, 1, 0],
//     [1, 2, 5, 4, 4],
//     [0, 0, 3, 0, 0],
//     [1, 2, 5, 0, 1],
//     [0, 0, 0, 0, 0]],
//     //3사분면
//     [[3, 0, 1, 1, 8],
//     [5, 0, 4, 5, 4],
//     [1, 5, 0, 5, 1],
//     [1, 2, 1, 0, 1],
//     [0, 2, 5, 1, 1]],
//     //4사분면
//     [[1, 0, 3, 3, 3],
//     [5, 1, 2, 2, 4],
//     [1, 5, 1, 2, 4],
//     [4, 4, 1, 1, 1],
//     [4, 4, 1, 1, 1]],
//     //5사분면
//     [[1, 2, 0, 3, 3],
//     [1, 2, 0, 2, 4],
//     [1, 2, 0, 2, 4],
//     [4, 2, 0, 0, 1],
//     [8, 4, 1, 1, 0]],
//     //6사분면
//     [[1, 0, 3, 0, 0],
//     [1, 1, 0, 2, 4],
//     [0, 0, 1, 2, 4],
//     [4, 0, 1, 0, 1],
//     [0, 0, 1, 0, 1]]
//     ]


// 작은 배열을 가지고 먼저 연습!(정방향을 먼저 한 후에 역방향하기)
let c = [
  [3, 0, 1, 1, 8],
  [5, 0, 4, 5, 4],
  [1, 5, 0, 5, 1],
  [1, 2, 1, 0, 1],
  [8, 2, 5, 1, 1],
];

// let weight = Array(5).fill(0); //길이 5의 1차원 배열을 0으로 채움
let weight = Array(5)
  .fill(0)
  .map(() => Array(5).fill(0)); // 위에 0으로 채워진 각각에 배열을 넣음(map사용!)

for (let i = 0; i < c.length; i++) {
  //row
  for (let j = 0; j < c.length; j++) {
    //column

    if (i == 0 && j == 0) {
      weight[0][0] = c[0][0];
    } else if (i == 0) {
      //맨 위쪽 줄(외길)
      weight[i][j] = weight[i][j - 1] + c[i][j];
    } else if (j == 0) {
      //맨 왼쪽 줄(외길)
      weight[i][j] = weight[i - 1][j] + c[i][j];
    } else {
      weight[i][j] = Math.min(weight[i][j - 1], weight[i - 1][j]) + c[i][j];
    }
  }
}

console.log(c);
console.log(weight); //가중치

let locationOfWeight = Array(5).fill(0).map(() =>
    Array(5)
      .fill(0)
      .map(() => Array(2).fill(0))
  );
for (let i = 0; i < c.length; i++) {
  //row
  for (let j = 0; j < c.length; j++) {
    //column
    if (i == 0 && j == 0) {
      weight[0][0] = c[0][0];
      locationOfWeight[0][0][0] = i;
      locationOfWeight[0][0][1] = j;
    } else if (i == 0) {
      //맨 위쪽 줄(외길)
      weight[i][j] = weight[i][j - 1] + c[i][j];
      locationOfWeight[i][j][0] = i;
      locationOfWeight[i][j][1] = j - 1;
    } else if (j == 0) {
      //맨 왼쪽 줄(외길)
      weight[i][j] = weight[i - 1][j] + c[i][j];
      locationOfWeight[i][j][0] = i - 1;
      locationOfWeight[i][j][1] = j;
    } else {
      // weight[i][j] = Math.min(weight[i][j - 1], weight[i - 1][j]) + c[i][j]
      if (weight[i][j - 1] > weight[i - 1][j]) {
        weight[i][j] = weight[i - 1][j] + c[i][j];
        locationOfWeight[i][j][0] = i - 1;
        locationOfWeight[i][j][1] = j;
      } else {
        weight[i][j] = weight[i][j - 1] + c[i][j];
        locationOfWeight[i][j][0] = i;
        locationOfWeight[i][j][1] = j - 1;
      }
    }
  }
}

console.log(locationOfWeight);

// // 2->4분면
let cross = [
  //2사분면
  [
    [0, 3, 0, 1, 0],
    [1, 2, 5, 4, 4],
    [0, 0, 3, 0, 0],
    [1, 2, 5, 0, 1],
    [0, 0, 0, 0, 0],
  ],
  //4사분면
  [
    [1, 0, 3, 3, 3],
    [5, 1, 2, 2, 4],
    [1, 5, 1, 2, 4],
    [4, 4, 1, 1, 1],
    [4, 4, 1, 1, 1],
  ],
];

// console.log(cross.flat()); //3차원 배열에서 2차원 배열로 만들어줌
// console.log(cross.flat(2)); // 1차원 배열로 만들어줌
cross = cross.flat();
console.log(cross);

weight = Array(cross.length).fill(0).map(() => Array(5).fill(0));
locationOfWeight = Array(cross.length).fill(0).map(() =>
    Array(5)
      .fill(0)
      .map(() => Array(2).fill(0))
  );

console.log(weight);
console.log(locationOfWeight);

for (let i = 0; i < cross.length; i++) {
  for (let j = 4; j > -1; j--) {
    //첫시작이 (0,4)라서 4부터 하나씩 줄여나감
    if (i == 0 && j == 4) {
      weight[0][4] = cross[0][4];
      locationOfWeight[0][4][0] = 99;
      locationOfWeight[0][4][1] = 99;
    } else if (i == 0) {
      // j + 1을 한 이유는 참조되는 값이 해당 좌표의 오른쪽 좌표(+1한 값)에서 참조하기때문에
      weight[i][j] = weight[i][j + 1] + cross[i][j];
      locationOfWeight[i][j][0] = i;
      locationOfWeight[i][j][1] = j + 1;
    } else if (j == 4) {
      weight[i][j] = weight[i - 1][j] + cross[i][j];
      locationOfWeight[i][j][0] = i - 1;
      locationOfWeight[i][j][1] = j;
    } else {
      if (weight[i][j + 1] > weight[i - 1][j]) {
        weight[i][j] = weight[i - 1][j] + cross[i][j];
        locationOfWeight[i][j][0] = i - 1;
        locationOfWeight[i][j][1] = j;
      } else {
        weight[i][j] = weight[i][j + 1] + cross[i][j];
        locationOfWeight[i][j][0] = i;
        locationOfWeight[i][j][1] = j + 1;
      }
    }
  }
}

console.log(weight);
console.log(locationOfWeight);

let i_ = 0;
let j_ = 0;
for (let k = 0; k < 100; k++) {
  if (i_ == 99 || j_ == 99) {
    break;
  }
  if (k == 0) {
    i_ = locationOfWeight[cross.length - 1][0][0];
    j_ = locationOfWeight[cross.length - 1][0][1];
  } else {
    i_ = locationOfWeight[i_][j_][0]; //그 다음 좌표에대해 값을 설정해줌
    j_ = locationOfWeight[i_][j_][1];
  }

  console.log(i_, j_);
}
