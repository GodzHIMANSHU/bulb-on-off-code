const btn=document.querySelector(".switch");
const body=document.body;


btn.addEventListener("click",()=>{
    body.classList.toggle("on");
});