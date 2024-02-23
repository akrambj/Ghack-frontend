import { IoMdClose } from "react-icons/io";
import hi from "../../../../assets/imgs/manager/owner/hi.png";
import ai from "../../../../assets/imgs/manager/owner/ai.png";
import { BsStars } from "react-icons/bs";
import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Cordinator = ({ setConrdinator }) => {
  const [step, setStep] = useState(1);
  const [next, setNext] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    setNext(true);
    setTimeout(() => {
      setStep(2);
      setTimeout(() => {
        setStep(3);
      }, 2000);
    }, 1000);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 overlay flex items-center justify-center">
      <div className="w-[30%] py-4 h-[500px] px-2 bg-white drop-shadow-md shadow-md flex flex-col rounded-lg duration-300 justify-between gap-4 z-50">
        {step === 1 ? (
          <>
            <div className="flex items-center justify-between">
              <h2 className="text-3xl capitalize font-bold text-[#476788]">
                Cordinator
              </h2>
              <IoMdClose
                className="text-4xl text-[#FBBC09] cursor-pointer"
                onClick={() => setConrdinator(false)}
              />
            </div>
            <div className="flex items-center justify-center w-full ">
              <img src={hi} alt="" />
            </div>
            <div className="flex  justify-end gap-4 ">
              <div className="w-[250px] py-2 px-4 flex bg-[#FBBC091A]  items-center justify-center border-[0.4px] border-[#FBBC09]">
                <p className="text-sm ">
                  Hi, i’m Cordinator, i’m so excited to make your remote work
                  experience unique & smooth!
                </p>
              </div>
              <div className="rounded-full p-2 w-[50px] h-[50px] bg-[#FFF8E6] flex items-center justify-center">
                <img className="rounded-full" src={ai} alt="" />
              </div>
            </div>
            <form
              onSubmit={handleNext}
              className="relative flex flex-col gap-2"
            >
              <div className="flex items-center">
                <input
                  required
                  className="px-2 w-[90%] mx-auto py-4 border-[1px] border-[#A6BBD18F] rounded-2xl"
                  type="text"
                  placeholder="Content, File, Ressource...."
                />
              </div>
              <button
                type="submit"
                className={`${
                  next ? "text-white bg-[#66DC90]" : "text-white bg-[#D9D9D9]"
                } cursor-pointer absolute right-10  ease-in-out duration-300 top-[12%] w-[45px] h-[45px] flex items-center justify-center  rounded-full`}
              >
                <BsStars className={`text-xlduration-300 ease-out`} />
              </button>
            </form>
          </>
        ) : step === 2 ? (
          <div className="flex flex-col justify-between h-full">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl capitalize font-bold text-[#476788]">
                Cordinator
              </h2>
              <IoMdClose
                className="text-4xl text-[#FBBC09] cursor-pointer "
                onClick={() => setConrdinator(false)}
              />
            </div>
            <div className="flex items-center justify-center flex-col gap-2">
              <IoSettingsOutline className="text-[#FBBC09] text-7xl animate-spin" />
              <h4 className="text-[#FBBC09] capitalize text-lg">in progress</h4>
            </div>
            <form className="relative flex flex-col gap-2">
              <div className="flex items-center">
                <input
                  required
                  className="px-2 w-[90%] mx-auto py-4 border-[1px] border-[#A6BBD18F] rounded-2xl"
                  type="text"
                  placeholder="Content, File, Ressource...."
                />
              </div>
              <button
                disabled
                type="submit"
                className={`${
                  next ? "text-white bg-[#66DC90]" : "text-white bg-[#D9D9D9]"
                } cursor-pointer absolute right-10  ease-in-out duration-300 top-[12%] w-[45px] h-[45px] flex items-center justify-center  rounded-full`}
              >
                <BsStars className={`text-xlduration-300 ease-out`} />
              </button>
            </form>
          </div>
        ) : step === 3 ? (
          <div className="flex flex-col justify-between h-full">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl capitalize font-bold text-[#476788]">
                Cordinator
              </h2>
              <IoMdClose
                className="text-4xl text-[#FBBC09] cursor-pointer"
                onClick={() => setConrdinator(false)}
              />
            </div>
            <div className="flex  items-center justify-center flex-wrap gap-[40px]">
              <div className="w-[110px] h-[130px] rounded-[20px] p-2 bg-[#E8F0F5] flex items-center justify-center flex-col gap-3">
                <div>
                  <FaFilePdf className="text-5xl text-[#00ADEF]" />
                </div>
                <div className="flex text-[#476788] items-center justify-between">
                  <h4 className="text-sm ">Untitled</h4>
                  <HiOutlineDotsVertical />
                </div>
              </div>
              <div className="w-[110px] h-[130px] rounded-[20px] p-2 bg-[#E8F0F5] flex items-center justify-center flex-col gap-3">
                <div>
                  <FaFilePdf className="text-5xl text-[#00ADEF]" />
                </div>
                <div className="flex text-[#476788] items-center justify-between">
                  <h4 className="text-sm ">Untitled</h4>
                  <HiOutlineDotsVertical />
                </div>
              </div>
              <div className="w-[110px] h-[130px] rounded-[20px] p-2 bg-[#E8F0F5] flex items-center justify-center flex-col gap-3">
                <div>
                  <FaFilePdf className="text-5xl text-[#00ADEF]" />
                </div>
                <div className="flex text-[#476788] items-center justify-between">
                  <h4 className="text-sm ">Untitled</h4>
                  <HiOutlineDotsVertical />
                </div>
              </div>
              <div className="w-[110px] h-[130px] rounded-[20px] p-2 bg-[#E8F0F5] flex items-center justify-center flex-col gap-3">
                <div>
                  <FaFilePdf className="text-5xl text-[#00ADEF]" />
                </div>
                <div className="flex text-[#476788] items-center justify-between">
                  <h4 className="text-sm ">Untitled</h4>
                  <HiOutlineDotsVertical />
                </div>
              </div>
            </div>
            <form className="relative flex flex-col gap-2">
              <div className="flex items-center">
                <input
                  required
                  className="px-2 w-[90%] mx-auto py-4 border-[1px] border-[#A6BBD18F] rounded-2xl"
                  type="text"
                  placeholder="Content, File, Ressource...."
                />
              </div>
              <button
                disabled
                type="submit"
                className={`${
                  next ? "text-white bg-[#66DC90]" : "text-white bg-[#D9D9D9]"
                } cursor-pointer absolute right-10  ease-in-out duration-300 top-[12%] w-[45px] h-[45px] flex items-center justify-center  rounded-full`}
              >
                <BsStars className={`text-xlduration-300 ease-out`} />
              </button>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cordinator;
