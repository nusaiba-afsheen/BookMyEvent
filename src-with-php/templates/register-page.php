<h1>Let Us Pledge</h1>
        <h2>Register</h2>
        
        <div class="register-form">
            <form id="register-form-id" method="POST">
            
                <ul class="register-members-list">
                    <li>
                        <h4> Team Leader </h4>
                        <div class="member">
                            <div class="detail-container">
                                <label for="fullname">Name </label>
                                <input type="text" id="fullname" name="fullname" required/>
                            </div>
                            
                            <div class="detail-container">
                                <label for="emailid">Email </label>
                                <input type="email" name="emailid" id="emailid" required>
                            </div>

                            <div class="detail-container">
                                <label for="year">Year Of Study </label>
                                <select name="year" id="year">
                                    <option value="year-1">1st</option>
                                    <option value="year-2">2nd</option>
                                    <option value="year-3">3rd</option>
                                    <option value="year-4">4th</option>                                  
                                </select>
                            </div>

                            
                            
                            <div class="detail-container">
                                <label for="clg-reg-no">Registration No. </label>
                                <input type="number" id="clg-reg-no" name="clg-reg-no" required>
                            </div>


                            
                            <div class="detail-container-radio">
                                Choose your college <br>
                                <input type="radio" id="ssn" value="ssn" name="clg">
                                <label for="clg">SSN</label>
                                <input type="radio" id="snu" value="snu" name="clg">
                                <label for="clg">SNU</label>
                            </div>                           
                                
                            <div class="detail-container">
                                <label for="dept">Choose your department </label>
                                <select name="dept" id="dept">
                                    <option>CSE</option>
                                    <option>IT</option>
                                    <option>ECE</option>
                                    <option>EEE</option>
                                    <option>BME</option>
                                    <option>CHEM</option>
                                    <option>MECH</option>
                                    <option>CIVIL</option>
                                    <option>AI/DS</option>
                                    <option>IOT</option>
                                    <option>Cybersecurity</option>
                                    
                                </select>
                            </div>
                           
                            <div class="detail-container">
                                <label for="phno">Phone Number</label>
                                <input type="number" id="phno" name="phno">
                            </div>

                        </div>	
                    </li>
    
                    
    
                </ul>
                        
                
                <!-- <div class="detail-container invoice-container">
                    <label for="invoice"><h4 style="color:#14FFEC;">Add payment invoice</h4></label>
                    <input type="file" id="invoice" name="invoice" accept="image/png , image/jpg , image/jpeg, application/pdf" required>
                </div> -->
                 
    
                
                <input type="submit" name="Submit" class="primary-btn" value="Submit" style="display: block; margin:2rem auto;" >

                
            </form>
        </div>

 <?php   
        $host = 'localhost';   
        $user = 'root';   
        $pass = '';   
        $DB_NAME = 'bookmyevent-test';
        $conn = mysqli_connect($host, $user, $pass);       
        if(! $conn ){
                     die('Could not connect: ');       }              
        // echo 'Connected successfully';

        $db_select=mysqli_select_db($conn,$DB_NAME) or die(mysqli_error());
        if(mysqli_connect_error()){
            exit("Error connecting to database");
          }
          
          if(isset($_POST['Submit'])){
            $fullname = $_POST['fullname'];
            $emailid = $_POST['emailid'];
            $year = $_POST['year'];
            $clgregno = $_POST["clg-reg-no"];
            $clg = $_POST['clg'];
            $dept = $_POST['dept'];
            $phno = $_POST['phno'];
            $id = rand(100,900);
          
          
            $sql = "INSERT INTO `participants-detail`(`id`, `fullname`, `emailid`, `year`, `regno`, `clg`, `dept`, `phno`) VALUES ('$id','$fullname','$emailid','$year','$clgregno','$clg','$dept','$phno','[value-8]')";
          
            $res=mysqli_query($conn, $sql) or die(mysqli_error());
          
            if($res==TRUE){
              echo "ITEM INSERTED";
            }
            else{
              echo "ITEM NOT INSERTED";
            }
          
          } 

    ?>       
       

<!-- <!DOCTYPE html>
<html lang="en">
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
</head>
<header>
        <p class="logo">BookMyEvent</p>
        <a href="C:\Users\nusai\OneDrive\Desktop\codes\evt-management\personal-copy\src\templates\home-page.html">Events</a>
        <a href="">About</a>
        
</header>
<body>

    <div class="padding-btw-header-body"></div>

    <div class="body-style"> -->

        <!-- <h1>Let Us Pledge</h1>
        <h2>Register</h2>
        
        <div class="register-form">
            <form id="register-form-id">
            
                <ul class="register-members-list">
                    <li>
                        <h4> Team Leader </h4>
                        <div class="member">
                            <div class="detail-container">
                                <label for="fullname">Name </label>
                                <input type="text" id="fullname" name="fullname" ng-model={{participant.fullname}} required/>
                            </div>
                            
                            <div class="detail-container">
                                <label for="emailid">Email </label>
                                <input type="email" name="emailid" id="emailid" ng-model={{participant.emailid}} required>
                            </div>

                            <div class="detail-container">
                                <label for="year">Year Of Study </label>
                                <select name="year" id="year" ng-model={{participant.year}}>
                                    <option value="year-1">1st</option>
                                    <option value="year-2">2nd</option>
                                    <option value="year-3">3rd</option>
                                    <option value="year-4">4th</option>                                  
                                </select>
                            </div>

                            
                            
                            <div class="detail-container">
                                <label for="clg-reg-no">Registration No. </label>
                                <input type="number" id="clg-reg-no" name="clg-reg-no" ng-model={{participant.clgregno}} required>
                            </div>


                            
                            <div class="detail-container-radio">
                                Choose your college <br>
                                <input type="radio" id="ssn" value="ssn" ng-model={{participant.clg}} name="clg">
                                <label for="clg">SSN</label>
                                <input type="radio" id="snu" value="snu" ng-model={{participant.clg}} name="clg">
                                <label for="clg">SNU</label>
                            </div>                           
                                
                            <div class="detail-container">
                                <label for="dept">Choose your department </label>
                                <select name="dept" id="dept" ng-model={{participant.dept}}>
                                    <option>CSE</option>
                                    <option>IT</option>
                                    <option>ECE</option>
                                    <option>EEE</option>
                                    <option>BME</option>
                                    <option>CHEM</option>
                                    <option>MECH</option>
                                    <option>CIVIL</option>
                                    <option>AI/DS</option>
                                    <option>IOT</option>
                                    <option>Cybersecurity</option>
                                    
                                </select>
                            </div>
                           
                            <div class="detail-container">
                                <label for="phno">Phone Number</label>
                                <input type="number" id="phno" name="phno" ng-model={{participant.phno}}>
                            </div>

                        </div>	
                    </li>
    
                    
    
                </ul>
                        
                
                <div class="detail-container invoice-container">
                    <label for="invoice"><h4 style="color:#14FFEC;">Add payment invoice</h4></label>
                    <input type="file" id="invoice" name="invoice" accept="image/png , image/jpg , image/jpeg, application/pdf" required>
                </div> -->
                 
    
                
                <!-- <input type="submit" name="Submit" class="primary-btn" value="Submit" style="display: block; margin:2rem auto;" >
                
                
                
                
                
            </form>
        </div>  -->
      
        
  




    <!-- </div> 

    <script src="../static/scripts/register-event.js"></script> -->
<!-- </div> -->

<!-- <script>
    // window.onload=function(){
        
        var regForm=document.getElementById("register-form-id")

    regForm.addEventListener("submit",function(e){
        e.preventDefault();
        console.log(document.getElementById("fullname").value);
    })
//}
    


</script> -->
<!-- 
</body>
<footer>
    &copy Nusaiba Afsheen
</footer>
</html> -->

<!--                     <h5> Member 1 </h5>
            <div class="member">
                <label for="fullname">Name: </label>
                <input type="text" id="fullname">
                <br>
                
                <label for="emailid">Email: </label>
                <input type="email" id="emailid">
                <br>
                
                <label for="clg-reg-no">Registration No.: </label>
                <input type="text" id="clg-reg-no">
                <br>					
                
                Choose your college:
                <input type="radio" id="ssn" name="clg">
                <label for="clg">SSN</label>
                <input type="radio" id="snu" name="clg">
                <label for="clg">SNU</label>
                <br>
                
                <label for="dept">Choose your department: </label>
                <select name="dept" id="dept">
                    <option>CSE</option>
                    <option>IT</option>
                    <option>ECE</option>
                    <option>EEE</option>
                    <option>BME</option>
                    <option>CHEM</option>
                    <option>MECH</option>
                    <option>CIVIL</option>
                    ADD SNU DEPTS 
                </select>
                <br>
                
                <label for="phno">Phone Number</label>
                <input type="number" id="phno" name="phno">
            </div>
                </li>

                <li>
                    <h5> Member 2 </h5>
                        <div class="member">
                        <label for="fullname">Name: </label>
                        <input type="text" id="fullname">
                        <br>
                        
                        <label for="emailid">Email: </label>
                        <input type="email" id="emailid">
                        <br>
                        
                        <label for="clg-reg-no">Registration No.: </label>
                        <input type="text" id="clg-reg-no">
                        <br>
                        
                        
                        Choose your college:
                        <input type="radio" id="ssn" name="clg">
                        <label for="clg">SSN</label>
                        <input type="radio" id="snu" name="clg">
                        <label for="clg">SNU</label>
                        <br>
                        
                        <label for="dept">Choose your department: </label>
                        <select name="dept" id="dept">
                            <option>CSE</option>
                            <option>IT</option>
                            <option>ECE</option>
                            <option>EEE</option>
                            <option>BME</option>
                            <option>CHEM</option>
                            <option>MECH</option>
                            <option>CIVIL</option>
                            
                        </select>
                        <br>
                        
                        <label for="phno">Phone Number</label>
                        <input type="number" id="phno" name="phno">
                    </div>
                </li> -->