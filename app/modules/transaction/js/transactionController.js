angular.module("transaction.module")
    .controller("transactionController",
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