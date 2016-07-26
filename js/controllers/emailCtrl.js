angular.module("deepika").controller("emailCtrl",emailCtrlModel);

function emailCtrlModel($scope,$cookieStore,$firebaseArray){
	
var vm=this;
vm.userInfo=$cookieStore.get("login");


var allEvents= new Firebase("https://meetup-6b674.firebaseio.com/event");
    $scope.events=$firebaseArray(allEvents);
    console.log($scope.events);
    
vm.addEvent=function(data){
    alert("uu");
    $scope.events.$add({
        eventName:data.eventName,
        eventType:data.eventType,
        eventLocation:data.eventLocation,
        eventStreetAddress:data.eventStreetAddress,
        eventCity:data.eventCity,
        eventState:data.eventState,
        eventZipcode:data.eventZipcode,
        eventDate:data.eventDate,
        eventTime:data.eventTime,
        email:data.email,
        Message:data.Message,
        Phone:data.Phone
        
        
    });
	
   

}

}