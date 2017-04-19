(function (angular) {

	'use strict';

	angular.module('oaa.data')
		.factory("countryTeamEventService", ['CountryTeamEvent', 'spListService', "_",
			function (CountryTeamEvent, spListService, _) {

				var svc = new spListService(CountryTeamEvent);

				return svc;

			}]);

})(angular);