import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [theIndex, setTheIndex] = useState(1);
  const menuLinks = [
    { name: "home", links: "#home" },
    { name: "services", links: "#services" },
    { name: "prices", links: "#prices" },
    { name: "testimonials", links: "#testimonials" },
  ];
  return (
    <header className="flex flex-col">
      <div className="fixed top-0 left-0 z-50 w-screen flex items-center justify-between py-4 px-16  mb-5  shadow-md bg-white">
        <div className="logo  w-[25%]">
          <Link to={"/"} className="uppercase text-blue-600 font-bold text-3xl">
            logo
          </Link>
        </div>
        <div className="nav flex items-center  w-[50%] justify-center">
          <ul className="flex items-center gap-10">
            {menuLinks.map((menu, index) => (
              <li key={index} className="">
                <a
                  onClick={() => setTheIndex(index)}
                  className={`text-lg capitalize ${
                    index === theIndex
                      ? "text-[#006BFF] font-bold"
                      : "font-semibold"
                  }  hover:text-[#006BFF] duration-300 transition-all ease-in`}
                  href={menu.links}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-7 w-[25%]  justify-end">
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
