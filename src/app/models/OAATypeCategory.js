(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('OAATypeCategory', ['spListItem', function (spListItem) {

            var _siteUrl = _spPageContextInfo.siteAbsoluteUrl;
            var _listName = "OAA Type Categories";
            var _viewFields =
                "<ViewFields>\
                    <FieldRef Name='ID' />\
                    <FieldRef Name='Title' />\
                    <FieldRef Name='SortOrder' />\
                    <FieldRef Name='Color' />\
                </ViewFields>";

            var _spServicesJsonMapping = {
                ows_ID: { mappedName: "Id", objectType: "Number" },
                ows_Title: { mappedName: "Title", objectType: "Text" },
                ows_SortOrder: { mappedName: "SortOrder", objectType: "Text" },
                ows_Color: { mappedName: "Color", objectType: "Text" }
            };

            var OAATypeCategory = function (item) {
                this.Id = item.Id;
                this.Title = item.Title;
                this.SortOrder = item.SortOrder;
                this.Color = item.Color;
            };

            OAATypeCategory.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return OAATypeCategory;

        }]);

})(angular);