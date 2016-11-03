var TileMap = (function (_super) {
    __extends(TileMap, _super);
    function TileMap(player) {
        _super.call(this);
        this.moveX = [];
        this.moveY = [];
        this.init();
        this.player = player;
        this.index = 0;
    }
    var d = __define,c=TileMap,p=c.prototype;
    p.init = function () {
        var _this = this;
        for (var i = 0; i < config.length; i++) {
            var data = config[i];
            var tile = new Tile(data);
            this.addChild(tile);
        }
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var playerX = Math.floor(_this.player.character.x / TileMap.TILE_SIZE);
            var playerY = Math.floor(_this.player.character.y / TileMap.TILE_SIZE);
            var localX = Math.floor(e.localX / TileMap.TILE_SIZE);
            var localY = Math.floor(e.localY / TileMap.TILE_SIZE);
            var grid = new Grid(10, 10, config);
            grid.setStartNode(playerX, playerY);
            grid.setEndNode(localX, localY);
            _this.astar = new AStar(grid);
            if (_this.astar.findPath()) {
                _this.astar.path.map(function (tile) {
                    console.log("x:" + tile.x + ",y:" + tile.y);
                });
                _this.index = 1;
                _this.moveX[_this.index] = _this.astar.path[_this.index].x * TileMap.TILE_SIZE + TileMap.TILE_SIZE / 2;
                _this.moveY[_this.index] = _this.astar.path[_this.index].y * TileMap.TILE_SIZE + TileMap.TILE_SIZE / 2;
                _this.player.move(_this.moveX[_this.index], _this.moveY[_this.index]);
                egret.Tween.get(_this.player.character).to({ x: _this.moveX[_this.index], y: _this.moveY[_this.index] }, 600).wait(10).call(function () { this.player.idle(); }, _this);
                var timer = new egret.Timer(1000, _this.astar.path.length - 2);
                //注册事件侦听器
                timer.addEventListener(egret.TimerEvent.TIMER, _this.timerFunc, _this);
                timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, _this.timerComFunc, _this);
                //开始计时
                timer.start();
            }
        }, this);
    };
    p.timerFunc = function () {
        this.index++;
        this.moveX[this.index] = this.astar.path[this.index].x * TileMap.TILE_SIZE + TileMap.TILE_SIZE / 2;
        this.moveY[this.index] = this.astar.path[this.index].y * TileMap.TILE_SIZE + TileMap.TILE_SIZE / 2;
        this.player.move(this.moveX[this.index], this.moveY[this.index]);
        egret.Tween.get(this.player.character).to({ x: this.moveX[this.index], y: this.moveY[this.index] }, 600).wait(10).call(function () { this.player.idle(); }, this);
    };
    p.timerComFunc = function () {
        console.log("计时结束");
    };
    TileMap.TILE_SIZE = 64;
    return TileMap;
}(egret.DisplayObjectContainer));
egret.registerClass(TileMap,'TileMap');
var config = [
    { x: 0, y: 0, walkable: true, image: "ground_jpg" },
    { x: 1, y: 0, walkable: true, image: "ground_jpg" },
    { x: 2, y: 0, walkable: true, image: "ground_jpg" },
    { x: 3, y: 0, walkable: true, image: "ground_jpg" },
    { x: 4, y: 0, walkable: true, image: "ground_jpg" },
    { x: 5, y: 0, walkable: false, image: "barrier_jpg" },
    { x: 6, y: 0, walkable: true, image: "ground_jpg" },
    { x: 7, y: 0, walkable: true, image: "ground_jpg" },
    { x: 8, y: 0, walkable: true, image: "ground_jpg" },
    { x: 9, y: 0, walkable: false, image: "barrier_jpg" },
    { x: 0, y: 1, walkable: true, image: "ground_jpg" },
    { x: 1, y: 1, walkable: true, image: "ground_jpg" },
    { x: 2, y: 1, walkable: true, image: "ground_jpg" },
    { x: 3, y: 1, walkable: true, image: "ground_jpg" },
    { x: 4, y: 1, walkable: false, image: "barrier_jpg" },
    { x: 5, y: 1, walkable: true, image: "ground_jpg" },
    { x: 6, y: 1, walkable: true, image: "ground_jpg" },
    { x: 7, y: 1, walkable: true, image: "ground_jpg" },
    { x: 8, y: 1, walkable: true, image: "ground_jpg" },
    { x: 9, y: 1, walkable: true, image: "ground_jpg" },
    { x: 0, y: 2, walkable: false, image: "barrier_jpg" },
    { x: 1, y: 2, walkable: true, image: "ground_jpg" },
    { x: 2, y: 2, walkable: true, image: "ground_jpg" },
    { x: 3, y: 2, walkable: false, image: "barrier_jpg" },
    { x: 4, y: 2, walkable: true, image: "ground_jpg" },
    { x: 5, y: 2, walkable: true, image: "ground_jpg" },
    { x: 6, y: 2, walkable: false, image: "barrier_jpg" },
    { x: 7, y: 2, walkable: false, image: "barrier_jpg" },
    { x: 8, y: 2, walkable: false, image: "barrier_jpg" },
    { x: 9, y: 2, walkable: true, image: "ground_jpg" },
    { x: 0, y: 3, walkable: true, image: "ground_jpg" },
    { x: 1, y: 3, walkable: true, image: "ground_jpg" },
    { x: 2, y: 3, walkable: false, image: "barrier_jpg" },
    { x: 3, y: 3, walkable: true, image: "ground_jpg" },
    { x: 4, y: 3, walkable: true, image: "ground_jpg" },
    { x: 5, y: 3, walkable: true, image: "ground_jpg" },
    { x: 6, y: 3, walkable: true, image: "ground_jpg" },
    { x: 7, y: 3, walkable: true, image: "ground_jpg" },
    { x: 8, y: 3, walkable: false, image: "barrier_jpg" },
    { x: 9, y: 3, walkable: false, image: "barrier_jpg" },
    { x: 0, y: 4, walkable: true, image: "ground_jpg" },
    { x: 1, y: 4, walkable: true, image: "ground_jpg" },
    { x: 2, y: 4, walkable: true, image: "ground_jpg" },
    { x: 3, y: 4, walkable: true, image: "ground_jpg" },
    { x: 4, y: 4, walkable: true, image: "ground_jpg" },
    { x: 5, y: 4, walkable: true, image: "ground_jpg" },
    { x: 6, y: 4, walkable: false, image: "barrier_jpg" },
    { x: 7, y: 4, walkable: true, image: "ground_jpg" },
    { x: 8, y: 4, walkable: false, image: "barrier_jpg" },
    { x: 9, y: 4, walkable: true, image: "ground_jpg" },
    { x: 0, y: 5, walkable: true, image: "ground_jpg" },
    { x: 1, y: 5, walkable: true, image: "ground_jpg" },
    { x: 2, y: 5, walkable: false, image: "barrier_jpg" },
    { x: 3, y: 5, walkable: false, image: "barrier_jpg" },
    { x: 4, y: 5, walkable: false, image: "barrier_jpg" },
    { x: 5, y: 5, walkable: true, image: "ground_jpg" },
    { x: 6, y: 5, walkable: true, image: "ground_jpg" },
    { x: 7, y: 5, walkable: false, image: "barrier_jpg" },
    { x: 8, y: 5, walkable: false, image: "barrier_jpg" },
    { x: 9, y: 5, walkable: true, image: "ground_jpg" },
    { x: 0, y: 6, walkable: true, image: "ground_jpg" },
    { x: 1, y: 6, walkable: true, image: "ground_jpg" },
    { x: 2, y: 6, walkable: true, image: "ground_jpg" },
    { x: 3, y: 6, walkable: true, image: "ground_jpg" },
    { x: 4, y: 6, walkable: true, image: "ground_jpg" },
    { x: 5, y: 6, walkable: false, image: "barrier_jpg" },
    { x: 6, y: 6, walkable: true, image: "ground_jpg" },
    { x: 7, y: 6, walkable: true, image: "ground_jpg" },
    { x: 8, y: 6, walkable: true, image: "ground_jpg" },
    { x: 9, y: 6, walkable: true, image: "ground_jpg" },
    { x: 0, y: 7, walkable: false, image: "barrier_jpg" },
    { x: 1, y: 7, walkable: false, image: "barrier_jpg" },
    { x: 2, y: 7, walkable: false, image: "barrier_jpg" },
    { x: 3, y: 7, walkable: false, image: "barrier_jpg" },
    { x: 4, y: 7, walkable: true, image: "ground_jpg" },
    { x: 5, y: 7, walkable: false, image: "barrier_jpg" },
    { x: 6, y: 7, walkable: true, image: "ground_jpg" },
    { x: 7, y: 7, walkable: false, image: "barrier_jpg" },
    { x: 8, y: 7, walkable: true, image: "ground_jpg" },
    { x: 9, y: 7, walkable: true, image: "ground_jpg" },
    { x: 0, y: 8, walkable: true, image: "ground_jpg" },
    { x: 1, y: 8, walkable: true, image: "ground_jpg" },
    { x: 2, y: 8, walkable: true, image: "ground_jpg" },
    { x: 3, y: 8, walkable: true, image: "ground_jpg" },
    { x: 4, y: 8, walkable: true, image: "ground_jpg" },
    { x: 5, y: 8, walkable: false, image: "barrier_jpg" },
    { x: 6, y: 8, walkable: true, image: "ground_jpg" },
    { x: 7, y: 8, walkable: true, image: "ground_jpg" },
    { x: 8, y: 8, walkable: false, image: "barrier_jpg" },
    { x: 9, y: 8, walkable: true, image: "ground_jpg" },
    { x: 0, y: 9, walkable: true, image: "ground_jpg" },
    { x: 1, y: 9, walkable: true, image: "ground_jpg" },
    { x: 2, y: 9, walkable: true, image: "ground_jpg" },
    { x: 3, y: 9, walkable: true, image: "ground_jpg" },
    { x: 4, y: 9, walkable: true, image: "ground_jpg" },
    { x: 5, y: 9, walkable: false, image: "barrier_jpg" },
    { x: 6, y: 9, walkable: true, image: "ground_jpg" },
    { x: 7, y: 9, walkable: true, image: "ground_jpg" },
    { x: 8, y: 9, walkable: true, image: "ground_jpg" },
    { x: 9, y: 9, walkable: false, image: "barrier_jpg" },
];
//# sourceMappingURL=TitleMap.js.map