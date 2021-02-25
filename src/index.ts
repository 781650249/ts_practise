



/* 
选择排序 
找到最小的 依次和前面的数进行交换
*/
let arr = [41, 4, 5, 6, 73, 43, 53, 23]
/* 
4和41交换 4, 41, 5, 6, 73, 43, 53, 23
5和41交换 4, 5, 41, 6, 73, 43, 53, 23
6和41交换 4,5,6,41 

*/

function exchange(a: number, b: number, arr: number[]) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

function compare(a: number, b: number) {
    if (a < b) return true
    else return false
}


function maoSort(arr: number[]) {

    for (let i = 0; i < arr.length; i++) {
        let minIndex = 0
        for (let j = 0; j < arr.length - i; j++) {
            if (compare(arr[minIndex], arr[j])) {
                minIndex = j
            }
        }
        exchange(minIndex, arr.length - i - 1, arr)
    }
    return arr
}

