import React, { useState, useContext, useRef } from 'react'
import Profileedit from './Profileedit'
import "../CSS/Settings.css"
import Newcontext from '../Context/Createcontext'
import emailjs from 'emailjs-com';
import OTP from './OTP';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const context = useContext(Newcontext)
    const { member, User, setonetp, logout } = context
    const [show, setshow] = useState(false)
    const ref = useRef(null)
    const refclose = useRef(null)
    const navigate = useNavigate()
    const [otpverifprogress, setotpverifprogress] = useState(false)


    if(sessionStorage.loggedin !== "true"){
        window.location.href="/"
    }  

    const handlelogout = () => {
        logout()
        navigate("/")
    }
    const otpverified = () => {
        refclose.current.click()
    }                                                                                                                                                                                                                                                                                                 
    window.onload = () => {
        User()
    }

    const OTPforedit = () => {
        setshow(true)
        setotpverifprogress(true)
        ref.current.click()
        const a = 100000, b = 999999;
        const c = Math.ceil(a + (Math.random()) * b);
        setonetp(c)
        const signinuser = {
            name: member.name,
            email: member.email,
            otp: c
        }
        console.log(signinuser)
        emailjs.send("service_mtz89cf", "template_zd1yq7c", signinuser, "user_AOLeNmrFyKSLf0lOilzWc")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <div className="SettingBody">
                <div className="head">
                    <h2>Settings</h2>
                    <hr />
                </div>
                <div className="setting-holder container" >
                    {!show && !otpverifprogress && <div className="Options profile" onClick={OTPforedit}>
                        <div className="start">
                            <img src={`https://backendforyourtourdiary.herokuapp.com/pimg/${member.avatar}`} alt="" />
                        </div>
                        <div className="middle">
                            <h3> Profile </h3>
                        </div>
                        <div className="end">
                            <button className='logout-button'>
                                Edit your profile details
                            </button>
                        </div>
                    </div>}
                    {!show && !otpverifprogress && <div className="Options logout" onClick={handlelogout}>
                        <div className="start">
                            <img src={`https://backendforyourtourdiary.herokuapp.com/pimg/${member.avatar}`} alt="" />
                        </div>
                        <div className="middle">
                            <h3> Log Out </h3>
                        </div>
                        <div className="end">
                            <span className='logout-button'> Log Out </span>
                        </div>
                    </div>}
                </div>
                <div className="editform">
                    {show && !otpverifprogress && <Profileedit appear={() => { setshow(false) }} />}
                </div>
            </div>

            <button type="button" ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ display: "none" }}>
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Account Verification</h5>
                        </div>
                        <div className="modal-body">
                            {<OTP verify={() => { setotpverifprogress(false) }} for={"settings"} done={otpverified} />}
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

export default Settings
