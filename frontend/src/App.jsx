import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Bot from "./components/Bot";

// Pages
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Jobs from "./pages/Jobs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Youth from "./pages/Youth";
import Government from "./pages/Government";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Assessment from "./pages/Assessment.jsx";
import Jobdes from "./pages/Jobdes";
import Register from "./pages/Register";


// Policies
import TermsofUse from "./components/Policies/TermsofUse";

// QuickLinks
import Testimonials from "./components/QuickLinks/Testimonials";
import Blogs from "./components/QuickLinks/Blogs";
import HelpVideos from "./components/QuickLinks/HelpVideos";

// Admin Components
import AdminCreatePanel from "./components/AdminDashboard/AdminCreatePanel";

// Global Context
import { LeadershipProvider } from "./context/LeadershipContext";
import Skill from "./pages/Skill.jsx";

//EXTRA
import Corporate from "./pages/Corporate";
import Education from "./pages/Education";
import CopgovCon from "./pages/CorGov";
import SercopempF from "./components/Ser/SercopempF";
import CaseStudy from "./pages/CaseStudy";
import Platform from "./pages/Platform";
import HomeAssess from "./pages/HomeAssess.jsx";


function LayoutWrapper({ children }) {
  const location = useLocation();

  // Add dynamic logic or scroll-to-top if needed here
  React.useEffect(() => {
    window.scrollTo(0, 0); // Ensures page starts at top on route change
  }, [location]);

  return (
    <>
      <Navbar />
      {children}
      <Bot />
      <Footer />
    </>
  );
}

function App() {
  return (
    <LeadershipProvider>
      <Router>
        <LayoutWrapper>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/assess" element={<Assessment />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/youth" element={<Youth />} />
            <Route path="/government" element={<Government />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/help-videos" element={<HelpVideos />} />
            <Route path="/terms-of-use" element={<TermsofUse />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/ser-cop" element={<Corporate />} />
            <Route path="/ser-edu" element={<Education />} />
            <Route path="/ser-gov" element={<CopgovCon />}/>
            <Route path="/jobdes" element={<Jobdes />}/>
            <Route path="/reg" element={<Register />}/>
            <Route path="/ser-cop-emp" element={<SercopempF />}/>
            <Route path="/case-studies" element={<CaseStudy />}/>
            <Route path="/platform" element={<Platform />}/>
            <Route path="/assessments" element={<HomeAssess  />}/>

            {/* Admin Pages */}
            <Route path="/signup" element={<AdminLogin />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/admin-create" element={<AdminCreatePanel />} />
          </Routes>
        </LayoutWrapper>
      </Router>
    </LeadershipProvider>
  );
}

export default App;