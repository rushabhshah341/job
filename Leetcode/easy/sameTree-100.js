var isSameTree = function (p, q) {
    if (p === null || q === null) return false;
    if (p === q) return true;

    if (p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    } else {
        return false;
    }
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

isSameTree([1,2,3],[1,2,3]);

// https://leetcode.com/submissions/detail/172761549/