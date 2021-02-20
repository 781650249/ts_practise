"use strict";
// enum  Gender{
//     male = '帅哥',
//     female = '美女'
// }
// 接口 
//约束方法
// // type Condition = (n: number) => Boolean  //类型约束
// interface Condition{   //接口约束
//     (n:number):Boolean
// }
// function Sum(numbers: number[], callback: Condition) {
//     let s = 0
//     numbers.forEach(i => {
//         if (callback(i)) {
//             s = s + i
//         }
//     })
//     return s
// }
// console.log(Sum([1, 2, 3, 4, 5], n => n % 2 !== 0))  //9
// // 约束对象 
// // type User {
// //     name:string,
// //     age:number,
// //     sayHello():void
// // }
// interface User {
//     name:string,
//     age:number,
//     sayHello():void
// }
// let a:User = {
//     name:'23232',
//     age:18,
//     sayHello(){
//         console.log(1111)
//     }
// }
var arr = [1, 2, 3, 4];
module.exports = {
    name: 'kevin',
    sum: function (a, b) {
        return a + b;
    }
};
