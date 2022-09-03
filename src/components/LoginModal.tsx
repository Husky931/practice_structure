import { useContext, useState, useEffect } from "react"
import { GlobalData } from "../states/state"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import TextField from "@mui/material/TextField"
import { fetcher } from "../lib/fetcher"
import { setToken } from "../lib/auth"

export default function LoginModal() {
    const { loginModal, setLoginModal } = useContext(GlobalData)

    const [identifier, setIdentifier] = useState<string>("g1@g.com")
    const [password, setPassword] = useState<string>("gligor")

    useEffect(() => {}, [])

    async function submitRegister() {
        if (identifier === "" || password === "") alert("please enter your information")

        const res = await fetcher(`${import.meta.env.VITE_BASE_URL}auth/local/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                identifier,
                password
            })
        })

        setToken(res)
        console.log(res)
    }

    return (
        <div>
            <Dialog open={loginModal} onClose={() => setLoginModal(false)}>
                <DialogTitle>Step 1 of 1</DialogTitle>
                <h2 className="text-2xl px-6">Enter your credentials</h2>
                <DialogContent>
                    <TextField
                        name="email"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        autoFocus
                        type="email"
                        sx={{ marginBottom: "20px" }}
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                    />
                    <TextField
                        name="password"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        type="password"
                        sx={{ marginBottom: "20px" }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button>Cancel</Button>
                    <Button onClick={() => submitRegister()}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
