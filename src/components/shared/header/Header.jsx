import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/imgs/header/logo.png";

const Header = () => {
  const [activeSection, setActiveSection] = useState(null);
  const menuLinks = [
    { name: "home", link: "#home" },
    { name: "services", link: "#services" },
    { name: "prices", link: "#prices" },
    { name: "testimonials", link: "#testimonials" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Loop through sections and find the one in view
      for (const link of menuLinks) {
        const section = document.querySelector(link.link);
        if (section && section.offsetTop <= scrollPosition + 100) {
          setActiveSection(link.name);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuLinks]);

  return (
    <header className="flex flex-col">
      <div className="fixed top-0 left-0 z-50 w-screen flex items-center justify-between py-4 px-16 mb-5 shadow-md bg-white">
        <div className="logo w-[25%]">
          <Link to={"/"} className="uppercase text-blue-600 font-bold text-3xl">
            <img className="w-32" src={logo} alt="" />
          </Link>
        </div>
        <div className="nav flex items-center w-[50%] justify-center">
          <ul className="flex items-center gap-10">
            {menuLinks.map((menu, index) => (
              <li key={index} className="">
                <Link
                  to={menu.link}
                  className={`text-lg capitalize ${
                    menu.name === activeSection
                      ? "text-[#006BFF] font-bold"
                      : "font-semibold"
                  }  hover:text-[#006BFF] duration-300 transition-all ease-in`}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-7 w-[25%] justify-end">
          <Link className="bg-white drop-shadow-sm py-2 px-4 font-semibold rounded-lg">
            Sign in
          </Link>
          <Link className="bg-[#006BFF] text-white px-4 py-2 drop-shadow-md rounded-lg">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
