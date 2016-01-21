angular.module("ivendtposModule")
    .controller('mainController',[
        '$scope', '$state', '$timeout', '$rootScope', '$stateParams', '$window',
        function($scope, $state, $timeout, $rootScope, $stateParams, $window){
            $scope.changeState = function(_state){
                console.log(_state);
                $scope.abstractView = 'show-bar';            
                $state.go(_state);
            };

            $scope.saleTypeMenuDataSource = { 
                transport: { read: {url: "app/modules/transaction/js/transactionType.json"} } 
            };
            $scope.saleTypeMenuOnChange = function(e) {                
                $scope.changeState(this.value());
            };
        }
    ])
    .directive('frequentlyUsedProductButtons', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/templates/frequentlyUsedProductButtons.html'
        };
    })
    .directive('headerLayout', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/templates/header.html'
        };
    })
    .directive('searchBox', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/templates/search.html'
        };
    })
    .directive('saleMenu', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/templates/saleMenu.html'
        };
    });