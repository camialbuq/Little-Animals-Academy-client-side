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
import NotFound from "./pages/NotFound"

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="App">
            <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            {isSidebarOpen && <Sidebar />}
            <div className={`content ${isSidebarOpen ? "shifted" : ""}`}>
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
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </div>
    )
}

export default App
