import { useState, useEffect } from "react"
import { fetcher } from "../lib/api"

function Films() {
    const [films, setFilms] = useState([])
    let [pageIndex, setPageIndex] = useState(1)

    useEffect(() => {
        fetchData()
        console.log(pageIndex)
    }, [pageIndex])

    async function fetchData() {
        const data = await fetcher(`${import.meta.env.VITE_BASE_URL}films?pagination[page]=${pageIndex}&pagination[pageSize]=20`)
        setFilms(data.data)
    }

    return (
        <div>
            <div>
                <button onClick={() => setPageIndex(--pageIndex)}>Previous</button>
                <button onClick={() => setPageIndex(++pageIndex)}>Next</button>
            </div>
            {films.map((m, i) => (
                <h1 key={m.id}>{m?.attributes.title}</h1>
            ))}
        </div>
    )
}

export default Films
