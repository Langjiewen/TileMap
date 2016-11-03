class node
{
    x: number;
    y: number;
    f: number;
    g: number;
    h: number;
    walkable: boolean;
    parent: node;

    constructor(x: number,y: number)
    {
        this.x = x;
        this.y = y;
    }
}