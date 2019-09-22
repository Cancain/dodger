import * as Phaser from "phaser";
import Player from "./Player";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Game"
};

export default class GameScene extends Phaser.Scene {
  width: number;
  height: number;

  constructor() {
    super(sceneConfig);
    this.height = 768;
    this.width = 1024;
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

  public getSize = () => {
    return {
      width: this.width,
      height: this.height
    };
  };
}
