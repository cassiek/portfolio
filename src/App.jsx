import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import SkillsPage from "./pages/SkillsPage/SkillsPage.jsx";
//import ProjectsPage from "./pages/"
//import ContactPage from "./pages/"
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            {/* <Route path="/projects" element={<ProjectsPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}

            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;