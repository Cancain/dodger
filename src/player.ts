import * as Phaser from "phaser";

export enum Movement {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
  none = "none"
}

export default class Player {
  size: number;
  movementSpeed: number;

  constructor() {
    this.size = 10;
    this.movementSpeed = 800;
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

    if (cursorKeys.up.isDown) {
      player.setVelocityY(-this.movementSpeed);
    } else if (cursorKeys.down.isDown) {
      player.setVelocityY(this.movementSpeed);
    } else player.setVelocityY(0);

    if (cursorKeys.left.isDown) {
      player.setVelocityX(-this.movementSpeed);
    } else if (cursorKeys.right.isDown) {
      player.setVelocityX(this.movementSpeed);
    } else player.setVelocityX(0);
  };
}
