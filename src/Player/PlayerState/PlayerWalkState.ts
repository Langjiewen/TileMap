class PlayerWalkState extends PlayerState
{
    onEnter()
    {
        //this.context.ifIdle = false;
        this.context.ifWalk = true;
        this.context.animationOfWalk();
    }

    onExit()
    {
        //this.context.ifIdle = true;
        this.context.ifWalk = false;
    }
}