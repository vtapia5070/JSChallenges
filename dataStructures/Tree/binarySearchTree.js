function BST (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BST.prototype.addChild = function (value) {
    var node = value || this.value;
    while (node.value !== null) {

        if (value < node.value) {
            // left
            if (node.left === null) {
                node.left = new BST(value);
            } else {
                node = node.left;
            }
        }

        if (value > node.value) {
            if (node.right === null) {
                node.right = new BST(value);
            } else {
                node = node.right;
            }
        }
    }
};
