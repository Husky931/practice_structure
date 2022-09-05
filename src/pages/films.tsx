import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetcher } from "../lib/fetcher"
import Cookies from "js-cookie"

function Films() {
    const [films, setFilms] = useState([])
    const [newMovie, setNewMovie] = useState("")
    let [pageIndex, setPageIndex] = useState(1)

    useEffect(() => {
        fetchMovieData()
        console.log(pageIndex)
    }, [pageIndex])

    async function fetchMovieData() {
        const data = await fetcher(`${import.meta.env.VITE_BASE_URL}films?pagination[page]=${pageIndex}&pagination[pageSize]=100`)
        setFilms(data.data.reverse())
    }

    async function addMovie() {
        const token = Cookies.get("jwt")

        const postMovie = await fetcher(`${import.meta.env.VITE_BASE_URL}films`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                data: {
                    title: newMovie
                }
            })
        })
        const res = await postMovie
        if (res.error) {
            return alert(res.error.message)
        } else {
            fetchMovieData()
        }
    }

    return (
        <div>
            <div>
                <button className="mx-1" onClick={() => setPageIndex(--pageIndex)}>
                    Previous
                </button>
                <button className="mx-1" onClick={() => setPageIndex(++pageIndex)}>
                    Next
                </button>
            </div>

            <div className="my-8 flex flex-col items-center">
                <button onClick={() => addMovie()} className="w-[200px] mb-2">
                    Add movie to the list
                </button>
                <input type="text" onChange={(e) => setNewMovie(e.target.value)} className="border-2 border-slate-200 w-[300px] pl-2" />
            </div>

            {films.map((m, i) => (
                <Link key={m.id} to={`/films/${m.attributes.title}`} state={m.id}>
                    <p className="w-auto">{m?.attributes.title}</p>
                </Link>
            ))}
        </div>
    )
}

export default Films
