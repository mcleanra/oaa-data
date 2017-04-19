(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('Priority', ['spListItem', function (spListItem) {

            var _siteUrl = _spPageContextInfo.siteAbsoluteUrl;
            var _listName = "Priorities";
            var _viewFields =
                "<ViewFields>\
                    <FieldRef Name='ID' />\
                    <FieldRef Name='Title' />\
                    <FieldRef Name='Color' />\
                    <FieldRef Name='Campaign' />\
                </ViewFields>";

            var _spServicesJsonMapping = {
                ows_ID: { mappedName: "Id", objectType: "Number" },
                ows_Title: { mappedName: "Title", objectType: "Text" },
                ows_Color: {mappedName: "Color", objectType: "Text"}
            };

            var Priority = function (item) {
                this.Id = item.Id;
                this.Title = item.Title;
                this.Color = item.Color;
            };

            Priority.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return Priority;

        }]);

})(angular);