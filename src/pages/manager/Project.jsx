import { useParams } from "react-router-dom";

const Project = () => {
  const { projectId } = useParams();
  console.log(projectId);
  return <div className="w-screen h-screen">{projectId}</div>;
};

export default Project;
