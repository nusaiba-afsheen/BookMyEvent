var eventList=[]
var eventPosterURL

var eventID=1

var createEvt = document.getElementById("create-event-form-id")

var eventPoster= document.getElementById("event-poster")
    
eventPoster.addEventListener("change",function(e){
    e.preventDefault()
            //const file = eventPoster.files
            //eventPoster = file[0]
            eventPosterURL = URL.createObjectURL(eventPoster.files[0])
            console.log(eventPosterURL)
})



createEvt.addEventListener("submit",function(e){
    e.preventDefault()
    console.log(eventPosterURL)
    let newEvent={}

        newEvent.eventName = document.getElementById("event-name").value
    
        //console.log(newEvent.eventName)
        
        // document.getElementById("test").innerHTML=`<p>`+newEvent.eventName+`</p>`
    
        
        //newEvent.eventType = document.querySelector("input {name='event-type'}:checked").value

        var eventType = document.getElementsByName('event-type');

        //console.log(eventType)
          
        for(i = 0; i < eventType.length; i++) {
            if(eventType[i].checked)
                newEvent.eventType=eventType[i].value;            
        }

        //newEvent.eventMode = document.querySelector("input {name='event-mode'}:checked").value

        var eventMode = document.getElementsByName('event-mode');
          
        for(i = 0; i < eventMode.length; i++) {
            if(eventMode[i].checked)
                newEvent.eventMode=eventMode[i].value;
            
        }

        newEvent.eventDesc = document.getElementById("event-desc").value

        newEvent.eventTeamSize = document.getElementById("event-team-size").value


        newEvent.eventDate = document.getElementById("event-date").value
        newEvent.eventTime = document.getElementById("event-time").value
        newEvent.eventVenueOrLink = document.getElementById("event-venue-or-link").value
        newEvent.eventFee = document.getElementById("event-fee").value
        newEvent.eventPaymentLink= document.getElementById("event-payment-link").value
        newEvent.eventPaymentURL=document.getElementById("event-payment-link").value
        
        

        newEvent.eventPoster=eventPosterURL


        console.log(newEvent)

        newEvent.eventID= eventID+1
        eventID+=1
    
        eventList.push(newEvent)
        console.log(eventList)
        

        })


// var eventList=[]

// let createEventBtn = document.getElementById("create-event-btn")


// /*createEventBtn.addEventListener('click',function(e){
    
    
//     let newEvent={}

//     newEvent.eventName = document.getElementById("event-name").value

//     console.log(newEvent.eventName)
    
//     // document.getElementById("test").innerHTML=`<p>`+newEvent.eventName+`</p>`

    
//     // newEvent.eventType = document.querySelector("input {name='event-type'}:checked").value
//     // newEvent.eventMode = document.querySelector("input {name='event-mode'}:checked").value
//     // newEvent.eventTeamSize = document.getElementById("event-team-size").value
//     // newEvent.eventDate = document.getElementById("event-date").value
//     // newEvent.eventTime = document.getElementById("event-time").value
//     // newEvent.eventVenueOrLink = document.getElementById("event-venue-or-link").value
//     // newEvent.eventFee = document.getElementById("event-fee").value
//     // newEvent.eventPaymentLink= document.getElementById("event-payment-link").value
//     // newEvent.eventPaymentURL=document.getElementById("event-payment-link").value
//     // newEvent.eventPoster= document.getElementById("event-poster")

//     // eventPoster.addEventListener("change",function(e){
//     //     const file = eventPoster.files
//     //     eventPoster = file[0]
//     //     eventPosterURL = URL.createObjectURL(eventPoster)
//     // })
//     console.log(newEvent)

//     eventList.append(newEvent)
//     e.preventDefault()
// })

// console.log(eventList)*/

// function test(e){
//     e.preventDefault();
//     alert(document.getElementById("event-name").value);
    
// }