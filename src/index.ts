

let arr = [8, 4, 5, 21, 34, 42, 13]

function kuaiSort(arr: number[]) {
    if (arr.length === 0) return []
    let mid: number = 0
    let left: number[] = []
    let right: number[] = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[mid]) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    left = kuaiSort(left)
    right = kuaiSort(right)
    left.push(arr[mid])
    return left.concat(right)
}
console.log(kuaiSort(arr))