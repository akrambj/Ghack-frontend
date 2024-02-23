import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../../../../assets/imgs/manager/header/profile.png";
import logo from "../../../../assets/imgs/header/logo.png";

const ManagerHeader = () => {
  const [theIndex, setTheIndex] = useState(0); // Initialize theIndex with -1
  const [menu, setMenu] = useState(false);
  const menuLinks = [
    { name: "projects", link: "/dashboard" },
    { name: "upgrade", link: "/dashboard/upgrade" },
    { name: "support", link: "/dashboard/support" },
  ];

  // Update theIndex when clicking on a NavLink
  const handleNavLinkClick = (index) => {
    setTheIndex(index);
  };

  return (
    <header className="z-50 w-screen flex items-center justify-between py-4 px-16  my-5  shadow-md">
      <div className="logo  w-[25%]">
        <Link to={"/"} className="uppercase text-blue-600 font-bold text-3xl">
          <img src={logo} className="w-32" alt="" />
        </Link>
      </div>
      <div className="nav flex items-center  w-[50%] justify-center">
        <ul className="flex items-center gap-10">
          {menuLinks.map((menu, index) => (
            <li key={index} className="">
              <NavLink
                to={menu.link}
                onClick={() => handleNavLinkClick(index)} // Update theIndex on click
                className={`text-lg capitalize cursor-pointer ${
                  index === theIndex
                    ? "text-[#006BFF] font-bold"
                    : "font-semibold"
                }  hover:text-[#006BFF] duration-300 transition-all ease-in`}
              >
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex items-center gap-7 w-[25%]  justify-end">
        <div
          className=" w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          <img
            src={profile}
            className="w-full h0full object-cover rounded-full"
            alt=""
          />
        </div>
        {menu && (
          <div className="bg-white shadow-md drop-shadow-md  absolute top-20 right-0 w-[120px] h-[60px] flex flex-col items-center justify-center">
            <button>sign out</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default ManagerHeader;
