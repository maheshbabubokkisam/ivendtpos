angular.module("transaction.total.module",["transaction.module"])
    .controller("transactionItemGridController",
                ["$scope", function($scope){
                    $scope.transactionItemGridOptions = {
                        sortable: true,
                        selectable: true,
                        height: 450,
                        dataSource: [
                            { type: "Sale", code: 1000, description:"Men's Solid Polo", quantity:1, price:20.00, discount:0.00, total:20.00, },
                            { type: "Sale", code: 1001, description:"Men's Solid Polo", quantity:1, price:20.00, discount:0.00, total:20.00, },
                            { type: "Sale", code: 1002, description:"Men's Solid Polo", quantity:1, price:20.00, discount:0.00, total:20.00, },
                            { type: "Sale", code: 1003, description:"Men's Solid Polo", quantity:1, price:20.00, discount:0.00, total:20.00, },
                            { type: "Sale", code: 1004, description:"Men's Solid Polo", quantity:1, price:20.00, discount:0.00, total:20.00, },
                            { type: "Sale", code: 1005, description:"Men's Solid Polo", quantity:1, price:20.00, discount:0.00, total:20.00, },
                            { type: "Sale", code: 1006, description:"Men's Solid Polo", quantity:1, price:20.00, discount:0.00, total:20.00, },
                            { type: "Sale", code: 1007, description:"Men's Solid Polo", quantity:1, price:20.00, discount:0.00, total:20.00, },
                            { type: "Sale", code: 1008, description:"Men's Solid Polo", quantity:1, price:20.00, discount:0.00, total:20.00, },
                            { type: "Sale", code: 1010, description:"Men's Solid Polo", quantity:1, price:20.00, discount:0.00, total:20.00, },
                            { type: "Sale", code: 1011, description:"Men's Solid Polo", quantity:1, price:20.00, discount:0.00, total:20.00, },
                            { type: "Sale", code: 1012, description:"Men's Solid Polo", quantity:1, price:20.00, discount:0.00, total:20.00, },
                            { type: "Sale", code: 1013, description:"Men's Solid Polo", quantity:1, price:20.00, discount:0.00, total:20.00, },
                            { type: "Sale", code: 1014, description:"Men's Solid Polo", quantity:1, price:20.00, discount:0.00, total:20.00, },
                            { type: "Sale", code: 1015, description:"Men's Solid Polo", quantity:1, price:20.00, discount:0.00, total:20.00, },
                            { type: "Sale", code: 1016, description:"Men's Solid Polo", quantity:1, price:20.00, discount:0.00, total:20.00, },
                            { type: "Sale", code: 1017, description:"Men's Solid Polo", quantity:1, price:20.00, discount:0.00, total:20.00, },
                            { type: "Sale", code: 1018, description:"Men's Solid Polo", quantity:1, price:20.00, discount:0.00, total:20.00, },
                            { type: "Sale", code: 1019, description:"Men's Solid Polo", quantity:1, price:20.00, discount:0.00, total:20.00, }
                        ],
                        columns:[
                                    { field: "type", title: "Type" }, 
                                    { field: "code", title: "Code" },
                                    { field: "description", title: "Description" },
                                    { field: "quantity", title: "Qty" },
                                    { field: "price", title: "Price" },
                                    { field: "discount", title: "Discount" },
                                    { field: "total", title: "Total" },
                                ]
                    };
                }])
                .directive('transactionItemGridLayout', function() {
                    return {
                        restrict: 'E',
                        templateUrl: 'app/modules/transaction/items/views/transactionItemGridDetailsView.html'
                    };
                })
    .controller("transactionTotalController",
                ["$scope","$location","$http", function($scope, $location, $http){
                    $scope.Transaction = {Total:{}};
                    $scope.Transaction.Total.subtotal = '200.00';
                    $scope.Transaction.Total.tax = '20.00';
                    $scope.Transaction.Total.surcharge = '0.00';
                    $scope.Transaction.Total.items = '1';
                    $scope.Transaction.Total.quantity = '2';
                    $scope.Transaction.Total.discount = '0.00';
                    $scope.Transaction.Total.netTotal = '220.00';
                }])
                .directive('transactionTotalLayout', function() {
                    return {
                        restrict: 'E',
                        templateUrl: 'app/modules/transaction/total/views/transactionTotalDetailsView.html'
                    };
                });