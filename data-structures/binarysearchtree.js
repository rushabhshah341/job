/*jshint esversion: 6 */
// "use strict";

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}


class BST {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }

            };
            return searchTree(node);
        }

    }

    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;

    }
    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }
    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    remove(data) {
        const removeNode = function (node, data) {
            if (node == null) {
                return null;
            }
            if (data == node.data) {
                // node has no children 
                if (node.left == null && node.right == null) {
                    return null;
                }
                // node has no left child 
                if (node.left == null) {
                    return node.right;
                }
                // node has no right child 
                if (node.right == null) {
                    return node.left;
                }
                // node has two children 
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        };
        this.root = removeNode(this.root, data);
    }
    isBalanced(){
        return (this.findMaxHeight() >= this.findMinHeight() - 1);
    }

    findMinHeight(node = this.root){
        if(node == null){
            return -1;
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);

        if(left < right){
            return left + 1; 
        } else {
            return right + 1;
        }
    }

    findMaxHeight(node = this.root){
        if(node == null){
            return -1;
        }
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if(left > right){
            return left + 1;
        } else{
            return right + 1;
        }
    }

    inOrder(){
        var f = function(){};
        if(this.root == null){
            return null;
        } else {
            var result = [];
            f = function traverseInOrder(node){
                if(node.left) traverseInOrder(node.left);
                result.push(node.data);
                if(node.right) traverseInOrder(node.right);
            };
            f(this.root);
            return result;
        }
    }

    preOrder(){
        var e = function(){};
        if(this.root == null){
            return null;
        } else {
            var result = [];
            e = function traversePreOrder(node){
                result.push(node.data);
                if(node.left) traversePreOrder(node.left);
                if(node.right) traversePreOrder(node.right);
            };
            e(this.root);
            return result;
        }
    }

    postOrder(){
        var d = function(){};
        if(this.root == null){
            return null;
        } else {
            var result = [];
            d = function traversePostOrder(node){
                if(node.left) traversePostOrder(node.left);
                if(node.right) traversePostOrder(node.right);
                result.push(node.data);
            };
            d(this.root);
            return result;
        }
    }

    levelOrder(){
        let result = [];
        let Queue =  [];
        if(this.root != null){
            Queue.push(this.root);
            while(Queue.length > 0){
                let node = Queue.shift();
                result.push(node.data);
                console.log("Each level",result, Queue);
                if(node.left != null){
                    Queue.push(node.left);
                }
                if(node.right != null){
                    Queue.push(node.right);
                }
            }
            
            return result;
        } else {
                return null;
        }
    }
}

const bst = new BST();

// bst.add(4);
// bst.add(2);
// bst.add(6);
// bst.add(1);
// bst.add(3);
// bst.add(5);
// bst.add(7);
// console.log(bst);
// bst.remove(4);
// console.log(bst.findMax());
// console.log(bst.findMin());
// console.log(bst);
// bst.remove(2);
// bst.remove(5);
// console.log(bst.findMax());
// console.log(bst.isPresent(4));
// console.log(bst.isPresent(2));
// console.log(bst);

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());

console.log('levelOrder: ' + bst.levelOrder());