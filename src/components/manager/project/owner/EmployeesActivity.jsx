import axios from "axios";
import { useEffect, useState } from "react";
import Employees from "./Employees";
import { MdKeyboardArrowDown } from "react-icons/md";

const EmployeesActivity = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:8000/employees`);
        console.log(res);
        if (res.status === 200) {
          const data = res.data;
          console.log(data, "data");
          setEmployees(data);
          setLoading(false);
          console.log("projects", employees);
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
    <div className="w-[72%] px-2 py-5 flex flex-col gap-7">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl capitalize font-bold text-[#0B3558]">
          Employees Activity
        </h2>
        <div className="flex items-center gap-5">
          <button className="border-[#A6BBD1] flex items-center gap-1 px-4 py-1 rounded-lg border-[1px] text-[#0B3558]">
            All Data <MdKeyboardArrowDown />
          </button>
          <button className="border-[#A6BBD1] flex items-center gap-1 px-4 py-1 rounded-lg border-[1px] text-[#0B3558]">
            2024 <MdKeyboardArrowDown />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-centers gap-5 border-b-[1px] border-b-[#0B3558] pb-4">
        <h4 className="w-[60%]  text-[#0B3558]">Name</h4>
        <h4 className="w-[70%]  text-[#0B3558]">Email</h4>
        <h4 className="w-[30%]  text-[#0B3558]">Role</h4>
        <h4 className="w-[22%]  text-[#0B3558]">Activity</h4>
        <h4 className="w-[20%]  text-[#0B3558]">Files</h4>
        <h4 className="w-[30%]  text-[#0B3558]">Tasks Done</h4>
        <h4 className="w-[30%]  text-[#0B3558]">Action</h4>
      </div>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <Employees employees={employees} />
      )}
    </div>
  );
};

export default EmployeesActivity;
