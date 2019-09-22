import * as Phaser from "phaser";
import Player from "./Player";
import { Coordinate, Bounds } from "./Types";

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
    this.width = 1024;
    this.height = 768;
  }

  playerCharacter = new Player();

  public isOutOfBounds = (position: Coordinate, size: number) => {
    let bounds: Bounds = {
      right: false,
      left: false,
      top: false,
      bottom: false
    };

    if (position.x >= this.width - size) bounds.right = true;
    if (position.x <= size) bounds.left = true;

    if (position.y >= this.height - size) bounds.bottom = true;
    if (position.y <= size) bounds.top = true;

    return bounds;
  };

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
