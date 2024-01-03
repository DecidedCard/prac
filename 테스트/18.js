// while
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

// while문을 활용해서, 3초과 100미만의 숫자자 중 5의 배수인 것만 출력하는 예

while (i < 100) {
  if (i % 5 === 0 && i >= 5) {
    console.log(i + "는 5의 배수입니다.");
  }
  i++;
}

// do ~ while

do {
  console.log(i);
  i++;
} while (i < 10);

for (let i = 0; i < 10; i++) {
  if ( i === 5) {
    break;
  }
  console.log(i);
}
for (let i = 0; i < 10; i++) {
  if ( i === 5) {
    continue;
  }
  console.log(i);
}