import React, { useState, useContext } from 'react'
// import { useNavigate } from "react-router-dom"
import Newcontext from '../Context/Createcontext'
import "../CSS/Login.css"

const Login = () => {
    // const navigate = useNavigate();         
    const [logincred, setlogincred] = useState({ email: "", password: "" })
    const context = useContext(Newcontext)
    const { login,Pass } = context
    const onchange = (e) => {
        setlogincred({ ...logincred, [e.target.name]: e.target.value })
        console.log(logincred)
    }
    const loging = async (e) => {
        e.preventDefault();
         await login(logincred.email, logincred.password);
        console.log(Pass())
    }
    return (
        <>
            <div className="LoginBody">
                <div className="Login">
                    <h1>Login:</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label" id="Label1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={onchange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label" id="Label2">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="current-password" name="password" onChange={onchange} />
                        </div>
                        <button className="btn btn-primary" onClick={loging}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
