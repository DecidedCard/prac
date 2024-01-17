// 일급객체로써의 함수 (2)
const person = {
  name: "john",
  age: 31,
  isMarried: true,
  // sayHello: () => {
  //   console.log(`Hello, My name is ${person.name}`);
  // },
  sayHello: function () {
    console.log(`Hello, My name is ${this.name}`);
  },
};

person.sayHello();
