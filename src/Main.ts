import GameScene from "./Scene";

export const currentScene = new GameScene();

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: "Dodger",
  type: Phaser.AUTO,
  width: currentScene.getSize().width,
  height: currentScene.getSize().height,
  scene: GameScene,

  physics: {
    default: "arcade",
    arcade: {
      debug: true
    }
  },

  parent: "game",
  backgroundColor: "#000000"
};

export const game = new Phaser.Game(gameConfig);
