class Tile extends egret.DisplayObjectContainer
{
    data: TileData;

    constructor(data: TileData)
    {
        super();
        this.data = data;
        var bitmap = new egret.Bitmap();
        this.addChild(bitmap);
        bitmap.texture = RES.getRes(data.image);
        bitmap.scaleX = bitmap.scaleY = 2;

        this.x = data.x * TileMap.TILE_SIZE;
        this.y = data.y * TileMap.TILE_SIZE;
    }
}