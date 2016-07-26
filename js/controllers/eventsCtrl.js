angular.module("deepika").controller("eventsCtrl",eventsCtrlModel);

function eventsCtrlModel($cookieStore,eventHttpService,$state){
 
	
var vm=this;
	/* vm.cache = localCache.get('sample');
  console.log(vm.cache+"444444444");*/
vm.showForm=false;
var x={};
    vm.fm=x;    
    
    // Declaring cookies
	vm.userInfo=$cookieStore.get("login");
	if(vm.userInfo=="" || vm.userInfo==null){
     //$state.go("login");   
    }
    
	console.log(vm.userInfo);

vm.createEvent=function(){
vm.showForm=true;
} 
    
function initData(){
   

         vm.fm.eventName="";
        vm.fm.eventType="";
        vm.fm.eventLocation="";
        vm.fm.eventStreetAddress="";
        vm.fm.eventCity="";
        vm.fm.eventState="";
        vm.fm.eventZipcode="";
        vm.fm.eventDate="";
        vm.fm.eventTime="";
        vm.fm.email="";
        vm.fm.Message="";
        vm.fm.Phone=""
}
    initData();
    
vm.createEvent2=function(data){
   
    console.log(data);
    
	var response=eventHttpService.addEvent(data);

}

vm.showLoc=function(){
   
   vm.showDiv=true; 
    
}

}