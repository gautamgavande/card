var b= document.querySelector("#bubbels");
b.addEventListener("click",function(dets){
    if(dets.target.classList[0] === "bubble"){
        console.log("clicked !");
    }
});