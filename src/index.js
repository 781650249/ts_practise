/* 
输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

*/




/* 
前序遍历 preorder = [3,9,20,15,7] 根左右   第一个就是二叉树的根节点
中序遍历 inorder = [9,3,15,20,7] 左根右
    后序遍历 9 15 7 20 3
    3
   / \
  9  20
    /  \
   15   7


它的前序遍历的顺序是：1 2 4 5 3。中序遍历的顺序是：4 2 5 1 3

因为前序遍历的第一个元素就是当前二叉树的根节点。那么，这个值就可以将中序遍历分成 2 个部分。在以上面的例子，中序遍历就被分成了 4 2 5 和 3 两个部分。4 2 5就是左子树，3就是右子树。


*/



/* 
前序:acfgbde

中序:fcgadbe
*/




function node(value) {
    this.value = value
    this.left = null
    this.right = null
}



function buildTree(preTrees, midTrees) {
    if (!preTrees.length || !midTrees.length) {
        return null;
    }

    let nodes = new node(preTrees[0])
    let index = midTrees.indexOf(preTrees[0]) //根节点位置
    nodes.left = buildTree(preTrees.slice(1, index + 1), midTrees.slice(0, index))
    nodes.right = buildTree(preTrees.slice(index + 1), midTrees.slice(index + 1))
    return nodes
}


console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))


/*
    根据前序写出它的中序 后序
*/


// let node1 = new node(3)
// let node2 = new node(9)
// let node3 = new node(20)
// let node4 = new node(15)
// let node5 = new node(7)

// node1.left = node2
// node1.right = node3
// node3.left = node4
// node3.right = node5

// let a = [3, 9, 20, 15, 7]
// function bianli(root) {
//     if (root === null) return
//     bianli(root.left)
//     bianli(root.right)
//     console.log(root.value)
// }

// bianli(node1)