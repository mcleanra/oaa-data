(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("oaaService", ['OAA', 'spListService', '_', 'moment',
		function (OAA, spListService, _, moment) {

			var svc = new spListService(OAA);

			//returns a rest $filter string given a start and end date
			svc.getDateFilter = function (start, end) {
				var start = moment(start).startOf('day').toISOString();
				var end = moment(end).endOf('day').toISOString();

				var filter = ''

				//starts or ends in the search window
				var dateFilter1 = "(((Start_x0020_Date ge datetime'" + start + "') and (Start_x0020_Date le datetime'" + end + "')) or \
								((End_x0020_Date ge datetime'" + start + "') and (End_x0020_Date le datetime'" + end + "')))";

				//starts before window and ends after window
				var dateFilter2 = "((Start_x0020_Date le datetime'" + start + "') and (End_x0020_Date ge datetime'" + end + "'))";
				filter = "(" + dateFilter1 + " or " + dateFilter2 + ")";

				return filter;
			};

			//returns a rest $filter string given an array of countries
			svc.getCountryFilter = function (countries, operator) {
				var filters = [];
				var operator = operator || 'or';

				if (countries.length > 0) {
					_.each(countries, function (country) {
						filters.push("substringof('" + country + "',Countries)");
					});
				}

				return "(" + filters.join(' ' + operator + ' ') + ")";
			};

			svc.getCurrentOaasForCountry = function (country, options) {
				var filters = [];

				filters.push("Status eq 'Approved'");
				filters.push(svc.getDateFilter(moment(), moment()));
				filters.push(svc.getCountryFilter([country], 'or'));

				var filter = filters.join(' and ');
				return svc.getByFilters(filter, options);
			}

			return svc;

		}]);

})(angular);