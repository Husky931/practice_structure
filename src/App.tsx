import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./layouts/Navbar"
import { fetchUserData } from "./lib/getUserData"
import { getTokenFromLocalCookie } from "./lib/auth"
import NotFound from "./pages/404"
import Films from "./pages/Films"
import HomePage from "./pages/HomePage"
import IndividualFilm from "./pages/IndividualFilm"
import NewsFeed from "./pages/NewsFeed"
import { GlobalData } from "./states/state"

function App() {
    const [loginModal, setLoginModal] = useState(false)
    const [userData, setUserData] = useState(null)
    const user = !!getTokenFromLocalCookie()

    useEffect(() => {
        user && loadUserData()
    }, [])

    async function loadUserData() {
        const userData = await fetchUserData()
        setUserData(userData)
    }

    return (
        <GlobalData.Provider value={{ loginModal, setLoginModal, userData }}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="feed" element={<NewsFeed />} />
                    <Route path="films" element={<Films />} />
                    <Route path="/films/:title" element={<IndividualFilm />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </GlobalData.Provider>
    )
}

export default App
