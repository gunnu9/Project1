angular.module('deepika').filter("substr",function(){
    
    return function(input){
        var output=input.substr(0,3);
        return output;
        
    }
})