import "./App.css";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import Projects from "./Components/Projects";
import Profile from "./Components/Profile";
import NotFound from "./Components/NotFound";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import LandingPage from "./Pages/LandingPage";
import CreateSkills from "./Components/CreateSkills";
import CreateProject from "./Components/CreateProject";
import CreateProfile from "./Components/CreateProfile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Navbar />
      <div className="app-body">
        <Routes>
          <Route exact path="/login" 
          element={!user ? <LoginForm /> : <Navigate to="/" />} />
          <Route
            exact
            path="/signup"
            element={!user ? <SignupForm /> : <Navigate to="/" />}
          />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="*" element={<NotFound />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/create-skills" element={<CreateSkills />} />
          <Route exact path="/create-projects" element={<CreateProject />} />
          <Route exact path="/create-profile" element={<CreateProfile />} />
         </Routes>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
