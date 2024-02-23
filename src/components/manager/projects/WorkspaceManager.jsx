import { Link, useNavigate } from "react-router-dom";
import groups from "../../../assets/imgs/services/groups.png";
const WorkspaceManager = ({ project }) => {
  const getColor = () => {
    let backgroundColor = "#FCFCFD";
    if (project.type === "participant") {
      backgroundColor = "#66DC90";
    } else if (project.type === "manager") {
      backgroundColor = "#BFB7F1";
    } else if (project.type === "owner") {
      backgroundColor = "#F1B7B7";
    }
    return backgroundColor;
  };

  const navigate = useNavigate();

  const handleNaviagtion = () => {
    navigate(`projects/${project.id}`);
  };

  const bg = getColor();
  return (
    <div
      onClick={handleNaviagtion}
      className="cursor-pointer w-[30%] bg-[#FCFCFD] drop-shadow-md shadow-md h-[240px] rounded-lg flex flex-col"
    >
      <div
        style={{ backgroundColor: bg }}
        className={`w-full h-[10%]  rounded-t-lg`}
      ></div>
      <div className="flex flex-col gap-5 w-full h-[90%] p-5">
        <h2 className="text-2xl font-bold">{project.name}</h2>
        <div className="flex items-center gap-5">
          <img src={groups} alt="" />
          <h5 className="font-semibold text-[#476788]">20 participants</h5>
        </div>
        <h4
          style={{ backgroundColor: bg }}
          className={`w-[120px] text-white text-center capitalize font-bold py-2 rounded-xl`}
        >
          {project.type}
        </h4>
      </div>
    </div>
  );
};

export default WorkspaceManager;
