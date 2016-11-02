class PlayerState implements State
{
    context: Player;

    constructor(player: Player)
    {
        this.context = player;
    }

    onEnter(){}
    onExit(){}
}