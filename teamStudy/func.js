// // 1. 기본 함수 선언과 호출
// function sayHello() {
//     console.log("Hello, JavaScript");
// }

// sayHello();

// // 2. 매개변수를 사용하는 함수
// function greetUser(name) {
//     console.log(`Hello, ${name}`);
// }

// greetUser('임재원');

// // 3. 리턴 값을 가지는 함수
// function multiply(a, b) {
//     return a * b;
// }

// let answer = multiply(2, 3);

// console.log(`a * b = ${answer}`);

// multiply(2, 3);

// // 4. 여러 개의 매개변수를 사용하는 함수
// function calculateRectangleArea(width, height) {
//     return width * height;
// }

// console.log(calculateRectangleArea(5, 10));

// // 5. 기본 매개변수 값
// function greetWithDefault(name = 'Guest') {
//     console.log(`Hello, ${name}!`);
// }

// greetWithDefault('임재원');
// greetWithDefault();

// 저는 투표할 수 있나요?
let age = 20;

if (age >= 18) {
    console.log('당신은 투표를 할 수 있습니다😊');
} else {
    console.log('당신은 투표를 하기에 너무 어립니다😐');
}