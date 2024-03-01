import groups from "../../assets/imgs/services/groups.png";

const Workspace = ({ bg, text, title }) => {
  return (
    <div className="md:w-[30vw] w-[70vw] bg-cardBg drop-shadow-card h-[30vh] rounded-[16px] flex flex-col">
      <div
        style={{ backgroundColor: bg }}
        className={`w-full h-[10%]  rounded-t-[16px]`}
      ></div>
      <div className="flex flex-col gap-[43px] w-full h-[70%] p-8 px-12">
        <div className="flex flex-col gap-[16px]">
          <h2 className="text-[2rem] font-bold text-Typo">{title}</h2>
          <div className="flex items-center gap-5">
            <img src={groups} alt="" />
            <h5 className="font-medium text-[1rem] text-Gray100">{text}</h5>
          </div>
        </div>
        <button
          style={{ backgroundColor: bg }}
          className={`max-w-[150px] text-white capitalize font-bold py-[9px] px-[28px] text-[1rem] rounded-[8px]`}
        >
          use now
        </button>
      </div>
    </div>
  );
};

export default Workspace;
