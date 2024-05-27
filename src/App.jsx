import { useState } from "react"
import "./App.css"
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import UserProfile from "./pages/UserProfile"
import Games from "./pages/Games"
import Memory from "./pages/Memory"
import Alphabet from "./pages/Alphabet"
import Math from "./pages/Math"

import IsPrivate from "./components/IsPrivate"
import IsAnon from "./components/IsAnon"

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="App relative z-20">
            <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            {isSidebarOpen && <Sidebar />}
            <div
                className={`content ${isSidebarOpen ? "shifted" : ""} relative z-10`}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Home signUp={true} />} />
                    {/*with signup popup open */}
                    <Route path="/login" element={<Home login={true} />} />
                    {/*with login popup open*/}
                    <Route
                        path="/profile"
                        element={
                            <IsPrivate>
                                <UserProfile />
                            </IsPrivate>
                        }
                    />
                    <Route path="/games" element={<Games />} />
                    <Route
                        path="/games/memory"
                        element={
                            <IsPrivate>
                                <Memory />
                            </IsPrivate>
                        }
                    />
                    <Route
                        path="/games/alphabet"
                        element={
                            <IsPrivate>
                                <Alphabet />
                            </IsPrivate>
                        }
                    />
                    <Route
                        path="/games/math"
                        element={
                            <IsPrivate>
                                <Math />
                            </IsPrivate>
                        }
                    />
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
