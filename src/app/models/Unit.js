(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('Unit', ['spListItem', function (spListItem) {

            var _siteUrl = "/OAA";
            var _listName = "Units";
            var _viewFields =
                "<ViewFields>\
                    <FieldRef Name='ID' />\
                    <FieldRef Name='Title' />\
                    <FieldRef Name='UnitType' />\
                    <FieldRef Name='IconRelativeUrl' />\
                </ViewFields>";

            var _spServicesJsonMapping = {
                ows_ID: { mappedName: "Id", objectType: "Number" },
                ows_Title: { mappedName: "Title", objectType: "Text" },
                ows_UnitType: {mappedName: "UnitType", objectType: "Choice"},
                ows_IconRelativeUrl: {mappedName: "IconRelativeUrl", objectType: "Text"}
            };

            var Unit = function (item) {
                this.Id = item.Id;
                this.Title = item.Title;
                this.UnitType = item.UnitType;
                this.IconRelativeUrl = item.IconRelativeUrl;
            };

            Unit.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return Unit;

        }]);

})(angular);