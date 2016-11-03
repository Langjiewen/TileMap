var PlayerWalkState = (function (_super) {
    __extends(PlayerWalkState, _super);
    function PlayerWalkState() {
        _super.apply(this, arguments);
    }
    var d = __define,c=PlayerWalkState,p=c.prototype;
    p.onEnter = function () {
        //this.context.ifIdle = false;
        this.context.ifWalk = true;
        this.context.animationOfWalk();
    };
    p.onExit = function () {
        //this.context.ifIdle = true;
        this.context.ifWalk = false;
    };
    return PlayerWalkState;
}(PlayerState));
egret.registerClass(PlayerWalkState,'PlayerWalkState');
//# sourceMappingURL=PlayerWalkState.js.map