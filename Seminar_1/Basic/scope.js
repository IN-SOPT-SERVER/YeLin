//var 는 function scope : function내에서만 사용 가능
//let,const는 block scope : block내에서만 사용 가능

// if(true){
//     var x = "var";
// }
// console.log ("x: ",x);

// if(true){
//     let y = "let";
// }
// console.log("y: ",y);       //에러: block내에서 선언된 let은 block외에서 접근 불가

// function func(){
//     if(true){
//         var test = "var";
//         console.log("test: ",test);
//     }
//     console.log("test: ",test);
// }

// func();
// console.log("test: ",test);    //에러: function외에서 접근 불가능 