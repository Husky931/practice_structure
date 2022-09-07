import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { GlobalData } from "../states/state"
import Button from "@mui/material/Button"
import { unsetToken } from "../lib/auth"
import LoginModal from "../components/LoginModal"

export default function Navbar(props: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const { loginModal, setLoginModal, userData } = useContext(GlobalData)
    const logoutUser = () => unsetToken()

    return (
        <div className="w-full p-4 flex justify-end max-w-[1350px] mx-auto">
            {!userData && (
                <>
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
                    <Button id="demo-customized-button" aria-haspopup="true" variant="contained" disableElevation>
                        Sign in
                    </Button>
                </>
            )}
            {userData && (
                <div className="w-full flex justify-between">
                    <Link to="/">
                        <Button aria-haspopup="true" variant="contained" disableElevation sx={{ marginX: "10px" }}>
                            Home
                        </Button>
                    </Link>

                    <Button aria-haspopup="true" variant="contained" disableElevation sx={{ marginX: "10px" }} onClick={() => logoutUser()}>
                        Logout
                    </Button>
                </div>
            )}
            <LoginModal />
        </div>
    )
}
