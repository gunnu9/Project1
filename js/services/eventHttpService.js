angular.module("deepika").service("eventHttpService",eventHttpServiceModule);

function eventHttpServiceModule($firebaseArray,URLService,$cookieStore){
    var allEvents= new Firebase(URLService.viewURL);
    var events=$firebaseArray(allEvents);
    var userInfo=$cookieStore.get("login");
    this.addEvent=function(data){
        var output=events.$add({
    
        userEmail:userInfo,
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
        
        
    }).then(function(x){
     console.log(x);
    },function(){
        alert("failure");
    });
    }
    
}