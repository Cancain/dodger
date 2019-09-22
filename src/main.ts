import * as Phaser from "phaser";

interface OOB {
  up: boolean;
  down: boolean;
  right: boolean;
  left: boolean;
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Game"
};

export class GameScene extends Phaser.Scene {
  private square: Phaser.GameObjects.Rectangle & {
    body: Phaser.Physics.Arcade.Body;
  };

  private playerSize = 10;
  private playerMovementSpeed = 800;
  private playerRadius = this.playerSize * 2;
  private oob: OOB = {
    up: false,
    down: false,
    right: false,
    left: false
  };
  constructor() {
    super(sceneConfig);
  }

  public create() {
    this.square = this.add.rectangle(
      100,
      100,
      this.playerSize,
      this.playerSize,
      0xffffff
    ) as any;
    this.physics.add.existing(this.square);
  }

  public update() {
    const player = this.square;
    const cursorKeys = this.input.keyboard.createCursorKeys();

    if (cursorKeys.up.isDown && !this.oob.up) {
      player.body.setVelocityY(-this.playerMovementSpeed);
    } else if (cursorKeys.down.isDown && !this.oob.down) {
      player.body.setVelocityY(this.playerMovementSpeed);
    } else {
      player.body.setVelocityY(0);
    }

    if (cursorKeys.left.isDown && !this.oob.left) {
      player.body.setVelocityX(-this.playerMovementSpeed);
    } else if (cursorKeys.right.isDown && !this.oob.right) {
      player.body.setVelocityX(this.playerMovementSpeed);
    } else {
      player.body.setVelocityX(0);
    }

    if (player.body.y > window.innerHeight - this.playerRadius) {
      this.oob.down = true;
    } else {
      this.oob.down = false;
    }

    if (player.body.y < 0 + this.playerRadius) {
      this.oob.up = true;
    } else {
      this.oob.up = false;
    }

    if (player.body.x > window.innerWidth - this.playerRadius) {
      this.oob.right = true;
    } else {
      this.oob.right = false;
    }

    if (player.body.x < 0 + this.playerRadius) {
      this.oob.left = true;
    } else {
      this.oob.left = false;
    }
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
