angular.module("deepika").controller("loginCtrl",loginCtrlModel);

function loginCtrlModel($state,$cookieStore,$scope,URLService){
var vm=this;

	vm.result=[];
$scope.loginAccount=function(fm){

var ref = new Firebase(URLService.registerURL);	
ref.once("value", function(snapshot) {
	
  snapshot.forEach(function(childSnapshot) {
    var childData = childSnapshot.val();  
	if(childData.userEmail==fm.userEmail && childData.userPassword==fm.userPassword){
//alert("you have successfully logged in ....... please wait");
vm.result.push(1);
vm.userData=childData;		
	}
 
  });
 
if(vm.result==1){
$cookieStore.put("login",fm.userEmail);	
$cookieStore.put("phone",vm.userData.userPhone);	
$state.go("events");
} else {
	
	alert("please enter valid details");
}
	
});
	

}
}




