import * as Phaser from "phaser";
import { currentScene } from "./Main";
import { Coordinate } from "./Types";

export default class Player {
  size: number;
  movementSpeed: number;

  constructor() {
    this.size = 10;
    this.movementSpeed = 1100;
  }

  public model: Phaser.GameObjects.Rectangle & {
    body: Phaser.Physics.Arcade.Body;
  };

  public getSize = () => {
    return this.size;
  };

  public getRadius = () => {
    return this.size * 2;
  };

  public getMovementSpeed = () => {
    return this.movementSpeed;
  };

  public movement = (scene: Phaser.Scene) => {
    const cursorKeys = scene.input.keyboard.createCursorKeys();
    const player = this.model.body;
    const position: Coordinate = { x: player.x, y: player.y };
    const bounds = currentScene.isOutOfBounds(position, this.getRadius());

    if (cursorKeys.up.isDown && !bounds.top) {
      player.setVelocityY(-this.movementSpeed);
    } else if (cursorKeys.down.isDown && !bounds.bottom) {
      player.setVelocityY(this.movementSpeed);
    } else player.setVelocityY(0);

    if (cursorKeys.left.isDown && !bounds.left) {
      player.setVelocityX(-this.movementSpeed);
    } else if (cursorKeys.right.isDown && !bounds.right) {
      player.setVelocityX(this.movementSpeed);
    } else player.setVelocityX(0);
  };
}
