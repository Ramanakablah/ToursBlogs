import React, { useState, useContext, useRef } from 'react'
import "../CSS/Signup.css"
import Newcontext from "../Context/Createcontext"
import OTP from './OTP';

const Signup = () => {
    const ref = useRef(null)
    const refclose = useRef(null)
    const context = useContext(Newcontext);
    const { signin, setonetp, flip, SigninWarning } = context;
    const [OTPverification, setOTPverification] = useState(false)
    const [Signform, setSignform] = useState({ name: "", mob: "", email: "", password: "" });

    const onchange = (e) => {
        setSignform({ ...Signform, [e.target.name]: e.target.value })
    }

    const Shinsengumi = () => {
        refclose.current.click();
        setOTPverification(false)
    }

    const Submit = (e) => {
        e.preventDefault()
        const a = 100000, b = 999999;
        const c = Math.ceil(a + (Math.random()) * b);
        setonetp(c)
        console.log(c)
        if (Signform.name.length !== 0) {
            if (Signform.email.length !== 0) {
                if (Signform.password.length !== 0) {
                    if (Signform.mob.length !== 0) {
                        signin(Signform.name, Signform.email, Signform.password, Signform.mob, c);
                        setOTPverification(true)
                        ref.current.click();
                    }
                }
            }
        }
    }

    return (
        <>
            <div className='signup'>
                {!OTPverification && <div className="Body" id={flip ? 'slide-top' : null}>
                    <h1 style={{ color: "white" }}>Sign up :</h1>
                    <div className="SignupBody">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label" id="Label">Name</label>
                                <input type="text" className="form-control max-2" id="exampleInputName" name="name" onChange={onchange} minLength="3" placeholder="*" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label" id="Label">Email address</label>
                                <input type="email" className="form-control max-2" disabled={Signform.name.length === 0} id="exampleInputEmail1" name="email" onChange={onchange} minLength="7" placeholder="*" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputContact" className="form-label" id="Label">Contact</label>
                                <input type="number" className="form-control max-2" disabled={Signform.email.length === 0} id="exampleInputContact" name="mob" onChange={onchange} minLength="8" placeholder="*" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword" className="form-label" id="Label">Password</label>
                                <input type="password" className="form-control max-2" disabled={Signform.mob.length === 0} id="exampleInputPassword" name="password" onChange={onchange} minLength="4 " placeholder="*" />
                            </div>
                            <button className="btn btn-primary" disabled={Signform.password.length === 0} onClick={Submit}>Submit</button>
                        </form>
                    </div>
                </div>}
            </div>

            <button type="button" ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ display: "none" }}>
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            {SigninWarning!=="Signinwarn" && <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={Shinsengumi}></button>}
                        </div>
                        <div className="modal-body">
                            {SigninWarning==="Checking" ? "Checking . . ." : SigninWarning==="Signinpass" ? <OTP verify={Shinsengumi} /> : "User with these credentials already exists" }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refclose} style={{ display: "none" }}></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
