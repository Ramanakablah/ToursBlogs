import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import Newcontext from '../Context/Createcontext'
import "../CSS/Login.css"

const Login = () => {
    const navigate = useNavigate();
    const [logincred, setlogincred] = useState({ email: "", password: "" })
    const context = useContext(Newcontext)
    const { login, setflip, User, SigninWarning, setSigninWarning } = context
    const onchange = (e) => {
        setlogincred({ ...logincred, [e.target.name]: e.target.value })
    }

    if(sessionStorage.loggedin === "true"){
        window.location.href="/setting"
    } 

    const loging = async (e) => {
        if (logincred.email.length !== 0) {
            if (logincred.password.length !== 0) {
                e.preventDefault();
              const Pass =  await login(logincred.email, logincred.password);
                if (Pass) {
                    User();
                    navigate("/blog")
                }
                else{
                    setTimeout(() => {
                        setSigninWarning(true)
                    },4000);
                }
            }
        }
    }
    return (
        <>
            <div className="LoginBody">
                <div className="Login">
                    <h1>Login:</h1>
                    {SigninWarning === "Loginwarn" && <div className="Warning">Entered Credentials are Wrong. Try with Correct one</div>}
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label" id="Label1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={onchange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label" id="Label2">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="current-password" name="password" onChange={onchange} disabled={logincred.email.length === 0} />
                        </div>
                        <button className="btn btn-primary" onClick={loging} disabled={logincred.password.length === 0}><i className="fas fa-sign-in-alt mx-1"></i> Login</button>
                    </form>
                    <div className="form-helpers">
                        <Link className="btn btn-primary my-4" to="/signup" onClick={() => { setflip(true) }} >Create New User</Link>
                    </div>
                </div>
                <div className="loginface">
                        <img src="https://cdn.pixabay.com/photo/2013/07/13/11/54/boat-158936_640.png" alt="Sailing boat" className="Boat" />
                </div>
            </div>
        </>
    )
}

export default Login
