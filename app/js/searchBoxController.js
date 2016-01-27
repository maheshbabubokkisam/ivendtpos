angular.module("ivendtposModule")
    
    .directive('searchBox', function() {
        var Controller = ['$scope', function($scope){}];

        var link = function(scope, elem, attrs){
        };

        return {
            restrict: 'E'
            ,scope:{}
            ,templateUrl: 'app/templates/search.html'
            ,controller: Controller
            ,link: link
        };
    })

    .directive('kendoAutoCompleteSearchBox', function($state, $rootScope) {
        var currentState = '';
        var Controller = [
            '$scope', '$state', '$timeout', '$rootScope', '$stateParams', '$window',
            function($scope, $state, $timeout, $rootScope, $stateParams, $window){
                currentState = $state.current.name;
                console.log(currentState);
            }
        ];

        var searchBoxUrl = function(){
            var a = Math.random();
            return "app/js/searchBoxDataSource.json?"+$state.current.name+'/'+a;
        };

        function dataS(){
            return new kendo.data.DataSource({
                    serverFiltering: true,
                    transport: {
                                    read: {
                                        url: searchBoxUrl,
                                        //dataType: "jsonp"
                                    }
                                },
                    schema: {
                        model: {
                            fields: {
                                ProductID: { type: "number" },
                                ProductName: { type: "string" },
                                UnitPrice: { type: "number" }
                            }
                        }
                    },
                    template: "#= ProductID # | For: #= ProductName #, #= UnitPrice #",
                    virtual: true,
            });
        }

        var link = function(scope, elem, attrs){
            elem.kendoAutoComplete({
                minLength : 1,            
                dataTextField : "ProductName",
                dataSource : dataS()
            });
            
            elem.css({'height': '45px'});
            elem.parent().css({'width': '80%', 'background-color':'transparent','border':'0px'});            
        };

        return {
            restrict: 'E'
            ,replace:true
            ,scope:{}
            ,template: '<input type="text" class="search-query" placeholder="Search" name="search" />'
            ,controller: Controller
            ,link: link
        };
    });