(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("countryContactsService", ['CountryContact', 'spListService',
		function (CountryContact, spListService) {

			var svc = new spListService(CountryContact);

			return svc;

		}]);

})(angular);