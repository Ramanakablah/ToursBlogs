import React, { useState, useContext } from 'react'
import "../CSS/Navbar.css"
import { Link } from 'react-router-dom'
import Newcontext from '../Context/Createcontext'

const Navbar = () => {
    const [shownav, setshownav] = useState("none")
    const context = useContext(Newcontext)
    const { allow, setflip } = context
    const handleNavbar = () => {
        if (shownav === "none") {
            setshownav("inline")
        }
        else {
            setshownav("none")
        }
        setTimeout(() => {
            setshownav("none")
        }, 10000);
    }
    return (<>
        <nav className="nav">
            <div className="Nav-head"> <i className="fas fa-pen-nib"></i> YTD</div>
            <ul className="list">
                {allow && <li className="listitem"><Link to="/blog"> <span className="List-text">Blogs</span></Link></li>}
                <li className="listitem"><Link to="/about"> <span className="List-text">Terms and conditions</span></Link></li>
                <li className="listitem"><Link to="/map"> <span className="List-text"> Map</span></Link></li>
                <li className="listitem"><Link to="/signup"> <span className="List-text" onClick={() => { setflip(true) }}>Join Us</span></Link></li>
                <li className="listitem"><Link to="/flip"> <span className="List-text" >Flip - Page</span></Link></li>
            </ul>
            <div className="Userbutton">
                {!allow && <div>
                    <button className="btn btn-primary mx-2 my-2 py-1"><Link to="/">Login</Link></button>
                </div>}
                {allow && <div>
                <Link to="/setting" className='btn Settings mx-3 my-2'> <i className="fas fa-cog icon"></i> Settings</Link>
                </div>}
                <div className="Hamburger" onClick={handleNavbar}>
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </nav>
        <div className="ham-menu" style={{ display: `${shownav}` }}>
            <div className="ham-top">
                <i className="fas fa-globe icon-globe"></i>
                Hello
            </div>
            <div className="ham-center">
                <ul className="ham-list">
                    {allow && <li className="ham-item" onClick={() => { setshownav("none") }}>
                        <Link to="/blog">
                            <span className="ham-text">Blogs</span>
                        </Link>
                    </li>}
                    <li className="ham-item" onClick={() => { setshownav("none") }}>
                        <Link to="/about">
                            <span className="ham-text">Terms and Conditions</span>
                        </Link>
                    </li>
                    <li className="ham-item" onClick={() => { setshownav("none") }}>
                        <Link to="/map">
                            <span className="ham-text">Map</span>
                        </Link>
                    </li>
                    <li className="ham-item" onClick={() => { setshownav("none") }}>
                        <Link to="/signup">
                            <span className="ham-text">Join Us</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="ham-bottom">
                {!allow &&  <Link to="/" className="ham-item">Login</Link>}
                {allow &&  <Link to="/setting" className="ham-item"><i className="fa-solid fa-gear"></i> Settings</Link>}
            </div>
        </div>
    </>
    )
}

export default Navbar
