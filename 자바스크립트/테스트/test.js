// function solution(s) {
//   const p = s.replace(/P/gi, '').length;
//   const y = s.replace(/Y/gi, '').length;

//   let answer = p === y;

//   return answer;
// }

// console.log(solution("pPoooyY"));

// console.log(solution("Pyy"));


// function solution(absolutes, signs) {
//   let answer = 0;
//   absolutes.forEach((v, i) => {
//     if (signs[i]) {
//       answer += v;
//     } else {
//       answer -= v;
//     }
//   });
//   return answer;
// }

// console.log(solution([4,7,12], [true,false,true]));




// function solution(s) {
//   var answer = true;

//   // 대문자로 변환
//   s = s.toUpperCase();

//   // 비교 값
//   var num = 0;

//   // p의 갯수와 y의 갯수 체크
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === 'P') {
//       num++;
//     }
//     if (s[i] === 'Y') {
//       num--;
//     }
//   }

//   if (num === 0) {
//     answer = true;
//   } else {
//     answer = false;
//   }
//   return answer;
// }

// console.log(solution("pPoooyY"));


function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
  }
  return answer;
}

let absolutes = [4,7,12];
let signs = [true,false,true];

console.log(solution(absolutes, signs));