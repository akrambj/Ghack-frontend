import profile from "../../../../assets/imgs/manager/header/profile.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaFilePdf } from "react-icons/fa6";

const FileStorage = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center">
        <h4 className="px-6 py-2 rounded-lg bg-[#00ADEF] text-white">
          Storage Manager
        </h4>
        <button className="px-6 py-3 rounded-xl rounded-l-none bg-[#E5E2F9] text-[#0B3558] flex items-center gap-2 ">
          <CgNotes className="text-[#00ADEF]" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-10">
        <div className="w-[45%] h-[300px] flex flex-col  gap-10">
          <div className="flex items-center justify-between">
            <h4 className="text-[#0B3558] font-bold text-xl">Public Storage</h4>
            <button className="bg-[#66DC90] py-2 px-4 rounded-lg text-white font-bold">
              Upload Files
            </button>
          </div>
          <div className="flex  items-center flex-wrap gap-[20px]">
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
        </div>
        <div className="w-[45%] h-[300px] flex flex-col  gap-10">
          <div className="flex items-center justify-between">
            <h4 className="text-[#0B3558] font-bold text-xl">
              Private Storage
            </h4>
            <button className="bg-[#66DC90] py-2 px-4 rounded-lg text-white font-bold">
              Upload Files
            </button>
          </div>
          <div className="flex  items-center flex-wrap gap-[20px]">
            <div className="w-[110px] h-[130px] rounded-[20px] p-2 bg-[#F5E8E8] flex items-center justify-center flex-col gap-3">
              <div>
                <FaFilePdf className="text-5xl text-[#FFA587]" />
              </div>
              <div className="flex text-[#476788] items-center justify-between">
                <h4 className="text-sm ">Untitled</h4>
                <HiOutlineDotsVertical />
              </div>
            </div>
            <div className="w-[110px] h-[130px] rounded-[20px] p-2 bg-[#F5E8E8] flex items-center justify-center flex-col gap-3">
              <div>
                <FaFilePdf className="text-5xl text-[#FFA587]" />
              </div>
              <div className="flex text-[#476788] items-center justify-between">
                <h4 className="text-sm ">Untitled</h4>
                <HiOutlineDotsVertical />
              </div>
            </div>
            <div className="w-[110px] h-[130px] rounded-[20px] p-2 bg-[#F5E8E8] flex items-center justify-center flex-col gap-3">
              <div>
                <FaFilePdf className="text-5xl text-[#FFA587]" />
              </div>
              <div className="flex text-[#476788] items-center justify-between">
                <h4 className="text-sm ">Untitled</h4>
                <HiOutlineDotsVertical />
              </div>
            </div>
            <div className="w-[110px] h-[130px] rounded-[20px] p-2 bg-[#F5E8E8] flex items-center justify-center flex-col gap-3">
              <div>
                <FaFilePdf className="text-5xl text-[#FFA587]" />
              </div>
              <div className="flex text-[#476788] items-center justify-between">
                <h4 className="text-sm ">Untitled</h4>
                <HiOutlineDotsVertical />
              </div>
            </div>
            <div className="w-[110px] h-[130px] rounded-[20px] p-2 bg-[#F5E8E8] flex items-center justify-center flex-col gap-3">
              <div>
                <FaFilePdf className="text-5xl text-[#FFA587]" />
              </div>
              <div className="flex text-[#476788] items-center justify-between">
                <h4 className="text-sm ">Untitled</h4>
                <HiOutlineDotsVertical />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileStorage;
