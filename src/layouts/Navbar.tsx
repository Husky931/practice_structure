import React, { useContext } from "react"
import { GlobalData } from "../state"
import Button from "@mui/material/Button"
import { unsetToken } from "../lib/auth"

export default function Navbar(props: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const { loginModal, setLoginModal } = useContext(GlobalData)
    const logoutUser = () => unsetToken()

    return (
        <div className="w-full p-4 flex justify-end max-w-[1350px] mx-auto">
            <Button
                id="demo-customized-button"
                aria-haspopup="true"
                variant="outlined"
                disableElevation
                onClick={() => setLoginModal(true)}
                sx={{ marginX: "10px" }}
            >
                Log in
            </Button>
            <Button
                id="demo-customized-button"
                aria-haspopup="true"
                variant="contained"
                disableElevation
                // onClick={}
            >
                Sign in
            </Button>
            <Button id="demo-customized-button" aria-haspopup="true" variant="contained" disableElevation sx={{ marginX: "10px" }} onClick={() => logoutUser()}>
                Logout
            </Button>
        </div>
    )
}
