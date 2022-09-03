import Cookies from "js-cookie"
import { fetcher } from "./fetcher"

export const fetchUserData = async () => {
    const token = Cookies.get("jwt")
    const res = await fetcher(`${import.meta.env.VITE_BASE_URL}users/me/`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })

    const data = await res
    return data
}
