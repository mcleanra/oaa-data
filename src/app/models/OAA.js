(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('OAA', ['spListItem', function (spListItem) {

            var _siteUrl = _spPageContextInfo.siteAbsoluteUrl;
            var _listName = "OAA";
            var _viewFields =
                "<ViewFields>\
                    <FieldRef Name='ID' />\
                    <FieldRef Name='Title' />\
                    <FieldRef Name='LAT' />\
                    <FieldRef Name='LONG' />\
                    <FieldRef Name='EventID' />\
                    <FieldRef Name='Start_x0020_Date' />\
                    <FieldRef Name='End_x0020_Date' />\
                    <FieldRef Name='Event_x0020_IDId' />\
                    <FieldRef Name='US_x0020_Unit' />\
                    <FieldRef Name='US_x0020_Pax' />\
                    <FieldRef Name='Concept_x002f_Comments' />\
                    <FieldRef Name='Event_x003a_Priority' />\
                    <FieldRef Name='Event_x003a_OAA_x0020_Type' />\
                </ViewFields>";

            var _spServicesJsonMapping = {
                ows_ID: { mappedName: "Id", objectType: "Number" },
                ows_Title: { mappedName: "Title", objectType: "Text" },
                ows_LAT: { mappedName: "LAT", objectType: "Number" },
                ows_LONG: { mappedName: "LONG", objectType: "Number" },
                ows_EventID: { mappedName: "EventID", objectType: "Text" },
                ows_Start_x0020_Date: { mappedName: "Start_x0020_Date", objectType: "DateTime" },
                ows_End_x0020_Date: { mappedName: "End_x0020_Date", objectType: "DateTime" },
                ows_Event_x0020_IDId: { mappedName: "Event_x0020_IDId", objectType: "Lookup" },
                ows_US_x0020_Unit: { mappedName: "US_x0020_Unit", objectType: "MultiChoice" },
                ows_US_x0020_Pax: { mappedName: "US_x0020_Pax", objectType: "Number" },
                ows_Concept_x002f_Comments: { mappedName: "Concept_x002f_Comments", objectType: "Text" },
                ows_Event_x003a_Priority: { mappedName: "Event_x003a_Priority", objectType: "Text" },
                ows_Event_x003a_OAA_x0020_Type: { mappedName: "Event_x003a_OAA_x0020_Type", objectType: "Text" }

            };

            var OAA = function (item) {
                this.Id = item.Id;
                this.Title = item.Title;
                this.LAT = item.LAT;
                this.LONG = item.LONG;
                this.EventID = item.EventID;
                this.Start_x0020_Date = moment(item.Start_x0020_Date).toISOString();
                this.End_x0020_Date = moment(item.End_x0020_Date).toISOString();
                this.Event_x0020_IDId = item.Event_x0020_IDId;
                this.US_x0020_Unit = item.US_x0020_Unit;
                this.US_x0020_Pax = item.US_x0020_Pax;
                this.Concept_x002f_Comments = item.Concept_x002f_Comments;
                this.Event_x003a_Priority = item.Event_x003a_Priority;
                this.Event_x003a_OAA_x0020_Type = item.Event_x003a_OAA_x0020_Type;
            };

            OAA.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return OAA;

        }]);

})(angular);