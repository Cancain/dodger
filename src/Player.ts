import * as Phaser from "phaser";
import { currentScene } from "./Main";
import { Coordinate } from "./Types";

export default class Player {
  size: number;
  movementSpeed: number;
  shootButton: Phaser.Input.Keyboard.Key;
  constructor() {
    this.size = 10;
    this.movementSpeed = 500;
  }

  model: Phaser.GameObjects.Rectangle & {
    body: Phaser.Physics.Arcade.Body;
  };

  getSize = () => {
    return this.size;
  };

  getRadius = () => {
    return this.size * 2;
  };

  getMovementSpeed = () => {
    return this.movementSpeed;
  };

  shoot = (scene: Phaser.Scene) => {
    const player = this.model.body;
    const pointer = scene.input.activePointer;

    const startPos: Coordinate = { x: player.x, y: player.y };

    if (pointer.isDown) {
      let bullet = scene.add.rectangle(
        startPos.x,
        startPos.y,
        10,
        10,
        0xffffff
      ) as any;

      scene.physics.add.existing(bullet);
      // bullet.body.setVelocityX(1000);
      scene.physics.moveToObject(bullet, pointer, 700);
      return bullet;
    }
    return;
  };
  move = (scene: Phaser.Scene) => {
    const cursorKeys = {
      up: scene.input.keyboard.addKey("W"),
      down: scene.input.keyboard.addKey("S"),
      left: scene.input.keyboard.addKey("A"),
      right: scene.input.keyboard.addKey("D")
    };
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
