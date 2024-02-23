import Donut from "./Donut";

const TaskStatistics = () => {
  return (
    <div className="w-[25%] py-5 px-2 bg-white shadow-md drop-shadow-md flex flex-col gap-5">
      <div>
        <h2 className="text-2xl capitalize text-[#0B3558] font-bold">
          Task Statistic
        </h2>
      </div>
      <div className="flex items-center gap-4  justify-center text-[#0B3558]">
        <div
          className={`flex flex-col gap-2 border-2 border-[#A6BBD1]  w-[50%] cursor-pointer items-center p-2 rounded-md } duration-300 ease-in-out`}
        >
          <h5 className="text-center text-lg font-semibold ">Total Tasks</h5>
          <h5 className="text-center text-xl font-bold">476</h5>
        </div>
        <div
          className={`flex flex-col gap-2 border-2  border-[#A6BBD1] w-[50%] cursor-pointer items-center p-2 rounded-md  duration-300 ease-in-out `}
        >
          <h5 className=" text-center text-lg font-semibold ">Overdue Tasks</h5>
          <h5 className=" text-center  text-xl font-bold">23</h5>
        </div>
      </div>
      <Donut />
    </div>
  );
};

export default TaskStatistics;
