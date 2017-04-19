(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("unitService", ['Unit', 'spListService', function (Unit, spListService) {

		var svc = new spListService(Unit);

		return svc;

	}]);

})(angular);