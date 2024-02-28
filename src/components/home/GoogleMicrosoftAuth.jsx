import { FcGoogle } from "react-icons/fc";
import microsoft from "../../assets/imgs/microsoft.png";

const GoogleMicrosoftAuth = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-center gap-4">
        <div className="w-[180px] h-[2px] bg-[#A6BBD1]"></div>
        <span className="text-[#A6BBD1]">or</span>
        <div className="w-[180px] h-[2px] bg-[#A6BBD1]"></div>
      </div>
      <div className="flex items-center justify-center  gap-5">
        <button className="flex items-center gap-2 border-2 border-[#A6BBD1] px-14 py-2 rounded-lg bg-white">
          <FcGoogle className="text-2xl" />{" "}
          <span className="text-md font-bold">Google</span>
        </button>
        <button className="flex items-center gap-2 border-2 border-[#A6BBD1] px-14 py-2 rounded-lg bg-white">
          <img className="w-4" src={microsoft} alt="microsoft" />{" "}
          <span className="font-bold">Microsoft</span>
        </button>
      </div>
    </div>
  );
};

export default GoogleMicrosoftAuth;
