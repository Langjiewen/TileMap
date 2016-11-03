class Grid//包含网格节点信息
{
    startNode: node;
    endNode: node;
    nodes: node[][] = [];
    numCols: number;//列
    numRows: number;//行

    constructor(numCols: number,numRows: number,data: TileData [])
    {
        this.numCols = numCols;
        this.numRows = numRows;
        this.nodes = new Array();

        for(var i:number = 0; i < this.numCols; i++)
        {
            this.nodes[i] = new Array();
            for(var j:number =0; j < this.numRows; j++)
            {
                this.nodes[i][j] = new node(i,j);
                this.nodes[i][j].walkable = data[i + j*this.numRows].walkable;
            }
        }
    }

    public getNode(x: number,y: number)
    {
        return this.nodes[x][y] as node;
    }

    public setStartNode(x: number,y: number)
    {
        this.startNode = this.nodes[x][y] as node;
    }

    public setEndNode(x: number,y: number)
    {
        this.endNode = this.nodes[x][y] as node;
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