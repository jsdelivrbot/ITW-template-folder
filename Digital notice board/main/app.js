angular.module('main',['ngMaterial','ui.router']);



angular.module('main')
.config(function ($stateProvider, $urlRouterProvider) {
    
        $stateProvider
        .state('home', {
            url: '',
            templateUrl:'../home/home.html',
            controller : 'HomeController',
            abstract: false
          })

        .state('innovations', {
            url: '',
            templateUrl:'../innovations/innovations.html',
            controller : 'InnovationController'
        })

        .state('achievements', {
            url: '',
            templateUrl:'../achievements/achievements.html',
            controller : function($scope){
                
            }
          })
        .state('placements', {
            url: '',
            templateUrl:'../placements/placements.html',
            controller : function($scope){
                
            }
          })
        .state('e_cell', {
            url: '',
            templateUrl:'../e_cell/e_cell.html',
            controller : function($scope){
                
            }
          });
        
    });
