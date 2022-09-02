import { useState, useEffect } from "react"
import { fetcher } from "../lib/api"

function Films() {
    const [films, setFilms] = useState([])

    useEffect(() => {
        fetchData()
        console.log(films)
    }, [])

    async function fetchData() {
        const getData = await fetch("http://localhost:1337/api/films")
        const result = await getData.json()
        console.log(result)
    }

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
