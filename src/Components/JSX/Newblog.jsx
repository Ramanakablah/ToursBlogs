import React from 'react'
import "../CSS/Newblog.css"

const Newblog = () => {
    return (
        <div className="Bod">
            <div className="container">
                <div className="BlogHead">
                <h3>Your Blog </h3>
                <img src="https://cdn.pixabay.com/photo/2013/07/12/12/23/nib-145703_960_720.png" alt="" /> 
                </div>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Place you visited:</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name="name"/>
                         </div>
                    <div className="mb-3">
                        <label htmlFor="place" className="form-label">Location:</label>
                        <input type="text" className="form-control" id="place" aria-describedby="emailHelp" name="place"/>
                      </div>
                    <div className="mb-3">
                    <label htmlFor="Blog" className="form-label">Your Experience:</label>
                    <textarea name="blog" id="blog" cols="30" rows="10"></textarea>
                     </div>

                     <div className="my-4">
                         Image:
                         <input type="file" />
                     </div>
                     <button type="submit" className="btn btn-light mx-2 my-2"> ADD </button>
                </form>
            </div>
        </div>
    )
}

export default Newblog
