import React,{useEffect} from 'react'
import "../CSS/Map.css"
import Hashirama from "../images/Group1.jpg"
import Madara from "../images/Group2.jpg"
import Zoo from "../images/Screen.png"

const Naksha = () => {

    useEffect(() => {
        let observer1 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const image1 = entry.target.querySelector(".frame1");
                if (entry.isIntersecting) {
                    image1.classList.add("slide-right-animation")
                    return;
                }
                image1.classList.remove("slide-right-animation")
            })
        })

        observer1.observe(document.querySelector(".first"));
        let observer3 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const image3 = entry.target.querySelector(".frame3");
                if (entry.isIntersecting) {
                    image3.classList.add("slide-right-animation")
                    return;
                }
                image3.classList.remove("slide-right-animation")
            })
        })

        observer3.observe(document.querySelector(".third"));
        let observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const image3 = entry.target.querySelector(".frame2");
                if (entry.isIntersecting) {
                    image3.classList.add("slide-left-animation")
                    return;
                }
                image3.classList.remove("slide-left-animation")
            })
        })

        observer2.observe(document.querySelector(".second"));
    }, [])

    return (
        <>
            <div className="template">
                <div className="top"> Your Tour</div>
                <div className="bottom">Diary</div>
            </div>
            <div className="road">
                <div className="first">
                    <div className="Map-image">
                        <div className="frame1">
                            <img src={Hashirama} alt="" />
                            <hr />
                            <p>Hashirama</p>
                        </div>
                    </div>
                    <div className="text">
                        <div className="Map-head">
                            "Canaught Place
                        </div>
                        <div className="Body-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus a ipsa obcaecati delectus, ea possimus molestias quos qui ipsum earum. Iure dignissimos illum laboriosam!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A repudiandae sequi atque totam iste?</p>
                        </div>
                    </div>
                </div>
                <div className="second">
                    <div className="text">
                        <div className="Map-head">
                            "ZOO
                        </div>
                        <div className="Body-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus a ipsa obcaecati delectus, ea possimus molestias quos qui ipsum earum. Iure dignissimos illum laboriosam!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A repudiandae sequi atque totam iste?</p>
                        </div>
                    </div>
                    <div className="Map-image">
                        <div className="frame2">
                            <img src={Zoo} alt="" />
                            <hr />
                            <p>Madara</p>
                        </div>
                    </div>
                </div>
                <div className="third">
                    <div className="Map-image">
                        <div className="frame3">
                            <img src={Madara} alt="" />
                            <hr />
                            <p>Madara</p>
                        </div>
                    </div>
                    <div className="text">
                        <div className="Map-head">
                            "Agrassen Ki Baawali
                        </div>
                        <div className="Body-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus a ipsa obcaecati delectus, ea possimus molestias quos qui ipsum earum. Iure dignissimos illum laboriosam!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A repudiandae sequi atque totam iste?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Naksha
