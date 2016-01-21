angular.module(
		"ivendtposModule", 
		[
			"ngRoute", 
			"kendo.directives", 
			"ui.router",
			"hmTouchEvents", 
			"ngSanitize", 
			"customersModule", 
			"transaction.module",
			"transaction.total.module",
			"employee.module"
		]
	)
	.config(function($routeProvider, $stateProvider, $urlRouterProvider){	    
	    $stateProvider
			.state('ivendHome',{
			        url: '/',
			        views: {
			            'header': {
			                template: '<header-layout></header-layout>'
			            },
			            'content': {
			                templateUrl: 'app/templates/content.html' 
			            },
			            'footer': {
			                templateUrl: 'app/templates/footer.html'
			            }
			        }
			    })	        
	        .state("ivendHome.sale", {
	            url: "/sale",
				views: {
						'content@': {
										templateUrl: 'app/modules/transaction/views/transaction.html',
										controller: 'mainController'
									}
						}
	        })
	        .state("ivendHome.salerefund", {
	            url: "/salerefund",
				views: {
						'content@': {
										templateUrl: 'app/modules/transaction/views/salerefund.html',
										controller: 'transactionController'
									}
						}
	        })
			.state('ivendHome.empdashboard', {
				url: '/empdashboard',
				views: {
						'content@': {
										templateUrl: 'app/modules/employee/views/dashboard.html',
										controller: 'employeeController'
									}
						}
			});

	    $urlRouterProvider.otherwise("/");
	})

	.run(function($rootScope, $state){
	    $rootScope.$on("$stateChangeStart", function(event, currRoute, prevRoute, rejection) {
	    });
	    /*$rootScope.globalFoo = function($state) {console.log($state);};*/
        $rootScope.changeState = function(_state){
            $rootScope.abstractView = 'show-bar';
            $state.go(_state);
        }	    
	})

	.animation('.fade-in', function($timeout){
	    return {
	        enter : function(element, done){
	            element.css({
	                'opacity':0,
	                transition:'all 300ms'
	            });
	            $timeout(function(){
	                element.css({
	                    'opacity':1
	                });
	            },0)
	        }
	    }
	})

	.animation('.show-bar', function($timeout) {
	    return {
	        enter : function(element, done) {
	                element.css({
	                    transition:'all 300ms',
	                    transform:'translate3d(100%, 0, 0)'
	                });

	                $timeout(function(){
	                    element.css({
	                        transform:'translate3d(0, 0, 0)'
	                    });
	                },0);

	            },
	        leave : function(element, done) {
	                element.css({
	                    transition:'all 300ms',
	                    transform:'translate3d(0, 0, 0)'
	                });

	                $timeout(function(){
	                    element.css({
	                        transform:'translate3d(100%, 0, 0)'
	                    });
	                },0);
	            },

	        // you can also capture these animation events
	        addClass : function(element, className, done) {},
	        removeClass : function(element, className, done) {}
	    }
	})

	.animation('.slide-foo', function($timeout) {
	    return {
	        enter : function(element, done) {
	                element.css({
	                    transition:'all 300ms',
	                    transform:'translate3d(-100%, 0, 0)'
	                });

	                $timeout(function(){
	                    element.css({
	                        transform:'translate3d(0, 0, 0)'
	                    });
	                },0);

	            },
	        leave : function(element, done) {
	                element.css({
	                    transition:'all 300ms',
	                    transform:'translate3d(0, 0, 0)'
	                });

	                $timeout(function(){
	                    element.css({
	                        transform:'translate3d(100%, 0, 0)'
	                    });
	                },0);
	            },

	        // you can also capture these animation events
	        addClass : function(element, className, done) {},
	        removeClass : function(element, className, done) {}
	    }
	})
;