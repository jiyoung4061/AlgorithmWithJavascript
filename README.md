# Algorithmn with java-script

>## Basic
- Recursive Function(재귀함수) : 내가 나를 호출하는 함수( 반복문 <-> 재귀함수)  
-10진수를 2진수로 변환 *(Binary)*  
-문자열 역순(정순) *(ReverseString)*  
-각 자릿수의 합 *(SumOfNumber)*  
-피보나치순열 *(Fibonacci)*

- 최솟값과 최댓값 구하기  
-Math함수 사용하기  
-for문 사용하기(for of)  
-reducer 사용하기  

- 정렬하기  
-**선택정렬** : 하나의 배열안에서 가장 작은 것을 선택하고, 해당 item을 제거한 배열에서 다시 가장 작은 것을 선택해 정렬하는 방법  
-**삽입정렬** : 가장 먼저 첫번째 요소를 두고, 다음 요소와 비교해 작으면 앞에 삽입하고, 크면 뒤에 삽입하는 방법  
-**병합정렬 O(nlogn)** : 배열을 반으로 나뉠수 없을 때까지 계속해서 나눈후 합쳐가며 정렬하는 방법 (나뉜 두 배열에서 맨 앞 요소(가장 작은 요소)를 비교해가며 작은 값을 새로운 배열에 push)  
-**퀵정렬** : 기준점(보통 중간 요소)을 정하고 작은 값과 큰 값으로 나눈(더이상 나눌수 없을 때까지 진행)후 작은 값은 앞으로 큰 값은 뒤로 합침  

>## Example
## ex1. 암호 해독
**replace(a,b)** : a를 b로 대체

> 정규 표현식 
 - / /g : 모든 띄어쓰기
 - /-/g : 모든 -
 - /+/g : 모든 + 인데 +가 정규표현식에 있으므로 => /\+/g 이렇게!

## ex2. 징검다리건너기
parseInt(a,10) : a를 10진수로 바꿔줌

## ex3. 시간계산


## ex4. 페이지교체알고리즘(LRU)
**LRU : 교체가 자주 이뤄지는 페이지는 보존**
- 최근 페이지 교체가 이뤄진 것을 뒤로 뺀다 => 앞에 부분만 삭제해주면됨
```
array.shift() : 맨 앞에 요소 삭제
array.push(shift()) : 맨앞의 요소를 삭제한 후, 맨 뒤에 push
=> 오류 : hit된 요소가 맨앞에 없을 수도 있음.
따라서, 해당 동물의 index를 찾아서 1개 지워주는 -> splice사용
```

## ex5. 트리(이진 깊이우선 탐색)
**Set** : 중복값을 제외한 유일한 값을 저장  
add() / delete : 새로운 요소 추가/삭제  
clear() : 모든 요소 제거  
size() : set의 크기는 length 가 아니라 size!  
has() : 특정 값을 가지고 있는지 확인

**Map** : key와 value를 함께 저장하는 객체  
set() : key, value값을 넣고 그 객체 반환  
get() : 주어진 key에 해당하는 값 반환  
has() : 주어진 key 값이 있는지 확인하고 *boolean* 값 반환

**깊이우선탐색(Depth First Search) => Stack**  
A  
| \  
B C  
|&nbsp;&nbsp;&nbsp;| \  
D E F  
*A - B - D - C - E - F*  
한 방향으로 가면서 검사하기  
막힌 노드는 포기하고 마지막 따라온 간선으로 되돌아간다  
=>  current : 현재 노드  
    stack : current에 있는 노드를 방문 경로에 넣는 순간 current노드에 연결된 노드를 넣음  
    방문경로 : 이미 지나온 노드

**너비우선탐색(Breadth First Search) => Queue**  
A   
| \  
B &nbsp;C  
| \ &nbsp;&nbsp;| \  
D E F G  
|  
H  
*A - B - C - D - E - F - G - H*  
가장 가까운 점 부터 방문, 먼 노드는 가장 나중에 방문  
=>  current : 현재노드  
    queue : current에 있는 노드를 방문경로에 넣는 순간 연결 노드가 들어감 => stack과 달리 FIFO임!  
    방문경로 : 이미 지나온 노드

**... 전개 연산자**
```javascript
console.log(Math.max([1,2,3,4,5])); //=> list의 경우에는 최대값 못 찾음
console.log(Math.max(...[1,2,3,4,5])); //=> ...전개연산자를 사용하면 가능
```

**Set()과 [...Set()]**
```javascript
console.log('set:', setA); // => 결과 : Set(7) {1, 3, 2, 6, 5, 4, 7}

//전개 연산자를 써야 배열처럼 쓸수 있음!
console.log('setA with ...:', [...setA]); // => 결과 : (7) [1, 3, 2, 6, 5, 4, 7]
console.log('arrA:', arrA); // => 결과 : (8) [1, 3, 2, 6, 5, 4, 4, 7]
```

**filter() / map()**
```javascript
let x = [1,2,3,4,5,6,7];
let y = ['abc', 'abcde', 'abcd', 'abcdef', 'abcdefg', 'abckk']

//filter() 해당 조건을 만족하는 값 return 배열로 출력
console.log(x.filter(value => value > 5)); // => [6,7]
console.log(y.filter(value => value.length > 4)); // => ['abcde','abcedf','abcedfg','abckk']

console.log(x.map(value => value**2)); // => [1, 4, 9, 16, 25, 36, 49]
```

**ASCII CODE를 변환하고 문자열로 만들기**  
String.fromCharCode()를 사용해 char로 변환후 하나씩 += 해 문자열 만들기
```javascript
let resultOfMin = minOfDfs(graph, 100)
let result2 = '';

for (const item of resultOfMin) {
    result2 += String.fromCharCode(item)
}
```

## ex6. 행렬, 이차원배열
**array.join('!')** : 각 배열의 요소 사이에 !를 넣어서 하나의 문자열로 변환
```javascript
let arr = [1,3,5,6,7,3]
let brr = arr.join('!');
console.log(brr); // => 1!3!5!6!7!3
console.log(typeof(brr)); // => string
```

## ex7. matrix형태의 동적 계획법(Recursion, memorization)  
### 최소경로 ( i , j )의 경우의 수
- 값( i , j )가 최소 경로일 경우 : i, j 가 둘다 1일 경우  
- 최소경로( i-1 , j) + 값( i , j )가 최소 경로일 경우 : j가 1일 경우(왼쪽 줄 외길)  
- 최소경로( i , j-1 ) + 값( i , j )가 최소 경로일 경우 : i가 1일 경우(위쪽 줄 외길)
- (i,j)에 도달하기까지 최소 경로 = min( 최소경로( i-1 , j ) , 최소경로( i , j-1 ) ) + 값( i , j )  
*(0,0)을 제외하고 맨 윗줄, 왼쪽 줄은 외길!*

