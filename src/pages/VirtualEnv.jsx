import { useEffect } from "react";
import Phaser from "phaser";
import GameScene from "../components/VirtualEnv/GameScene";
const VirtualEnv = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: GameScene,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
          debug: false,
        },
      },
    };

    const game = new Phaser.Game(config);

    const moveRandomCharacter = () =>
      window.dispatchEvent(new CustomEvent("updateRandomCharacterPosition"));

    const interval = setInterval(moveRandomCharacter, 2000);

    return () => {
      clearInterval(interval);
      game.destroy(true);
    };
  }, []);
  return (
    <>
      <button
        className="text-4xl text-black border"
        onClick={() => {
          //   const colorsArray = Object.values(CharacterColors);
          //   const randomIndex = Math.floor(Math.random() * colorsArray.length);
          //   const randomColor = colorsArray[randomIndex];
          window.dispatchEvent(new CustomEvent("addCharacter"));
        }}
      >
        Add random character
      </button>
      {/* <button
        className="text-4xl text-black border ml-4"
        onClick={() => {
          window.dispatchEvent(
            new CustomEvent("updateRandomCharacterPosition", {
              detail: { newPositionX: 536, newPositionY: 348 },
            })
          );
        }}
      >
        Move random character
      </button> */}
      <div id="phaser-game" />
    </>
  );
  //   return (
  //     <div>
  //       <h1 className="text-4xl text-black">VirtualEnv</h1>
  //     </div>
  //   );
};

export default VirtualEnv;
