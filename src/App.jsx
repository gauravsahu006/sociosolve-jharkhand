import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/public/Home";
import HowItWorks from "./pages/public/HowItWorks";
import Challenges from "./pages/public/Challenges";
import ChallengeDetails from "./pages/public/ChallengeDetails";
import Universities from "./pages/public/Universities";
import Projects from "./pages/public/Projects";
import Impact from "./pages/public/Impact";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/challenges/:id" element={<ChallengeDetails />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;