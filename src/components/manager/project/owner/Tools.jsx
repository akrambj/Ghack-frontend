import { useState } from "react";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import Cordinator from "./Cordinator";

const Tools = () => {
  const [cordinator, setConrdinator] = useState(false);
  return (
    <section className="w-full flex flex-col gap-4">
      <div className="">
        <h4 className="px-4 w-[160px] py-2 rounded-lg text-white text-lg capitalize font-bold bg-[#66DC90] ">
          Tools Manager
        </h4>
      </div>
      <div className="flex items-center gap-4">
        <div
          onClick={() => setConrdinator(true)}
          className={`flex flex-col justify-center bg-[#FFFDF3] gap-2 border-2 border-[#FBBC09] text-[#FBBC09]  w-[15%] h-[130px] cursor-pointer items-center p-2 rounded-md 
          } duration-300 ease-in-out`}
        >
          <GiBrain className="text-5xl" />
          <h5 className="text-center text-sm">Intelligent Coordinator</h5>
        </div>
        <div
          className={`flex flex-col justify-center bg-[#F3FFF5] border-[#66DC90] text-[#66DC90] gap-2 border-2 w-[15%] h-[130px] cursor-pointer items-center p-2 rounded-md 
          } duration-300 ease-in-out `}
        >
          <FaPeopleRoof className="text-5xl" />
          <h5 className=" text-center  text-sm">Virtual Room</h5>
        </div>
      </div>
      {cordinator && <Cordinator setConrdinator={setConrdinator} />}
    </section>
  );
};

export default Tools;
