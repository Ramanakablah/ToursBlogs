import React,{useEffect} from 'react'
import "../CSS/Try.css"

const Trypage = () => {
    
useEffect(() => {
    const star = document.querySelector(".Star")
    const Screen = document.querySelector(".Screen")
    function CloneStar() {
        const clstar = star.cloneNode(true)
        clstar.style.animationDuration= (2 + Math.random()*6)+"s";
        clstar.style.top = Math.random()*window.innerHeight + "px";
        clstar.style.left= Math.random()*window.innerWidth + "px";
        Screen.append(clstar)
    } 
   const s =  setInterval(CloneStar, 100);  
    
    setTimeout(() => {
        clearInterval(s)
    }, 8000);

}, [])

  
    return (
        <>
        <div className="Screen">
        <div className="Star"></div>
        </div>   
        </>
    )
}

export default Trypage
