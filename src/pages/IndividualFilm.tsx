import { useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"

function IndividualFilm() {
    const { title } = useParams()
    const location = useLocation()
    const id = location.state

    useEffect(() => {
        console.log(title, "am title")
        console.log(id, "am id")
    })

    return (
        <div>
            <h1>Hi</h1>
        </div>
    )
}

export default IndividualFilm
