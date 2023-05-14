var eventList=[]
var eventID=1

var eventPosterURL
var eventPoster= document.getElementById("event-poster")
eventPoster.addEventListener("change",function(e){
    e.preventDefault()
            
    eventPosterURL = URL.createObjectURL(eventPoster.files[0])
})


var createEvt = document.getElementById("create-event-form-id")

createEvt.addEventListener("submit",function(e){
        e.preventDefault()
        
        let newEvent={}

        newEvent.eventName = document.getElementById("event-name").value
    
        var eventType = document.getElementsByName('event-type');        
        for(i = 0; i < eventType.length; i++) {
            if(eventType[i].checked)
                newEvent.eventType=eventType[i].value;            
        }


        var eventMode = document.getElementsByName('event-mode');
        for(i = 0; i < eventMode.length; i++) {
            if(eventMode[i].checked)
                newEvent.eventMode=eventMode[i].value;
            
        }

        newEvent.eventDesc = document.getElementById("event-desc").value
        newEvent.eventTeamSize = document.getElementById("event-team-size").value
        newEvent.eventDate = document.getElementById("event-date").value
        newEvent.eventTime = document.getElementById("event-time").value

        if(newEvent.eventMode=="online"){
            var eventLink =document.getElementById("event-venue-or-link").value
            if(eventLink.includes("http")){
                newEvent.eventLink=eventLink
            }else{
                alert("incorrect meet link")
            }

        }else{
            newEvent.eventVenue = document.getElementById("event-venue-or-link").value
        }


        if(!(document.getElementById("event-fee").value==0)){
            newEvent.eventFee = document.getElementById("event-fee").value
            var paymentLink = document.getElementById("event-payment-link").value
            if ( paymentLink == "-"){
                alert("add link for payment")
            }else if(paymentLink.includes("http"))
                {newEvent.eventPaymentLink=paymentLink}
                else{
                    alert("invalid payment link")
                }
        }
            
        newEvent.eventPoster=eventPosterURL

        console.log(newEvent)

        newEvent.eventID= eventID+1
        eventID+=1
    
        eventList.push(newEvent)
        console.log(eventList)

        // var formHTML=document.getElementByClass("create-event-form")


        })

