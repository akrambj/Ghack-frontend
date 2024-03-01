import axios from "axios";
import { useEffect, useState } from "react";
import WorkspaceManager from "../../components/manager/projects/WorkspaceManager";
import AddProject from "../../components/manager/projects/add/AddProject";
import ManagerFooter from "../../components/manager/shared/footer/ManagerFooter";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [addProject, setAddProject] = useState(false);

  const apiUrl = import.meta.env.VITE_REACT_API_URL;
  const token = localStorage.getItem("access_token");

  // useEffect(() => {
  //   const getProjects = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await fetch(`${apiUrl}/projects/`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       console.log(res);
  //       if (res.status === 201) {
  //         const data = await res.data.projects.json();
  //         console.log(data, "data");
  //         setProjects(data);
  //         console.log(projects, "projects");
  //       } else {
  //         setError("Error fetching projects");
  //       }
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getProjects();
  // }, [apiUrl, token, projects]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axios(`${apiUrl}/projects/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.status === 201) {
          const data = await res?.data?.projects;
          setProjects(data);
        } else {
          console.log("error");
          setError("Error fetching projects");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    getProjects();
  }, [token, apiUrl]); // Include projects in the dependency array

  return (
    <section className="w-screen min-h-screen  flex flex-col  gap-3 ">
      <div className="flex items-center justify-between px-10">
        <h2 className="text-3xl font-bold text-[#0B3558]">My Projects</h2>
        <button
          className="bg-[#66DC90] text-white font-semibold px-4 py-2 rounded-lg"
          onClick={() => setAddProject(true)}
        >
          Add project
        </button>
      </div>
      <div className="flex min-h-screen items-center justify-center  mx-auto w-[95%] gap-4 flex-wrap ">
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <>
            {projects?.map((project) => (
              <WorkspaceManager key={project.id} project={project} />
            ))}
          </>
        )}
      </div>
      {addProject && <AddProject setAddProject={setAddProject} />}
    </section>
  );
};

export default Projects;
