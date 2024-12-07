let scrollContainer= document.querySelector(".trend")
let left=document.getElementById("left");
let right=document.getElementById("right");

scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior="auto";
});

left.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft-=900;
});

right.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft+=900;
});