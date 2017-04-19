(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("oaaTypeCategoryService", ['OAATypeCategory', 'spListService', "_", function (OAATypeCategory, spListService, _) {

		var svc = new spListService(OAATypeCategory);

		return svc;

	}]);

})(angular);