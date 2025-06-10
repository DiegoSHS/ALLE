import { useParams } from "react-router-dom"

export function Dynamicqr() {
    const { id } = useParams()
    console.log("Dynamicqr id:", id)
    return (
        <div>
            tuytodotudusquecruy
        </div>
    )
}