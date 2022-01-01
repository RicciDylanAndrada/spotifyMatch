import { useContext } from "react"
import {LoginContext} from "../content/LoginContext"
function Login() {
    const {token,setToken}=useContext(LoginContext)
    return (
        <div>
            
        </div>
    )
}

export default Login
