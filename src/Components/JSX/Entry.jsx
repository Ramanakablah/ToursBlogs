import React, { useContext } from 'react'
import "../CSS/Entry.css"
import Newcontext from '../Context/Createcontext'

const Entry = (props) => {
    const { blog, updation } = props
    const context = useContext(Newcontext)
    const { deleteblog } = context

    const Trash = () => {
        console.log("clicked")
        deleteblog(blog._id)
    }

    return (
        <>
            <div className="BlogBody my-2">
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
                    <div>{blog.place}</div>
                    <hr />
                    <div className="Exp">
                        {blog.blog}
                    </div>
                    <small className="text-muted">{blog.dateupload}</small>
                </div>
                <div className="image">
                    <img src="https://cdn.pixabay.com/photo/2012/03/01/00/21/bridge-19513_960_720.jpg" alt="sample" />
                </div>
            </div>
        </>
    )
}

export default Entry
