//병합 정렬 O(nlogn)
let arr = [5, 10, 66, 77, 54, 32, 11, 15];
//   분할
//   [5, 10, 66, 77], [54, 32, 11, 15]
//   [5, 10], [66, 77], [54, 32], [11, 15]
//   [5], [10], [66], [77], [54], [32], [11], [15]

//   정복 //나머지 한쪽 배열의 길이가 0이 될 경우 -> 다른 쪽 배열을 통째로 가져옴(이미 정렬이 된 배열이기때문에 가능)
//   [5, 10], [66, 77], [32, 54], [11, 15]
//   [5, 10, 66, 77], [11, 15, 32, 54]
//   [5, 10, 11, 15, 32, 54, 66, 77]

// 분할
// function mergeSort(arr) {
//     let lengthOfArr = arr.length;
//     if(lengthOfArr <= 1){
//         return arr;
//     }
//     let temp = parseInt(lengthOfArr/2)
//     let leftArrayOfArr = mergeSort(arr.slice(0, temp))
//     let rightArrayOfArr = mergeSort(arr.slice(temp, ));

//     return `왼쪽 배열 : ${leftArrayOfArr}, 오른쪽 배열 : ${rightArrayOfArr} \n`;
// }

// console.log(mergeSort(arr));

function mergeSort(arr) {
  let lengthOfArr = arr.length;
  let res = [];
  if (lengthOfArr <= 1) {
    return arr;
  }
  let temp = parseInt(lengthOfArr / 2);
  let leftArrayOfArr = mergeSort(arr.slice(0, temp));
  let rightArrayOfArr = mergeSort(arr.slice(temp));

  while (leftArrayOfArr.length != 0 && rightArrayOfArr.length != 0) {
    //정복
    if (leftArrayOfArr[0] < rightArrayOfArr[0]) {
      res.push(leftArrayOfArr.shift());
    } else {
      res.push(rightArrayOfArr.shift());
    }
  }
  while (leftArrayOfArr.length != 0) {
    //요소가 왼쪽 배열에만 남아있는 경우
    res.push(leftArrayOfArr.shift());
  }
  while (rightArrayOfArr.length != 0) {
    //요소가 오른쪽 배열에만 남아있는 경우
    res.push(rightArrayOfArr.shift());
  }

  return res;
}

console.log(mergeSort(arr));
