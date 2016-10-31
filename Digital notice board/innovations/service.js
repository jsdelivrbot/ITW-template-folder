angular.module('main')
.service('innovationService',function($q,$http){


        return {
        	app:function(){
        		return $http.get('http://127.0.0.1:8000/innovationlist');
    				}
        	}
        
});
