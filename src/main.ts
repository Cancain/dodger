import * as Phaser from "phaser";
import Player from "./player";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Game"
};

export class GameScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig);
  }

  playerCharacter = new Player();

  public create() {
    this.playerCharacter.model = this.add.rectangle(
      100,
      100,
      this.playerCharacter.getSize(),
      this.playerCharacter.getSize(),
      0xffffff
    ) as any;
    this.physics.add.existing(this.playerCharacter.model);
  }

  public update() {
    this.playerCharacter.movement(this);
  }
}

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: "myFirstPhaserGame",
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
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
