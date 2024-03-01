import { Link } from "react-router-dom";
import microsoft from "../../assets/imgs/hero/microsoft.webp";
import googlemin from "../../assets/imgs/hero/google_min.webp";
import profile1 from "../../assets/imgs/hero/profile1.png";
import profile2 from "../../assets/imgs/hero/profile2.png";
import profile3 from "../../assets/imgs/hero/profile3.png";
import profile4 from "../../assets/imgs/hero/profile4.png";
import meta from "../../assets/imgs/hero/google.webp";
import google from "../../assets/imgs/hero/google.webp";
import netflix from "../../assets/imgs/hero/netflix.webp";
import youtube from "../../assets/imgs/hero/youtube.webp";
import discord from "../../assets/imgs/hero/discord.webp";
import amazon from "../../assets/imgs/hero/amazon.webp";
import slack from "../../assets/imgs/hero/slack.webp";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 7); // 7 is the number of slides
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="home"
      className="relative w-full pt-[30vh] overflow-hidden flex flex-col pb-10 items-center justify-end gap-[12vh]"
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="absolute hidden md:flex top-[0vh] left-0 right-0 bottom-[24vh] items-center justify-between flex-wrap px-[7.5vw]">
          <div className="w-[50%] px-10">
            <img className="w-[8vw]" src={profile1} alt="" />
          </div>
          <div className="w-[50%] flex justify-end px-20">
            <img className="w-[8vw]" src={profile2} alt="" />
          </div>
          <div className="w-[50%] px-10">
            <img className="w-[8vw]" src={profile3} alt="" />
          </div>
          <div className="w-[50%] flex justify-end px-20">
            <img className="w-[8vw]" src={profile4} alt="" />
          </div>
        </div>
        <div>
          <h1 className="text-[4.5rem] font-bold text-Typo text-center">
            Unleash Collaborative Power
          </h1>
        </div>
        <div className="flex flex-col gap-6 items-center  text-center">
          <p className="text-[1.5rem] font-medium w-[52vw] mx-auto text-Gray100">
          HybridOffice: Your Complete Workforce Optimization Solution, Streamlining Communication and Collaboration Effortlessly
          </p>
          <h5 className="text-[1rem] text-Gray100 font-medium">Sign up free with Google or microsoft</h5>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center  gap-5">
            <button className="flex items-center gap-2 border-2 border-[#A6BBD1] px-[84px] py-[10px] rounded-[12px] bg-white">
              <img className="w-6" src={googlemin} alt="microsoft" />{" "}
              <span className="text-[1.3rem] font-bold text-Typo">Google</span>
            </button>
            <button className="flex items-center gap-2 border-2 border-[#A6BBD1] px-[84px] py-[10px] rounded-[12px] bg-white">
              <img className="w-6" src={microsoft} alt="microsoft" />{" "}
              <span className="text-[1.3rem] font-bold text-Typo">Microsoft</span>
            </button>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="w-[200px] h-[1px] bg-Gray66"></div>
            <span className="uppercase text-[1rem] text-Gray66">or</span>
            <div className="w-[200px] h-[1px] bg-Gray66"></div>
          </div>
          <div className="text-center">
            <Link className="text-center font-bold text-[1rem] text-Blue100" to={"/"}>
              Sign up free with email
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[4vh] mt-[12vh]">
        <h5 className="text-center text-Gray100 font-medium text-[1.5rem]">
        HybridOffice: Simplifying Managing for Over <span className="font-bold">50,000</span> Partner Worldwide.
        </h5>
        <div className="w-[125vw] flex items-center justify-center animate-slide infinite gap-[10vw]">
          <div className="w-[25%] py-10">
            <img className="" src={google} alt="" />
          </div>
          <div className="w-[25%] py-10">
            <img className="" src={youtube} alt="" />
          </div>
          <div className="w-[25%] py-10">
            <img className="" src={meta} alt="" />
          </div>
          <div className="w-[25%] py-10">
            <img className="" src={netflix} alt="" />
          </div>
          <div className="w-[25%] py-10">
            <img className="" src={discord} alt="" />
          </div>
          <div className="w-[25%] py-10">
            <img className="" src={slack} alt="" />
          </div>
          <div className="w-[25%] py-10">
            <img className="" src={amazon} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
