import bg from "../../assets/bg.png";
import CharacterColors from "../../Core/Enums/CharacterColors";
import polygonPurple from "../../assets/polygonPurple.png";
import arrowPurple from "../../assets/arrowPurple.png";
import polygonGreen from "../../assets/polygonGreen.png";
import arrowGreen from "../../assets/arrowGreen.png";
import polygonYellow from "../../assets/polygonYellow.png";
import arrowYellow from "../../assets/arrowYellow.png";
import polygonBlue from "../../assets/polygonBlue.png";
import arrowBlue from "../../assets/arrowBlue.png";

// src/GameScene.js
import Phaser from "phaser";

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    // Load assets (e.g., images, sprites)

    this.points = [
      {
        x: 506,
        y: 103,
      },
      {
        x: 769,
        y: 309,
      },
      {
        x: 502,
        y: 503,
      },
      {
        x: 213,
        y: 300,
      },
    ];
    this.characters = [];
    this.load.image("background", bg);
    this.load.image("polygonPurple", polygonPurple);
    this.load.image("arrowPurple", arrowPurple);
    this.load.image("polygonGreen", polygonGreen);
    this.load.image("arrowGreen", arrowGreen);
    this.load.image("polygonYellow", polygonYellow);
    this.load.image("arrowYellow", arrowYellow);
    this.load.image("polygonBlue", polygonBlue);
    this.load.image("arrowBlue", arrowBlue);
  }

  create() {
    // Create a fixed background
    const background = this.add.image(400, 300, "background");

    background.setDisplaySize(this.game.config.width, this.game.config.height);
    background.setOrigin(0.5);

    // Create a polygon sprite
    this.character = this.addPolygon("Purple");

    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.on("pointerdown", this.onPointerDown, this);

    // Create an arrow image
    this.arrow = this.addArrow("Purple", this.character);

    window.addEventListener("addCharacter", (e) =>
      this.generateRandomCharacter()
    );

    window.addEventListener("updateRandomCharacterPosition", (e) =>
      this.updateRandomCharacterPositionRandomly()
    );
  }

  addCharacter(color) {
    const polygon = this.addPolygon(color);
    const arrow = this.addArrow(color, polygon);
    this.characters.push({ polygon, arrow });
  }

  addPolygon(color) {
    // Create a character sprite
    const polygon = this.physics.add.sprite(
      this.game.config.width / 2,
      this.game.config.height / 2,
      `polygon${color}`
    );
    polygon.setCollideWorldBounds(true);
    polygon.setScale(0.5);
    polygon.setOrigin(0.5);
    return polygon;
  }

  addArrow(color, polygon) {
    // Create an arrow image
    const arrow = this.add.image(
      this.game.config.width / 2, //   polygon.x + polygon.width / 4,
      this.game.config.height / 2, //   polygon.y + polygon.height / 4,
      `arrow${color}`
    );
    const arrowDimRatio = arrow.width / arrow.height;
    const arrowHeight = polygon.height * 0.3;
    arrow.setDisplaySize(arrowHeight * arrowDimRatio, arrowHeight);
    arrow.setOrigin(0, 0.5);
    arrow.setScale(0.5);
    return arrow;
  }

  onPointerDown(pointer) {
    // Tween the character to the clicked position
    const clickedX = pointer.x;
    const clickedY = pointer.y;
    this.updatePolygonPosition(this.character, clickedX, clickedY);

    this.updateArrowPosition(this.arrow, clickedX, clickedY);
  }

  updatePolygonPosition(polygon, newPositionX, newPositionY) {
    this.tweens.add({
      targets: polygon,
      x: newPositionX,
      y: newPositionY,
      duration: 500, // Duration of the tween in milliseconds
      ease: "Linear", // Easing function for smooth movement (Linear for constant speed)
    });
  }

  updateArrowPosition(arrow, newPositionX, newPositionY) {
    // Calculate angle and distance offset from the character to the arrow
    var angle;
    if (newPositionX === arrow.x && newPositionY !== arrow.y) {
      angle = newPositionY > arrow.y ? Math.PI / 2 : 0;
    } else if (newPositionY === arrow.y && newPositionX !== arrow.x) {
      angle = newPositionX > arrow.x ? Math.PI / 4 : -Math.PI / 4;
    } else if (newPositionX === arrow.x && newPositionY === arrow.y) {
      angle = 0;
    } else {
      angle = Math.atan(
        Math.abs(newPositionY - arrow.y) / Math.abs(newPositionX - arrow.x)
      );
      if (newPositionY < arrow.y && newPositionX > arrow.x) {
        angle = -angle;
      } else if (newPositionY < arrow.y && newPositionX < arrow.x) {
        angle = arrow.rotation < 0 ? angle - Math.PI : angle + Math.PI;
      } else if (newPositionY > arrow.y && newPositionX < arrow.x) {
        angle = arrow.rotation < 0 ? -angle - Math.PI : -angle + Math.PI;
      }

      if (Math.abs(Math.abs(angle) - Math.abs(arrow.rotation)) > Math.PI) {
        angle = angle - 2 * Math.PI;
      }
    }

    // Set the new position and rotation for the arrow
    this.tweens.add({
      targets: arrow,
      rotation: angle,
      duration: 100, // Duration of the tween in milliseconds
      ease: "Linear", // Easing function for smooth movement (Linear for constant speed)
    });

    this.tweens.add({
      targets: arrow,
      x: newPositionX,
      y: newPositionY,
      duration: 500, // Duration of the tween in milliseconds
      ease: "Linear", // Easing function for smooth movement (Linear for constant speed)
    });
  }

  updateCharaterPosition(characterIndex, newPositionX, newPositionY) {
    const character = this.characters[characterIndex].polygon;
    const arrow = this.characters[characterIndex].arrow;
    this.updatePolygonPosition(character, newPositionX, newPositionY);
    this.updateArrowPosition(arrow, newPositionX, newPositionY);
  }

  generateRandomCharacter() {
    const colorsArray = Object.values(CharacterColors);
    const randomIndex = Math.floor(Math.random() * (colorsArray.length - 1));
    const randomColor = colorsArray[randomIndex];
    this.addCharacter(randomColor);
  }

  updateRandomCharacterPositionRandomly() {
    if (this.characters.length) {
      const E = this.generateRandomPosition();
      this.updateCharaterPosition(
        Math.floor(Math.random() * this.characters.length),
        E.x, //   Math.random() * this.game.config.width,
        E.y //   Math.random() * this.game.config.height
      );
    }
  }

  generateRandomPosition() {
    // Generate random barycentric coordinates
    const alpha = Math.random();
    const beta = Math.random();
    const gamma = Math.random();
    const delta = Math.random();

    // Normalize barycentric coordinates to ensure their sum is 1
    const sum = alpha + beta + gamma + delta;
    const normalizedAlpha = alpha / sum;
    const normalizedBeta = beta / sum;
    const normalizedGamma = gamma / sum;
    const normalizedDelta = delta / sum;

    // Use barycentric coordinates to interpolate the coordinates of point E

    const E = {
      x:
        normalizedAlpha * this.points[0].x +
        normalizedBeta * this.points[1].x +
        normalizedGamma * this.points[2].x +
        normalizedDelta * this.points[3].x,
      y:
        normalizedAlpha * this.points[0].y +
        normalizedBeta * this.points[1].y +
        normalizedGamma * this.points[2].y +
        normalizedDelta * this.points[3].y,
    };

    return E;
  }

  //   update() {
  //     // Character movement
  //     if (this.cursors.left.isDown) {
  //       this.character.setVelocityX(-160);
  //       this.character.anims.play("walk", true);
  //     } else if (this.cursors.right.isDown) {
  //       this.character.setVelocityX(160);
  //       this.character.anims.play("walk", true);
  //     } else {
  //       this.character.setVelocityX(0);
  //       this.character.anims.stop("walk");
  //     }
  //     if (this.cursors.up.isDown) {
  //       this.character.setVelocityY(-160);
  //     } else if (this.cursors.down.isDown) {
  //       this.character.setVelocityY(160);
  //     } else {
  //       this.character.setVelocityY(0);
  //     }
  //   }
}

export default GameScene;
