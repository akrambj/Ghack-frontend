import { Link } from "react-router-dom";
import microsoft from "../assets/imgs/hero/microsoft.webp";
import googlemin from "../assets/imgs/hero/google_min.webp";
import { useState } from "react";
import profile1 from "../assets/imgs/hero/profile1.png";
import profile2 from "../assets/imgs/hero/profile2.png";
import profile3 from "../assets/imgs/hero/profile3.png";
import profile4 from "../assets/imgs/hero/profile4.png";

const Register = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden px-[10vw] flex items-center justify-center">
      <div className="absolute hidden md:flex top-[0vh] left-0 right-0 bottom-0 items-center justify-between flex-wrap px-[7.5vw]">
          <div className="w-[50%] px-10">
            <img className="w-[8vw]" src={profile1} alt="" />
          </div>
          <div className="w-[50%] flex justify-end px-20">
            <img className="w-[8vw]" src={profile2} alt="" />
          </div>
          <div className="w-[50%] px-10">
            <img className="w-[8vw]" src={profile3} alt="" />
          </div>
          <div className="w-[50%] flex justify-end px-20">
            <img className="w-[8vw]" src={profile4} alt="" />
          </div>
        </div>
      <div className="flex flex-col gap-[3vh] items-center md:w-[40vw] w-[80vw]">
        <h2 className="text-[2.6rem] font-bold text-Typo text-center">
          Access to your account
        </h2>
        <div className="flex flex-col items-center justify-center gap-[4vh] md:w-[80%] w-[100%]">
          <div className="flex flex-col items-center justify-center gap-[2vh] w-[100%]">
            
            <div className="flex justify-between w-[100%]">
              <div className="flex gap-[12px] flex-col w-[49%]">
                <p className="font-medium text-Typo">First Name</p>
                <input type="email" className="w-[100%] h-[7vh] rounded-[24px] px-10 border-Gray66" value={formData.firstName} onChange={handleChange} placeholder="First Name" name="firstName" />
              </div>
              <div className="flex gap-[12px] flex-col w-[49%]">
                <p className="font-medium text-Typo">Last Name</p>
                <input type="email" className="w-[100%] h-[7vh] rounded-[24px] px-10 border-Gray66" value={formData.lastName} onChange={handleChange} placeholder="Last Name" name="lastName" />
              </div>
            </div>

            <div className="flex gap-[12px] flex-col w-[100%]">
              <p className="font-medium text-Typo">Email</p>
              <input type="email" className="w-[100%] h-[7vh] rounded-[24px] px-10 border-Gray66" value={formData.email} onChange={handleChange} placeholder="Email Adress" name="email" />
            </div>

            <div className="flex gap-[12px] flex-col w-[100%]">
              <p className="font-medium text-Typo">Password</p>
              <input type="password" className="w-[100%] h-[7vh] rounded-[24px] px-10 border-Gray66" value={formData.password} onChange={handleChange} placeholder="Password" name="password" />
            </div>

            <div className="flex gap-[12px] flex-col w-[100%]">
              <p className="font-medium text-Typo">Confirm Password</p>
              <input type="password" className="w-[100%] h-[7vh] rounded-[24px] px-10 border-Gray66" value={formData.password} onChange={handleChange} placeholder="Confirm Password" name="password" />
            </div>

          </div>
          <button className="w-[100%] mx-auto h-[7vh] bg-Green100 rounded-[24px] text-white font-bold flex justify-center text-[1.5rem] items-center" onClick={handleSubmit}>
              Connexion
          </button>
        </div>

      
        <div className="flex items-center justify-center gap-4">
          <div className="w-[200px] h-[1px] bg-Gray66"></div>
          <span className="uppercase text-[1rem] text-Gray66">or</span>
          <div className="w-[200px] h-[1px] bg-Gray66"></div>
        </div>

        <div className="flex items-center gap-8">
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
      
    </section>
  );
};

export default Register;
