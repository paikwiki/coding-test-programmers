# Programmers 문제풀이 도구

프로그래머스 문제를 로컬에서 풀이할 수 있도록 도와주는 도구입니다.

## 실행 방법

원하는 파일명으로 아래 명령을 실행합니다. 예를 들어 파일명을 `quiz120911`로 한다면:

```sh
$ npm run create quiz120911

> coding-test-programmers@1.0.0 create
> . ./scripts/createQuiz.sh quiz120911

./src/quizzes/quiz120911.js and ./src/quizzes/quiz120911-test-cases.js have been created successfully.
$
```

`./src/quizzes/quiz120911-test-cases.js`에 문제의 입력값과 출력값을 작성합니다.

함수의 파라미터는 항상 배열로 입력합니다. 예를 들어:

```js
// 2. 입력 파라미터가 1개의 정수 타입을 받을 경우(ex: function solution(num) {})
export const testCases = [
  { input: [1], output: ["42"] },
  { input: [2], output: ["42", "42"] },
];

// 2. 입력 파라미터가 2개의 정수 타입을 받을 경우(ex: function solution(num1, num2) {})
export const testCases = [
  { input: [1, 2], output: 3 },
  { input: [3, 4], output: 7 },
];

// 3. 입력 파라미터가 2개의 정수를 담은 배열을 받을 경우(ex: function solution(numArr) {})
export const testCases = [
  { input: [[1, 2]], output: 3 },
  { input: [[3, 4]], output: 7 },
];
```

프로그래머스 문제에 제시된 `solution()` 함수의 파라미터와 `quiz120911.js`의 `solution()` 함수의 파라미터를 동일하게 작성한 후, `solution()` 함수를 완성합니다.

작성 후에는 아래 명령으로 테스트를 실행해볼 수 있습니다.

```sh
$ npm run test quiz120911

> coding-test-programmers@1.0.0 test
> node src/index.js quiz120911

🤖 execute: ./quizzes/quiz120911.js

Test Case 1: ✅ Passed
Test Case 2: ✅ Passed
Test Case 3: ✅ Passed
Test Case 4: ❌ Failed
  🔴 Expected: "42", but got: 42
     Input: [13,29]
$
```

먄약 파일명(위의 경우 `quiz120911`)을 생략하면, `quizzes` 폴더 내의 가장 최근에 수정한 파일을 찾아 해당 파일의 `solution()` 함수를 테스트합니다.

## 버전 이력

### Ver. 1.0.2

- 테스트 실행시, 파일명 없이 입력할 경우, 가장 최근에 수정한 파일을 실행하는 편의 기능을 추가했습니다.

### Ver. 1.0.1

- 함수의 단일 파라미터를 입력하는 경우에도 항상 배열로 입력하도록 수정했습니다.
