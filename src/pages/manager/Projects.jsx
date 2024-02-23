import axios from "axios";
import { useEffect, useState } from "react";
import WorkspaceManager from "../../components/manager/projects/WorkspaceManager";
import AddProject from "../../components/manager/projects/add/AddProject";
import ManagerFooter from "../../components/manager/shared/footer/ManagerFooter";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [addProject, setAddProject] = useState(false);

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:8000/projects`);
        console.log(res);
        if (res.status === 200) {
          const data = res.data;
          console.log(data, "data");
          setProjects(data);
          setLoading(false);
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
    <section className="w-screen min-h-screen -hidden flex flex-col  gap-3 ">
      <div className="flex items-center justify-between px-10">
        <h2 className="text-3xl font-bold text-[#0B3558]">My Projects</h2>
        <button
          className="bg-[#66DC90] text-white font-semibold px-4 py-2 rounded-lg"
          onClick={() => setAddProject(true)}
        >
          Add project
        </button>
      </div>
      <div className="flex items-center justify-start ml-auto w-[95%] gap-4 flex-wrap ">
        {loading && <div className="spinner"></div>}
        {projects.map((project) => (
          <WorkspaceManager key={project.id} project={project} />
        ))}
      </div>
      {addProject && <AddProject setAddProject={setAddProject} />}
      <ManagerFooter />
    </section>
  );
};

export default Projects;
