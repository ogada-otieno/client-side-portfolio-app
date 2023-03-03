// import './App.css';
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import Projects from "./Components/Projects";
import Profile from "./Components/Profile";
import NotFound from "./Components/NotFound";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import LandingPage from "./Pages/LandingPage";
import CreateSkills from './Components/CreateSkills';
import CreateProject from './Components/CreateProject';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <div className="app-body">
        <Routes>
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/signup" element={<SignupForm />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="*" element={<NotFound />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/create-skills" element={<CreateSkills />} />
          <Route exact path="/create-projects" element={<CreateProject />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
