let data = [
  "   + -- + - + -   ",
  "   + --- + - +   ",
  "   + -- + - + -   ",
  "   + - + - + - +   ",
];

let res = "";

for (const s of data) {
  // 정규 표현식
  // / /g : 모든 띄어쓰기
  // /-/g : 모든 -
  // /+/g : 모든 + 인데 +가 정규표현식에 있으므로 => /\+/g 이렇게!
  console.log(s.replace(/ /g, "").replace(/\+/g, "1").replace(/-/g, "0"));
  console.log(
    Number(s.replace(/ /g, "").replace(/\+/g, "1").replace(/-/g, "0"))
  );
  console.log(
    parseInt(s.replace(/ /g, "").replace(/\+/g, "1").replace(/-/g, "0"), 2)
  );
  res += String.fromCharCode(
    parseInt(s.replace(/ /g, "").replace(/\+/g, "1").replace(/-/g, "0"), 2)
  );
  console.log(res);
}
