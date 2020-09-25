// 퀵정렬 ( worst : O(nlog2n) , best : O(n^2) )
// pivot : 기준점을 사용함 => 보통 첫번째, 마지막, 중간 값을 pivot으로 사용하지만 worst를 피하기위해 랜덤으로 주거나 dual로 사용

// [66, 77, 54, 32, 10, 5, 11, 15]

// pivot: 66
// [54, 32, 10, 5, 11, 15] + [66] + [77]

// pivot: 54
// [32, 10, 5, 11, 15] + [54] + [66] + [77]

// pivot: 32
// [10, 5, 11, 15] + [32] + [54] + [66] + [77]

// pivot: 10
// [5] + [10] + [11, 15] + [32] + [54] + [66] + [77]

// pivot: 11
// [5] + [10] + [11] + [15] + [32] + [54] + [66] + [77]

// => 각 array를 합칠때 concat 사용

let arr = [66, 77, 54, 32, 10, 5, 11, 15];

function quickSort(arr) {
  let lengthOfArr = arr.length;

  if (lengthOfArr <= 1) {
    return arr;
  }

  let pivot = [arr.shift()];
  let leftOfArr = [];
  let rightOfArr = [];

  for (const i in arr) {
    if (arr[i] < pivot) {
      leftOfArr.push(arr[i]);
    } else {
      rightOfArr.push(arr[i]);
    }
  }

  console.log(
    `왼쪽배열 : ${leftOfArr} \n오른쪽배열 : ${rightOfArr}\n피벗값 : ${pivot}`
  );

  return quickSort(leftOfArr).concat(pivot, quickSort(rightOfArr));
}

console.log(quickSort(arr));
