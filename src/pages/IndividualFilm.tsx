import { useEffect, useState, useContext } from "react"
import { useParams, useLocation } from "react-router-dom"
import Cookies from "js-cookie"
import { fetcher } from "../lib/fetcher"
import { GlobalData } from "../states/state"
import { v4 as uuidv4 } from "uuid"

function IndividualFilm() {
    const [filmData, setFilmData] = useState("")
    const [review, setReview] = useState("")
    const { title } = useParams()
    const location = useLocation()
    const { userData } = useContext(GlobalData)
    const id = location.state

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const { data } = await fetcher(`${import.meta.env.VITE_BASE_URL}films/${id}?populate=*`)
        setFilmData(data)
        console.log(data)
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
                    reviewer: userData.username,
                    film: filmData?.id
                }
            })
        })
        if (res.error) {
            return alert(res.error.message)
        } else {
            setReview("")
            fetchData()
        }
    }

    return (
        <div className="min-h-screen">
            <h1>{title}</h1>
            <br />
            <h3>Movie plot:</h3>
            <p>{filmData?.attributes?.plot}</p>
            <br />
            <textarea value={review} onChange={(e) => setReview(e.target.value)} className="border-2 border-slate-200 rounded w-1/2 h-[150px] p-2" />
            <br />
            <button onClick={() => addReview()}>Add Review</button>
            <ul className="ml-12">
                {filmData?.attributes?.reviews?.data?.map((m) => (
                    <li key={uuidv4()} className="text-left">
                        <span className="font-bold mr-8">{m.attributes.reviewer}:</span>
                        {m.attributes.review}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default IndividualFilm
