class PlayerIdleState extends PlayerState
{
    onEnter()
    {
        this.context.ifIdle = true;
        this.context.ifWalk = false;
        this.context.currentState = this;
        this.context.animationOfIdle();
    }

    onExit()
    {
        this.context.ifIdle = false;
        this.context.ifWalk = true;
    }
}