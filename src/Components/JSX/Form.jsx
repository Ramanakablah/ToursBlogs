import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Form.css"

const Form = () => {
    return (
        <>
            <div>
                <div className="formBody">
                    <div className="Sheet">
                        <p>
                      Join community and be a part of fun : 
                        </p>
                      <div className="link">
                      <Link to="/Signup"> Sign up </Link>
                      </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
