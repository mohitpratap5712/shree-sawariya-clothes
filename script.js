console.log("java script is working properly..... ")
let hamburger = document.querySelector(".menu-bar-container");
let close = document.querySelector(".menu-bar");

hamburger.addEventListener("click", () => { 
    hamburger.classList.toggle('active')
    close.classList.toggle('active')
})

let parent = document.querySelector(".functionimg")
let child = document.querySelectorAll(".childslide")
let index = 0 ;

function slidefunc(){
    index++;
    if (index>=child.length)
    {
        index = 0;
    }
    parent.scrollTo({
        left : child[index].offsetLeft,
        behavior:"smooth"

    })
}
setInterval(slidefunc,2000);
