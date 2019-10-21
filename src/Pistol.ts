import { GameObjects, Scene } from "phaser";
import { Coordinate } from "./Types";
import { Projectile } from "./Interfaces";

export default class Pistol implements Projectile {
  width = 5;
  height = 5;
  movementSpeed = 950;
  color = 0xffffff;

  model: GameObjects.Rectangle & {
    body: Phaser.Physics.Arcade.Body;
  };

  shoot = (scene: Scene, startPos: Coordinate, pointer: any) => {
    this.model = scene.add.rectangle(
      startPos.x,
      startPos.y,
      this.width,
      this.height,
      this.color
    ) as any;

    const bullet = this.model.body;

    scene.physics.add.existing(this.model);
    scene.physics.moveToObject(this.model, pointer, 700);

    return bullet;
  };
}
