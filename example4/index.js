let animals = ['척추동물', '어류', '척추동물', '무척추동물', '파충류', '척추동물', '어류', '파충류']

// 1회 : ['척추동물'] #false 1분
// 2회 : ['척추동물', '어류'] #false 1분
// 3회 : ['어류', '척추동물'] #true(hit) 1초 => hit의 경우에 해당 동물은 뒤로 = 맨앞에 있는 동물이 최근에 가장 hit되지 않은 동물
// 4회 : ['어류', '척추동물', '무척추동물'] #false 1분
// 5회 : ['척추동물', '무척추동물', '파충류'] #false 1분
// 6회 : ['무척추동물', '파충류', '척추동물'] #true 1초
// 7회 : ['파충류', '척추동물', '어류'] #false 1분
// 8회 : ['척추동물', '어류', '파충류'] #true 1초

function solution(animals, numberOfPage) {
    let chair = [];
    
    let answer = 0;
    for (const animal of animals) {
        if(chair.length < numberOfPage) {// page 부재 or hit한 경우
            if(chair.includes(animal)){ //hit한 경우
                
                chair.splice(chair.indexOf(animal), 1);
                chair.push(animal)
                answer +=1;
            } else {
                chair.push(animal);
                answer += 60;
            }
        } else {
            if(chair.includes(animal)){
                chair.splice(chair.indexOf(animal), 1);
                chair.push(animal)
                answer+=1;
            } else {
                chair.shift();
                chair.push(animal);
                answer+=60;
            }
        }
        console.log(chair);
    }
    return `${parseInt(answer/60, 10)}분 ${answer%60}초`;
}

console.log(solution(animals, 3));
