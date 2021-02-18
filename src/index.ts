

// // Ep1
function getMandomNum():string| number {
    if (Math.random() > 0.5) {
        return ' ni haoHH'
    }
    return 404
}

let num = getMandomNum()




if (typeof (num) === 'string') {
    let newNum = num.split(' ').filter(it => it).map(item => item[0].toUpperCase() + item[1] + item.substr(2)).join(' ')
    console.log(newNum ,2222)
}







// Ep2 

function countSum(a:number,b:number):number{
    return a+b
}

let a = countSum(3,4);


console.log(a)