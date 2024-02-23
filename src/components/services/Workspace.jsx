import groups from "../../assets/imgs/services/groups.png";
const Workspace = ({ bg, text, title }) => {
  return (
    <div className="w-[45%] bg-[#FCFCFD] drop-shadow-md shadow-md h-[240px] rounded-lg flex flex-col">
      <div
        style={{ backgroundColor: bg }}
        className={`w-full h-[10%]  rounded-t-lg`}
      ></div>
      <div className="flex flex-col gap-5 w-full h-[90%] p-5">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex items-center gap-5">
          <img src={groups} alt="" />
          <h5 className="font-semibold text-[#476788]">{text}</h5>
        </div>
        <button
          style={{ backgroundColor: bg }}
          className={`w-[120px] text-white capitalize font-bold py-2 rounded-xl`}
        >
          use now
        </button>
      </div>
    </div>
  );
};

export default Workspace;
