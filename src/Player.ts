import { Scene, GameObjects } from "phaser";
import { currentScene } from "./Main";
import { Coordinate } from "./Types";
import Projectile from "./Projectile";

export default class Player {
  scene: Scene;
  constructor(scene: Scene) {
    this.scene = scene;
  }

  size = 10;
  movementSpeed = 500;

  model: GameObjects.Rectangle & {
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

  movement = () => {
    const player = this.model.body;
    const cursorKeys = {
      up: this.scene.input.keyboard.addKey("W"),
      down: this.scene.input.keyboard.addKey("S"),
      left: this.scene.input.keyboard.addKey("A"),
      right: this.scene.input.keyboard.addKey("D")
    };
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

  shooting = () => {
    const player = this.model.body;
    const pointer = this.scene.input.activePointer;
    const projectile = new Projectile();
    const position: Coordinate = { x: player.x, y: player.y };

    if (pointer.isDown) {
      projectile.shoot(this.scene, position, pointer);
    }
  };

  activate = () => {
    this.movement();
    this.shooting();
  };
}
