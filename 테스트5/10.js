const x = 1;

// 1
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}

// outer함수를 '실행'해서, innerFunc에 담음
// outer함수의 return부분을 innerFunc에 담음
const innerFunc = outer();
// ----------- 여기서는.... outer함수의 실행컨텍스는?

innerFunc();
