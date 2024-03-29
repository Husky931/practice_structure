import { useState, useEffect } from "react"

function HomePage() {
    const [films, setFilms] = useState(null)
    let [count, setCount] = useState(0)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}films`)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw res
            })
            .then((data) => setFilms(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="App">
            <ul>
                <li>
                    <a href="/films">films</a>
                </li>
                <li>news fed</li>
                <li>1</li>
            </ul>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <p>{count}</p>
        </div>
    )
}

export default HomePage
