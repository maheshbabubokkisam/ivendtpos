angular.module(
		"ivendtposModule", 
		[
			"ngRoute", 
			"kendo.directives", 
			"ui.router", 
			"ngAnimate", 
			"hmTouchEvents", 
			"ngSanitize", 
			"customersModule", 
			"transaction.module",
			"transaction.total.module"
		]
	)
	.config(function($routeProvider, $stateProvider, $urlRouterProvider, $animateProvider){   
	    //$animateProvider.classNameFilter(/ani-/);
	    $stateProvider
	        .state('ivendHome', {
	            //template:'',
	            abstract:true
	        })
	        .state("ivendHome.transaction", {
	            url: "/transaction",
	            templateUrl : 'app/modules/transaction/views/transaction.html',
	            controller : 'mainController'
	        })/*
	        .state("ivendHome.bar", {
	            url: "/bar",
	            templateUrl : 'bar.html',
	            controller : 'barCtl'
	        })
	        .state("ivendHome.mahesh", {
	            url: "/mahesh",
	            templateUrl : 'mahesh.html',
	            controller : 'maheshCtl'
	        })*/;

	    $urlRouterProvider.otherwise("/transaction");
	})

	.run(function($rootScope){
	    $rootScope.$on("$stateChangeStart", function(event, currRoute, prevRoute, rejection) {
	    });
	    /*$rootScope.globalFoo = function($state) {console.log($state);};*/
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