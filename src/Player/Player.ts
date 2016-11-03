class Player extends egret.DisplayObjectContainer
{
    character: egret.Bitmap;
    ifIdle:boolean;
    ifWalk:boolean;
    currentState: PlayerStateMachine;

    constructor()
    {
        super();

        this.character = new egret.Bitmap;
        this.character.texture = RES.getRes("idle1.png");
        this.character.width = 64;
        this.character.height = 64;
        this.character.anchorOffsetX = this.character.width/2;
        this.character.anchorOffsetY = this.character.height/2;
        this.character.x = 32;
        this.character.y = 32;
        this.addChild(this.character);

        this.ifIdle = true;
        this.ifWalk = false;

        this.currentState = new PlayerStateMachine();
    }

    public move(targetX: number,targetY: number)
    {
        egret.Tween.removeTweens(this.character);

        if (targetX > this.character.x)
        {
            this.character.skewY = 180;
        }
        else
        {
            this.character.skewY = 0; 
        }
        
        this.currentState.setState (new PlayerWalkState(this));
        egret.Tween.get(this.character).to({ x: targetX, y: targetY }, 2000).call( function(){this.idle()} ,this);
    }

    public idle()
    {
        this.currentState.setState(new PlayerIdleState(this));
    }

    public animationOfIdle()
    {
        var list = ["idle1_png", "idle2_png", "idle3_png"];
        var count = -1;

        egret.Ticker.getInstance().register(() => {
            count = count + 0.2;
            if (count >= list.length)
             {
                count = 0;
            }
            this.character.texture = RES.getRes(list[Math.floor(count)]);
        }, this);
    }

    public animationOfWalk()
    {
        var list = ["walk1_png", "walk2_png", "walk3_png", "walk4_png", "walk5_png", "walk6_png", "walk7_png", "walk8_png", "walk9_png", "walk10_png", "walk11_png", "walk12_png","walk13_png","walk14_png","walk15_png","walk16_png"];
        var count = -1;

        egret.Ticker.getInstance().register(() => {
            count = count + 0.2;
            if (count >= list.length) 
            {
                count = 0;
            }
            this.character.texture = RES.getRes(list[Math.floor(count)]);
        },this);        
    }
}