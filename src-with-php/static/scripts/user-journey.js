// var eventList = [
//     {
//         poster_src: "../static/assests/placeholder-poster.png",
//         evt_title: "Let Us Pledge",
//         evt_desc: "To take pledges as a responsible student and citizen"
//     },
//     {
//         poster_src: "../static/assests/placeholder-poster.png",
//         evt_title: "Let Us Pledge",
//         evt_desc: "To take pledges as a responsible student and citizen"
//     },
//     {
//         poster_src: "../static/assests/placeholder-poster.png",
//         evt_title: "Let Us Pledge",
//         evt_desc: "To take pledges as a responsible student and citizen"
//     },
// ]

var cardList = document.querySelector(".event-cards")


for (let i=0; i<eventList.length ;i++){
    var card = document.createElement("div")
    card.classList.add("card")

    var poster_src = eventList[i].poster_src
    var evt_title = eventList[i].evt_title
    var evt_desc = eventList[i].evt_desc

    card.innerHTML=`
    <img class="card-img" src="`+poster_src+`" alt="`+evt_title+`">
    <div class="card-text">
        <a href="./event-page.html">`+evt_title+`<span class="material-icons forward_icon">arrow_forward_ios</span></a>
        <p>`+evt_desc+`</p>
    </div>
    `
    cardList.appendChild(card)
}

app.controller("card",function($scope){

    $scope.eventList = [
    {
        
        poster_src: "../static/assests/placeholder-poster.png",
        evt_title: "Let Us Pledge",
        evt_desc: "To take pledges as a responsible student and citizen"
    },
    {
        
        poster_src: "../static/assests/placeholder-poster.png",
        evt_title: "Let Us Pledge",
        evt_desc: "To take pledges as a responsible student and citizen"
    },
    {
        
        poster_src: "../static/assests/placeholder-poster.png",
        evt_title: "Let Us Pledge",
        evt_desc: "To take pledges as a responsible student and citizen"
    },
]

$scope.test="OHGOAWAY"

            

})

// app =   angular.module("myApp",[])
//                 .component("navbar",{
//                     template:`
//                             <header>
//                             <p class="logo">BookMyEvent</p>
//                             <a href="C:\Users\nusai\OneDrive\Desktop\codes\evt-management\personal-copy\src\templates\home-page.html">Events</a>
//                             <a href="">About</a>
//                             </header>
//                     `
//                 })
//                 .component("foot",{
//                     template:`
//                         <footer>
//                             &copy Nusaiba Afsheen
//                         </footer>
//                     `
//                 })
//                 .component("card")
//                 .controller("myCntrl",function($scope){
//                     $scope.test="FML"

//                     $scope.eventList = [
//                         {
//                             poster_src: "../static/assests/placeholder-poster.png",
//                             evt_title: "Let Us Pledge",
//                             evt_desc: "To take pledges as a responsible student and citizen"
//                         },
//                         {
//                             poster_src: "../static/assests/placeholder-poster.png",
//                             evt_title: "Let Us Pledge",
//                             evt_desc: "To take pledges as a responsible student and citizen"
//                         },
//                         {
//                             poster_src: "../static/assests/placeholder-poster.png",
//                             evt_title: "Let Us Pledge",
//                             evt_desc: "To take pledges as a responsible student and citizen"
//                         },
//                     ]

//                 })
