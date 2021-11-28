import React from 'react'
import "../CSS/Entry.css"

const Entry = (props) => {
    const {address,name,blog}= props
    return (
        <>
        <div className="BlogBody my-2">
            <div className="Entry">
            <div> 
                <h3>{name}</h3>
            <button className="btn btn-primary mx-2">
            <i className="far fa-edit " title="Edit"></i> 
                </button>
            <button className="btn btn-primary mx-2">
            <i className="far fa-trash-alt" title="Delete"></i>
                </button>
            </div>
                <div>{address}</div>
                <hr />
                <div className="Exp">
                    {blog}
                </div>
            </div>
            <div className="image">
             <img src="https://cdn.pixabay.com/photo/2012/03/01/00/21/bridge-19513_960_720.jpg" alt="sample" />
            </div>
        </div> 
        </>
    )
}

export default Entry
