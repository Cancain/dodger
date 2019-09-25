"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Main_1 = require("./Main");
var Pistol_1 = require("./Pistol");
var Player = /** @class */ (function () {
    function Player(scene) {
        var _this = this;
        this.size = 10;
        this.movementSpeed = 500;
        this.getSize = function () {
            return _this.size;
        };
        this.getRadius = function () {
            return _this.size * 2;
        };
        this.getMovementSpeed = function () {
            return _this.movementSpeed;
        };
        this.movement = function () {
            var player = _this.model.body;
            var cursorKeys = {
                up: _this.scene.input.keyboard.addKey("W"),
                down: _this.scene.input.keyboard.addKey("S"),
                left: _this.scene.input.keyboard.addKey("A"),
                right: _this.scene.input.keyboard.addKey("D")
            };
            var position = { x: player.x, y: player.y };
            var bounds = Main_1.currentScene.isOutOfBounds(position, _this.getRadius());
            if (cursorKeys.up.isDown && !bounds.top) {
                player.setVelocityY(-_this.movementSpeed);
            }
            else if (cursorKeys.down.isDown && !bounds.bottom) {
                player.setVelocityY(_this.movementSpeed);
            }
            else
                player.setVelocityY(0);
            if (cursorKeys.left.isDown && !bounds.left) {
                player.setVelocityX(-_this.movementSpeed);
            }
            else if (cursorKeys.right.isDown && !bounds.right) {
                player.setVelocityX(_this.movementSpeed);
            }
            else
                player.setVelocityX(0);
        };
        this.shooting = function () {
            var player = _this.model.body;
            var pointer = _this.scene.input.activePointer;
            var projectile = new Pistol_1.default();
            var position = { x: player.x, y: player.y };
            if (pointer.isDown) {
                projectile.shoot(_this.scene, position, pointer);
            }
        };
        this.activate = function () {
            _this.movement();
            _this.shooting();
        };
        this.scene = scene;
    }
    return Player;
}());
exports.default = Player;
//# sourceMappingURL=Player.js.map