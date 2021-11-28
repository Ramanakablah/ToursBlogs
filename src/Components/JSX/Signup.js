import React,{useState,useContext} from 'react'
import "../CSS/Signup.css"
import { useNavigate } from 'react-router'
import Newcontext from "../Context/Createcontext"

const Signup = () => {
    const navigate=useNavigate();
  const context = useContext(Newcontext);
  const {signin} = context;
   const [Signform, setSignform] = useState({name:"",mob:"",email:"",password:""});
   const onchange=(e)=>{
       setSignform({...Signform,[e.target.name]:e.target.value})
   }

   const Submit=(e)=>{
       e.preventDefault()
    signin(Signform.name,Signform.email,Signform.password,Signform.mob);
    console.log(Signform)
    navigate("/profile");
   }

    return (
        <>
         <div>
            <div className="Body">
                <h1 style={{color:"white"}}>Sign up :</h1>
                <div className="SignupBody">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label" id="Label">Name</label>
                            <input type="text" className="form-control max-2" id="exampleInputName"  name="name" onChange={onchange} minLength="3"/>  
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label" id="Label">Email address</label>
                            <input type="email" className="form-control max-2" id="exampleInputEmail1" name="email" onChange={onchange} minLength="7" />  
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputContact" className="form-label" id="Label">Contact</label>
                            <input type="number" className="form-control max-2" id="exampleInputContact" name="mob" onChange={onchange} minLength="8" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword" className="form-label" id="Label">Password</label>
                            <input type="password" className="form-control max-2" id="exampleInputPassword" name="password" onChange={onchange} minLength="4 "/>
                        </div>
                        <button className="btn btn-primary" onClick={Submit}>Submit</button>
                    </form>
                </div>
            </div>
         </div>
        </>
    )
}

export default Signup
