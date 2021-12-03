import React, { useState, useContext, useEffect, useRef } from 'react'
import Entry from '../JSX/Entry'
import "../CSS/Blog.css"
import { Link } from 'react-router-dom'
import Newcontext from '../Context/Createcontext'

const Blog = () => {
  const ref = useRef(null)
  const refclose = useRef(null)
  const [Blog, setBlog] = useState([])
  const [edits, setedits] = useState({id:"",uexperience:"",ulocation:"",uplacename:""})
  const context = useContext(Newcontext)
  const { UsersBlog, Blogofuser, editblog } = context

  useEffect(() => {
    UsersBlog()
  }, [])

  const handleclick = () => {
    UsersBlog();
    console.log(Blogofuser)
    setBlog(Blogofuser)
    console.log(Blog)
  }
  const updation = (currentblog) => {
    ref.current.click()
    setedits({id:currentblog._id,uexperience:currentblog.blog,uplacename:currentblog.name,ulocation:currentblog.place})
  }
  const onchange=(e)=>{
  setedits({...edits ,[e.target.name]:e.target.value})
  }
  const savechanges=()=>{
    refclose.current.click()
    console.log(edits)
    editblog(edits.id,edits.uplacename,edits.uexperience,edits.ulocation)
  }

  return (
    <>
      <div className="Head">
        <div className="User">
          <div>
            <h2>Welcome</h2>
            <h3>User</h3>
          </div>
          <div className="useravatar">
            <img src="https://cdn.pixabay.com/photo/2013/05/11/08/28/sunset-110305_640.jpg" alt="" />
          </div>
        </div>
        <h1 className="mx-2 my-4">Blogs</h1>
        <Link to="/add" className="btn btn-primary mx-2"> Add New &#x2B; </Link>
        <hr />
        <button className="btn btn-primary" onClick={handleclick}> See Your Blogs </button>

        <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch static backdrop modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Place</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={edits.uplacename} onChange={onchange} name="uplacename"/>
                    </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Location</label>
                    <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" value={edits.ulocation} onChange={onchange} name="ulocation"/>
                    </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Experience</label>
                       <textarea name="uexperience" onChange={onchange} value={edits.uexperience} cols="30" rows="10"></textarea>       
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refclose}>Close</button>
                <button type="button" className="btn btn-primary" onClick={savechanges}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          {Blog?.map((blog) => {
            return <div key={blog._id}>
              <Entry blog={blog} updation={updation} />
            </div>
          })}
        </div>
      </div>


    </>
  )
}

export default Blog
