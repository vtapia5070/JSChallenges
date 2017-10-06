function Tree (value) {
    this.value = value;
    this.children = [];
}

Tree.prototype.addChild = function (value) {
    var child = new Tree(value);
    this.children.push(child);
}

var tree = new Tree(1);
var branch1 = tree.addChild(2);
var branch2 = branch1.addChild(3);
var anotherBranch1 = tree.addChild(4);
