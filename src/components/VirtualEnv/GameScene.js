import bg from "../../assets/bg.png";
import character from "../../assets/Polygon.png";
import arrowImage from "../../assets/arrow.png";

// src/GameScene.js
import Phaser from "phaser";

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    // Load assets (e.g., images, sprites)
    this.load.image("background", bg);
    this.load.image("polygonPurple", character);
    this.load.image("arrowPurple", arrowImage);
  }

  create() {
    // Create a fixed background
    const background = this.add.image(400, 300, "background");

    background.setDisplaySize(this.game.config.width, this.game.config.height);
    background.setOrigin(0.5);

    // Create a character sprite
    this.character = this.physics.add.sprite(0, 0, "polygonPurple");
    this.character.setCollideWorldBounds(true);
    this.character.setScale(0.5);
    this.character.setOrigin(0.5);
    // Input handling
    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.on("pointerdown", this.onPointerDown, this);

    // Create an arrow image
    this.arrow = this.add.image(
      this.character.x + this.character.width / 4,
      this.character.y + this.character.height / 4,
      "arrowPurple"
    );
    const arrowDimRatio = this.arrow.width / this.arrow.height;
    const arrowHeight = this.character.height * 0.3;
    this.arrow.setDisplaySize(arrowHeight * arrowDimRatio, arrowHeight);
    this.arrow.setOrigin(0, 0.5);
    this.arrow.setScale(0.5);
    // this.arrow.setRotation(Phaser.Math.DegToRad(90));
  }

  addCharacter(color) {}

  addPolygon(color) {
    // Create a character sprite
    this.character = this.physics.add.sprite(0, 0, "character");
    this.character.setCollideWorldBounds(true);
    this.character.setScale(0.5);
    this.character.setOrigin(0.5);
    // Input handling
    // this.cursors = this.input.keyboard.createCursorKeys();
    this.input.on("pointerdown", this.onPointerDown, this);
  }

  addArrow(color) {
    // Create an arrow image
    this.arrow = this.add.image(
      this.character.x + this.character.width / 4,
      this.character.y + this.character.height / 4,
      "arrow"
    );
    const arrowDimRatio = this.arrow.width / this.arrow.height;
    const arrowHeight = this.character.height * 0.3;
    this.arrow.setDisplaySize(arrowHeight * arrowDimRatio, arrowHeight);
    this.arrow.setOrigin(0, 0.5);
    this.arrow.setScale(0.5);
    // this.arrow.setRotation(Phaser.Math.DegToRad(90));
  }

  onPointerDown(pointer) {
    // Tween the character to the clicked position
    const clickedX = pointer.x;
    const clickedY = pointer.y;

    this.tweens.add({
      targets: this.character,
      x: clickedX,
      y: clickedY,
      duration: 500, // Duration of the tween in milliseconds
      ease: "Linear", // Easing function for smooth movement (Linear for constant speed)
    });

    // Update arrow position and rotation
    this.updateArrowPosition(clickedX, clickedY);
  }

  updateArrowPosition(newPositionX, newPositionY) {
    // Calculate angle and distance offset from the character to the arrow
    var angle;
    if (newPositionX === this.arrow.x && newPositionY !== this.arrow.y) {
      angle = newPositionY > this.arrow.y ? Math.PI / 2 : 0;
    } else if (newPositionY === this.arrow.y && newPositionX !== this.arrow.x) {
      angle = newPositionX > this.arrow.x ? Math.PI / 4 : -Math.PI / 4;
    } else if (newPositionX === this.arrow.x && newPositionY === this.arrow.y) {
      angle = 0;
    } else {
      angle = Math.atan(
        Math.abs(newPositionY - this.arrow.y) /
          Math.abs(newPositionX - this.arrow.x)
      );
      if (newPositionY < this.arrow.y && newPositionX > this.arrow.x) {
        angle = -angle;
      } else if (newPositionY < this.arrow.y && newPositionX < this.arrow.x) {
        angle = this.arrow.rotation < 0 ? angle - Math.PI : angle + Math.PI;
      } else if (newPositionY > this.arrow.y && newPositionX < this.arrow.x) {
        angle = this.arrow.rotation < 0 ? -angle - Math.PI : -angle + Math.PI;
      }

      if (Math.abs(Math.abs(angle) - Math.abs(this.arrow.rotation)) > Math.PI) {
        angle = angle - 2 * Math.PI;
      }
    }

    // Set the new position and rotation for the arrow
    this.tweens.add({
      targets: this.arrow,
      rotation: angle,
      duration: 100, // Duration of the tween in milliseconds
      ease: "Linear", // Easing function for smooth movement (Linear for constant speed)
    });

    this.tweens.add({
      targets: this.arrow,
      x: newPositionX,
      y: newPositionY,
      duration: 500, // Duration of the tween in milliseconds
      ease: "Linear", // Easing function for smooth movement (Linear for constant speed)
    });
  }
  update() {
    // Character movement
    if (this.cursors.left.isDown) {
      this.character.setVelocityX(-160);
      this.character.anims.play("walk", true);
    } else if (this.cursors.right.isDown) {
      this.character.setVelocityX(160);
      this.character.anims.play("walk", true);
    } else {
      this.character.setVelocityX(0);
      this.character.anims.stop("walk");
    }
    if (this.cursors.up.isDown) {
      this.character.setVelocityY(-160);
    } else if (this.cursors.down.isDown) {
      this.character.setVelocityY(160);
    } else {
      this.character.setVelocityY(0);
    }
  }
}

export default GameScene;
