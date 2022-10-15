//ts의 기본적인 문법
// : 뒤에 type을 명시
// const isLiked: boolean = true;
// console.log(`${typeof isLiked}, ${isLiked}`);

// const str: string = 'hellooo';
// console.log(`${typeof str}, ${str}`);

// let num: number = 31;
// console.log(`${typeof num}, ${num}`);

// let numbers: number[] =[1,2,3];
// const strings: Array<String> = ['hi','hello'];

// const objArray1: Object[] = [
//     {
//         item1: 'oh'
//     },{
//         item2: 'wow'
//     }
// ]

// const objArray2: object[] = [
//     {
//         item1: 'oh'
//     },{
//         item2: 'wow'
//     }
// ]

// //함수 선언식
// function foo(something: Object){
//     console.log(something);
// }


//함수 표현식
// : 호이스팅에 영향을 받지 않음
// 클로져로 사용, 콜백으로 사용
// const foo1 = (something: Object): void => {
//     console.log(something);
// }
// const foo2 = (something: object): void => {
//     console.log(something);
// }

// foo("ho");
// foo1("hi");
//foo2("boom");       //error : 원시타입(string,number..)이 아닌 타입만 할당 가능

// const fun = (name: string): void => console.log(`hello, ${name}!`);
// const sum1 = (a: number, b: number): number => a+b;
// const sum2 = (a: number, b: number): number => {return a+b;}

// fun("yelin");
// console.log(sum1(2,5));
// console.log(sum2(3,4));

// const a: null = null;
// let oops: null = 2;     //error : null type에 특정 값 할당 불가
// let b: undefined = undefined;
// let c: undefined = null;    //error : undefined type에 null 할당 불가


// let str: any = '김예린';
// //* angle-bracket
// let strLength: number = (<string>str).length;
// console.log(`${typeof strLength}, ${strLength}`);

// //* as
// let str2Length: number = (str as string).length;
// console.log(`${typeof strLength}, ${strLength}`);