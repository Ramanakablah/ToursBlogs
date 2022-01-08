import React,{useState,useContext} from 'react'
import Newcontext from '../Context/Createcontext'
import "../CSS/Newblog.css"

const Newblog = (props) => {
  const [confirm, setconfirm] = useState(false)
  const [file, setfile] = useState(null)
  const fd = new FormData();
  const [BlogData, setBlogData] = useState({name:"",place:"",blog:""})
  const context = useContext(Newcontext)
  const {addblog}= context
   const onchange=(e)=>{
       setBlogData({...BlogData,[e.target.name]:e.target.value})
   }
   const handlefile=(e)=>{
       setfile(e.target.files[0])
   }
   const handleclick=(e)=>{
       e.preventDefault();
       console.log(BlogData)
       console.log(file)
       fd.append("name",BlogData.name)
       fd.append("place",BlogData.place)
       fd.append("blog",BlogData.blog)
       fd.append("image",file)
       console.log(fd)
       if(BlogData.name.length!==0)
       {if(BlogData.place.length!==0)
        {if(BlogData.blog.length!==0)
            {
                addblog(fd)
                setconfirm(true)
                setTimeout(() => {
                    setconfirm(false)
                }, 10000);
                props.permit()
            }
        }
       }
   }
    return (
        <div className="Bod">
            <div className="container">
                <div className="BlogHead">
                <h3>Your Blog </h3>
                <img src="https://cdn.pixabay.com/photo/2013/07/12/12/23/nib-145703_960_720.png" alt="" /> 
                </div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Place you visited:</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name="name" onChange={onchange}/>
                         </div>
                    <div className="mb-3">
                        <label htmlFor="place" className="form-label">Location:</label>
                        <input type="text" disabled={BlogData.name.length===0} className="form-control" id="place" aria-describedby="emailHelp" name="place" onChange={onchange}/>
                      </div>
                    <div className="mb-3">
                    <label htmlFor="Blog" className="form-label">Your Experience:</label>
                    <textarea name="blog" disabled={BlogData.place.length===0} id="blog" cols="30" rows="10" onChange={onchange}></textarea>
                     </div>
                     <div className="my-4">
                         Image:
                         <input type="file" onChange={handlefile} name="image"/>
                     </div>
                     <button className="btn btn-light mx-2 my-2" disabled={BlogData.blog.length===0} onClick={handleclick}> ADD &#x2B; </button>
                    { confirm && <div className="conformation"> Added successfully </div>}
                </form>
            </div>
        </div>
    )
}

export default Newblog
