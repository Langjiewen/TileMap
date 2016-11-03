var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        _super.call(this);
        this.character = new egret.Bitmap;
        this.character.texture = RES.getRes("idle1.png");
        this.character.width = 64;
        this.character.height = 64;
        this.character.anchorOffsetX = this.character.width / 2;
        this.character.anchorOffsetY = this.character.height / 2;
        this.character.x = 32;
        this.character.y = 32;
        this.addChild(this.character);
        this.ifIdle = true;
        this.ifWalk = false;
        this.currentState = new PlayerStateMachine();
    }
    var d = __define,c=Player,p=c.prototype;
    p.move = function (targetX, targetY) {
        if (targetX > this.character.x) {
            this.character.skewY = 180;
        }
        else {
            this.character.skewY = 0;
        }
        this.currentState.setState(new PlayerWalkState(this));
    };
    p.idle = function () {
        this.currentState.setState(new PlayerIdleState(this));
    };
    p.animationOfIdle = function () {
        var _this = this;
        var list = ["idle1_png", "idle2_png", "idle3_png"];
        var count = -1;
        egret.Ticker.getInstance().register(function () {
            count = count + 0.2;
            if (count >= list.length) {
                count = 0;
            }
            _this.character.texture = RES.getRes(list[Math.floor(count)]);
        }, this);
    };
    p.animationOfWalk = function () {
        var _this = this;
        var list = ["walk1_png", "walk2_png", "walk3_png", "walk4_png", "walk5_png", "walk6_png", "walk7_png", "walk8_png", "walk9_png", "walk10_png", "walk11_png", "walk12_png", "walk13_png", "walk14_png", "walk15_png", "walk16_png"];
        var count = -1;
        egret.Ticker.getInstance().register(function () {
            count = count + 0.2;
            if (count >= list.length) {
                count = 0;
            }
            _this.character.texture = RES.getRes(list[Math.floor(count)]);
        }, this);
    };
    return Player;
}(egret.DisplayObjectContainer));
egret.registerClass(Player,'Player');
//# sourceMappingURL=Player.js.map