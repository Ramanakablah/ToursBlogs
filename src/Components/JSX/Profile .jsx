import React,{useContext,useState} from 'react'
import "../CSS/Profile.css"
import { useNavigate } from 'react-router'
import Newcontext from "../Context/Createcontext"

const Profile = () => {
    const navigate = useNavigate()
  let aboutyou=null
  var fd = new FormData();
  const [file, setfile] = useState(null)
  const context = useContext(Newcontext)
  const [abouts, setabouts] = useState("")
  const [warn, setwarn] = useState(false)
  const {about,tempauth,avatar}= context

    const onchange=(e)=>{
    aboutyou = e.target.value; 
    setabouts(aboutyou) 
    console.log(tempauth)          
    }

    const onclick= async (e)=>{
        fd.append("dp",file)
        e.preventDefault();
        avatar(fd)
    }
    const handlefile= async (e)=>{
     setfile(e.target.files[0])
     fd.append("dp",e.target.files[0])
    }
    const Submitabout=(e)=>{
        if(abouts.length !==0)
        {
            e.preventDefault();
            about(abouts)
            navigate("/")
        }
        else{
            setwarn(true)
            setTimeout(() => {
                setwarn(false)
            },6000);
        }
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
                            <form  method="POST" action='/avatar' encType='multipart/form-data'>
                            <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" formcontrolname="image" name='image' onChange={handlefile} />
                            <button className="btn btn-primary my-3" onClick={onclick}> Upload </button>
                            </form>
                        </div>
                    </div>
                    <div className="about">
                       <label htmlFor="ProfileAbout"> About you: </label>
                        <textarea name="abouttext" id="ProfileAbout" onChange={onchange}>
                        </textarea>
                        {warn && <div className="warning">* Enter something about you</div>}
                        <button className="btn btn-primary mx-2 my-2" onClick={Submitabout}> Submit </button>
                    </div>
                </div>
        </>
    )
}

export default Profile
