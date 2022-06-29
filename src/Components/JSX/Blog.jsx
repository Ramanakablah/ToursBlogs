import React, { useState, useContext, useRef, useEffect } from 'react'
import Entry from '../JSX/Entry'
import "../CSS/Blog.css"
import Newcontext from '../Context/Createcontext'
import Newblog from './Newblog'

const Blog = () => {
  document.body.style.backgroundColor = " #FFF9E4"
  const ref = useRef(null)
  const refclose = useRef(null)
  const [Addnew, setAddnew] = useState(false)
  const [edits, setedits] = useState({ id: "", uexperience: "", ulocation: "", uplacename: "" })
  const context = useContext(Newcontext)
  const { editblog, UsersBlog, member, Blogofuser, User } = context

  if(sessionStorage.loggedin !== "true"){
    window.location.href="/"
} 

  useEffect(() => {
      UsersBlog();
  },[UsersBlog])

  window.onload = () => {
    User()
    UsersBlog()
  }
  document.body.style.backgroundImage = "linear-gradient(90deg,#e33f84,#681fb0,#34189c,#4836e6,#70c7ec)"
  const Add = () => {
    if (Addnew) {
      setAddnew(false)
    }
    else {
      setAddnew(true)
    }
  }
  const updation = (currentblog) => {
    ref.current.click()
    setedits({ id: currentblog._id, uexperience: currentblog.blog, uplacename: currentblog.name, ulocation: currentblog.place })
  }
  const onchange = (e) => {
    setedits({ ...edits, [e.target.name]: e.target.value })
  }
  const savechanges = () => {
    refclose.current.click()
    editblog(edits.id, edits.uplacename, edits.uexperience, edits.ulocation)
  }

  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Edit Blog</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="Place" className="form-label">Place</label>
                  <input type="text" className="form-control" id="Place" aria-describedby="emailHelp" value={edits.uplacename} onChange={onchange} name="uplacename" />
                </div>
                <div className="mb-3">
                  <label htmlFor="location" className="form-label">Location</label>
                  <input type="text" className="form-control" id="location" value={edits.ulocation} onChange={onchange} name="ulocation" />
                </div>
                <div className="mb-3">
                  <div>
                    <label htmlFor="Experience" className="form-label">Experience</label>
                  </div>
                  <textarea name="uexperience" onChange={onchange} id='Experience' value={edits.uexperience} cols="30" rows="10" className='Edit-update'></textarea>
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
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item ">
            <img src="https://cdn.pixabay.com/photo/2017/03/15/13/27/rough-horn-2146181_960_720.jpg" className="d-block w-100 carousel-image" alt='..' />
          </div>
          <div className="carousel-item ">
            <img src="https://cdn.pixabay.com/photo/2016/01/30/17/22/desert-1170055_960_720.jpg" className="d-block w-100 carousel-image" alt='..' />
          </div>
          <div className="carousel-item active">
            <img src="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg" className="d-block w-100 carousel-image" alt='..' />
          </div>
          <div className="carousel-item ">
            <img src="https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879_960_720.jpg" className="d-block w-100 carousel-image" alt='..' />
          </div>
          <div className="carousel-item ">
            <img src="https://cdn.pixabay.com/photo/2020/03/03/20/31/boat-4899802_960_720.jpg" className="d-block w-100 carousel-image" alt='..' />
          </div>
          <div className="carousel-item ">
            <img src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg" className="d-block w-100 carousel-image" alt='..' />
          </div>
        </div>
      </div>
      <div className="blogbody">
        <div className="Heads container">
          <div>
            <div className="User">
              <img src={`https://backendforyourtourdiary.herokuapp.com/pimg/${member.avatar}`} alt="" />
            </div>
            <h1 className="mx-2 my-4">Hey {member.name}</h1>
            <div>What's new today</div>
            {!Addnew && <button to="/add" className="btn btn-primary mx-2 bloop" onClick={Add}> Add New &#x2B; </button>}
            <hr />
            <p>{member.about}</p>
            <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
              Launch static backdrop modal
            </button>
          </div>
          <div className="Add">
            {Addnew && <Newblog permit={Add} />}
          </div>
        </div>
        <div className="BlogList">
          {Blogofuser?.map((blog) => {
            return <div key={blog._id} >
              <Entry blog={blog} updation={updation} />
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default Blog
