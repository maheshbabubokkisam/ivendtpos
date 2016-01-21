angular.module("employee.module")
    .controller("employeeController",
                [
                    '$scope', '$state', '$stateParams', '$timeout', '$rootScope', '$window',
                    function($scope, $state, $stateParams, $timeout, $rootScope, $window){
                        $scope.changeState = function(_state){
                            $rootScope.abstractView = 'show-bar';            
                            $state.go(_state);
                        }                        
                    }
                ]
               );