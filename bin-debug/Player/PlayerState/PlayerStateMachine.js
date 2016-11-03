var PlayerStateMachine = (function () {
    function PlayerStateMachine() {
    }
    var d = __define,c=PlayerStateMachine,p=c.prototype;
    p.setState = function (s) {
        if (this.currentState != null) {
            this.currentState.onExit();
        }
        this.currentState = s;
        s.onEnter();
    };
    return PlayerStateMachine;
}());
egret.registerClass(PlayerStateMachine,'PlayerStateMachine');
//# sourceMappingURL=PlayerStateMachine.js.map