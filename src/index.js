
/**
 *
 * @param {*} val
 */
function node(val) {
    this.val = val;
    this.next = null
}


let node1 = new node(1)
let node2 = new node(2)
let node3 = new node(3)
let node4 = new node(4)
let node5 = new node(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5


/* 
链表排序 逆置（数组方法）
*/
// let arr = []
// function bianli(root) {
//   if(root ==null) return 
//   arr.push(root.val)
//   bianli(root.next)
//   return arr.reverse().join('')
// }

// let resArr  = bianli(node1)
// console.log(resArr,'resArr')


/* 
链表逆置 先找指向null的节点 
*/

// function nizhi(root) {
//     if (root.next == null) return root
//     return nizhi(root.next)
// }
// console.log(nizhi(node1))  // node5


/* 
  以上方法不行 得采用 root.next.next 来逆置
*/

function nizhi(root) {
    if (root.next.next == null) {  // node4 
        root.next.next = root   //  5的next 本来指向null  让它指向4   暂时4让的Next指向空
        return root.next  // node5
    } else {
        let result = nizhi(root.next)
        root.next.next = root
        root.next =  null
        return result
    }
}
let a  = nizhi(node1)

function bianli(root){
    if(root === null) return null
    console.log(root.val)
    bianli(root.next)
}

console.log(bianli(a))