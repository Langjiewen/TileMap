class TileNode//存储节点属性
{
    x: number;
    y: number;
    f: number;//一个特定结点的总代价 f=g+h
    g: number;//从起始结点到达某个特点结点的代价
    h: number;//从一个特定结点到达终止结点的估计代价
    walkable: boolean = true;
    parent:TileNode;

    constructor(x: number,y: number)
    {
        this.x = x;
        this.y = y;
    }
}