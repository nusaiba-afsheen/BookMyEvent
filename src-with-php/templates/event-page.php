<!-- <!DOCTYPE html>
<html lang="en"  ng-app="myApp" ng-controller="myCntrl">
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
        
</header>
<body>

    <div class="padding-btw-header-body"></div>

    <div class="body-style">  -->

        <!-- <h1>Let Us Pledge</h1> -->
<div ng-repeat="event in eventList|filter:{evt_id:chosen_event}">


        <h1>{{event.evt_title}}</h1>

        <img class="evt-page-img" src={{event.poster_src}} alt="">

        <!-- <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         -->
        
         <p>{{event.evt_desc}}</p>
        
        <ul class="evt-specs">
            <li>Date: {{event.evt_date}}</li>
            <li>Time: {{event.evt_time}}</li>
            <li>Mode: {{event.evt_mode}}</li>
            <li>Venue: {{event.evt_venue}}</li>
            <li>Event Type: {{event.evt_type}}</li>
            <li>Team Size: {{event.evt_team_size}}</li>
        </ul>

        <a href="#!register-page.html/{{event.evt_id}}" class="primary-btn" style="text-decoration: none;">Register</a>


</div>
    
<!-- </div>
</body>
<footer>
    &copy Nusaiba Afsheen
</footer>
</html> -->