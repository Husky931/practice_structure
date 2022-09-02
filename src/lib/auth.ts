import Cookies from "js-cookie"

export const setToken = (data) => {
    if (typeof window === "undefined") return

    Cookies.set("jtw", data.jwt)
    Cookies.set("username", data.user.username)
    Cookies.set("id", data.user.id)

    if (Cookies.get("username")) {
        window.location.reload()
    }
}

export const unsetToken = () => {
    Cookies.remove("id")
    Cookies.remove("username")
    Cookies.remove("jwt")

    window.location.reload()
}
