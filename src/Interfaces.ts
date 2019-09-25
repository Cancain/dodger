import { Scene, Physics } from "phaser";
import { Coordinate } from "./Types";

export interface Projectile {
  width: number;
  height: number;
  movementSpeed: number;
  color: number;
  model: any;
  shoot: (
    scene: Scene,
    startpos: Coordinate,
    pointer: any
  ) => Physics.Arcade.Body;
}
