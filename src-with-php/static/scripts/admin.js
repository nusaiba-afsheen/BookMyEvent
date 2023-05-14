var completed_events= document.querySelectorAll(".disable-btn")
console.log(completed_events[0].parentElement.classList)

for(newEvent.i=0; i<completed_events.length;i++){

    completed_events[i].addEventListener("click", ()=> {
       
        completed_events[i].parentElement.classList.toggle("hide-element");
        if(completed_events[i].parentElement.classList.contains("hide-element")){
            completed_events[i].innerText="Restore";
        }else{
            completed_events[i].innerText="Close Event";
        }
        
    })

}

// eventList=[]

// newEvent.eventPoster= document.getElementById("event-poster")

// eventPoster.addEventListener("change",function(e){
//     const file = eventPoster.files
//     eventPoster = file[0]
//     eventPosterURL = URL.createObjectURL(eventPoster)
// })

// // function createNewEvent(){

// //     var newEvent={}

// //     newEvent.eventName = document.getElementById("event-name").value
// //     console.log(newEvent)
// //     newEvent.eventType = document.querySelector("input {name='event-type'}:checked").value
// //     newEvent.eventMode = document.querySelector("input {name='event-mode'}:checked").value
// //     newEvent.eventTeamSize = document.getElementById("event-team-size").value
// //     newEvent.eventDate = document.getElementById("event-date").value
// //     newEvent.eventTime = document.getElementById("event-time").value
// //     newEvent.eventVenueOrLink = document.getElementById("event-venue-or-link").value
// //     newEvent.eventFee = document.getElementById("event-fee").value
// //     newEvent.eventPaymentLink= document.getElementById("event-payment-link").value
// //     newEvent.eventPosterURL=eventPosterURL

// //     console.log(newEvent)

// // }

// let createEventForm = document.getElementById("create-event-form")

// createEventForm.addEventListener("submit",(e)=>{
    
//     var newEvent={}
//     console.log(document.getElementById("event-name").value)

//     newEvent.eventName = document.getElementById("event-name").value
//     // newEvent.eventType = document.querySelector("input {name='event-type'}:checked").value
//     // newEvent.eventMode = document.querySelector("input {name='event-mode'}:checked").value
//     // newEvent.eventTeamSize = document.getElementById("event-team-size").value
//     // newEvent.eventDate = document.getElementById("event-date").value
//     // newEvent.eventTime = document.getElementById("event-time").value
//     // newEvent.eventVenueOrLink = document.getElementById("event-venue-or-link").value
//     // newEvent.eventFee = document.getElementById("event-fee").value
//     // newEvent.eventPaymentLink= document.getElementById("event-payment-link").value
//     // newEvent.eventPosterURL=eventPosterURL

//     e.preventDefault()
// })

// console.log(newEvent)




