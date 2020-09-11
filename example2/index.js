strength = [1, 2, 1, 4];
dogs = [
  {
    name: "루비독",
    age: "95년생",
    jump: "3",
    weight: "4",
  },
  {
    name: "피치독",
    age: "95년생",
    jump: "3",
    weight: "3",
  },
  {
    name: "씨-독",
    age: "72년생",
    jump: "2",
    weight: "1",
  },
  {
    name: "코볼독",
    age: "59년생",
    jump: "1",
    weight: "1",
  },
];

function bridge(strength, dogs) {
  let result = [];
  for (const dog of dogs) {
    let locationOfDog = 0;
    let failure = false;

    while (locationOfDog < strength.length) {
      locationOfDog += parseInt(dog.jump, 10);
      strength[locationOfDog - 1] -= parseInt(dog.weight, 10);
      if (strength[locationOfDog - 1] < 0) {
        failure = true;
        break;
      }
    }
    if (!failure) {
      //정상 종료가 될 경우
      result.push(dog.name);
    }
  }
  return result;
}

console.log(bridge(strength, dogs));
