import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Form.css"
import { useEffect } from "react"

const Form = () => {
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

        observer.observe(document.querySelector(".Sheet"));
    }, [])
    return (
        <>
            <div>
                <div className="formBody">
                    <div className="Sheet">
                        <div className="move">
                            <p>
                                Join community and be a part of fun :
                            </p>
                            <div>
                                <Link to="/Signup" className="link"> Sign up </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
