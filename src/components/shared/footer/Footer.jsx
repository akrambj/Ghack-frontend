import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import logo from "../../../assets/imgs/header/Hoffice.webp";

const Footer = () => {
  const socials = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <BsTwitterX />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
  ];
  return (
    <footer className="w-screen flex flex-col gap-4 bg-white border-t-2 border-[#E7EDF6]">
      <div className="w-full flex items-start justify-between px-[10vw] py-[8vh]">
        <div className="flex flex-col gap-[4vh] w-[25%]  h-[200px]">
          <div className="logo">
            <Link
              to={"/"}
              className="uppercase text-blue-600 font-bold text-5xl"
            >
              <img src={logo} className="w-[16vw]" alt="" />
            </Link>
          </div>
          <ul className="flex items-center gap-[3vw]">
              {socials.map((socail, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-Typo duration-300 text-[2.5rem]"
                  >
                    {socail.icon}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div className="flex  gap-4  w-[50%] justify-between px-10">
          <div className="flex flex-col gap-6 text-Typo">
            <h4 className="font-bold text-[1.5rem]">Discover HOffice</h4>
            <ul className="flex flex-col gap-4 text-Gray100 font-medium text-[1.2rem]">
              <li>Partners</li>
              <li>Community</li>
              <li>Mobile App </li>
              <li>About us</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 text-Typo">
            <h4 className="font-bold text-[1.5rem]">Your account</h4>
            <ul className="flex flex-col gap-4 text-Gray100 font-medium text-[1.2rem]">
              <li>Log in / Sign up</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
              <li>Cookies</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 text-Typo">
            <h4 className="font-bold text-[1.5rem]">Contact us</h4>
            <ul className="flex flex-col gap-4 text-Gray100 font-medium text-[1.2rem]">
              <li>+213554256289</li>
              <li>+213554256289</li>
              <li>info@Hoffice.com</li>
            </ul>
          </div>
          
        </div>
      </div>


      <div className="bg-Gray10 w-full flex justify-between px-[10vw] py-[4vh] items-center">
        <h5 className="text-Typo font-medium text-[1.2rem]">Privacy Policy</h5>
        <h5 className="text-Typo font-medium text-[1.2rem]">
          HOffice ©2024, All right reserved.
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
