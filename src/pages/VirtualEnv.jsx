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

    return () => {
      game.destroy(true);
    };
  }, []);
  return <div id="phaser-game" />;
  //   return (
  //     <div>
  //       <h1 className="text-4xl text-black">VirtualEnv</h1>
  //     </div>
  //   );
};

export default VirtualEnv;
