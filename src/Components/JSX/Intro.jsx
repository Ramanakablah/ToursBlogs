import React from 'react'
import "../CSS/Intro.css"
import { Link } from 'react-router-dom'
import { useEffect } from "react"
import { Parallax } from 'react-scroll-parallax'

const Intro = () => {
    useEffect(() => {
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const square = entry.target.querySelector(".move");
                if (entry.isIntersecting) {
                    square.classList.add("slide-animation")
                    return;
                }
                square.classList.remove("slide-animation")
            })
        })

        observer.observe(document.querySelector(".Intro"));
    }, [])
    return (
        <>
            <div className="IntroBody">
                <div className="Intro">
                    <div className="move">
                        <h1 className="head">New Roads New Stories</h1>
                        <div className="IntroText">
                            Travel with us for great experiences
                            <div>
                                <Link to="/signup" className="Link">Lets walk together !! </Link>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="cactus">
                        <Parallax y={[60,-24]} >
                        <img src="https://cdn.pixabay.com/photo/2016/01/25/16/46/cactus-1161006_960_720.png" alt="" />
                        </Parallax>
                    </div>
            </div>
        </>
    )
}

export default Intro
