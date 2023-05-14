<h1 class="heading">Choose an Event</h1>

        <div class="event-cards">

            <div class="card" ng-repeat="event in eventList">
                <img class="card-img" src={{event.poster_src}} alt={{event.evt_title}}>
                <div class="card-text">
                    <!-- <a href="./event-page.html/#!{{event.evt_id}}">{{event.evt_title}}<span class="material-icons forward_icon">arrow_forward_ios</span></a> -->
                    <a href="#!event-page.html/{{event.evt_id}}">{{event.evt_title}}<span class="material-icons forward_icon">arrow_forward_ios</span></a>
                    <p>{{event.evt_desc}}</p>
                </div>
            </div>
            
        </div>

<!-- <!DOCTYPE html>
<html lang="en" ng-app="myApp" ng-controller="myCntrl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BookMyEvent</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Righteous&family=Ubuntu:wght@300;400;700&display=swap&family=Source+Sans+Pro:ital,wght@0,200;0,400;0,700;1,700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">
    <link rel="stylesheet" href="../static/styles/styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"></script>
</head>
 <header>
        <p class="logo">BookMyEvent</p>
        <a href="C:\Users\nusai\OneDrive\Desktop\codes\evt-management\personal-copy\src\templates\home-page.html">Events</a>
        <a href="">About</a>
</header>  -->

<!-- <navbar></navbar>
<body>

    <div class="padding-btw-header-body"></div>

     -->
         



  
        







            <!-- <div class="card">
                <img class="card-img" src="../static/assests/placeholder-poster.png" alt="">
                <div class="card-text">
                    <a href="./event-page.html">Let Us Pledge<span class="material-icons forward_icon">arrow_forward_ios</span></a>
                    <p>To take pledges as a responsible student and citizen</p>
                </div>
            </div>

            <DIV ng-controller="card">
                {{test}}

            </DIV>

            <div class="card">
                <img class="card-img" src="../static/assests/placeholder-poster.png" alt="">
                <div class="card-text">
                    <a href="./event-page.html">Let Us Pledge<span class="material-icons forward_icon">arrow_forward_ios</span></a>
                    <p>To take pledges as a responsible student and citizen</p>
                </div>
            </div>

            <div class="card">
                <img class="card-img" src="../static/assests/placeholder-poster.png" alt="">
                <div class="card-text">
                    <a href="./event-page.html">Let Us Pledge<span class="material-icons forward_icon">arrow_forward_ios</span></a>
                    <p>To take pledges as a responsible student and citizen</p>
                </div>
            </div>   -->
        

        <!-- <a href="#!courses">Courses@geeksforgeeks</a>
        <br>
        <a href="#!internships">Internships@geeksforgeeks</a> -->






        <!-- <div ng-view></div>
    
    </div>

    <script src="../static/scripts/user-journey.js"></script>
    <script src="../templates/components/components.js"></script>
    


</body>
<foot></foot> -->
<!-- <footer>
    &copy Nusaiba Afsheen
</footer> -->
<!-- </html> -->