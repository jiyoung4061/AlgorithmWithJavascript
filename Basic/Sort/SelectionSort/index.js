let a = [10, 11, 9, 2, 3, 6, 5, 4];
let sortingA = [];

for (let i = 0; i < 8; i++) {
  sortingA.push(Math.min.apply(null, a));
  //pop : 뒤에서 꺼냄 , push : 뒤에서 넣어줌
  //shift : 앞에서 꺼냄, unshift : 앞으로 넣어줌
  a.splice(a.indexOf(Math.min.apply(null, a)), 1); //indexOf를 사용해 최솟값의 index를 구함

  console.log(a);
  console.log("정렬된 배열:", sortingA);
}
