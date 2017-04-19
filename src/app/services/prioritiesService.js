(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("prioritiesService", ['Priority', 'spListService', function (Priority, spListService) {

		var svc = new spListService(Priority);

		return svc;

	}]);

})(angular);