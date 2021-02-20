// enum  Gender{
//     male = '帅哥',
//     female = '美女'
// }

// let gender:Gender;


// gender = Gender.male


// let  r:Gender = Gender.female

// console.log(r)


// console.log(gender)



// // 枚举自增

// enum level {
//     level1 = 1,
//     level2,
//     level3
// }


// let L:level = 2


// console.log(L)  // 1

// export const name = 2



// export = {
//     name: 'kevin',
//     sum(a: number, b: number) {
//         return a + b
//     }

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



// const arr:readonly number[] = [1,2,3,4]

// const a: ReadonlyArray<number> = [1,2,3,4]


// type User= {
//     readonly id:string,
//     name:string,
//     age:number,
//     readonly arr:  string[]
//     // readonly arr: readonly string[]

// }

// let u:User = {
//     id:'124',
//     name:'dee',
//     age:77,
//     arr:['dede','erere']
// }

// u.arr.push('323232')
// // 数组只读可以添加push,slice等数组方法
// // 字符串只读不能添加内容成员了

// console.log(u.arr)


class User {
    readonly id: number
    gender: '男' | '女' = '男'
    pid?: number
    constructor(public name: string, public age: number) {
        this.id = Math.random()
    }
    hasUpload: number = 3
    noUpload: number = 0
    publish(title: string) {
        if (this.noUpload < this.hasUpload) {
            this.noUpload += 1
            console.log('发布一篇文章'+title)
        }else{
            console.log('已发完了')
        }

    }
}
let a = new User('福州人', 18)

console.log(a)
a.publish('小说')
a.publish('美女')
a.publish('游戏')
a.publish('电影')
