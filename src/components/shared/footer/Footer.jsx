import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";

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
              logo
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
            <h4 className="font-bold text-lg">Decouvrir Doctym</h4>
            <ul className="flex flex-col gap-2">
              <li>Nos Medecin</li>
              <li>Community</li>
              <li>Mobile App</li>
              <li>About us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 h-[200px]">
            <h4 className="text-lg font-bold">Decouvrir Doctym</h4>
            <ul className="flex flex-col gap-2">
              <li>Nos Medecin</li>
              <li>Community</li>
              <li>Mobile App</li>
              <li>About us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 h-[200px]">
            <h4 className="font-bold text-lg">Decouvrir Doctym</h4>
            <ul className="flex flex-col gap-2">
              <li>Nos Medecin</li>
              <li>Community</li>
              <li>Mobile App</li>
              <li>About us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#E7EDF6] w-full flex justify-between px-20 items-center py-3">
        <h5>Privacy Policy</h5>
        <h5>HybridSphere ©2024, All right reserved.</h5>
      </div>
    </footer>
  );
};

export default Footer;
