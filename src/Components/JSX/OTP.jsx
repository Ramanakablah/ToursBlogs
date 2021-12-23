import React ,{useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/OTP.css'
import Newcontext from '../Context/Createcontext'

const OTP = () => {
    const navigate = useNavigate()
    const [usersotp, setusersotp] = useState(10)
    const context = useContext(Newcontext)
    const {onetp  } = context
    const check=()=>{
        try {
            if(usersotp === `${onetp}`)
            { 
            console.log("inside check")
            navigate("/profile")
            } 
            else {
            }  
        } catch (error) {
           console.log(error) 
        }
    }
    const verifotp=(e)=>{
      setusersotp(e.target.value)  
    }
    return (
        <>
            <div className="input-otp">
                <h1>Enter OTP</h1>
                    <label htmlFor="verification-otp">Enter the OTP sent to your provided E-Mail</label>
                <div className="otp">
                    <input type="number" className='verif-otp' id='verification-otp' onChange={verifotp} />
                    <button className="btn btn-success" onClick={check}>Verify</button>
                </div>
            </div>
        </>
    )
}

export default OTP
