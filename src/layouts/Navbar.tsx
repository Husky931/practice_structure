import React from "react"
import { Link } from "react-router-dom"
import Button from "@mui/material/Button"

export default function Navbar(props: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    return (
        <div className="w-full p-4 flex justify-end max-w-[1350px] mx-auto">
            <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="outlined"
                disableElevation
                // onClick={}
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
                // onClick={}
            >
                Sign in
            </Button>
        </div>
    )
}
