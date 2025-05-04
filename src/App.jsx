// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Components/Landing';
import ImportantDates from './Components/ImportantDate';
import CallForPapers from './Components/CallforPaper';
import Registration from './Components/Registeration';
import PaperSubmission from './Components/PaperSubmission';
import Contact from './Components/Contact';
import Committee from './Components/Committe';
import About from './Components/AboutUs';
// import Tagline from './Components/Tagline';

function App() {
  return (
    <Router>
      {/* Tagline above Navbar */}
      {/* <div className="top-0 z-50 bg-white shadow-md"> */}
      {/* <Tagline /> */}
      <Navbar />
      {/* </div> */}
      <Routes>
        {/* Home page shows all sections in sequence */}
        <Route
          path="/"
          element={
            <div className="space-y-6 overflow-hidden">
              <LandingPage />
              <About />
              <Committee />
              <ImportantDates />
              <CallForPapers />
              <Registration />
              <PaperSubmission />
              <Contact />
            </div>
          }
        />

        {/* Individual pages */}
        <Route path="/important-dates" element={<ImportantDates />} />
        <Route path="/call-for-papers" element={<CallForPapers />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/paper-submission" element={<PaperSubmission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/more/committe" element={<Committee />} />
        <Route path="/more/venue" element={<Contact />} />
      </Routes>
    </Router >
  );
}

export default App;
