// 비동기적 코드의 이해
setTimeout(function () {
  console.log("여기가 먼저 실행되지 않음.");
}, 1000);

console.log("여기를 봐.");