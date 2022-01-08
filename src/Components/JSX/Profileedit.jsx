import React,{ useContext, useState} from 'react'
import Newcontext from '../Context/Createcontext'

const Profileedit = (props) => {
    const context = useContext(Newcontext)
    const {member, about ,avatar , updateuser} = context
    const [edits, setedits] = useState(member)
    const [filepass, setfilepass] = useState(false)
    const [file, setfile] = useState(null)
    var fd = new FormData();
    
    const onedit=(e)=>{
     setedits({...edits,[e.target.name]:e.target.value})
    }

    const handlefile=(e)=>{
     setfile(e.target.files[0])
     setfilepass(true)
    }

    const SaveData=(e)=>{
        e.preventDefault();
        console.log(edits.name + member.name + edits.contact + member.contact)
        if(edits.name!==member.name || edits.contact!==member.contact)
        {
            updateuser(edits.name,edits.contact)
        }
        console.log(filepass)
        if(filepass){
            fd.append("dp",file)
            avatar(fd);
            setfilepass(false)
        }
        if(edits.about!==member.about){
            about(edits.about)
        }
        props.appear();
    }

    return (
        <> 
          <div className="Profile-Edit-Body container">
              <form action="" className="Edit-form" encType='multipart/form-data'>
                     <label htmlFor="name">Name</label>
                     <input type="text" id='name' className='form-control' value={edits.name} name='name' onChange={onedit}/>
                     <label htmlFor="contact">Contact</label>
                     <input type="number" id='contact' className='form-control' value={edits.contact} name='contact' onChange={onedit}/>
                     <label htmlFor="about">About</label>
                      <textarea name="about" id="about" cols="30" rows="10" value={edits.about} className='form-control'onChange={onedit}></textarea>
                     <label htmlFor="image">Profile picture</label>
                     <input type="file" id='image' className='form-control' name='image' onChange={handlefile}/>
                     <button className='btn btn-primary mx-2 my-3' onClick={SaveData}>Save</button>
                     <button className='btn btn-light mx-2 my-3' onClick={props.appear}>Cancel</button>
                 </form>
          </div>
        </>
    )
}

export default Profileedit
