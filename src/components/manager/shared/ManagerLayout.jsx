import { Outlet } from "react-router-dom";
import ManagerHeader from "./header/ManagerHeader";
import ManagerFooter from "./footer/ManagerFooter";

const ManagerLayout = () => {
  return (
    <section className="min-h-screen w-screen flex flex-col justify-between">
      <ManagerHeader />
      <Outlet />
      <ManagerFooter />
    </section>
  );
};

export default ManagerLayout;
