
(function () {
    'use strict';

  var app = angular.module('oaa.data', [
		'angular.sp.list'
	]);

  app.value('_', window._);
  app.value('moment', window.moment);
	
})();
