import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/shared/SharedLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ManagerLayout from "./components/manager/shared/ManagerLayout";
import Projects from "./pages/manager/Projects";
import Upgrade from "./pages/manager/Upgrade";
import Support from "./pages/manager/Support";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route index element={<Register />} />
            <Route index element={<Login />} />
          </Route>
          <Route path="/manager" element={<ManagerLayout />}>
            <Route index element={<Projects />} />
            <Route path="/manager/upgrade" element={<Upgrade />} />
            <Route path="/manager/upgrade" element={<Support />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
