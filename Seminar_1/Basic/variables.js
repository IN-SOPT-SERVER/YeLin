//var 재선언, 재할당 가능
//let 재할당 가능
//const 재선언,재할당 불가능


//<재선언 가능/불가능 확인>
//---var---
// var myName = '김린예';
// console.log(`${myName} is wrong name`);
// var myName = "김예린";
// console.log(`${myName} is correct name`);

//---let---
// let part = "Server";
// let part = "Serverrrrrrrrrrrrr!";  //에러 : 재선언 불가능
// console.log(`Let's go ${part}`);

//---const---
// const school = "SOPT";
// const school = "STOP";               //에러 : 재선언 불가능
// console.log(`school ${part}`);


//<재할당 가능/불가능 확인>
//---var---
// var myName = "김린예";
// myName = "김예린";
// console.log(`${myName} !`);

//---let---
// let part = "Server";
// part = "Serverrrrrrrrrrr!";  
// console.log(`Let's go ${part}`);

//---const---
// const school = "SOPT";
// school = "STOP";               //에러 : 재할당 불가능
// console.log(`school ${part}`);
