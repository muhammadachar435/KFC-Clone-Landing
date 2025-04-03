const loginform = document.getElementById("delievery");
const deliverpop = document.getElementById("deliever");
const closedel = document.getElementById("close-delievery");

loginform.addEventListener("submit",function(event){
    event.preventDefault();
    deliverpop.style.display="flex";
});

closedel.addEventListener("click",function(){
    deliverpop.style.display="none";
})