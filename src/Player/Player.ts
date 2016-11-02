class Player extends egret.DisplayObjectContainer
{
    character: egret.Bitmap;
    ifIdle:boolean;
    ifWalk:boolean;
    currentState: PlayerState;

    constructor()
    {
        super();

        this.character = new egret.Bitmap;
        this.character.texture = RES.getRes("idle1.png");
        this.character.width = 100;
        this.character.height = 100;
        this.character.anchorOffsetX = this.character.width/2;
        this.character.anchorOffsetY = this.character.height/2;
        this.character.x = 32;
        this.character.y = 32;

        this.ifIdle = true;
        this.ifWalk = false;

        this.currentState = new PlayerState(this);

        this.addChild(this.character);
    }

    public move()
    {}

    public idle()
    {
        this.currentState = new PlayerIdleState(this);
    }

    public animationOfIdle()
    {
        var idle = ["idle1_png", "idle2_png", "idle3_png"];
        var count = -1;

        egret.Ticker.getInstance().register(() => {
            count = count + 0.2;
            if (count >= idle.length)
             {
                count = 0;
            }
            this.character.texture = RES.getRes(idle[Math.floor(count)]);
        }, this);
    }

    public animationOfWalk()
    {
        var walk = ["walk1_png", "walk2_png", "walk3_png", "walk4_png", "walk5_png", "walk6_png", "walk7_png", "walk8_png", "walk9_png", "walk10_png", "walk11_png", "walk12_png","walk13_png","walk14_png","walk15_png","walk16_png"];
        var count = -1;

        egret.Ticker.getInstance().register(() => {
            count = count + 0.2;
            if (count >= walk.length) 
            {
                count = 0;
            }
            this.character.texture = RES.getRes(walk[Math.floor(count)]);
        },this);        
    }
}