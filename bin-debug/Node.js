var Node = (function () {
    function Node(x, y) {
        this.walkable = true;
        this.x = x;
        this.y = y;
    }
    var d = __define,c=Node,p=c.prototype;
    return Node;
}());
egret.registerClass(Node,'Node');
