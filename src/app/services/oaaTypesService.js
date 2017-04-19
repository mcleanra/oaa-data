(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("oaaTypesService", ['OAAType', 'spListService', "_", function (OAAType, spListService, _) {

		var svc = new spListService(OAAType);

		return svc;

	}]);

})(angular);