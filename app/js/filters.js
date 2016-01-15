angular.module("ivendtposModule")
	.filter('currencys', ['$filter', '$locale', 
	    function($filter, $locale) {
	        return function (num) {
	            var sym = $locale.NUMBER_FORMATS.CURRENCY_SYM;
	            return $filter('currency')(num, '<span>'+ sym +'</span>');
	        };
	    }
	]);