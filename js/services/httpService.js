angular.module("deepika").service("httpService",httpServiceModule);

function httpServiceModule($firebaseArray,URLService){

    this.createAccount=function(data){
    
var allUsers= new Firebase(URLService.registerURL);
    var users=$firebaseArray(allUsers);
        
  alert("create acc");
  var output=users.$add({
    userName:data.userName,
    userPassword:data.userPassword,
    userEmail:data.userEmail,
    userPhone:data.userPhone,
   });
        
        return output;
        
        
}
    this.showRecords=function(){
    var allRecords= new Firebase(URLService.viewURL);
    var records=$firebaseArray(allRecords);
        
        return records;
    }
    
    
}