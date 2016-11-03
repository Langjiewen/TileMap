class TileMap extends egret.DisplayObjectContainer
{
    public static TILE_SIZE: number = 64;

    player: Player;
    astar: AStar;
    index: number;
    moveX: number[] = [];
    moveY: number[] = [];

    constructor(player: Player)
    {
        super();
        this.init();
        this.player = player;
        this.index = 0;
    }

    private init()
    {
        for(var i = 0; i < config.length; i++)
        {
            var data = config[i];
            var tile = new Tile(data);
            this.addChild(tile);
        }      

        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,(e: egret.TouchEvent) => {

            var playerX = Math.floor(this.player.character.x / TileMap.TILE_SIZE);
            var playerY = Math.floor(this.player.character.y / TileMap.TILE_SIZE);

            var localX = Math.floor(e.localX / TileMap.TILE_SIZE);
            var localY = Math.floor(e.localY / TileMap.TILE_SIZE);

            var grid = new Grid(10,10,config);
            grid.setStartNode(playerX,playerY);
            grid.setEndNode(localX,localY);

            this.astar = new AStar(grid);
            if(this.astar.findPath())
            {
                this.astar.path.map((tile) => {
                    console.log(`x:${tile.x},y:${tile.y}`)
                });
                
                this.index = 1;
                this.moveX[this.index] = this.astar.path[this.index].x * TileMap.TILE_SIZE + TileMap.TILE_SIZE / 2;
                this.moveY[this.index] = this.astar.path[this.index].y * TileMap.TILE_SIZE + TileMap.TILE_SIZE / 2;
                this.player.move(this.moveX[this.index], this.moveY[this.index]);
                egret.Tween.get(this.player.character).to({ x: this.moveX[this.index], y: this.moveY[this.index] }, 600).wait(10).call(function () { this.player.idle() }, this);
                
                var timer: egret.Timer = new egret.Timer(1000, this.astar.path.length-2);
                //注册事件侦听器
                timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
                timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
                //开始计时
                timer.start();
            }

        },this);
    }

    private timerFunc() 
    {
        this.index ++;
        this.moveX[this.index] = this.astar.path[this.index].x * TileMap.TILE_SIZE + TileMap.TILE_SIZE / 2;
        this.moveY[this.index] = this.astar.path[this.index].y * TileMap.TILE_SIZE + TileMap.TILE_SIZE / 2;

            this.player.move(this.moveX[this.index], this.moveY[this.index]);
            egret.Tween.get(this.player.character).to({ x: this.moveX[this.index], y: this.moveY[this.index] }, 600).wait(10).call(function () { this.player.idle() }, this);

    }
    private timerComFunc() 
    {
        console.log("计时结束");
    }
}

var config: TileData[] = [

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
]