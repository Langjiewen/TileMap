class Grid//包含网格节点信息
{
    startNode: TileNode;
    endNode: TileNode;
    nodes: TileNode[][];
    numCols: number;
    numRows: number;

    constructor(numCols: number,numRows: number)
    {
        this.numCols = numCols;
        this.numRows = numRows;
        this.nodes = new Array();

        for(var i:number = 0; i < this.numCols; i++)
        {
            this.nodes[i] = new Array();
            for(var j:number =0; j < this.numRows; j++)
            {
                this.nodes[i][j] = new TileNode(i,j);
            }
        }
    }

    public getNode(x: number,y: number)
    {
        return this.nodes[x][y] as TileNode;
    }

    public setStartNode(x: number,y: number)
    {
        this.startNode = this.nodes[x][y] as TileNode;
    }

    public setEndNode(x: number,y: number)
    {
        this.endNode = this.nodes[x][y] as TileNode;
    }

    public setWalkable(x: number,y: number,value: boolean)
    {
        this.nodes[x][y].walkable = value;
    }

    public getEndNode()
    {
        return this.endNode;
    }

    public getStartNode()
    {
        return this.startNode;
    }

    public getNumCols()
    {
        return this.numCols;
    }

    public getNumRows()
    {
        return this.numRows;
    }
}