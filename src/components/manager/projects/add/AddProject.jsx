import { IoMdClose } from "react-icons/io";
import { GiBrain } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";

const AddProject = ({ setAddProject }) => {
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    deadline: "",
    managerEmail: "",
    coordinater: null,
    virtualRoom: null,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "deadline") {
      const currentDate = new Date();
      const selectedDate = new Date(value);

      if (selectedDate <= currentDate) {
        setError("Deadline must be in the future");
      } else {
        setError("");
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const apiUrl = import.meta.env.VITE_REACT_API_URL;
  const token = localStorage.getItem("access_token");

  const createProject = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${apiUrl}/projects/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 201) {
        setCreated(true);
        setLoading(false);
        setTimeout(() => {
          setCreated(false);
          setTimeout(() => {
            setAddProject(false);
          }, 1000);
        }, 3000);
      } else {
        console.log("error");
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject();
  };

  return (
    <section className="fixed z-[99] top-0 left-0 right-0 bottom-0 overlay flex items-center justify-center ">
      <div className="w-[30%] py-10 bg-white shadow-md drop-shadow-md flex flex-col gap-5 p-7 rounded-[20px]">
        {created && (
          <div className="bg-white drop-shadow-md shadow-md gap-2 py-4 px-10 flex items-center justify-center">
            <FaCheckCircle className="text-[#66DC90] " />
            <h4 className="text-[#66DC90] font-bold text-sm">
              project has been created successfully
            </h4>
          </div>
        )}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl uppercase font-bold text-[#476788]">
            Add Project
          </h2>
          <IoMdClose
            className="text-2xl text-[#66DC90] cursor-pointer"
            onClick={() => setAddProject(false)}
          />
        </div>
        <form
          className="flex flex-col gap-2 text-[#476788]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-xl">Project name</label>
            <input
              className="px-2  py-3 border-[1px] border-[#A6BBD18F] rounded-2xl"
              type="text"
              placeholder="Project Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-xl">Deadline</label>
            <input
              className="px-2  py-3 border-[1px] border-[#A6BBD18F] rounded-2xl"
              type="date"
              placeholder="Project Name"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <div className="relative flex flex-col gap-1">
            <label className="font-semibold text-xl">Set Manager</label>
            <input
              className="px-2  py-3 border-[1px] border-[#A6BBD18F] rounded-2xl"
              type="email"
              placeholder="Email Address"
              name="manager"
              value={formData.manager}
              onChange={handleChange}
            />
            <h4 className="absolute right-[5%] bg-[#BFB7F133] px-2 py-1 rounded-md text-[#BFB7F1] top-[50%]">
              Manager
            </h4>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-xl">Features</label>
            <div className="flex items-center gap-4  justify-center">
              <div
                onClick={() =>
                  setFormData({
                    ...formData,
                    coordinater: !formData.coordinater,
                  })
                }
                className={`flex flex-col gap-2 border-2  w-[50%] cursor-pointer items-center p-2 rounded-md ${
                  formData.coordinater === true
                    ? "border-[#FBBC09] text-[#FBBC09]"
                    : "text-[#CECECE]"
                } duration-300 ease-in-out`}
              >
                <GiBrain className="text-5xl" />
                <h5 className="text-center text-sm">Intelligent Coordinator</h5>
              </div>
              <div
                onClick={() =>
                  setFormData({
                    ...formData,
                    virtualRoom: !formData.virtualRoom,
                  })
                }
                className={`flex flex-col gap-2 border-2 w-[50%] cursor-pointer items-center p-2 rounded-md ${
                  formData.virtualRoom === true
                    ? "border-[#66DC90] text-[#66DC90]"
                    : "text-[#CECECE]"
                } duration-300 ease-in-out `}
              >
                <FaPeopleRoof className="text-5xl" />
                <h5 className=" text-center  text-sm">Virtual Room</h5>
              </div>
            </div>
          </div>
          <div className="w-full">
            <button className="w-full py-3 rounded-xl flex justify-center font-bold bg-[#66DC90] text-white">
              {loading ? <div className="spinner"></div> : "Create"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProject;
