(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('CountryTeamEvent', ['spListItem', function (spListItem) {

            var _siteUrl = _spPageContextInfo.siteAbsoluteUrl;
            var _listName = "CountryTeamEvents";
            var _viewFields =
                "<ViewFields>\
                    <FieldRef Name='ID' />\
                    <FieldRef Name='Title' />\
                    <FieldRef Name='ParticipantsPicker' />\
                    <FieldRef Name='Country' />\
                    <FieldRef Name='Created' />\
                    <FieldRef Name='Description' />\
                    <FieldRef Name='EndDate' />\
                    <FieldRef Name='Location' />\
                    <FieldRef Name='Modified' />\
                    <FieldRef Name='EventDate' />\
                    <FieldRef Name='Author' />\
                    <FieldRef Name='Editor' />\
                </ViewFields>";

            var _spServicesJsonMapping = {
                ows_ID: { mappedName: "Id", objectType: "Number" },
                ows_Title: { mappedName: "Title", objectType: "Text" },
                ows_ParticipantsPicker: { mappedName: "ParticipantsPicker", objectType: "User" },
                ows_CountryId: { mappedName: "CountryId", objectType: "Lookup" },
                ows_Created: { mappedName: "Created", objectType: "DateTime" },
                ows_Description: { mappedName: "Description", objectType: "Text" },
                ows_EndDate: { mappedName: "EndDate", objectType: "DateTime" },
                ows_Location: { mappedName: "Location", objectType: "Text" },
                ows_Modified: { mappedName: "Modified", objectType: "DateTime" },
                ows_EventDate: { mappedName: "EventDate", objectType: "DateTime" },
                ows_Author: { mappedName: "Author", objectType: "User" },
                ows_Editor: { mappedName: "Editor", objectType: "User" }
            };

            var CountryTeamEvent = function (item) {
                this.Id = item.Id;
                this.Title = item.Title;
                this.ParticipantsPicker = item.ParticipantsPicker;
                this.CountryId = item.CountryId;
                this.Created = item.Created;
                this.Description = item.Description;
                this.EndDate = moment(item.EndDate).toISOString();
                this.Location = item.Location;
                this.Modified = item.Modified;
                this.EventDate = moment(item.EventDate).toISOString();
                this.Author = item.Author;
                this.Editor = item.Editor;
            };

            CountryTeamEvent.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return CountryTeamEvent;

        }]);

})(angular);