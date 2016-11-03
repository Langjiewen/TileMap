var AStar //完成寻路工作
 = (function () {
    function AStar //完成寻路工作
        (grid) {
        this.open = []; //待查列表
        this.closed = []; //已查列表
        this.path = []; //最终路径的数组 节点列表
        this.straightCost = 1;
        this.diagCost = Math.SQRT2;
        this.grid = grid;
        this.startNode = grid.startNode;
        this.endNode = grid.endNode;
    }
    var d = __define,c=AStar,p=c.prototype;
    p.diagonal = function (node) {
        var dx = Math.abs(node.x - this.endNode.x);
        var dy = Math.abs(node.y - this.endNode.y);
        var diag = Math.min(dx, dy);
        var staright = dx + dy;
        return this.diagCost * diag + this.straightCost * (staright - 2 * diag);
    };
    p.isOpen = function (node) {
        for (var i = 0; i < this.open.length; i++) {
            if (this.open[i] == node) {
                return true;
            }
        }
        return false;
    };
    p.isClosed = function (node) {
        for (var i = 0; i < this.closed.length; i++) {
            if (this.closed[i] == node) {
                return true;
            }
        }
        return false;
    };
    p.buildPath = function () {
        this.path = new Array(); //为路径建立一个新数组
        var node = this.endNode;
        this.path.push(node); //把终止节点放入数组
        while (node != this.startNode) {
            //将终止节点的父结点放入数组，unshift将各个新节点添加到数组的开始位置，保证数组中元素的顺序
            node = node.parent;
            this.path.unshift(node);
        }
    };
    p.search = function () {
        var node = this.startNode; //建立一个节点变量，跟踪当前节点，这个节点最初是起始节点
        while (node != this.endNode) {
            var startX = Math.max(0, node.x - 1);
            var endX = Math.min(this.grid.numCols - 1, node.x + 1);
            var startY = Math.max(0, node.y - 1);
            var endY = Math.min(this.grid.numRows - 1, node.y + 1);
            //双重循环，检查当前节点周围的所有节点，从x-1循环到x+1以及从y-1循环到y+1 且确保不会访问边界以外的区域，保证索引永远在网格内
            for (var i = startX; i <= endX; i++) {
                for (var j = startY; j <= endY; j++) {
                    var test = this.grid.nodes[i][j]; //从网格得到测试节点
                    //如果测试节点就是当前节点或测试节点不可通过，则直接将其忽略，移向下一个节点
                    if (test == node || !test.walkable || !this.grid.nodes[node.x][test.y].walkable || !this.grid.nodes[test.x][node.y].walkable) {
                        continue;
                    }
                    //确定合法测试节点的代价
                    //确定g代价即从起始节点到这个测试节点的代价
                    //取当前节点的g，加上从当前节点到测试节点的代价
                    //如果测试节点与当前节点在水平线上或者垂直线上则指定straightCost
                    //如果测试节点在当前节点的对角线上，则指定diagCost
                    var cost = this.straightCost;
                    if (!(node.x == test.x || node.y == test.y)) {
                        cost = this.diagCost;
                    }
                    var g = node.g + cost;
                    var h = this.diagonal(test);
                    var f = g + h;
                    //如果一个节点已经在待查列表或者已查列表中，则不需要再坚持，因为它已经被处理过了
                    //但是到达一个节点所取的路径可能或得到一个新的代价，这个代价要小于第一次为它计算的代价
                    //所以即使一个节点已经在待查列表或者已查列表中，最好还是将当前代价与上一次计算得到的代价进行比较
                    if (this.isOpen(test) || this.isClosed(test)) {
                        if (test.f > f) {
                            test.f = f;
                            test.g = g;
                            test.h = h;
                            test.parent = node;
                        }
                    }
                    else {
                        test.f = f;
                        test.g = g;
                        test.h = h;
                        test.parent = node;
                        this.open.push(test);
                    }
                }
            }
            //已检查当前节点周围的所有合法节点，把它放入已查列表
            this.closed.push(node);
            //需要查找下一个当前节点重复这个过程，为此要检查待查列表，并找到其中代价最小的节点
            //如果待查列表为空，说明起始节点和终止节点间不可能有路径
            if (this.open.length == 0) {
                return false;
            }
            //如果待查列表中还有节点，则找出其中代价最小的一个节点，按各个元素的f属性对列表排序，取列表最下面的元素
            this.open.sort(function (a, b) { return a.f - b.f; });
            node = this.open.shift();
        }
        this.buildPath();
        return true;
    };
    p.findPath = function () {
        this.open = new Array(); //创建空的待查列表
        this.closed = new Array(); //创建空的已查列表
        //计算起始节点的代价
        this.startNode.g = 0;
        this.startNode.h = this.diagonal(this.startNode);
        this.startNode.f = this.startNode.g + this.startNode.h;
        return this.search();
    };
    p.getPath = function () {
        return this.path;
    };
    p.manhattan = function (node) {
        return Math.abs(node.x - this.endNode.x) * this.straightCost + Math.abs(node.y + this.endNode.y) * this.straightCost;
    };
    p.euclidiam = function (node) {
        var dx = Math.abs(node.x - this.endNode.x);
        var dy = Math.abs(node.y - this.endNode.y);
        return Math.sqrt(dx * dx + dy * dy) * this.straightCost;
    };
    p.getVisit = function () {
        return this.closed.concat(this.open);
    };
    return AStar //完成寻路工作
    ;
}());
egret.registerClass(AStar //完成寻路工作
,'AStar');
//# sourceMappingURL=AStar.js.map