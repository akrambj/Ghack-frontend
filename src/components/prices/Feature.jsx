import { FaCheck } from "react-icons/fa6";

const Feature = ({ text }) => {
  return (
    <div className="flex items-center gap-2 ">
      <div className="w-[24px] h-[24px] rounded-full shadow-sm drop-shadow-md bg-[#0B3558] flex items-center justify-center">
        <FaCheck className="text-white text-sm" />
      </div>
      <h4 className="text-sm font-semibold">{text}</h4>
    </div>
  );
};

export default Feature;
