"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scene_1 = require("./Scene");
exports.currentScene = new Scene_1.default();
var gameConfig = {
    title: "Dodger",
    type: Phaser.AUTO,
    width: exports.currentScene.getSize().width,
    height: exports.currentScene.getSize().height,
    scene: Scene_1.default,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    parent: "game",
    backgroundColor: "#000000"
};
exports.game = new Phaser.Game(gameConfig);
//# sourceMappingURL=Main.js.map