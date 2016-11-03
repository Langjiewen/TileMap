class PlayerStateMachine
{
    currentState:PlayerState;

    setState(s: PlayerState)    
    {
        if(this.currentState != null)
        {
            this.currentState.onExit();
        }

        this.currentState = s;
        s.onEnter();
    }
}