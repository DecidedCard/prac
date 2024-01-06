// [ 콜백 함수 내부의 this에 다른 값 바인딩하기 ]
// 콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 할 수는 없을까?
// 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법

// closure 방식

var obj1 = {
  name: "obj1",
  func: function () {
    var self = this;
    return function () {
      console.log(self.name);
    };
  },
};

// var obj2 = {
//   name: "obj2",
//   func: obj1.func,
// };

// var callback2 = obj2.func();
// setTimeout(callback2, 1000);

var obj3 = {name: "obj3"};
var callback3 = obj1.func.call(obj3);
setTimeout(callback3, 2000);