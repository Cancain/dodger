import * as Phaser from "phaser";
import { currentScene } from "./Main";
import { Coordinate } from "./Types";
import { setInterval } from "timers";

export default class Player {
  size: number;
  movementSpeed: number;
  shootButton: Phaser.Input.Keyboard.Key;
  constructor() {
    this.size = 10;
    this.movementSpeed = 500;
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

  public shoot = (scene: Phaser.Scene) => {
    const player = this.model.body;
    const shootButton = scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    const startPos: Coordinate = { x: player.x, y: player.y };

    if (shootButton.isDown) {
      let bullet = scene.add.rectangle(
        startPos.x,
        startPos.y,
        10,
        10,
        0xffffff
      ) as any;

      scene.physics.add.existing(bullet);
      bullet.body.setVelocityX(1000);

      return bullet;
    }
    return;
  };
  public move = (scene: Phaser.Scene) => {
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
