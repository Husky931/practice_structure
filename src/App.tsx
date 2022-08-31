import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./layouts/Navbar"
import NotFound from "./pages/404"
import HomePage from "./pages/HomePage"
import NewsFeed from "./pages/NewsFeed"
import Test from "./pages/Test"

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="feed" element={<NewsFeed />}>
                    <Route path="test" element={<Test />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
