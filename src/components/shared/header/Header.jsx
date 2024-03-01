import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/imgs/header/Hoffice.webp";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

const Header = () => {
  const [activeSection, setActiveSection] = useState(null);
  const menuLinks = [
    { name: "home", link: "home" },
    { name: "services", link: "services" },
    { name: "prices", link: "prices" },
    { name: "testimonials", link: "testimonials" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      for (const link of menuLinks) {
        const section = document.getElementById(link.link); // Use ID to select
        if (section && section.offsetTop <= scrollPosition + 100) {
          setActiveSection(link.name);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed flex flex-col bg-white z-[100]">
        <div className="bg-Gray10 h-[4vh] w-screen px-[10vw] flex items-center justify-end">
          <div className="flex gap-[0.8vw] items-center justify-center">
            <AiOutlineGlobal className="text-Gray100 text-[1.5rem]"/>
            <p className="text-Gray100 font-bold text-[0.9rem]">English</p>
            <FaChevronDown className="text-Gray100"/>
          </div>
        </div>
        <div className="bg-white border-b-2 border-[#E7EDF6] h-[9vh] px-[10vw] flex items-center justify-between">
          <div className="logo w-[25%]">
            <a href="/" className="uppercase text-blue-600 font-bold text-3xl"> {/* Changed to <a> for external link */}
              <img className="w-32" src={logo} alt="" />
            </a>
          </div>

          <div className="nav flex items-center">
            <ul className="flex items-center gap-[5vw]">
              {menuLinks.map((menu, index) => (
                <li key={index} className="">
                  <button
                    onClick={() => scrollToSection(menu.link)}
                    className="text-[1.1rem] text-Typo font-semibold capitalize hover:text-Blue100 duration-300 transition-all ease-in"
                  >
                    {menu.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-[2.5vw] w-[25%] justify-end">
            {/* Keep external links as <Link> or change to <a> if needed */}
            <Link
              to={"login"}
              className="text-[1.1rem] text-Typo font-semibold capitalize hover:text-Blue100 duration-300 transition-all ease-in"
            >
              Sign in
            </Link>
            <Link
              to={"/register"}
              className="bg-Blue100 text-white px-[24px] py-[16px] rounded-[12px] font-bold"
            >
              Get Started
            </Link>
          </div>

        </div>  
    </header>
  );
};

export default Header;