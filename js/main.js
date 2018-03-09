var mainApp = angular.module("mainApp", ['ngRoute']);
mainApp.config(function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'html/home.html',
            controller: 'homeController'
        })
        .when('/login', {
            templateUrl: 'html/login.html',
            controller: 'loginController'
        })
        .when('/about', {
            templateUrl: 'html/about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: 'html/contact.html',
            controller: 'contactController'
        })
        .when('/news', {
            templateUrl: 'html/news.html',
            controller: 'newsController'
        })

        .when('/blogs', {
            templateUrl: 'html/blogs.html',
            controller: 'blogsController'
        })
        .when('/resources', {
            templateUrl: 'html/resources.html',
            controller: 'resourcesController'
        })
        .when('/careers', {
            templateUrl: 'html/carrier.html',
            controller: 'carrierController'
        })
        .when('/employeeDetails', {
            templateUrl: 'html/EmployeeTable.html',
            controller: 'myController'
        })
        .when('/user', {
            templateUrl: 'html/user.html',
            controller: 'userController'
        })

        .when('/add', {
            templateUrl: 'html/addEmp.html',
            controller: 'addEmpController'
        })
        .when('/forgot', {
            templateUrl: 'html/forgot.html',
            controller: 'forgotController'
        })
        .when('/register', {
            templateUrl: 'html/register.html',
            controller: 'registerController'
        })

        .when('/press', {
            templateUrl: 'html/press.html',
            controller: 'pressController'
        })
        .when('/inthenews', {
            templateUrl: 'html/inthenews.html',
            controller: 'inthenewsController'
        })
        .when('/events', {
            templateUrl: 'html/events.html',
            controller: 'eventsController'
        })
        .otherwise({
            redirectTo: "/home"
        })
});


//for inside news press,inthenews and for events.
mainApp.controller('pressController', function($scope) {
    $scope.message = "pressController";
});
mainApp.controller('inthenewsController', function($scope) {
    $scope.message = "IN THE NEWS";
});
mainApp.controller('eventsController', function($scope) {
    $scope.message = "EVENTS";
});
//news controller
mainApp.controller('newsController', function($scope) {
    $scope.message = "Press Release";
});
//blogs controller
mainApp.controller('blogsController', function($scope) {
    $scope.message = "Get ahead of the game with our blogs by techno-superstars.";
});
//resources controller
mainApp.controller('resourcesController', function($scope) {});
//carrier controller
mainApp.controller('carrierController', function slideShowController($scope, $timeout) {
    var slidesInSlideshow = 4;
    var slidesTimeIntervalInMs = 3500;
    $scope.slideshow = 1;
    var slideTimer =
        $timeout(function interval() {
            $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
            slideTimer = $timeout(interval, slidesTimeIntervalInMs);
        }, slidesTimeIntervalInMs);
});
//forgot controller
mainApp.controller('forgotController', function($scope, $location) {
    $scope.message = "Enter your email or username. We'll email instructions on how to reset password.";
    $scope.submit = function() {
        if ($scope.password == $scope.password_confirmation) {
            alert("A link has been sent to your mail to reset password.");
            $location.path('/login')
        } else {
            alert("please enter same password.");
            $location.path('/register')
        }
    }
});
//register controller
mainApp.controller('registerController', function($scope, $location) {
    $scope.register = function() {
        alert("Registered Successfully.Please login to Continue.");
        $location.path('/login')
    }
});
//home Controller.
mainApp.controller('homeController', function slideShowController($scope, $timeout) {
    var slidesInSlideshow = 5;
    var slidesTimeIntervalInMs = 2500;

    $scope.slideshow = 1;
    var slideTimer =
        $timeout(function interval() {
            $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
            slideTimer = $timeout(interval, slidesTimeIntervalInMs);
        }, slidesTimeIntervalInMs);
});

//user controller
mainApp.controller('userController', function($scope, $location) {
    $scope.message = "Welcome Back User!";
    $scope.view = function() {
        $location.path('/employeeDetails');
    }
    $scope.add = function() {
        $location.path('/add');
    }
});

//addEmp controller
mainApp.controller('addEmpController', function($scope) {
    $scope.message = "Add Employee";
    var employees = [
        { firstName: "Vinit", lastName: "Kumar", technology: "AngularJS", gender: 1, dateOfBirth: new Date("May 11,1995"), salary: "350000", city: "Chennai" },
        { firstName: "Sai", lastName: "Janani", technology: "AngularJS", gender: 2, dateOfBirth: new Date("AUG 22,1994"), salary: "340000", city: "Chennai" },
        { firstName: "Priyanga", lastName: "VijayKumar", technology: "C++", gender: 2, dateOfBirth: new Date("Sep 30,1993"), salary: "420000", city: "Chennai" },
    ];
    $scope.employees = employees;
    $scope.addRow = function() {
        $scope.employees.push({
            'firstName': $scope.firstName,
            'lastName': $scope.lastName,
            'technology': $scope.technology,
            'gender': $scope.gender,
            'dateOfBirth': $scope.dateOfBirth,
            'salary': $scope.salary,
            'city': $scope.city
        });
        $scope.firstName = '';
        $scope.lastName = '';
        $scope.technology = '';
        $scope.gender = '';
        $scope.dateOfBirth = '';
        $scope.salary = '';
        $scope.city = '';
    };
});
//login controller
mainApp.controller('loginController', function($scope, $location) {
    $scope.submit = function() {
        var uname = $scope.inputEmail;
        var pwd = $scope.inputPassword;
        if ($scope.uname == 'admin@hm.com' && $scope.pwd == 'admin') {
            $location.path('/user');
            alert('Welcome ' + $scope.uname);
            /*window.location.hash='#/employeeDetails';*/
        } else {
            alert('User name or password Wrong.');
            $location.path('/login');
        }
    };
});
//about controller
mainApp.controller('aboutController', function($scope) {
    $scope.message = "About Happiest Minds Technologies";
});
mainApp.controller('contactController', function($scope) {});
mainApp.controller("myController", function($scope) {
    //employee list in an array.
    var employees = [
        { firstName: "Vinit", lastName: "Kumar", technology: "JAVA", gender: 1, dateOfBirth: new Date("May 11,1995"), salary: "350000", city: "Bihar" },
        { firstName: "Sai", lastName: "Janani", technology: "AngularJS", gender: 2, dateOfBirth: new Date("AUG 22,1994"), salary: "340000", city: "Chennai" },
        { firstName: "Abhishek", lastName: "Kumar", technology: "JAVA", gender: 1, dateOfBirth: new Date("Feb 14,1994"), salary: "420000", city: "Bangalore" },
        { firstName: "Jyothi", lastName: "Lakshmi", technology: "C++", gender: 2, dateOfBirth: new Date("Sep 30,1993"), salary: "350000", city: "Cochin" },
        { firstName: "Rini", lastName: "Lobo", technology: "HTML", gender: 2, dateOfBirth: new Date("Jan 14,1997"), salary: "340000", city: "Mangalore" },
        { firstName: "Ananya", lastName: "Ghosal", technology: "SPRING", gender: 2, dateOfBirth: new Date("Aug 22,1995"), salary: "350000", city: "Jharkhand" },
        { firstName: "Hari", lastName: "Bhaskar", technology: "Scala", gender: 1, dateOfBirth: new Date("June 11,1995"), salary: "500000", city: "Chennai" },
        { firstName: "Pavithra", lastName: "S", technology: "Java", gender: 2, dateOfBirth: new Date("AUG 29,1994"), salary: "350000", city: "Chennai" },
        { firstName: "Dinesh", lastName: "Kumar", technology: "JAVA", gender: 1, dateOfBirth: new Date("Mar 16,1993"), salary: "420000", city: "Bangalore" },
        { firstName: "Sangeetha", lastName: "Suresh", technology: "JAVA", gender: 2, dateOfBirth: new Date("Sep 30,1993"), salary: "340000", city: "Bangalore" },
        { firstName: "Saranya", lastName: "V", technology: "HTML", gender: 2, dateOfBirth: new Date("Jan 14,1997"), salary: "340000", city: "Chennai" },
        { firstName: "Neha", lastName: "Bahethy", technology: "Python", gender: 2, dateOfBirth: new Date("Aug 22,1995"), salary: "340000", city: "Jaipur" },
        { firstName: "Sathyam", lastName: "Singh", technology: "ASP.NET", gender: 1, dateOfBirth: new Date("May 11,1995"), salary: "340000", city: "Nepal" },
        { firstName: "Subhra", lastName: "Mohanthy", technology: "Jquery", gender: 2, dateOfBirth: new Date("AUG 22,1994"), salary: "340000", city: "Orissa" },
        { firstName: "Ambuj", lastName: "Kumar", technology: "ASP.Net", gender: 1, dateOfBirth: new Date("Nov 16,1993"), salary: "340000", city: "DELHI" },
        { firstName: "Priyanga", lastName: "VijayKumar", technology: "C++", gender: 2, dateOfBirth: new Date("Sep 30,1993"), salary: "420000", city: "Chennai" },
        { firstName: "Puja", lastName: "Nair", technology: "HTML", gender: 2, dateOfBirth: new Date("Jan 14,1997"), salary: "340000", city: "Chennai" },
        { firstName: "Gopika", lastName: "Krishnan", technology: "React-JS", gender: 2, dateOfBirth: new Date("Aug 22,1995"), salary: "340000", city: "chennai" },
    ];
    $scope.employees = employees;
    /* $scope.rowLimit=3;*/
    //calling employeeView using ng-include that refers to Employee.thml table.
    $scope.employeeView = "EmployeeTable.html";
    //search function
    $scope.search = function(item) {
        if ($scope.searchText == undefined) {
            return true;
        } else {
            if (item.firstName.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.technology.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                return true;
            }
        }
        return false;
    }
    //Sorting
    $scope.sortColumn = "firstName";
    $scope.reverseSort = false;
    $scope.sortData = function(column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
    }
    $scope.getSortClass = function(column) {
        if ($scope.sortColumn == column) {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
        }
        return '';
    }
});