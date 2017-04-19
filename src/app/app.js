
(function () {
    'use strict';

  var app = angular.module('oaa.data', [
		'ryan.spList',
    'ryan.requestDigest'
	])
  .config(function(){
    
    window._spFormDigestRefreshInterval = 1440000;

    window._spPageContextInfo = window._spPageContextInfo || {
      siteAbsoluteUrl: '/OAA'
    };

  })
  .run(['RequestDigestIntervalService', function(RequestDigestIntervalService){
    //this refreshes the request digest every 24 minutes, allowing us to post info to SharePoint
    RequestDigestIntervalService.startInterval();
  }]);

  app.value('_', window._);
  app.value('moment', window.moment);
	
})();
