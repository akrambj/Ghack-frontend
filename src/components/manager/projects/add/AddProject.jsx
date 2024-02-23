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
    manager: "",
    features: [],
    type: "owner",
  });

  const handleFeatureClick = (feature) => {
    const featureIndex = formData.features.indexOf(feature);
    if (featureIndex === -1) {
      // Feature not found, add it to the array
      setFormData({
        ...formData,
        features: [...formData.features, feature],
      });
    } else {
      // Feature found, remove it from the array
      const updatedFeatures = formData.features.filter(
        (item) => item !== feature
      );
      setFormData({
        ...formData,
        features: updatedFeatures,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createProject = async () => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8000/projects", formData);
      if (res.status === 201) {
        setCreated(true);
        setLoading(false);
        setTimeout(() => {
          setCreated(false);
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
          className="flex flex-col gap-5 text-[#476788]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
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
          <div className="relative flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-xl">Features</label>
            <div className="flex items-center gap-4  justify-center">
              <div
                onClick={() => handleFeatureClick("Intelligent Coordinator")}
                className={`flex flex-col gap-2 border-2  w-[50%] cursor-pointer items-center p-2 rounded-md ${
                  formData.features.includes("Intelligent Coordinator")
                    ? "border-[#FBBC09] text-[#FBBC09]"
                    : "text-[#CECECE]"
                } duration-300 ease-in-out`}
              >
                <GiBrain className="text-5xl" />
                <h5 className="text-center text-sm">Intelligent Coordinator</h5>
              </div>
              <div
                onClick={() => handleFeatureClick("Virtual Room")}
                className={`flex flex-col gap-2 border-2 w-[50%] cursor-pointer items-center p-2 rounded-md ${
                  formData.features.includes("Virtual Room")
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
