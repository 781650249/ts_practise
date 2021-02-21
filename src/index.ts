/* 
    无重复字符的最长字串
*/

var lengthOfLongestSubstring = function (s: string): number {
    let arr: string[] = []
    let nums = 0
    for (let i = 0; i < s.length; i++) {
        let temp = s[i]
        let _index = arr.indexOf(temp)
        if (i && _index > -1) {
            arr.splice(0, _index + 1)
        }
        arr.push(temp)
        nums = Math.max(nums, arr.length)
    }
    return nums
};


// function lengthOfLongestSubstring(s: string): number {
//     let nums: number = 0
//     let _arr: string[] = []
//     for (let index = 0, len = s.length; index < len; index++) {
//       let temp = s[index]
//       index || (nums = 1)
//       let _index = _arr.indexOf(temp)
//       if (index && _index > -1) {
//           _arr.splice(0,_index + 1)
//       }
//       _arr.push(temp)
//       nums = Math.max(nums, _arr.length)
//     }
//     return nums
//   }


function max(s: string) {
    let arr: string[] = []
    let max = 0
    for (let i of s) {
        let index = arr.indexOf(i)
        arr.push(i)
        if (index !== -1) {
            arr.splice(0, index + 1)
        }
        max = Math.max(arr.length, max)
    }
    return max
}


function maxLength(s: string) {
    let arr: string[] = []
    let max = 0
    for (let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i])
        if (index !== -1) {
            arr.splice(0, index + 1)
        }
        arr.push(s[i])
        max = Math.max(arr.length, max)
    }
    return max
}



let a = "pwwkew"
console.log(max(a))
console.log(maxLength(a))