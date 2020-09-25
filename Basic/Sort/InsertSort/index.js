let arr = [5, 10, 66, 77, 54, 32, 11, 15];
let res = [];
let lengthOfArr = arr.length;
console.log(lengthOfArr);

for (let i = 0; i < lengthOfArr; i++) {
  let item = arr.shift(); //삽입될 값
  let index = indexOfItem(res, item); //삽입될 값이 들어갈 index값
  res.splice(index, 0, item);
  console.log("index : ", index);
  console.log("res : ", res);
}

function indexOfItem(res, item) {
  for (const i in res) {
    if (item < res[i]) {
      return i; // item=54, res=[10,66]의 경우 : 54가 66보다 작으니까 그 자리에 들어가야함 -> 66의 index값을 return
    }
  }
  return res.length;
}
