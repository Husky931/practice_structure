import { useContext, useState, useEffect } from "react"
// import { GlobalData } from "../../state/globalState"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import TextField from "@mui/material/TextField"

export default function LoginModal() {
    // const { studentSignUpModal, setStudentSignUpModal } = useContext(GlobalData)

    let [step, setStep] = useState<number>(1)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    async function submitRegister() {}

    useEffect(() => {}, [])

    return (
        <div>
            <Dialog open={studentSignUpModal} onClose={() => setStudentSignUpModal(false)}>
                <DialogTitle>Step {step} of 3</DialogTitle>
                <h2 className="text-2xl px-6">Student sign up</h2>
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    <Button>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
