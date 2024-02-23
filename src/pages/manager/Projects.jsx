import axios from "axios";
import { useEffect, useState } from "react";
import Workspace from "../../components/services/Workspace";
import WorkspaceManager from "../../components/manager/projects/WorkspaceManager";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:8000/projects`);
        console.log(res);
        if (res.status === 200) {
          const data = res.data;
          setLoading(false);
          console.log(data, "data");
          setProjects(data);
          console.log("projects", projects);
        } else {
          setError("error");
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  return (
    <section className="w-screen h-screen overflow-hidden flex flex-col  gap-3  px-20">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-[#0B3558]">My Projects</h2>
        <button className="bg-[#66DC90] text-white font-semibold px-4 py-2 rounded-lg ">
          Add project
        </button>
      </div>
      <div className="flex items-center justify-center gap-4 flex-wrap w-full">
        {loading && <h4>loading...</h4>}
        {projects.map((project) => (
          <WorkspaceManager key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
