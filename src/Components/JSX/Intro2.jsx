import React from 'react'
import "../CSS/Intro2.css"
import { useEffect } from "react"
const Intro2 = () => {
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

        observer.observe(document.querySelector(".IntroTxt"));
    }, [])
    return (
        <>
            <div>

                <div className="Intro2">
                    <div className="IntroTxt">
                        <div className="move">
                            <h1 className="IntroHead move">
                                Find yourself by getting lost
                            </h1>
                            <p className='move'>
                                Find Peace and Yourself by stepping out in Outdoors
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro2
