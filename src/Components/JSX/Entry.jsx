import React, { useContext } from 'react'
import "../CSS/Entry.css"
import Newcontext from '../Context/Createcontext'

const Entry = (props) => {
    const { blog, updation } = props
    const context = useContext(Newcontext)
    const { deleteblog } = context

    const Trash = () => {
        deleteblog(blog._id)
    }

    return (
        <>
            <div className="BlogBody my-2 container">
                <div className="Entry">
                    <div>
                        <h3>{blog.name}</h3>
                        <button className="btn btn-primary mx-2" onClick={() => { updation(blog) }}>
                            <i className="far fa-edit " title="Edit"></i>
                        </button>
                        <button className="btn btn-primary mx-2" onClick={Trash}>
                            <i className="far fa-trash-alt" title="Delete" ></i>
                        </button>
                    </div>
                    <div className='Place'>{blog.place}</div>
                    <hr />
                    <div className="Exp">
                        {blog.blog}
                    </div>
                    <small className="text-muted">{blog.dateupload}</small>
                </div>
                <div className="image">
                    <img src={`http://localhost:8000/bimg/${blog.image}`} alt="sample" />
                </div>
            </div>
        </>
    )
}

export default Entry
