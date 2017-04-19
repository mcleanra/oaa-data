(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('Country', ['spListItem', function (spListItem) {

            var _siteUrl = _spPageContextInfo.siteAbsoluteUrl;
            var _listName = "Country";
            var _viewFields =
                "<ViewFields>\
                    <FieldRef Name='ID' />\
                    <FieldRef Name='Title' />\
                    <FieldRef Name='Region' />\
                    <FieldRef Name='Country_x0020_Desk' />\
                    <FieldRef Name='GlyphIconFlagCode' />\
                    <FieldRef Name='Capital' />\
                    <FieldRef Name='lat' />\
                    <FieldRef Name='long' />\
                    <FieldRef Name='MissionStatement' />\
                </ViewFields>";

            var _spServicesJsonMapping = {
                ows_ID: { mappedName: "Id", objectType: "Number" },
                ows_Title: { mappedName: "Title", objectType: "Text" },
                ows_Region: {mappedName: "Region", objectType: "Text"},
                ows_Country_x0020_Desk: {mappedName: "Country_x0020_Desk", objectType: "Text"},
                ows_GlyphIconFlagCode: {mappedName: "GlyphIconFlagCode", objectType: "Text"},
                ows_Capital: {mappedName: "Capital", objectType: "Text"},
                ows_lat: {mappedName: "lat", objectType: "Number"},
                ows_long: {mappedName: "long", objectType: "Number"},
                ows_MissionStatement: {mappedName: "MissionStatement", objectType: "Text"}
            };

            var Country = function (item) {
                this.Id = item.Id;
                this.Title = item.Title;
                this.Region = item.Region || '';
                this.Country_x0020_Desk = item.Country_x0020_Desk;
                this.GlyphIconFlagCode = item.GlyphIconFlagCode;
                this.Capital = item.Capital;
                this.lat = item.lat;
                this.long = item.long;
                this.MissionStatement = item.MissionStatement;
            };

            Country.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return Country;

        }]);

})(angular);