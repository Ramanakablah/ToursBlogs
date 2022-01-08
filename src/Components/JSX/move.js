const star = document.getElementsByClassName("Star")

setInterval(() => {
    let post=window.innerHeight*Math.random()
    let posl=window.innerWidth*Math.random()
    star.style.left=posl+"px"
    star.style.top=post+"px"
}, 2000);