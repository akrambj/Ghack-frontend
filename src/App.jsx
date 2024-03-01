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
import ProtectedRoute from "./components/route/ProtectedRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/virtual_env" index element={<VirtualEnv />} />
          <Route path="/login" index element={<Login />} />
          <Route path="/register" index element={<Register />} />
          <Route path="/" element={<SharedLayout />}>
            {<Route index element={<Home />} />}
          </Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <ManagerLayout />
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={
                <ProtectedRoute>
                  <Projects />
                </ProtectedRoute>
              }
            />
            <Route
              path="projects/:projectId"
              element={
                <ProtectedRoute>
                  <Project />
                </ProtectedRoute>
              }
            />
            <Route
              path="upgrade"
              element={
                <ProtectedRoute>
                  <Upgrade />
                </ProtectedRoute>
              }
            />
            <Route
              path="support"
              element={
                <ProtectedRoute>
                  <Support />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
