import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public
import Home from "./pages/public/Home";
import HowItWorks from "./pages/public/HowItWorks";
import Challenges from "./pages/public/Challenges";
import ChallengeDetails from "./pages/public/ChallengeDetails";
import Universities from "./pages/public/Universities";
import Projects from "./pages/public/Projects";
import Impact from "./pages/public/Impact";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";

// Citizen
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

// Reviewer
import ReviewerLogin from "./pages/reviewer/Login";
import ReviewerRegister from "./pages/reviewer/Register";
import ReviewerDashboard from "./pages/reviewer/Dashboard";
import ReviewerNewProblems from "./pages/reviewer/NewProblems";
import VerificationQueue from "./pages/reviewer/VerificationQueue";
import ProblemVerification from "./pages/reviewer/ProblemVerification";
import DuplicateCheck from "./pages/reviewer/DuplicateCheck";
import CategorizePrioritize from "./pages/reviewer/CategorizePrioritize";
import UniversityMatching from "./pages/reviewer/UniversityMatching";
import VerifiedProblems from "./pages/reviewer/VerifiedProblems";
import AssignedProblems from "./pages/reviewer/AssignedProblems";
import AssignUniversity from "./pages/reviewer/AssignUniversity";
import ReviewHistory from "./pages/reviewer/ReviewHistory";
import Analytics from "./pages/reviewer/Analytics";
import Reports from "./pages/reviewer/Reports";
import ReviewerNotifications from "./pages/reviewer/Notifications";
import ReviewerProfile from "./pages/reviewer/Profile";
import ReviewerHelpSupport from "./pages/reviewer/HelpSupport";

// University
import UniversityLogin from "./pages/university/Login";
import UniversityDashboard from "./pages/university/Dashboard";
import RecommendedChallenges from "./pages/university/RecommendedChallenges";
import UniversityChallengeDetails from "./pages/university/ChallengeDetails";
import MyProjects from "./pages/university/MyProjects";
import ProjectWorkspace from "./pages/university/ProjectWorkspace";
import FacultyMentors from "./pages/university/FacultyMentors";
import StudentTeams from "./pages/university/StudentTeams";
import MilestonesProgress from "./pages/university/MilestonesProgress";
import Submissions from "./pages/university/Submissions";
import UniversityNotifications from "./pages/university/Notifications";
import ReportsAnalytics from "./pages/university/ReportsAnalytics";
import SupportResources from "./pages/university/SupportResources";
import ProfileSettings from "./pages/university/ProfileSettings";
import UniversityLayout from "./layouts/UniversityLayout";

// Industry
import IndustryLogin from "./pages/industry/Login";
import IndustryDashboard from "./pages/industry/Dashboard";
import AvailableChallenges from "./pages/industry/AvailableChallenges";
import IndustryChallengeDetails from "./pages/industry/ChallengeDetails";
import IndustryMyProjects from "./pages/industry/MyProjects";
import IndustryProjectWorkspace from "./pages/industry/ProjectWorkspace";
import IndustryMentors from "./pages/industry/IndustryMentors";
import IndustryExpertTeams from "./pages/industry/ExpertTeams";
import IndustryMilestonesProgress from "./pages/industry/MilestonesProgress";
import IndustrySubmissions from "./pages/industry/Submissions";
import IndustryNotifications from "./pages/industry/Notifications";
import IndustryReportsAnalytics from "./pages/industry/ReportsAnalytics";
import IndustrySupportResources from "./pages/industry/SupportResources";
import IndustryProfileSettings from "./pages/industry/ProfileSettings";
import IndustryLayout from "./layouts/IndustryLayout";


// Government
import GovernmentLogin from "./pages/government/Login";
import GovernmentLayout from "./layouts/GovernmentLayout";
import GovernmentDashboard from "./pages/government/Dashboard";
import GovernmentChallenges from "./pages/government/Challenges";
import GovernmentChallengeDetails from "./pages/government/ChallengeDetails";
import GovernmentProblemManagement from "./pages/government/ProblemManagement";
import GovernmentAssignments from "./pages/government/Assignments";
import GovernmentUniversityCoordination from "./pages/government/UniversityCoordination";
import GovernmentIndustryCoordination from "./pages/government/IndustryCoordination";
import GovernmentMilestonesProgress from "./pages/government/MilestonesProgress";
import GovernmentSubmissions from "./pages/government/Submissions";
import GovernmentNotifications from "./pages/government/Notifications";
import GovernmentReportsAnalytics from "./pages/government/ReportsAnalytics";
import GovernmentSupportResources from "./pages/government/SupportResources";
import GovernmentProfileSettings from "./pages/government/ProfileSettings";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/challenges/:id" element={<ChallengeDetails />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Citizen */}
        <Route path="/citizen/login" element={<Login />} />
        <Route path="/citizen/register" element={<Register />} />
        <Route path="/citizen/dashboard" element={<Dashboard />} />
        <Route path="/citizen/report" element={<ReportProblem />} />
        <Route path="/citizen/report/location" element={<Location />} />
        <Route path="/citizen/report/evidence" element={<Evidence />} />
        <Route path="/citizen/report/review" element={<ReviewSubmit />} />
        <Route path="/citizen/report/success" element={<ProblemSubmitted />} />
        <Route path="/citizen/problems" element={<MyProblems />} />
        <Route path="/citizen/problems/:id/tracking" element={<ProblemTracking />} />
        <Route path="/citizen/notifications" element={<Notifications />} />
        <Route path="/citizen/profile" element={<Profile />} />
        <Route path="/citizen/help" element={<HelpSupport />} />

        {/* Reviewer */}
        <Route path="/reviewer/register" element={<ReviewerRegister />} />
        <Route path="/reviewer/login" element={<ReviewerLogin />} />
        <Route path="/reviewer/dashboard" element={<ReviewerDashboard />} />
        <Route path="/reviewer/new-problems" element={<ReviewerNewProblems />} />
        <Route path="/reviewer/verification" element={<VerificationQueue />} />
        <Route path="/reviewer/verification/:id" element={<ProblemVerification />} />
        <Route path="/reviewer/duplicate-check" element={<DuplicateCheck />} />
        <Route path="/reviewer/categorize" element={<CategorizePrioritize />} />
        <Route path="/reviewer/universities" element={<UniversityMatching />} />
        <Route path="/reviewer/verified" element={<VerifiedProblems />} />
        <Route path="/reviewer/assigned" element={<AssignedProblems />} />
        <Route path="/reviewer/assign-university" element={<AssignUniversity />} />
        <Route path="/reviewer/review-history" element={<ReviewHistory />} />
        <Route path="/reviewer/analytics" element={<Analytics />} />
        <Route path="/reviewer/reports" element={<Reports />} />
        <Route path="/reviewer/notifications" element={<ReviewerNotifications />} />
        <Route path="/reviewer/profile" element={<ReviewerProfile />} />
        <Route path="/reviewer/help" element={<ReviewerHelpSupport />} />

        {/* University */}
        <Route path="/university/login" element={<UniversityLogin />} />

        <Route path="/university" element={<UniversityLayout />}>
          <Route path="dashboard" element={<UniversityDashboard />} />
          <Route path="challenges" element={<RecommendedChallenges />} />
          <Route path="challenges/:id" element={<UniversityChallengeDetails />} />
          <Route path="projects" element={<MyProjects />} />
          <Route path="projects/:id/workspace" element={<ProjectWorkspace />} />
          <Route path="faculty-mentors" element={<FacultyMentors />} />
          <Route path="student-teams" element={<StudentTeams />} />
          <Route path="milestones" element={<MilestonesProgress />} />
          <Route path="submissions" element={<Submissions />} />
          <Route path="notifications" element={<UniversityNotifications />} />
          <Route path="reports" element={<ReportsAnalytics />} />
          <Route path="support" element={<SupportResources />} />
          <Route path="profile" element={<ProfileSettings />} />
        </Route>

        {/* Industry */}
        <Route path="/industry/login" element={<IndustryLogin />} />

        <Route path="/industry" element={<IndustryLayout />}>
          <Route path="dashboard" element={<IndustryDashboard />} />
          <Route path="challenges" element={<AvailableChallenges />} />
          <Route path="challenges/:id" element={<IndustryChallengeDetails />} />
          <Route path="projects" element={<IndustryMyProjects />} />
          <Route path="projects/:id/workspace" element={<IndustryProjectWorkspace />} />
          <Route path="mentors" element={<IndustryMentors />} />
          <Route path="teams" element={<IndustryExpertTeams />} />
          <Route path="milestones-progress" element={<IndustryMilestonesProgress />} />
          <Route path="submissions" element={<IndustrySubmissions />} />
          <Route path="notifications" element={<IndustryNotifications />} />
          <Route path="reports-analytics" element={<IndustryReportsAnalytics />} />
          <Route path="support-resources" element={<IndustrySupportResources />} />
          <Route path="profile-settings" element={<IndustryProfileSettings />} />
        </Route>


        {/* Government */}
        <Route path="/government/login" element={<GovernmentLogin />} />
        <Route path="/government" element={<GovernmentLayout />}>
          <Route path="dashboard" element={<GovernmentDashboard />} />
          <Route path="challenges" element={<GovernmentChallenges />} />
          <Route path="challenges/:id" element={<GovernmentChallengeDetails />} />
          <Route path="problems" element={<GovernmentProblemManagement />} />
          <Route path="assignments" element={<GovernmentAssignments />} />
          <Route path="universities" element={<GovernmentUniversityCoordination />} />
          <Route path="industries" element={<GovernmentIndustryCoordination />} />
          <Route path="milestones" element={<GovernmentMilestonesProgress />} />
          <Route path="submissions" element={<GovernmentSubmissions />} />
          <Route path="notifications" element={<GovernmentNotifications />} />
          <Route path="reports" element={<GovernmentReportsAnalytics />} />
          <Route path="support" element={<GovernmentSupportResources />} />
          <Route path="profile" element={<GovernmentProfileSettings />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;