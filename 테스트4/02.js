// 제어권
// 1. 호출 시점에 대한 제어권을 갖는다.
// setInterver : 반복해서 매개변수로 
var count = 0;
var cbFunc = function () {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};

var timer = setInterval(cbFunc, 3000);