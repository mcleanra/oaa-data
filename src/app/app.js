
(function () {
    'use strict';

  var app = angular.module('oaa.data', [
		'angular.sp.list',
    'angular.sp.digest'
	])
  .config(function(){
    
    window._spFormDigestRefreshInterval = 1440000;

  })
  .run(['RequestDigestIntervalService', function(RequestDigestIntervalService){
    //this refreshes the request digest every 24 minutes, allowing us to post info to SharePoint
    RequestDigestIntervalService.startInterval('/OAA');
  }]);

  app.value('_', window._);
  app.value('moment', window.moment);
	
})();
