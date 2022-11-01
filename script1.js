
var arr=[
    {name:"gautam",about:"kdcfhbchfj",status:"frandes"},
    {name:"rahul",about:"kdcfhbchfj",status:"frandes"},
    {name:"sachin",about:"kdcfhbchfj",status:"frandes"},
    {name:"kalash",about:"kdcfhbchfj",status:"frandes"},
]
function show(){
var clutter = ""
arr.forEach(function(ele,index){
    clutter +=`<div id="card">
    <h1>${ele.name}</h1>
    <p>${ele.about}</p>
    <h2>${ele.status}</h2>
    <button id= ${index}>add/remove</button>
</div>`
}) 
document.querySelector("#cards").innerHTML=clutter;
}
show()
document.querySelector("#cards").addEventListener("click",function(dat){
    if(arr[(dat.target.id)].status === "frandes"){
        arr[(dat.target.id)].status="nofrande"
    }
    else{
        arr[(dat.target.id)].status = "frandes"
    }
    show();
})
