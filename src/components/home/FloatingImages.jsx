import profile1 from "../../assets/imgs/hero/profile1.png";
import profile2 from "../../assets/imgs/hero/profile2.png";
import profile3 from "../../assets/imgs/hero/profile3.png";
import profile4 from "../../assets/imgs/hero/profile4.png";

const FloatingImages = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between flex-wrap overflow-hidden">
      <div className="w-[50%] px-10 floating-images">
        <img className="w-20" src={profile1} alt="" />
      </div>
      <div className="w-[50%] flex justify-end px-20 floating-images">
        <img className="w-20" src={profile2} alt="" />
      </div>
      <div className="w-[50%] px-10 floating-images">
        <img className="w-20" src={profile3} alt="" />
      </div>
      <div className="w-[50%] flex justify-end px-20 floating-images">
        <img className="w-20" src={profile4} alt="" />
      </div>
    </div>
  );
};

export default FloatingImages;
