import React,{useState,useContext} from 'react'
import Newcontext from '../Context/Createcontext'
import "../CSS/Newblog.css"

const Newblog = () => {
  const [confirm, setconfirm] = useState(false)
  const [BlogData, setBlogData] = useState({name:"",place:"",blog:""})
  const context = useContext(Newcontext)
  const {addblog}= context
   const onchange=(e)=>{
       setBlogData({...BlogData,[e.target.name]:e.target.value})
   }
   const handleclick=(e)=>{
       e.preventDefault();
       if(setBlogData.name.length!==0)
       {if(setBlogData.place.length!==0)
        {if(setBlogData.blog.length!==0)
            {
                addblog(BlogData.name,BlogData.place,BlogData.blog)
                setconfirm(true)
                setTimeout(() => {
                    setconfirm(false)
                }, 10000);
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
                        <input type="text" className="form-control" id="place" aria-describedby="emailHelp" name="place" onChange={onchange}/>
                      </div>
                    <div className="mb-3">
                    <label htmlFor="Blog" className="form-label">Your Experience:</label>
                    <textarea name="blog" id="blog" cols="30" rows="10" onChange={onchange}></textarea>
                     </div>
                     <div className="my-4">
                         Image:
                         <input type="file" />
                     </div>
                     <button className="btn btn-light mx-2 my-2" onClick={handleclick}> ADD &#x2B; </button>
                    { confirm && <div className="conformation"> Added successfully </div>}
                </form>
            </div>
        </div>
    )
}

export default Newblog
