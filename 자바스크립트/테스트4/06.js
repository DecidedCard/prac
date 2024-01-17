// obj
// 2가지 속성
var obj = {
  vals: [1, 2, 3],
  logValues: function (v, i) {
    console.log(">>> test starts");
    if (this === global) {
      console.log("this가 global입니다. 원하지 않는 결과");
    } else {
      console.log(this, v, i);
    }

    console.log(">>> test ends");
  },
};

// method로서 호출
// obj.logValues(1, 2);

//forEach, map, filter
[4, 5, 6].forEach(obj.logValues);