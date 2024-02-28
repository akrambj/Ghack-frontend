import { useState } from "react";
import Input from "../components/shared/UI/Input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import GoogleMicrosoftAuth from "../components/home/GoogleMicrosoftAuth";
import logo from "../assets/imgs/login/logo.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_REACT_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${apiUrl}/auth/login`, formData);
      if (res.status === 200) {
        localStorage.setItem("access_token", res.data.token);
        setLoading(false);
        setCreated(true);
        setTimeout(() => {
          setCreated(false);
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        }, 2000);
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };
  return (
    <section className="w-screen h-screen overflow-hidden">
      <div className="flex justify-between px-20 w-full h-full">
        <div className="h-full w-[45%]  flex flex-col  items-center justify-center">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-[#0B3558] font-bold text-3xl">
              Access to your account
            </h2>
            <p className="text-[#476788] text-base w-[70%] mx-auto text-center">
              Easily manage your Remote work with our intuitive platform.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div
              className={`${
                error ? "left-0 opacity-100" : "-left-10 opacity-0"
              } bg-red-500 absolute w-[300px] transition-all duration-300 top-0 text-white py-2 px-4 `}
            >
              {error}
            </div>

            <div
              className={`${
                created ? "left-0 opacity-100" : "-left-10 opacity-0"
              } absolute transition-all duration-300 top-0 bg-white drop-shadow-md shadow-md gap-2 py-4 px-10 flex items-center justify-center`}
            >
              <FaCheckCircle className="text-[#66DC90]" />
              <h4 className="text-[#66DC90] font-bold text-sm">
                Project has been created successfully
              </h4>
            </div>
            <div className="relative flex flex-col gap-5">
              <Link
                to={"/"}
                className="text-[#006BFF] absolute top-[55%] cursor-pointer z-20 right-[16%] font-bold"
              >
                Forget password ?
              </Link>
              <Input
                value={formData.email}
                name="email"
                onChange={handleChange}
                label="E-mail"
                type="email"
                placeholder="Email Adress"
                width="70%"
                display={"none"}
              />
              <Input
                value={formData.password}
                name="password"
                onChange={handleChange}
                label="Password"
                type="password"
                placeholder="Password"
                width="70%"
              />
            </div>
            <button className=" w-[70%] mx-auto py-3 bg-[#66DC90] rounded-xl text-white font-bold flex justify-center">
              {loading ? <div className="spinner "></div> : "Connexion"}
            </button>
          </form>
          <GoogleMicrosoftAuth />
        </div>
        <div className="h-full w-[45%]  flex flex-col justify-center">
          <img src={logo} className="w-[60%] mx-auto" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Login;
