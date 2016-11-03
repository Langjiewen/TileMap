var PlayerIdleState = (function (_super) {
    __extends(PlayerIdleState, _super);
    function PlayerIdleState() {
        _super.apply(this, arguments);
    }
    var d = __define,c=PlayerIdleState,p=c.prototype;
    p.onEnter = function () {
        this.context.ifIdle = true;
        this.context.animationOfIdle();
    };
    p.onExit = function () {
        this.context.ifIdle = false;
    };
    return PlayerIdleState;
}(PlayerState));
egret.registerClass(PlayerIdleState,'PlayerIdleState');
//# sourceMappingURL=PlayerIdleState.js.map