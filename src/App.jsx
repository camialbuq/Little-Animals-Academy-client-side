import { useState } from "react"
import "./App.css"
import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import UserProfile from "./pages/UserProfile"
import Games from "./pages/Games"
import Memory from "./pages/Memory"
import Alphabet from "./pages/Alphabet"
import Math from "./pages/Math"
// import CohortListPage from "./pages/CohortListPage";
// import CohortDetailsPage from "./pages/CohortDetailsPage";
// import CohortEditPage from "./pages/CohortEditPage";
// import CohortCreatePage from "./pages/CohortCreatePage";
// import StudentListPage from "./pages/StudentListPage";
// import StudentDetailsPage from "./pages/StudentDetailsPage";
// import StudentEditPage from "./pages/StudentEditPage";
// import UserProfilePage from "./pages/UserProfilePage";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";

// import IsPrivate from "./components/IsPrivate";
// import IsAnon from "./components/IsAnon";

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="App relative z-20 pt-16">
            <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            {isSidebarOpen && <Sidebar />}
            <div
                className={`content ${isSidebarOpen ? "shifted" : ""} relative z-10`}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Home />} />
                    {/* but with signup popup */}
                    <Route path="/login" element={<Home />} />
                    {/* but with login popup */}
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/games/memory" element={<Memory />} />
                    <Route path="/games/alphabet" element={<Alphabet />} />
                    <Route path="/games/math" element={<Math />} />
                </Routes>
                {/* <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<CohortListPage />} />
          <Route path="/students" element={<StudentListPage />} />
          <Route path="/cohorts/details/:cohortId" element={<CohortDetailsPage />} />
          <Route path="/cohorts/edit/:cohortId" element={<CohortEditPage />} />
          <Route path="/cohorts/create" element={<CohortCreatePage />} />
          <Route path="/students/details/:studentId" element={<StudentDetailsPage />} />
          <Route path="/students/edit/:studentId" element={<StudentEditPage />} />
          <Route path="/profile" element={ <IsPrivate><UserProfilePage /></IsPrivate>} />
          <Route path="/login" element={<IsAnon><LoginPage /></IsAnon>} />
          <Route path="/signup" element={<IsAnon><SignupPage /></IsAnon>} />
        </Routes> */}
                <Footer />
            </div>
        </div>
    )
}

export default App
