(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("missionProductsService", ['MissionProduct', 'spListService', function (MissionProduct, spListService) {

		var svc = new spListService(MissionProduct);

		return svc;

	}]);

})(angular);