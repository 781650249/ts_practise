// 4.寻找两个正序数组的中位数

//给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。



function middleNum(nums1: number[], nums2: number[]) {
    let num = nums1.concat(nums2)
    let len = num.length;

    if (len && len % 2 === 0) {
        return (num[len / 2 - 1] + num[len / 2]) / 2
    } else {
        return num[Math.floor(len / 2)]
    }
}
let nums1 = [0,0], nums2 = [0,1]
console.log(middleNum(nums1,nums2))