
angular.module("deepika").controller("viewEventCtrl",viewEventCtrlModel);

function viewEventCtrlModel($state,$cookieStore,$scope,httpService){
  var vm=this;
  vm.fm={};
   
    
   vm.dataInfo=httpService.showRecords();
/*	 localCache.put('sample', vm.dataInfo);
	 var cache = localCache.get('sample');
  console.log(cache);

	var temp=vm.dataInfo;
	
	angular.forEach(temp, function(value, key){
     console.log(key + ': ' + value);
});*/
	
	
   vm.showSingle=false;
  vm.userInfo=$cookieStore.get("login");
   
    vm.showRecord=function(data){
        vm.showSingle=true;
        vm.showEdit=false;
        vm.single=data;

    }
     vm.editRecord=function(data){
         vm.showSingle=false;
        vm.showEdit=true;
         console.log(data);
        vm.single=data;
        vm.fm.eventName=vm.single.eventName;
        vm.fm.eventType=vm.single.eventType;
        vm.fm.eventLocation=vm.single.eventLocation;
        vm.fm.eventStreetAddress=vm.single.eventStreetAddress;
        vm.fm.eventState=vm.single.eventState;
        vm.fm.eventCity=vm.single.eventCity;
        vm.fm.eventZipcode=vm.single.eventZipcode;
        vm.fm.eventDate=vm.single.eventDate;
        vm.fm.eventTime=vm.single.eventTime;
        vm.fm.email=vm.single.email;
        vm.fm.Message=vm.single.Message;
         vm.fm.Phone=vm.single.Phone;
        vm.fm.id=vm.single.$id;
        

    }
    
     vm.deleteRecord=function(data){
         alert("data");
   vm.dataInfo.$remove(data);
    }
     
    vm.saveRecord=function(data){
       //var record=vm.dataInfo.$getRecord(data.id);
      // alert(record);
        /*record.eventName=data.eventName,
        record.eventType=data.eventType || "",
        record.eventLocation=data.eventLocation,
        record.eventStreetAddress=data.eventStreetAddress,
        record.eventCity=data.eventCity,
        record.eventState=data.eventState,
        record.eventZipcode=data.eventZipcode,
        record.eventDate=data.eventDate,
        record.eventTime=data.eventTime,
        record.email=data.email,
        record.Message=data.Message,
        record.Phone=data.Phone*/
        data.$id=data.id;
        vm.dataInfo.$save(data);
        //console.log(vm.dataInfo);
       // alert(data);
  
 
    
   
}
     
	
 }



