let waiting = 14000605;

/*
        9시         25  25
        9시 10분    15  40
        9시 20분    15  55
        9시 30분    15  70
        9시 40분    15  85
        9시 50분    15  100

        1시간당 100명씩 하루 12시간 운행 : 하루 총 1200명 배에 탑승가능
        */

function timeOfTakingBoat(waiting) {
  let year = 0,
    month = 0,
    day = 0,
    hour = 0,
    minute = 0;

  let takingDay = waiting / 1200; //걸린 일수

  //1년의 일 수 구하기
  let dayOfYear = 0;
  for (let i = 1; i < 11; i++) {
    dayOfYear += 2 ** i;
  }

  // 걸린 연 수 구하기
  year = takingDay / dayOfYear;

  // 걸린 연수를 뺀 나머지 날짜
  day = takingDay % dayOfYear;

  // 걸린 월 수 구하기
  for (let i = 0; i < 10; i++) {
    month++;
    if (day < 2 ** i) {
      break;
    }
    day -= 2 ** i;
  }

  year = parseInt(year, 10); //걸린 연도
  month = parseInt(month - 1, 10);
  day = parseInt(day, 10);

  //시간 계산하기
  // waiting % 1200 = 1200명씩 태우고 남은 인원수
  // (waiting % 1200) / 100 = 시간당 100명씩 태웠을때 시간
  // +9 = 9시 시작이니까
  hour = parseInt((waiting % 1200) / 100 + 9, 10);

  let startingPoint = [25, 40, 55, 70, 85, 100]; //출발 분에따른 태운 인원수
  for (const key in startingPoint) {
    //index로 순회
    if (startingPoint[key] > (waiting % 1200) % 100) {
      minute = parseInt(key * 10, 10);
      break;
    }
  }

  let date = new Date();

  if (minute + date.getMinutes() > 60) {
    minute += date.getMinutes() - 60;
    hour += 1;
  }

  return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
}

console.log(timeOfTakingBoat(waiting));
