import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loginimage from "../assets/imgs/login/Login.webp";
import microsoft from "../assets/imgs/hero/microsoft.webp";
import googlemin from "../assets/imgs/hero/google_min.webp";

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
      <div className="flex justify-between px-[10vw] w-full h-full">

        <div className="h-full w-[30vw] flex flex-col items-center justify-center gap-[4vh]">

          <div className="flex flex-col gap-[5vh]">
            <div className="flex flex-col gap-[2vh] items-center">
              <h2 className="text-[2.6rem] font-bold text-Typo text-center">
                Access to your account
              </h2>
              <p className="text-[1.5rem] font-medium text-center w-[30vw] mx-auto text-Gray100">
                Easily manage your Remote work with our intuitive platform.
              </p>
            </div>
            <div className="flex flex-col gap-[2.5vh]">
              <div className="flex flex-col flex-start w-[100%] gap-[1.5vh]">
                <p className="font-medium text-Typo">Email</p>
                <input type="email" className="w-[100%] h-[7vh] rounded-[24px] px-10 border-Gray66" value={formData.email} onChange={handleChange} placeholder="Email Adress" name="email" />
                <div className="flex justify-between items-center">
                  <p className="font-medium text-Typo">Password</p>
                  <p className="font-medium text-Blue100">Forget Password ?</p>
                </div> 
                <input type="password" className="w-[100%] h-[7vh] rounded-[24px] px-10 border-Gray66" value={formData.password} onChange={handleChange} placeholder="Password" name="password" />            
              </div>
              <button className="w-[100%] mx-auto h-[7vh] bg-Green100 rounded-[24px] text-white font-bold flex justify-center text-[1.5rem] items-center" onClick={handleSubmit}>
              Connexion
            </button>
            </div>

          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="w-[200px] h-[1px] bg-Gray66"></div>
            <span className="uppercase text-[1rem] text-Gray66">or</span>
            <div className="w-[200px] h-[1px] bg-Gray66"></div>
          </div>

          <div className="flex items-center justify-between w-[100%]">
            <button className="flex items-center gap-2 border-2 border-[#A6BBD1] px-[84px] py-[10px] rounded-[12px] bg-white">
              <img className="w-6" src={googlemin} alt="microsoft" />{" "}
              <span className="text-[1.2rem] font-bold text-Typo">Google</span>
            </button>
            <button className="flex items-center gap-2 border-2 border-[#A6BBD1] px-[84px] py-[10px] rounded-[12px] bg-white" >
              <img className="w-6" src={microsoft} alt="microsoft" />{" "}
              <span className="text-[1.2rem] font-bold text-Typo">Microsoft</span>
            </button>
          </div>

          <p className="text-[1.2rem] text-Gray100 font-medium">
          You haven’t an accout ?  
            <Link className="text-Blue100" to="/register"> Sign up</Link>
          </p>
          
        </div>

        <div className="h-full w-[30vw] flex flex-col justify-center">
          <img src={Loginimage} className="w-[30vw] mx-auto" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Login;
