import React, { useState, useContext } from 'react'
import "../CSS/Signup.css"
import { useNavigate } from 'react-router'
import Newcontext from "../Context/Createcontext"
import emailjs from 'emailjs-com';

const Signup = () => {
    const navigate = useNavigate();
    const context = useContext(Newcontext);
    const { signin,onetp,setonetp,flip} = context;
    let signinuser={};
    const [Signform, setSignform] = useState({ name: "", mob: "", email: "", password: "" });

    const onchange = (e) => {
        setSignform({ ...Signform, [e.target.name]: e.target.value })
    }
    

    const Submit = (e) => {
        e.preventDefault()
        const a = 100000, b = 999999;
        const c = Math.ceil(a + (Math.random()) * b);
        console.log(onetp)
        signinuser={
            name:Signform.name,
            email:Signform.email,
            otp:c
        }
        setonetp(c)
        console.log(signinuser)
        emailjs.send("service_mtz89cf","template_zd1yq7c",signinuser,"user_AOLeNmrFyKSLf0lOilzWc")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        navigate("/authentication")

        if (Signform.name.length !== 0) {
            if (Signform.email.length !== 0) {
                if (Signform.password.length !== 0) {
                    if (Signform.mob.length !== 0) {
                        signin(Signform.name, Signform.email, Signform.password, Signform.mob);
                    }
                }
            }
        }
    }

    return (
        <>
            <div className='signup'>
                <div className="Body" id={flip?'slide-top':null}>
                    <h1 style={{ color: "white" }}>Sign up :</h1>
                    <div className="SignupBody">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label" id="Label">Name</label>
                                <input type="text" className="form-control max-2" id="exampleInputName" name="name" onChange={onchange} minLength="3" placeholder="*"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label" id="Label">Email address</label>
                                <input type="email" className="form-control max-2" disabled={Signform.name.length===0} id="exampleInputEmail1" name="email" onChange={onchange} minLength="7" placeholder="*"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputContact" className="form-label" id="Label">Contact</label>
                                <input type="number" className="form-control max-2"  disabled={Signform.email.length===0}  id="exampleInputContact" name="mob" onChange={onchange} minLength="8" placeholder="*"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword" className="form-label" id="Label">Password</label>
                                <input type="password" className="form-control max-2"  disabled={Signform.mob.length===0}  id="exampleInputPassword" name="password" onChange={onchange} minLength="4 " placeholder="*"/>
                            </div>
                            <button className="btn btn-primary"  disabled={Signform.password.length===0}  onClick={Submit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
