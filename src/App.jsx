import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/shared/SharedLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import VirtualEnv from "./pages/VirtualEnv";
import ManagerLayout from "./components/manager/shared/ManagerLayout";
import Projects from "./pages/manager/Projects";
import Upgrade from "./pages/manager/Upgrade";
import Support from "./pages/manager/Support";
import Project from "./pages/manager/Project";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/virtual_env" index element={<VirtualEnv />} />
          <Route path="/login" index element={<Login />} />
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route index element={<Register />} />
          </Route>
          <Route path="/dashboard" element={<ManagerLayout />}>
            <Route index element={<Projects />} />
            <Route path="projects/:projectId" element={<Project />} />
            <Route path="upgrade" element={<Upgrade />} />
            <Route path="support" element={<Support />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
