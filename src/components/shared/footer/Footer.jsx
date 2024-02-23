import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import logo from "../../../assets/imgs/header/logo.png";

const Footer = () => {
  const socials = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <BsTwitterX />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
  ];
  return (
    <footer className="w-screen bg-white pt-4 flex flex-col gap-4">
      <div className="w-full flex items-center justify-between px-10 py-3 ">
        <div className="flex flex-col gap-4 w-[25%]  h-[200px]">
          <div className="logo">
            <Link
              to={"/"}
              className="uppercase text-blue-600 font-bold text-5xl"
            >
              <img src={logo} className="w-32" alt="" />
            </Link>
          </div>
          <div>
            <ul className="flex items-center gap-5">
              {socials.map((socail, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-[#006BFF] duration-300 text-lg"
                  >
                    {socail.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex  gap-4  w-[50%] justify-between px-10">
          <div className="flex flex-col gap-2  h-[200px]">
            <h4 className="font-bold text-lg">Discover HOffice</h4>
            <ul className="flex flex-col gap-2">
              <li>Partners</li>
              <li>Community</li>
              <li>Mobile App </li>
              <li>About us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 h-[200px]">
            <h4 className="text-lg font-bold">Your Account</h4>
            <ul className="flex flex-col gap-2">
              <li>Log in / Sign up</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 h-[200px]">
            <h4 className="font-bold text-lg">Contact us</h4>
            <ul className="flex flex-col gap-2">
              <li>+213554256289</li>
              <li>+213554256289</li>
              <li>info@Hoffice.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#E7EDF6] w-full flex justify-between px-20 items-center py-3">
        <h5 className="text-[#0B3558] font-bold">Privacy Policy</h5>
        <h5 className="text-[#0B3558] font-bold">
          HOffice ©2024, All right reserved.
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
