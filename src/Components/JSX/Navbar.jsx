import React,{useState,useContext} from 'react'
import "../CSS/Navbar.css"
import { Link } from 'react-router-dom'
import Newcontext from '../Context/Createcontext'

const Navbar = () => {
    const [shownav, setshownav] = useState("none")
    const context = useContext(Newcontext)
    const {allow}= context
    const handleNavbar=()=>{
        if(shownav==="none")
        {
            setshownav("inline")
        }
        else{
            setshownav("none")
        }
        setTimeout(() => {
            setshownav("none")
        }, 10000);
    }
    return (<>

        <nav className="nav">
            <div className="Nav-head">Hello</div>
            <ul className="list">
               {allow && <li className="listitem"><Link to="/blog"> <span className="List-text">Blogs</span></Link></li>}
                <li className="listitem"><Link to="/about"> <span className="List-text">Terms and conditions</span></Link></li>
                <li className="listitem"><Link to="/map"> <span className="List-text"> Map</span></Link></li>
                <li className="listitem"><Link to="/signup"> <span className="List-text">Join Us</span></Link></li>
            </ul>
            <div className="Userbutton">
                <div>
                    <button className="btn btn-primary mx-2 my-2 py-1"><Link to="/login">Login</Link></button>
                </div>
                <div className="Hamburger" onClick={handleNavbar}>
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </nav>
        <div className="ham-menu" style={{display:`${shownav}`}}>
            <div className="ham-top">
                <i className="fas fa-globe icon"></i>
                Hello
            </div>
            <div className="ham-center">
                <ul className="ham-list">
                   {allow && <li className="ham-item"onClick={()=>{setshownav("none")}}>
                        <Link to="/blog">
                            <span className="ham-text">Blogs</span>
                        </Link>
                    </li>}
                    <li className="ham-item"onClick={()=>{setshownav("none")}}>
                        <Link to="/about">
                            <span className="ham-text">Terms and Conditions</span>
                        </Link>
                    </li>
                    <li className="ham-item"onClick={()=>{setshownav("none")}}>
                        <Link to="/map">
                            <span className="ham-text">Map</span>
                        </Link>
                    </li>
                    <li className="ham-item"onClick={()=>{setshownav("none")}}>
                        <Link to="/signup">
                            <span className="ham-text">Join Us</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="ham-bottom">
                <Link to="/login" className="ham-item">Login</Link>
            </div>
        </div>
    </>
    )
}

export default Navbar
