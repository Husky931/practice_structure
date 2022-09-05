import { useEffect, useState, useContext } from "react"
import { useParams, useLocation } from "react-router-dom"
import Cookies from "js-cookie"
import { fetcher } from "../lib/fetcher"
import { GlobalData } from "../states/state"

function IndividualFilm() {
    const [filmPlot, setFilmPlot] = useState(null)
    const [filmId, setFilmId] = useState(null)
    const [review, setReview] = useState("")
    const { title } = useParams()
    const location = useLocation()
    const { userData } = useContext(GlobalData)
    const id = location.state

    useEffect(() => {
        // console.log(title, "am title")
        // console.log(id, "am id")
        console.log(userData, "i am userData")
        fetchData()
    }, [filmPlot])

    async function fetchData() {
        const data = await fetcher(`${import.meta.env.VITE_BASE_URL}films/${id}`)
        console.log(data)
        setFilmPlot(data.data.attributes.plot)
        setFilmId(data.data.id)
        console.log(filmId)
    }

    async function addReview() {
        const token = Cookies.get("jwt")
        if (!token) {
            alert("please log in")
            window.location = "/"
        }
        if (review === "") return alert("can not sent empty review")

        const res = await fetcher(`${import.meta.env.VITE_BASE_URL}reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                data: {
                    review,
                    reviewer: "",
                    film: filmId
                }
            })
        })

        // const getRes = await res
        console.log(res)
    }

    function reviewPostValidation(token) {}

    return (
        <div className="min-h-screen">
            <h1>{title}</h1>
            <br />
            <br />
            <br />
            <h3>Movie plot:</h3>
            <p>{filmPlot}</p>
            <br />
            <br />
            <br />
            <h2>Review</h2>
            <textarea onChange={(e) => setReview(e.target.value)} className="border-2 border-slate-200 rounded w-1/2 h-[150px] mt-4 p-2" />
            <br />
            <button onClick={() => addReview()}>Add Review</button>
        </div>
    )
}

export default IndividualFilm
