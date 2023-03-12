var completed_events= document.querySelectorAll(".disable-btn")
console.log(completed_events[0].parentElement.classList)

for(let i=0; i<completed_events.length;i++){

    completed_events[i].addEventListener("click", ()=> {
       
        completed_events[i].parentElement.classList.toggle("hide-element");
        if(completed_events[i].parentElement.classList.contains("hide-element")){
            completed_events[i].innerText="Restore";
        }else{
            completed_events[i].innerText="Close Event";
        }
        
    })

}
