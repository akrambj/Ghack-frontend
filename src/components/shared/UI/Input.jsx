import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";

const Input = ({ type, placeholder, width, label, onChange, name, value }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="relative flex flex-col gap-3 mx-auto"
      style={{ width: width }}
    >
      <label className="text-[#0B3558] text-base font-semibold">{label}</label>
      <input
        onChange={onChange}
        name={name}
        value={value}
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        className="border-2 border-[#A6BBD18F] py-3 rounded-[12px] "
        required
      />
      {type === "password" && (
        <div
          onClick={togglePasswordVisibility}
          className="absolute bottom-[15%] cursor-pointer right-[5%] text-2xl text-[#A6BBD1]"
        >
          {showPassword ? <BiHide /> : <BiShow />}{" "}
        </div>
      )}
    </div>
  );
};

export default Input;
