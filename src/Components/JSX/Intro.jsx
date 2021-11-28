import React from 'react'
import "../CSS/Intro.css"
import { Link } from 'react-router-dom'

const Intro = () => {
    return (
        <>
            <div>
                <div className="sun"></div>
             <div className="IntroBody">
                <div className="Intro">
                    <h1 className="head">New Roads New Stories</h1>
                    <div className="IntroText">
                        Travel with us for great experiences
                        <div>
                            <Link to="/" className="Link">Lets walk together !! </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Intro
