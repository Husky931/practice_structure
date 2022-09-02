import { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import { fetcher } from "../lib/api"

function IndividualFilm() {
    const [filmPlot, setFilmPlot] = useState(null)
    const { title } = useParams()
    const location = useLocation()
    const id = location.state

    useEffect(() => {
        console.log(title, "am title")
        console.log(id, "am id")
        fetchData()
    }, [filmPlot])

    async function fetchData() {
        const data = await fetcher(`${import.meta.env.VITE_BASE_URL}films/${id}`)
        console.log(data)
        setFilmPlot(data.data.attributes.plot)
    }

    return (
        <div>
            <h1>{title}</h1>
            <br />
            <br />
            <br />
            <h3>Movie plot:</h3>
            <p>{filmPlot}</p>
        </div>
    )
}

export default IndividualFilm
