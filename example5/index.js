graph = {
    100: new Set([67, 66]),
    67: new Set([100, 82, 63]),
    66: new Set([100, 73, 69]),
    82: new Set([67, 61, 79]),
    63: new Set([67]),
    73: new Set([66]),
    69: new Set([66, 65, 81]),
    61: new Set([82]),
    79: new Set([82, 87, 77]),
    65: new Set([69, 84, 99]),
    81: new Set([69]),
    87: new Set([79, 31, 78]),
    77: new Set([79]),
    84: new Set([65]),
    99: new Set([65]),
    31: new Set([87]),
    78: new Set([87])
};

function maxOfDfs(graph, start) { // 노드 선택시 최대값 선택
    let visit = [];
    let stack = [start];

    while (stack) {
        let n = 0; // 다음 방문할 노드
        n = stack.pop()
        if (!visit.includes(n)) {
            visit.push(n);
            let diff = new Set([...graph[n]].filter(x => !(new Set(visit).has(x)))) // 현재 노드와 연결된 노드 - 이미 방문한 노드
            
            if ([...diff].length == 0) {
                //  if(diff.size == 0) //같은것!(Set의 경우 length를 찍으면 undefined이 나옴 => 배열로 풀어주고 length써야함)
                break;
            }

            stack.push(Math.max(...diff));
            //  for (const item of diff) {
            //      stack.push(item)
            //  }
        }
        if (stack.length == 0) {
            break;
        }
    }
    return visit;
}

function minOfDfs(graph, start) {  // 노드 선택시 최솟값 선택
    let visit = [];
    let stack = [start];

    while (stack) {
        let n = 0; 
        n = stack.pop()
        if (!visit.includes(n)) {
            visit.push(n);
            let diff = new Set([...graph[n]].filter(x => !(new Set(visit).has(x))))

            if ([...diff].length == 0) {
                break;
            }

            stack.push(Math.min(...diff));

        }
        if (stack.length == 0) {
            break;
        }
    }
    return visit;
}

let resultOfMax = maxOfDfs(graph, 100);
let result = '';
for (const item of resultOfMax) {
    result += String.fromCharCode(item)

}

console.log(result);

let resultOfMin = minOfDfs(graph, 100)
let result2 = '';
for (const item of resultOfMin) {
    result2 += String.fromCharCode(item)
}

console.log(result2);
