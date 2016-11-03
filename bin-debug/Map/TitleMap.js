var TileMap = (function (_super) {
    __extends(TileMap, _super);
    function TileMap() {
        _super.call(this);
        this.init();
        console.log(config.length);
    }
    var d = __define,c=TileMap,p=c.prototype;
    p.init = function () {
        for (var i = 0; i < config.length; i++) {
            var data = config[i];
            var tile = new Tile(data);
            this.addChild(tile);
        }
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var localX = e.localX;
            var localY = e.localY;
            var gridX = Math.floor(localX / TileMap.TILE_SIZE);
            var gridY = Math.floor(localY / TileMap.TILE_SIZE);
            console.log(gridX, gridY);
        }, this);
    };
    TileMap.TILE_SIZE = 64;
    return TileMap;
}(egret.DisplayObjectContainer));
egret.registerClass(TileMap,'TileMap');
var config = [
    { x: 0, y: 0, walkable: true, image: "ground_jpg" },
    { x: 1, y: 0, walkable: true, image: "ground_jpg" },
    { x: 2, y: 0, walkable: true, image: "ground_jpg" },
    { x: 3, y: 0, walkable: false, image: "barrier_jpg" },
    { x: 4, y: 0, walkable: true, image: "ground_jpg" },
    { x: 5, y: 0, walkable: true, image: "ground_jpg" },
    { x: 6, y: 0, walkable: true, image: "ground_jpg" },
    { x: 7, y: 0, walkable: false, image: "barrier_jpg" },
    { x: 8, y: 0, walkable: false, image: "barrier_jpg" },
    { x: 9, y: 0, walkable: true, image: "ground_jpg" },
    { x: 0, y: 1, walkable: true, image: "ground_jpg" },
    { x: 1, y: 1, walkable: false, image: "barrier_jpg" },
    { x: 2, y: 1, walkable: true, image: "ground_jpg" },
    { x: 3, y: 1, walkable: true, image: "ground_jpg" },
    { x: 4, y: 1, walkable: true, image: "ground_jpg" },
    { x: 5, y: 1, walkable: false, image: "barrier_jpg" },
    { x: 6, y: 1, walkable: true, image: "ground_jpg" },
    { x: 7, y: 1, walkable: false, image: "barrier_jpg" },
    { x: 8, y: 1, walkable: false, image: "barrier_jpg" },
    { x: 9, y: 1, walkable: true, image: "ground_jpg" },
    { x: 0, y: 2, walkable: true, image: "ground_jpg" },
    { x: 1, y: 2, walkable: true, image: "ground_jpg" },
    { x: 2, y: 2, walkable: true, image: "ground_jpg" },
    { x: 3, y: 2, walkable: false, image: "barrier_jpg" },
    { x: 4, y: 2, walkable: true, image: "ground_jpg" },
    { x: 5, y: 2, walkable: true, image: "ground_jpg" },
    { x: 6, y: 2, walkable: true, image: "ground_jpg" },
    { x: 7, y: 2, walkable: false, image: "barrier_jpg" },
    { x: 8, y: 2, walkable: false, image: "barrier_jpg" },
    { x: 9, y: 2, walkable: true, image: "ground_jpg" },
    { x: 0, y: 3, walkable: true, image: "ground_jpg" },
    { x: 1, y: 3, walkable: false, image: "barrier_jpg" },
    { x: 2, y: 3, walkable: true, image: "ground_jpg" },
    { x: 3, y: 3, walkable: true, image: "ground_jpg" },
    { x: 4, y: 3, walkable: true, image: "ground_jpg" },
    { x: 5, y: 3, walkable: false, image: "barrier_jpg" },
    { x: 6, y: 3, walkable: true, image: "ground_jpg" },
    { x: 7, y: 3, walkable: true, image: "ground_jpg" },
    { x: 8, y: 3, walkable: false, image: "barrier_jpg" },
    { x: 9, y: 3, walkable: false, image: "barrier_jpg" },
    { x: 0, y: 4, walkable: true, image: "ground_jpg" },
    { x: 1, y: 4, walkable: true, image: "ground_jpg" },
    { x: 2, y: 4, walkable: true, image: "ground_jpg" },
    { x: 3, y: 4, walkable: false, image: "barrier_jpg" },
    { x: 4, y: 4, walkable: true, image: "ground_jpg" },
    { x: 5, y: 4, walkable: false, image: "barrier_jpg" },
    { x: 6, y: 4, walkable: true, image: "ground_jpg" },
    { x: 7, y: 4, walkable: true, image: "ground_jpg" },
    { x: 8, y: 4, walkable: false, image: "barrier_jpg" },
    { x: 9, y: 4, walkable: true, image: "ground_jpg" },
    { x: 0, y: 5, walkable: false, image: "barrier_jpg" },
    { x: 1, y: 5, walkable: false, image: "barrier_jpg" },
    { x: 2, y: 5, walkable: false, image: "barrier_jpg" },
    { x: 3, y: 5, walkable: false, image: "barrier_jpg" },
    { x: 4, y: 5, walkable: false, image: "barrier_jpg" },
    { x: 5, y: 5, walkable: false, image: "barrier_jpg" },
    { x: 6, y: 5, walkable: true, image: "ground_jpg" },
    { x: 7, y: 5, walkable: false, image: "barrier_jpg" },
    { x: 8, y: 5, walkable: false, image: "barrier_jpg" },
    { x: 9, y: 5, walkable: true, image: "ground_jpg" },
    { x: 0, y: 6, walkable: true, image: "ground_jpg" },
    { x: 1, y: 6, walkable: true, image: "ground_jpg" },
    { x: 2, y: 6, walkable: true, image: "ground_jpg" },
    { x: 3, y: 6, walkable: true, image: "ground_jpg" },
    { x: 4, y: 6, walkable: true, image: "ground_jpg" },
    { x: 5, y: 6, walkable: true, image: "ground_jpg" },
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
    { x: 6, y: 7, walkable: false, image: "barrier_jpg" },
    { x: 7, y: 7, walkable: true, image: "ground_jpg" },
    { x: 8, y: 7, walkable: false, image: "barrier_jpg" },
    { x: 9, y: 7, walkable: true, image: "ground_jpg" },
    { x: 0, y: 8, walkable: true, image: "ground_jpg" },
    { x: 1, y: 8, walkable: false, image: "barrier_jpg" },
    { x: 2, y: 8, walkable: true, image: "ground_jpg" },
    { x: 3, y: 8, walkable: true, image: "ground_jpg" },
    { x: 4, y: 8, walkable: false, image: "barrier_jpg" },
    { x: 5, y: 8, walkable: true, image: "ground_jpg" },
    { x: 6, y: 8, walkable: false, image: "barrier_jpg" },
    { x: 7, y: 8, walkable: true, image: "ground_jpg" },
    { x: 8, y: 8, walkable: false, image: "barrier_jpg" },
    { x: 9, y: 8, walkable: true, image: "ground_jpg" },
    { x: 0, y: 9, walkable: true, image: "ground_jpg" },
    { x: 1, y: 9, walkable: false, image: "barrier_jpg" },
    { x: 2, y: 9, walkable: true, image: "ground_jpg" },
    { x: 3, y: 9, walkable: false, image: "barrier_jpg" },
    { x: 4, y: 9, walkable: false, image: "barrier_jpg" },
    { x: 5, y: 9, walkable: true, image: "ground_jpg" },
    { x: 6, y: 9, walkable: true, image: "ground_jpg" },
    { x: 7, y: 9, walkable: true, image: "ground_jpg" },
    { x: 8, y: 9, walkable: false, image: "barrier_jpg" },
    { x: 9, y: 9, walkable: true, image: "ground_jpg" },
];
//# sourceMappingURL=TitleMap.js.map