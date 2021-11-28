import React,{useContext} from 'react'
import "../CSS/Profile.css"
import Createcontext from "../Context/Createcontext"

const Profile = () => {
  let aboutyou=null
  const context = useContext(Createcontext)
  const {avatar,about}= context
    const onchange=(e)=>{
    aboutyou = e.target.value; 
    console.log(aboutyou)           
    }
    const onclick=(e)=>{
        e.preventDefault();
        avatar();
    }
    const Submitabout=()=>{
        console.log(aboutyou)
        about(aboutyou)
    }
    return (
        <>
                <h1 style={{padding:"10px 30px"}}>Profile:</h1>
                <div className="memb">
                    <div className="Image">
                        <div>
                            <img src="https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png" alt="User" />
                        </div>
                        <div>
                            <form encType="multipart/form-data" action="/join/avatar" method="POST">
                            <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" name="image" />
                            <button className="btn btn-primary" onClick={onclick}> Upload </button>
                            </form>
                        </div>
                    </div>
                    <div className="about">
                        <form>
                        <label htmlFor="ProfileAbout"> About you: </label>
                        <textarea name="about" id="ProfileAbout" onChange={onchange}>
                        </textarea>
                        <button className="btn btn-primary mx-2 my-2" onClick={Submitabout}> Submit </button>
                        </form>
                    </div>
                </div>
        </>
    )
}

export default Profile
