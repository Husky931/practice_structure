import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./layouts/Navbar"
import NotFound from "./pages/404"
import Films from "./pages/Films"
import HomePage from "./pages/HomePage"
import NewsFeed from "./pages/NewsFeed"

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="feed" element={<NewsFeed />} />
                <Route path="films" element={<Films />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
