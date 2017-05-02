(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("countryService", ['Country', 'spListService', function (Country, spListService) {

		var svc = new spListService(Country);
		
		svc.getCountryItemsByRegion = function (region, options) {
			return svc.get(options)
				.then(function(countries){
					if( region == 'SOCEUR' ) {
						//return array of country names where Region is not blank
						countries = _.difference(countries, _.where(countries, {Region: ''}));
					}
					else {
						//return array of country names where Region matches
						countries = _.where(countries, {Region: region});
					}
					return countries;
				});
		};

		return svc;

	}]);

})(angular);