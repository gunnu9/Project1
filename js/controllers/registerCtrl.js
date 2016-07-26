angular.module("deepika").controller("registerCtrl",registerCtrlModel);

function registerCtrlModel($state,httpService,URLService){
	
var vm=this;
	vm.validAccount=true;
   
vm.registerAccount=function(data){
  
var response=httpService.createAccount(data);
    $state.go("login");
    
}


vm.checkEmail=function(email){
	//console.log(email);
    vm.emailError="";
	if(email!=undefined){
	vm.result=[];
	// once 
	
	var ref = new Firebase(URLService.registerURL);	
   ref.once("value", function(snapshot) {
   
	
   snapshot.forEach(function(childSnapshot) {
    var childData = childSnapshot.val();  
	if(childData.userEmail==email ){
     vm.result.push(1);		
	}
 
  });
	
     console.log(vm.result);

	
	if( vm.result != null && vm.result.length > 0){
       	vm.validAccount=true; 
	    vm.emailError="email already exist";
     
	}
    else if(vm.result.length==0){
        vm.validAccount=false; 
		vm.emailError="";
        
    }

		 
});
		
	}
		 }
}



