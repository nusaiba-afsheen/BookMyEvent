eventList = [
    {
        evt_id:1,
        poster_src: "../static/assests/placeholder-poster.png",
        evt_title: "Let Us Pledge 1",
        evt_desc: "To take pledges as a responsible student and citizen",
        evt_date: "13.06.2023",
        evt_time: "10am -12pm",
        evt_mode: "Offline",
        evt_venue: "Main Audi",
        evt_type: "Non-Tech",
        evt_team_size: 10
    },
    {
        evt_id:2,
        poster_src: "../static/assests/placeholder-poster.png",
        evt_title: "Let Us Pledge 2",
        evt_desc: "To take pledges as a responsible student and citizen",
        evt_date: "13.06.2023",
        evt_time: "10am -12pm",
        evt_mode: "Offline",
        evt_Venue: "Main Audi",
        evt_type: "Non-Tech",
        evt_team_size: 10
    },
    {
        evt_id:3,
        poster_src: "../static/assests/placeholder-poster.png",
        evt_title: "Let Us Pledge 3",
        evt_desc: "To take pledges as a responsible student and citizen",
        evt_date: "13.06.2023",
        evt_time: "10am -12pm",
        evt_mode: "Offline",
        evt_Venue: "Main Audi",
        evt_type: "Non-Tech",
        evt_team_size: 10
    }]

// app =   angular.module("myApp",["ngRoute"])
app =   angular.module("myApp",["ngRoute"])
                .component("navbar",{
                    template:`
                            <header>
                            <p class="logo">BookMyEvent</p>
                            <a href="C:\Users\nusai\OneDrive\Desktop\codes\evt-management\personal-copy\src\templates\home-page.html">Events</a>
                            <a href="">About</a>
                            </header>
                    `
                })
                .component("foot",{
                    template:`
                        <footer>
                            &copy Nusaiba Afsheen
                        </footer>
                    `
                })
                .controller("myCntrl",function($scope){
                    $scope.test="FML"

                    $scope.eventList=[
                        {
                            evt_id:1,
                            poster_src: "../static/assests/placeholder-poster.png",
                            evt_title: "Let Us Pledge 1",
                            evt_desc: "To take pledges as a responsible student and citizen",
                            evt_date: "13.06.2023",
                            evt_time: "10am -12pm",
                            evt_mode: "Offline",
                            evt_venue: "Main Audi",
                            evt_type: "Non-Tech",
                            evt_team_size: 10
                        },
                        {
                            evt_id:2,
                            poster_src: "../static/assests/placeholder-poster.png",
                            evt_title: "Let Us Pledge 2",
                            evt_desc: "To take pledges as a responsible student and citizen",
                            evt_date: "13.06.2023",
                            evt_time: "10am -12pm",
                            evt_mode: "Offline",
                            evt_Venue: "Main Audi",
                            evt_type: "Non-Tech",
                            evt_team_size: 10
                        },
                        {
                            evt_id:3,
                            poster_src: "../static/assests/placeholder-poster.png",
                            evt_title: "Let Us Pledge 3",
                            evt_desc: "To take pledges as a responsible student and citizen",
                            evt_date: "13.06.2023",
                            evt_time: "10am -12pm",
                            evt_mode: "Offline",
                            evt_Venue: "Main Audi",
                            evt_type: "Non-Tech",
                            evt_team_size: 10
                        }]
                })
                .controller("eventPageController",function($scope,$routeParams){
                        $scope.eventList=[
                            {
                                evt_id:1,
                                poster_src: "../static/assests/placeholder-poster.png",
                                evt_title: "Let Us Pledge 1",
                                evt_desc: "To take pledges as a responsible student and citizen",
                                evt_date: "13.06.2023",
                                evt_time: "10am -12pm",
                                evt_mode: "Offline",
                                evt_venue: "Main Audi",
                                evt_type: "Non-Tech",
                                evt_team_size: 10
                            },
                            {
                                evt_id:2,
                                poster_src: "../static/assests/placeholder-poster.png",
                                evt_title: "Let Us Pledge 2",
                                evt_desc: "To take pledges as a responsible student and citizen",
                                evt_date: "13.06.2023",
                                evt_time: "10am -12pm",
                                evt_mode: "Offline",
                                evt_Venue: "Main Audi",
                                evt_type: "Non-Tech",
                                evt_team_size: 10
                            },
                            {
                                evt_id:3,
                                poster_src: "../static/assests/placeholder-poster.png",
                                evt_title: "Let Us Pledge 3",
                                evt_desc: "To take pledges as a responsible student and citizen",
                                evt_date: "13.06.2023",
                                evt_time: "10am -12pm",
                                evt_mode: "Offline",
                                evt_Venue: "Main Audi",
                                evt_type: "Non-Tech",
                                evt_team_size: 10
                            }]

                        
                        $scope.chosen_event=$routeParams.id
                        console.log($scope.chosen_event)
                        
                    }) 
                .controller("registerPageController",function($scope,$routeParams){
                    $scope.participant={
                        id:0,
                        fullname:"",
                        emailid:"",
                        year:1999,
                        clgregno:123456,
                        clg:"",
                        dept:"",
                        phno:""
                    }
                })   
                .config(function ($routeProvider) {
                    $routeProvider
                        .when("/", {
                            templateUrl:'../templates/home-page.php',
                            controller:'myCntrl'
                        })
                        .when("/event-page.html/:id",{
                            templateUrl:'../templates/event-page.php',
                            controller:'eventPageController'
                        })
                        .when("/register-page.html/:id",{
                            templateUrl:'../templates/register-page.php',
                            controller:'registerPageController'
                        })
 
                });
                // .config(function ($routeProvider) {
                //     $routeProvider
                //         .when("/", {
                //             template: `<h1>Welcome to GeeksForGeeks</h1>
                //             <p>
                //                 Click on the links to change this content
                //             </p>`
                //         })
                //         .when("/courses", {
                //             template: `<h1>Courses Offered</h1>
                //             <p>
                //                 <ul>
                //                 <li>Machine Learning Foundation</li>
                //                 <li>Geeks Classes</li>
                //                 <li>System Design</li>
                //                 </ul>
                //             </p>`
                //         })
                //         .when("/internships", {
                //             template: `<h1>Hire With Us</h1>
                //             <p>
                //                 <ul>
                //                 <li>Software Developer</li>
                //                 <li>Technical Content Writer</li>
                //                 <li>Technical Content Engineer</li>
                //                 </ul>
                //             </p>`
                //         })
                //         .when("/event-page.html",{
                //             templateUrl:"../event-page.html"
                //         })
                // });
                // .controller("eventPageController",function($scope,$routeParams){
                //     $scope.eventList=[
                //         {
                //             evt_id:1,
                //             poster_src: "../static/assests/placeholder-poster.png",
                //             evt_title: "Let Us Pledge 1",
                //             evt_desc: "To take pledges as a responsible student and citizen",
                //             evt_date: "13.06.2023",
                //             evt_time: "10am -12pm",
                //             evt_mode: "Offline",
                //             evt_venue: "Main Audi",
                //             evt_type: "Non-Tech",
                //             evt_team_size: 10
                //         },
                //         {
                //             evt_id:2,
                //             poster_src: "../static/assests/placeholder-poster.png",
                //             evt_title: "Let Us Pledge 2",
                //             evt_desc: "To take pledges as a responsible student and citizen",
                //             evt_date: "13.06.2023",
                //             evt_time: "10am -12pm",
                //             evt_mode: "Offline",
                //             evt_Venue: "Main Audi",
                //             evt_type: "Non-Tech",
                //             evt_team_size: 10
                //         },
                //         {
                //             evt_id:3,
                //             poster_src: "../static/assests/placeholder-poster.png",
                //             evt_title: "Let Us Pledge 3",
                //             evt_desc: "To take pledges as a responsible student and citizen",
                //             evt_date: "13.06.2023",
                //             evt_time: "10am -12pm",
                //             evt_mode: "Offline",
                //             evt_Venue: "Main Audi",
                //             evt_type: "Non-Tech",
                //             evt_team_size: 10
                //         }]
                //     $scope.chosen_event=$routeParams.evt_id
                // })
