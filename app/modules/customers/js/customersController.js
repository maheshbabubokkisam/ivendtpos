angular.module("customersModule")
    .controller("customersController",
                ["$scope","$location","$http", function($scope, $location, $http){
                    $scope.Customers = {};
                    $scope.Customers.id = 'C000001';
                    $scope.Customers.name = 'Lisa';
                    $scope.Customers.contact = '8765432190';
                    $scope.Customers.creditLimit = '0.00';
                    $scope.Customers.balance = '0.00';
                    $scope.Customers.availablePoints = '0';
                }])
                .directive('transactionCustomerDetails', function() {
                    return {
                        restrict: 'E',
                        templateUrl: 'app/modules/customers/views/transactionCustomerDetailsView.html'
                    };
                });