document.addEventListener("DOMContentLoaded",()=>{
    let btnA = document.querySelector("label");
    let desp = document.querySelector(".desplegable");
    let body = document.querySelector("body");
    
    btnA.addEventListener("click",()=>{
        desp.style.top="0%";
        desp.style.transition="top 0.5s linear";
        desp.style.height="100vh";
        
        desp.style.backgroundColor="#ee2737";
        body.style.overflow="hidden";
    });

    let btnC = document.querySelector(".cerrarMenu div:nth-child(1)>svg");
    btnC.addEventListener("click",()=>{
        desp.style.top="-100%";
        desp.style.height="0vh";
        body.style.overflow="visible";
    });
});