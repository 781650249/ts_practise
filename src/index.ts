// 5. 最长回文子串

import { rejects } from "assert"


//给你一个字符串 s，找到 s 中最长的回文子串。
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。

/* 
这一题，调试了很多次，每次都觉得ok了，但其实还有问题，最后终于做出来了，
最重要的时palindrome函数，它是用来进行波纹方式的回文判断，重要的是回文其实有两种结果
奇数长度的回文结果：'aca'、'aaa'、'a'等等
而偶数长度的回文结果：'aaaa'、'aa'等等
区分好这一点，对于我们的判定回文，有很大的帮助，代码如下所示：
*/

let s = "babad"

/* 
aba
aa
abab

ababa
*/


function maxStr(str: string) {
    let len = str.length
    let maxLen = 0
    let res = ''
    for (let i = 0; i < len; i++) {
        const s = isCompane(str, i)
        if (s.length > maxLen) {
            maxLen = s.length
            res = s
        }
    }
    return res
}

function isCompane(s: string, index: number) {
    let center = index
    let resJ = s[center]
    let resO = ''
    let isJ = true;
    let isO = true;

    while (index-- && (isJ || isO)) {
        if (s[index] === s[center * 2 - index] && isJ) {
            resJ = s[index] + resJ + s[index]
        } else {
            isJ = false
        }
        if (s[index] === s[center * 2 - index - 1] && isO) {
            resO = s[index] + resO + s[index]
        } else {
            isO = false
        }
    }
    return resO.length > resJ.length ? resO : resJ
}

console.log(maxStr(s))


