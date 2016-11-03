var Grid //包含网格节点信息
 = (function () {
    function Grid //包含网格节点信息
        (numCols, numRows, data) {
        this.nodes = [];
        this.numCols = numCols;
        this.numRows = numRows;
        this.nodes = new Array();
        for (var i = 0; i < this.numCols; i++) {
            this.nodes[i] = new Array();
            for (var j = 0; j < this.numRows; j++) {
                this.nodes[i][j] = new node(i, j);
                this.nodes[i][j].walkable = data[i + j * this.numRows].walkable;
            }
        }
    }
    var d = __define,c=Grid,p=c.prototype;
    p.getNode = function (x, y) {
        return this.nodes[x][y];
    };
    p.setStartNode = function (x, y) {
        this.startNode = this.nodes[x][y];
    };
    p.setEndNode = function (x, y) {
        this.endNode = this.nodes[x][y];
    };
    p.setWalkable = function (x, y, value) {
        this.nodes[x][y].walkable = value;
    };
    p.getEndNode = function () {
        return this.endNode;
    };
    p.getStartNode = function () {
        return this.startNode;
    };
    p.getNumCols = function () {
        return this.numCols;
    };
    p.getNumRows = function () {
        return this.numRows;
    };
    return Grid //包含网格节点信息
    ;
}());
egret.registerClass(Grid //包含网格节点信息
,'Grid');
//# sourceMappingURL=Grid.js.map