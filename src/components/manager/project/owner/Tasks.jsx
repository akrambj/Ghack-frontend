import profile from "../../../../assets/imgs/manager/header/profile.png";
import { MdKeyboardArrowDown } from "react-icons/md";

const Tasks = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center">
        <h4 className="px-6 py-2 rounded-lg bg-[#BFB7F1] text-white">
          Task Manager
        </h4>
        <button className="px-6 py-1 rounded-xl rounded-l-none bg-[#E5E2F9] text-[#0B3558] flex items-center gap-2 ">
          <img src={profile} className="w-8" alt="" />
          <h4 className="font-bold">karin</h4>
          <MdKeyboardArrowDown />
        </button>
      </div>
      <div className="flex flex-col h-[300px] justify-between ">
        <div className="flex items-center px-5 gap-4">
          <h5 className="w-[20%] text-[#0B3558] font-bold">New</h5>
          <h5 className="w-[20%] text-[#0B3558] font-bold">Product Backlog</h5>
          <h5 className="w-[20%] text-[#0B3558] font-bold">Sprint Backlog</h5>
          <h5 className="w-[20%] text-[#0B3558] font-bold">In Progress</h5>
          <h5 className="w-[20%] text-[#0B3558] font-bold">Done</h5>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col gap-4 w-[20%] px-4">
            <div className="px-5 py-2 bg-[#F1B7B7] w-[130px] text-white rounded-lg">
              Design Logo
            </div>
            <div className="px-5 py-2 bg-[#F1B7B7] w-[130px] text-white rounded-lg">
              Design Logo
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[20%] px-4">
            <div className="px-5 py-2 bg-[#B7C7F1] w-[130px] text-white rounded-lg">
              Design Logo
            </div>
            <div className="px-5 py-2 bg-[#B7C7F1] w-[130px] text-white rounded-lg">
              Design Logo
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[20%] px-4">
            <div className="px-5 py-2 bg-[#B7C7F1] w-[130px] text-white rounded-lg">
              Design Logo
            </div>
            <div className="px-5 py-2 bg-[#B7C7F1] w-[130px] text-white rounded-lg">
              Design Logo
            </div>
          </div>
        </div>
        <div className="flex items-center px-5 gap-4">
          <h5 className="w-[20%] text-[#0B3558] font-bold">Add Task...</h5>
          <h5 className="w-[20%] text-[#0B3558] font-bold">Add Task...</h5>
          <h5 className="w-[20%] text-[#0B3558] font-bold">Add Task...</h5>
          <h5 className="w-[20%] text-[#0B3558] font-bold">Add Task...</h5>
          <h5 className="w-[20%] text-[#0B3558] font-bold">Add Task...</h5>
        </div>
      </div>
    </section>
  );
};

export default Tasks;
