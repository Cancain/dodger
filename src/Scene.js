"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var phaser_1 = require("phaser");
var Player_1 = require("./Player");
var sceneConfig = {
    active: false,
    visible: false,
    key: "Game"
};
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.playerCharacter = new Player_1.default(_this);
        _this.isOutOfBounds = function (position, size) {
            var bounds = {
                right: false,
                left: false,
                top: false,
                bottom: false
            };
            if (position.x >= _this.width - size)
                bounds.right = true;
            if (position.x <= size)
                bounds.left = true;
            if (position.y >= _this.height - size)
                bounds.bottom = true;
            if (position.y <= size)
                bounds.top = true;
            return bounds;
        };
        _this.getSize = function () {
            return {
                width: _this.width,
                height: _this.height
            };
        };
        _this.width = 1024;
        _this.height = 768;
        return _this;
    }
    GameScene.prototype.create = function () {
        this.playerCharacter.model = this.add.rectangle(100, 100, this.playerCharacter.getSize(), this.playerCharacter.getSize(), 0xffffff);
        this.physics.add.existing(this.playerCharacter.model);
    };
    GameScene.prototype.update = function () {
        this.playerCharacter.activate();
    };
    return GameScene;
}(phaser_1.Scene));
exports.default = GameScene;
//# sourceMappingURL=Scene.js.map