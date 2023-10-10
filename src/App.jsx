import "./App.css";
import NavbarApp from "./components/NavbarApp";
import { Navigate, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import Characters from "./components/Characters";
import ProfileCharacter from "./components/ProfileCharacter";
import SuperAdmin from "./components/SuperAdmin";
import { UserContext } from "./context/UserContex";
import { useContext } from "react";

function App() {
  const { user } = useContext(UserContext);
  return (
    <>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/profile/:id" element={<ProfileCharacter />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/super-admin"
          element={user?.admin ? <SuperAdmin /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
