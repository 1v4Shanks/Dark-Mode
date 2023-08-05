let icon=document.getElementById("icon")

icon.addEventListener("click",()=>{
    document.body.classList.toggle("darkmode");
    if(document.body.classList.contains("darkmode")){
        icon.className="fa-solid fa-sun";
        icon.style.color="#fff";
    }else{
        icon.className="fa-solid fa-moon";
        icon.style.color="black";
    }
})