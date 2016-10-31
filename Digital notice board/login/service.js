angular.module('main')
.service('loginService',login);

function login($q,$http){
	var credentials = {user:"" , pass:""};
	var exists = false;

	var adder = function(username,password){
		$http({
			method:'POST',
			url:"http://127.0.0.1:8000/users",
			data:{username:username,password:password},
		})
		.then(function(response){

		},
		function(error){
			console.log(error);
		});
		if(exists == true){
			credentials.user = username;
			credentials.pass = password;
		}
		else{
			credentials.user = "";
			credentials.pass = "";
		}
	};

	var show = function(){
		return $q.when(credentials);
	};

	return {
		adder:adder,
		show:show,
	};
};
