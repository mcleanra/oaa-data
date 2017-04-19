(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('OAAType', ['spListItem', function (spListItem) {

            var _siteUrl = _spPageContextInfo.siteAbsoluteUrl;
            var _listName = "OAA Types";
            var _viewFields =
                "<ViewFields>\
                    <FieldRef Name='ID' />\
                    <FieldRef Name='Title' />\
                    <FieldRef Name='Enumerated' />\
                    <FieldRef Name='AdditionalInformation' />\
                    <FieldRef Name='FieldsToHide' />\
                    <FieldRef Name='Color' />\
                    <FieldRef Name='OAATypeCategory' />\
                </ViewFields>";

            var _spServicesJsonMapping = {
                ows_ID: { mappedName: "Id", objectType: "Number" },
                ows_Title: { mappedName: "Title", objectType: "Text" },
                ows_Enumerated: { mappedName: "Enumerated", objectType: "Text" },
                ows_AdditionalInformation: { mappedName: "AdditionalInformation", objectType: "Text" },
                ows_FieldsToHide: { mappedName: "FieldsToHide", objectType: "Choice" },
                ows_Color: { mappedName: "Color", objectType: "Text" },
                ows_OAATypeCategory: { mappedName: "OAATypeCategory", objectType: "Lookup" }
            };

            var OAAType = function (item) {
                this.Id = item.Id;
                this.Title = item.Title;
                this.Enumerated = item.Enumerated;
                this.AdditionalInformation = item.AdditionalInformation;
                this.FieldsToHide = item.FieldsToHide;
                this.Color = item.Color;
                this.OAATypeCategory = item.OAATypeCategory;
            };

            OAAType.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return OAAType;

        }]);

})(angular);