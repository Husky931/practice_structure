import React from "react"
import { Link } from "react-router-dom"
import Button from "@mui/material/Button"

export default function Navbar(props: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    //   const { setStudentSignUpModal } = useContext(GlobalData)

    return (
        <div className="w-full p-4 flex justify-end max-w-[1350px] mx-auto">
            <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="outlined"
                disableElevation
                onClick={handleClick}
                sx={{ marginX: "10px" }}
            >
                Log in
            </Button>
            <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
            >
                Sign in
            </Button>
        </div>
    )
}
