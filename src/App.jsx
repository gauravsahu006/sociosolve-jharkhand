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

// Citizen Pages
import Login from "./pages/citizen/Login";
import Register from "./pages/citizen/Register";
import Dashboard from "./pages/citizen/Dashboard";
import ReportProblem from "./pages/citizen/ReportProblem";
import Location from "./pages/citizen/Location";
import Evidence from "./pages/citizen/Evidence";
import ReviewSubmit from "./pages/citizen/ReviewSubmit";
import ProblemSubmitted from "./pages/citizen/ProblemSubmitted";
import MyProblems from "./pages/citizen/MyProblems";
import ProblemTracking from "./pages/citizen/ProblemTracking";
import Notifications from "./pages/citizen/Notifications";
import Profile from "./pages/citizen/Profile";
import HelpSupport from "./pages/citizen/HelpSupport";

// reviewer Pages
import ReviewerLogin from "./pages/reviewer/Login";
import ReviewerDashboard from "./pages/reviewer/Dashboard";
import ReviewerNewProblems from "./pages/reviewer/NewProblems";
import ProblemVerification from "./pages/reviewer/ProblemVerification";
import DuplicateCheck from "./pages/reviewer/DuplicateCheck";
import CategorizePrioritize from "./pages/reviewer/CategorizePrioritize";
import UniversityMatching from "./pages/reviewer/UniversityMatching";
import AssignUniversity from "./pages/reviewer/AssignUniversity";
import ReviewHistory from "./pages/reviewer/ReviewHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/challenges/:id" element={<ChallengeDetails />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Citizen Portal */}
        <Route path="/citizen/login" element={<Login />} />
        <Route path="/citizen/register" element={<Register />} />
        <Route path="/citizen/dashboard" element={<Dashboard />} />
        <Route path="/citizen/report" element={<ReportProblem />} />
        <Route path="/citizen/report/location" element={<Location />} />
        <Route path="/citizen/report/evidence" element={<Evidence />}/>
        <Route path="/citizen/report/review" element={<ReviewSubmit />}/>
        <Route path="/citizen/report/success" element={<ProblemSubmitted />}/>
        <Route path="/citizen/problems" element={<MyProblems />} />
        <Route path="/citizen/problems/:id/tracking" element={<ProblemTracking />}/>
        <Route path="/citizen/notifications" element={<Notifications />}/>
        <Route path="/citizen/profile" element={<Profile />}/>
        <Route path="/citizen/help" element={<HelpSupport />}/>

         {/* Reviewer Portal */}
         <Route path="/reviewer/login" element={<ReviewerLogin />}/>
         <Route path="/reviewer/dashboard" element={<ReviewerDashboard />}/>
         <Route path="/reviewer/new-problems" element={<ReviewerNewProblems />}/>
         <Route path="/reviewer/verification/:id" element={<ProblemVerification />}/>
         <Route path="/reviewer/duplicate-check" element={<DuplicateCheck />}/>
         <Route path="/reviewer/categorize" element={<CategorizePrioritize />}/>
         <Route path="/reviewer/universities" element={<UniversityMatching />}/>
         <Route path="/reviewer/assign-university" element={<AssignUniversity />}/>
         <Route path="/reviewer/review-history" element={<ReviewHistory />}/>
        


        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;