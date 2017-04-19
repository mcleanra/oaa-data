(function (angular) {

	'use strict';

	angular.module('oaa.data')
		.factory("staffingService", ['Staffing', 'spListService', function (Staffing, spListService) {

		var svc = new spListService(Staffing);

		//returns a rest $filter string given an array of countries
		svc.getCountryFilter = function(countries, operator){
			var filters = [];
			var operator = operator || 'or';

			if( countries.length > 0 ) {
				_.each(countries, function(country){
					filters.push("substringof('" + country + "',countries)");
				});
			}

			return "(" + filters.join(' ' + operator + ' ') + ")";
		};

		svc.getCurrentStaffingItemsForCountry = function(country, select) {
			var filters = [];

			filters.push("Status eq 'Staffing'");
			filters.push(svc.getCountryFilter([country], 'or'));

			var filter = filters.join(' and ');
			return svc.getByFilters(filter, select);
		};

		return svc;

	}]);

})(angular);