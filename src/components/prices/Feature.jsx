import { FaCheck } from "react-icons/fa6";

const Feature = ({ text }) => {
  return (
    <div className="flex items-center gap-[12px] ">
      <div className="w-[32px] h-[32px] rounded-full bg-[#0B3558] flex items-center justify-center">
        <FaCheck className="text-white text-sm" />
      </div>
      <h4 className="text-[1.1rem] font-medium">{text}</h4>
    </div>
  );
};

export default Feature;
