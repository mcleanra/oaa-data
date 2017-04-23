(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('Event', ['spListItem', function (spListItem) {

            var _siteUrl = "/OAA";
            var _listName = "Event";
            var _viewFields =
                "<ViewFields>\
                    <FieldRef Name='_x0031_10Internal' />\
                    <FieldRef Name='Actual_x0020_Cost' />\
                    <FieldRef Name='Branches' />\
                    <FieldRef Name='Classification' />\
                    <FieldRef Name='Caveats' />\
                    <FieldRef Name='Concept_x002f_Comments' />\
                    <FieldRef Name='Country_x003a_Title' />\
                    <FieldRef Name='Country_x003a_Region' />\
                    <FieldRef Name='Primary_x0020_Country_x003a_Titl' />\
                    <FieldRef Name='Changes' />\
                    <FieldRef Name='Created' />\
                    <FieldRef Name='DTS_x0020_Label' />\
                    <FieldRef Name='US_x0020_Unit' />\
                    <FieldRef Name='Start_x0020_Date' />\
                    <FieldRef Name='End_x0020_Date' />\
                    <FieldRef Name='Event_x0020_Cost' />\
                    <FieldRef Name='FTN' />\
                    <FieldRef Name='Funds' />\
                    <FieldRef Name='Funds_x0020_Allocated' />\
                    <FieldRef Name='J8_x0020_Follow_x002d_Up' />\
                    <FieldRef Name='Travel_x0020_Cost' />\
                    <FieldRef Name='Movement_x0020_Type' />\
                    <FieldRef Name='Effect' />\
                    <FieldRef Name='Service_x0020_Identifier' />\
                    <FieldRef Name='Status' />\
                    <FieldRef Name='Type1' />\
                    <FieldRef Name='Line_x0020_Of_x0020_Effort' />\
                    <FieldRef Name='WBS' />\
                    <FieldRef Name='ID' />\
                    <FieldRef Name='Title' />\
                    <FieldRef Name='Modified' />\
                    <FieldRef Name='Author' />\
                    <FieldRef Name='Editor' />\
                    <FieldRef Name='SpecialReleasability' />\
                    <FieldRef Name='ReleasabilityNotes' />\
                    <FieldRef Name='MovementDetails' />\
                    <FieldRef Name='OPR' />\
                    <FieldRef Name='Priority' />\
                    <FieldRef Name='Objective' />\
                    <FieldRef Name='DesiredStates' />\
                </ViewFields>";

            var _spServicesJsonMapping = {
                ows_Primary_x0020_Country_x003a_Titl: {mappedName: "Primary_x0020_Country_x003a_Titl", objectType: "Lookup"},
                ows_Country_x003a_Title: {mappedName: "Country_x003a_Title", objectType: "LookupMulti"},
                ows_Country_x003a_Region: {mappedName: "Country_x003a_Region", objectType: "LookupMulti"},
                ows_Start_x0020_Date: {mappedName: "Start_x0020_Date", objectType: "DateTime"},
                ows_End_x0020_Date: {mappedName: "End_x0020_Date", objectType: "DateTime"},
                ows_J8_x0020_Follow_x002d_Up: {mappedName: "J8_x0020_Follow_x002d_Up", objectType: "Boolean"},
                ows_Type1: {mappedName: "Type1", objectType: "Choice"},
                ows_Line_x0020_Of_x0020_Effort: {mappedName: "Line_x0020_Of_x0020_Effort", objectType: "MultiChoice"},
                ows_Branches: {mappedName: "Branches", objectType: "MultiChoice"},
                ows_Movement_x0020_Type: {mappedName: "Movement_x0020_Type", objectType: "MultiChoice"},
                ows_Status: {mappedName: "Status", objectType: "Choice"},
                ows_Actual_x0020_Cost: {mappedName: "Actual_x0020_Cost", objectType: "Currency"},
                ows_Event_x0020_Cost: {mappedName: "Event_x0020_Cost", objectType: "Currency"},
                ows_Funds_x0020_Allocated: {mappedName: "Funds_x0020_Allocated", objectType: "Currency"},
                ows_Travel_x0020_Cost: {mappedName: "Travel_x0020_Cost", objectType: "Currency"},
                ows_US_x0020_Unit: {mappedName: "usUnows_US_x0020_Unitits", objectType: "MultiChoice"},
                ows_Funds: {mappedName: "Funds", objectType: "MultiChoice"},
                ows_Service_x0020_Identifier: {mappedName: "Service_x0020_Identifier", objectType: "MultiChoice"},
                ows_Effect: {mappedName: "Effect", objectType: "MultiChoice"},
                ows_WBS: {mappedName: "WBS", objectType: "Text"},
                ows_DTS_x0020_Label: {mappedName: "DTS_x0020_Label", objectType: "Text"},
                ows_Changes: {mappedName: "Changes", objectType: "Text"},
                ows_FTN: {mappedName: "FTN", objectType: "Text"},
                ows_Concept_x002f_Comments: {mappedName: "Concept_x002f_Comments", objectType: "Text"},
                ows__x0031_10Internal: {mappedName: "_x0031_10Internal", objectType: "Text"},
                ows_MovementDetails: {mappedName: "MovementDetails", objectType: "Text"},

                //Fields common to all lists		
                ows_ID: {mappedName: "ID", objectType: "Counter"},
                ows_Title: {mappedName: "Title", objectType: "Text"},
                ows_Created: {mappedName: "Created", objectType: "DateTime"},
                ows_Modified: {mappedName: "Modified", objectType: "DateTime"},
                ows_Author: {mappedName: "Author", objectType: "User"},
                ows_Editor: {mappedName: "Editor", objectType: "User"},
                ows_Classification: {mappedName: "Classification", objectType: "Text"},		
                ows_Caveats: {mappedName: "Caveats", objectType: "Text"},		
                ows_ReleasabilityNotes: {mappedName: "ReleasabilityNotes", objectType: "Text"},		
                ows_SpecialReleasability: {mappedName: "SpecialReleasability", objectType: "Text"},
                ows_OPR: {mappedName: "OPR", objectType: "Text"},
                ows_Priority: {mappedName: "Priority", objectType: "MultiChoice"},
                ows_Objective: {mappedName: "Objective", objectType: "Text"},
                ows_DesiredStates: {mappedName: "DesiredStates", objectType: "Text"}
            };

            var Event = function (item) {
                this.Id = item.Id;
                this.Title = item.Title;
                this.Primary_x0020_Country_x003a_Titl = item.Primary_x0020_Country_x003a_Titl;
                this.Start_x0020_Date = item.Start_x0020_Date;
                this.End_x0020_Date = item.End_x0020_Date;
                this.Type1 = item.Type1;
                this.Priority = item.Priority;
                this.Event_x0020_Cost = item.Event_x0020_Cost;
                this.Funds = item.Funds;
                this.Concept_x002f_Comments = item.Concept_x002f_Comments;
                this.US_x0020_Unit = item.US_x0020_Unit;
            };

            Event.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return Event;

        }]);

})(angular);