angular.module("deepika").service("URLService",URLServiceModule);

function URLServiceModule(mainURL){
    this.registerURL=mainURL+"/register";
    this.viewURL=mainURL+"/events";
    
}