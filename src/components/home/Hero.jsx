import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import microsoft from "../../assets/imgs/microsoft.png";
import profile1 from "../../assets/imgs/hero/profile1.png";
import profile2 from "../../assets/imgs/hero/profile2.png";
import profile3 from "../../assets/imgs/hero/profile3.png";
import profile4 from "../../assets/imgs/hero/profile4.png";
import meta from "../../assets/imgs/hero/google.png";
import google from "../../assets/imgs/hero/google.png";
import netflix from "../../assets/imgs/hero/netflix.png";
import youtube from "../../assets/imgs/hero/youtube.png";
import discord from "../../assets/imgs/hero/discord.png";
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
      className="relative w-full h-screen overflow-hidden flex flex-col gap-1 pb-10 items-center justify-end"
    >
      <div className="flex flex-col justify-center items-center gap-5 ">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between flex-wrap">
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
        <div>
          <h1 className="text-5xl capitalize font-bold text-[#0B3558]">
            Unleash Collaborative Power
          </h1>
        </div>
        <div className="flex flex-col gap-3 items-center  text-center">
          <p className="text-lg w-[70%] mx-auto text-[#476788]">
            SynergySphere: Your Complete Workforce Optimization Solution,
            Streamlining Communication and Collaboration Effortlessly
          </p>
          <h5>Sign up free with Google or microsoft</h5>
        </div>
        <div className="flex flex-col gap-5">
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
          <div className="flex items-center justify-center gap-4">
            <div className="w-[200px] h-[2px] bg-[#A6BBD1]"></div>
            <span className="uppercase">or</span>
            <div className="w-[200px] h-[2px] bg-[#A6BBD1]"></div>
          </div>
          <div className="text-center">
            <Link className="text-center font-semibold text-[#006BFF]" to={"/"}>
              Sign up free with email
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h5 className="text-center text-[#476788] font-semibold">
          SynergySphere: Simplifying Managing for Over 50,000 Partner Worldwide.
        </h5>
        <div className="w-full flex items-center justify-center animate-slide infinite gap-10">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
