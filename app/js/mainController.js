angular.module("ivendtposModule")
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