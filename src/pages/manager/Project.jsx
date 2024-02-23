import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OwnerProject from "../../components/manager/project/owner/OwnerProject";
import ManagerProject from "../../components/manager/project/manager/ManagerProject";
import ParticipantProject from "../../components/manager/project/participant/ParticipantProject";
import ManagerFooter from "../../components/manager/shared/footer/ManagerFooter";

const Project = () => {
  const [project, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [addProject, setAddProject] = useState(false);
  const { projectId } = useParams();

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `http://localhost:8000/projects/${projectId}`
        );
        console.log(res);
        if (res.status === 200) {
          const data = res.data;
          console.log(data, "data");
          setProjects(data);
          setLoading(false);
          console.log("projects", project);
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
  console.log(projectId);
  return (
    <section className="w-screen flex flex-col gap-10">
      {project && (
        <>
          {project.type === "owner" ? (
            <OwnerProject />
          ) : project.type === "manager" ? (
            <ManagerProject />
          ) : (
            <ParticipantProject />
          )}
        </>
      )}
      <ManagerFooter />
    </section>
  );
};

export default Project;
