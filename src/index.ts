/* 
将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
标签：字符串


整体的思路是遍历字符串，遍历过程中将每行都看成新的字符串构成字符串数组，最后再将该数组拼接起来即可
如果 numRows=1numRows=1 则说明当前字符串即为结果，直接返回
否则整个字符串需要经历，向下向右，向下向右，这样的反复循环过程，设定 downdown 变量表示是否向下，locloc 变量表示当前字符串数组的下标
如果 downdown 为 truetrue，则 loc+=1loc+=1，字符串数组下标向后移动，将当前字符加入当前字符串中
如果 downdown 为 falsefalse，则表示向右，则 loc-=1loc−=1，字符串数组下标向前移动，将当前字符加入当前字符串中
时间复杂度：O(n)O(n)，nn为字符串s的长度



输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"
*/

/* 

Reduce遍历字符串
循环周期l = numRows * 2 - 2
，根据下标判断当前字符在第几行y = Math.min(i % l, l - i % l)
y作为下标，将当前字符依次放入p[y]
数组有序，y小，在前面
y相同，在同一行
同一行的顺序，与遍历字符串的顺序一致（+=即可）

*/



function sort(s: string, numRows: number) {
    if (numRows == 1)
        return s;

    const len = Math.min(s.length, numRows);
    const rows = [];
    for (let i = 0; i < len; i++) rows[i] = "";
    let loc = 0;
    let down = false;

    for (const c of s) {
        rows[loc] += c;
        if (loc == 0 || loc == numRows - 1)
            down = !down;
        loc += down ? 1 : -1;
    }

    let ans = "";
    for (const row of rows) {
        ans += row;
    }
    return ans;

}


console.log(sort('PAYPALISHIRING', 2))