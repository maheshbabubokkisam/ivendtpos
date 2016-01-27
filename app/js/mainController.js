angular.module("ivendtposModule")
    .controller('mainController',[
        '$scope', '$state', '$timeout', '$rootScope', '$stateParams', '$window',
        function($scope, $state, $timeout, $rootScope, $stateParams, $window){
            $scope.changeState = function(_state){
                //console.log(_state);
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
    /*
    .directive('searchBox', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/templates/search.html',
            link: function(scope, elem, attrs){
            }
        };
    })*/
    .directive('saleMenu', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/templates/saleMenu.html',
            link: function(scope, elem, attrs) {    
                var selectbox = elem.find("select");                
                var id = selectbox.attr('id');
                var kendodropdownSpan = angular.element(elem[0].querySelector('[aria-owns="'+id+'_listbox"]'));
                    kendodropdownSpan.css({'width':'90%'});
                var inputSpan = angular.element(kendodropdownSpan[0].querySelector('.k-input'));
                    inputSpan.css(
                        {'padding':'0',
                         'height':'42px',
                         'text-transform':'uppercase',
                         'text-overflow':'initial'
                        }
                    );

                var kendodropdownList = angular.element(document.getElementById(id+'-list'));
            }
        };
    });