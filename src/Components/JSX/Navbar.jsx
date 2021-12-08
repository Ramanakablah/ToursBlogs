import React from 'react'
import "../CSS/Navbar.css"
import { Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav">
            <div>Hello</div>
            <ul className="list">
                <li className="listitem"><Link to="/blog"> Blogs</Link></li>
                <li className="listitem"><Link to="/about">Terms and conditions</Link></li>
                <li className="listitem"><Link to="/map">Map</Link></li>
                <li className="listitem"><Link to="/signup">Join Us</Link></li>
            </ul>
            <div className="Userbutton">
                <div>
                <button className="btn btn-primary mx-2 my-2 py-1"><Link to="/login">Login</Link></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
