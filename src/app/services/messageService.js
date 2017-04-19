(function (angular) {

	'use strict';

	angular.module('oaa.data')
		.factory("messageService", ['Message', 'spListService', function (Message, spListService) {

		var svc = new spListService(Message);

		svc.getByArrayOfRelatedItemIDs = function(idArray){
			var valueArray = [];
			
			_.each(idArray, function(id){
				valueArray.push("<Value Type='Text'>" + id + "</Value>")
			});
			
			var query = "<Query><Where><In><FieldRef Name='RelatedItemID'/><Values>" + valueArray.join('') + "</Values></In></Where></Query>";
			return svc.executeCamlQuery(query);
		};

		return svc;

	}]);

})(angular);