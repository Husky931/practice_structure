import { loremIpsum } from "lorem-ipsum"
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom"

function NewsFeed() {
    return (
        <div>
            <h1>Hi, i am news feed page</h1>
            <div>{loremIpsum({ count: 5 })}</div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>
                    <Link to="test">tedt</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default NewsFeed
