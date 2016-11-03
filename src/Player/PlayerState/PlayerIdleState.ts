class PlayerIdleState extends PlayerState
{
    onEnter()
    {
        this.context.ifIdle = true;
        this.context.animationOfIdle();
    }

    onExit()
    {
        this.context.ifIdle = false;
    }
}