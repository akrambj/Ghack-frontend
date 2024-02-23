import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/shared/SharedLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import VirtualEnv from "./pages/VirtualEnv";

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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
