<!DOCTYPE html>
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


<navbar></navbar>

<body>

    <div class="padding-btw-header-body"></div>

    <?php   
        $host = 'localhost';   
        $user = 'root';   
        $pass = '';   
        $DB_NAME = 'bookmyevent-test';
        $conn = mysqli_connect($host, $user, $pass);       
        if(! $conn ){
                     die('Could not connect: ');       }              
        echo 'Connected successfully';

        $db_select=mysqli_select_db($conn,$DB_NAME) or die(mysqli_error());
    ?>      
         

    <div class="body-style">

        <div ng-view></div>
    
    </div>

    <script src="../static/scripts/user-journey.js"></script>
    <script src="../templates/components/components.js"></script>
    <script src="../static/scripts/register-event.js"></script>
    
    <?php mysqli_close($conn); ?>  

</body>

<foot></foot>

</html>