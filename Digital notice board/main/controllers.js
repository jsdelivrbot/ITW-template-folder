angular.module('main')
.controller('MainController',MainController);

function MainController($scope, $mdSidenav, $mdDialog){


			$scope.openSideNavPanel = function() {
                $mdSidenav('left').open();
            };
            $scope.closeSideNavPanel = function() {
                $mdSidenav('left').close();
            };

            $scope.tabList=[
            {icon:'account_balance',name:'Home',sref:'home'},
            {icon:'android',name:'Innovations',sref:'innovations'},
            {icon:'star_rate',name:'Achievements',sref:'achievements'},
            {icon:'supervisor_account',name:"Placements",sref:'placements'},
            {icon:'visibility',name:'E-Cell',sref:'e_cell'}
            ]

            // Login
            $scope.login = function(ev) {
                $mdDialog.show({
                  controller: loginController,
                  templateUrl: '../login/login.html',
                  parent: angular.element(document.body),
                  targetEvent: ev,
                  clickOutsideToClose:true,
                })
                .then(function(answer) {
                }, function() {
                  console.log("close");
                });
              };
};

// Home controller
angular.module('main')
	.controller('HomeController',HomeController);

// Home controller function
function HomeController($scope){

}

// Login controller
angular.module('main')
  .controller('loginController',loginController);

function loginController($scope,$mdDialog,loginService){
  $scope.Check = function(username,password){
    console.log("Hello "+username+"\n"+"you'r password is "+password);
    loginService.adder(username,password);
    loginService.show().then(function(response){
      console.log(response);
    },
    function(response){
      console.log(response);
    });
    $mdDialog.hide();
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
  };
}

// Innovation controller and function
angular.module('main')
.controller('InnovationController',InnovationController);

function InnovationController($scope,innovationService){
  innovationService.app().then(function(response){
    $scope.cardData = [].concat(response.data.data);
    console.log($scope.cardData[0]);
  })
}




 
