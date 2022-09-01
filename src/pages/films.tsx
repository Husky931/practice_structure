import { useState, useEffect } from "react"
import { fetcher } from "../lib/api"

function Films() {
    const [films, setFilms] = useState([])
    async function fetchData() {
        fetch("http://localhost:1337/api/films", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "GET"
        })
            .then((res) => res.json())
            .then((data) => setFilms(data.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchData()
        console.log(films)
    }, [])

    return (
        <div>
            <h1>Hi, i am films page</h1>
            <h1>zdr</h1>
            <h1>ola</h1>
            {films.map((m, i) => (
                <h1 key={m.id}>{m?.attributes.title}</h1>
            ))}
        </div>
    )
}

export default Films
