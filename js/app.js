angular.module("deepika",['ui.router','ngCookies','firebase','angular.filter']);

angular.module("deepika").config(function($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise('login');
    $stateProvider.state('login',{
       url : '/login',
	  views:{"output":{controller:"loginCtrl",controllerAs:"loginAs",templateUrl:'templates/login.html'}}
	   })
     
    .state('register',{
       url :'/register',
		views:{"output":{controller:"registerCtrl",controllerAs:"registerAs",templateUrl:'templates/register.html'}}
        })
    .state('events',{
       url :'/event',
		views:{"output":{controller:"eventsCtrl",controllerAs:"eventsAs" ,templateUrl:'templates/event.html'}}
       })
     .state('email',{
       url :'/email',
		views:{"output":{controller:"emailCtrl",controllerAs:"emailAs" ,templateUrl:'templates/email.html'}}
       })
    .state('viewEvent',{
       url :'/viewEvent',
		views:{"output":{controller:"viewEventCtrl",controllerAs:"viewAs" ,templateUrl:'templates/viewEvent.html'}}
      })
    .state('logout',{
       url :'/logout',
		views:{"output":{controller:"logoutCtrl",templateUrl:'templates/logout.html'}}
      });
    
});



