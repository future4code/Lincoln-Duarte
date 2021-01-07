import { useEffect} from "react"
import { useHistory } from "react-router-dom"

export default function ProtectPage () {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) { history.push("/Login")
            alert("Loga ae camarada") }
    }, [history])
}