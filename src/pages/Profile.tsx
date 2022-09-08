import { useEffect, useState, useContext } from "react"
import { GlobalData } from "../states/state"

export default function Profile() {
    const { userData } = useContext(GlobalData)

    useEffect(() => {
        console.log(userData)
    })

    function uploadToServer() {
        console.log("works")
    }
    function uploadToClient() {
        console.log("works")
    }

    return (
        <div>
            <h1>Welcome back {userData?.username}</h1>
            <br />
            <br />
            {!userData.avatar && (
                <div className="flex flex-col justify-center items-center">
                    <h4>Select an image to upload</h4>
                    <input
                        type="file"
                        onChange={() => uploadToServer()}
                        className="mt-2 border-[0.5px] border-slate-500"
                    />
                </div>
            )}
        </div>
    )
}
