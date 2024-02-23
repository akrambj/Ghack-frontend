import { Outlet } from "react-router-dom";
import ManagerHeader from "./header/ManagerHeader";
import ManagerFooter from "./footer/ManagerFooter";

const ManagerLayout = () => {
  return (
    <section className="w-screen flex flex-col justify-between">
      <ManagerHeader />
      <div className="">
        <Outlet />
      </div>
    </section>
  );
};

export default ManagerLayout;
