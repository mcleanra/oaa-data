
(function () {
    'use strict';

  var app = angular.module('oaa.data', [
		'angular.sp.list'
	]);

  app.value('_', window._);
  app.value('moment', window.moment);
	
})();

(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('Country', ['spListItem', function (spListItem) {

            var _siteUrl = "/OAA";
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
(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('CountryContact', ['spListItem', function (spListItem) {

            var _siteUrl = "/OAA";
            var _listName = "CountryContacts";
            var _viewFields =
                "<ViewFields>\
                    <FieldRef Name='ID' />\
                    <FieldRef Name='Contact_x0020_Info' />\
                    <FieldRef Name='Country' />\
                    <FieldRef Name='End_x0020_Assignment' />\
                    <FieldRef Name='Title' />\
                    <FieldRef Name='Position' />\
                    <FieldRef Name='SOFLE_x002f_SOLO_x002f_SOFREP'/>\
                    <FieldRef Name='Start_x0020_Assignment' />\
                    <FieldRef Name='Unit' />\
                    <FieldRef Name='Username' />\
                    <FieldRef Name='KeyContact' />\
                </ViewFields>";

            var _spServicesJsonMapping = {
                ows_ID: { mappedName: "Id", objectType: "Number" },
                ows_Contact_x0020_Info: { mappedName: "Contact_x0020_Info", objectType: "Text" },
                ows_CountryId: { mappedName: "CountryId", objectType: "Lookup" },
                ows_End_x0020_Assigment: { mappedName: "End_x0020_Assignment", objectType: "DateTime" },
                ows_Title: { mappedName: "Title", objectType: "Text" },
                ows_Position: { mappedName: "Position", objectType: "Text" },
                ows_SOFLE_x002f_SOLO_x002f_SOFREP: { mappedName: "SOFLE_x002f_SOLO_x002f_SOFREP", objectType: "Text" },
                ows_Start_x0020_Assignment: { mappedName: "Start_x0020_Assignment", objectType: "DateTime" },
                ows_Unit: { mappedName: "Unit", objectType: "Text" },
                ows_Username: { mappedName: "Username", objectType: "User" },
                ows_KeyContact: { mappedName: "KeyContact", objectType: "Boolean" }

            };

            var CountryContact = function (item) {
                this.Id = item.Id;
                this.Contact_x0020_Info = item.Contact_x0020_Info;
                this.CountryId = item.CountryId;
                this.End_x0020_Assignment = item.End_x0020_Assignment;
                this.Title = item.Title;
                this.Position = item.Position;
                this.ows_SOFLE_x002f_SOLO_x002f_SOFREP = item.ows_SOFLE_x002f_SOLO_x002f_SOFREP;
                this.ows_Start_x0020_Assignment = item.ows_Start_x0020_Assignment;
                this.Unit = item.Unit;
                this.Username = item.Username;
                this.KeyContact = item.KeyContact;
            };

            CountryContact.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            //override this because we had to rename the list
            CountryContact.prototype.getListItemType = function(){
                return "SP.Data.SOFLE_x0020_SOLO_x0020_SOFREPListItem";
            };

            return CountryContact;

        }]);

})(angular);
(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('CountryTeamEvent', ['spListItem', 'moment', function (spListItem, moment) {

            var _siteUrl = "/OAA";
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
                    <FieldRef Name='Total_x0020_Cost' />\
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
                ows_Total_x0020_Cost: {mappedName: "Total_x0020_Cost", objectType: "Currency"},
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
                ows_ID: {mappedName: "Id", objectType: "Counter"},
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
                this.Travel_x0020_Cost = item.Travel_x0020_Cost;
                this.Total_x0020_Cost = item.Total_x0020_Cost;
                this.Funds = item.Funds;
                this.Concept_x002f_Comments = item.Concept_x002f_Comments;
                this.US_x0020_Unit = item.US_x0020_Unit;
            };

            Event.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return Event;

        }]);

})(angular);
(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('Message', ['spListItem', function (spListItem) {

            var _siteUrl = "/OAA";
            var _listName = "Messages";
            var _viewFields =
                "<ViewFields>\
                    <FieldRef Name='ID' />\
                    <FieldRef Name='Title' />\
                    <FieldRef Name='To' />\
                    <FieldRef Name='From' />\
                    <FieldRef Name='Text' />\
                    <FieldRef Name='Options' />\
                    <FieldRef Name='RelatedItemID' />\
                    <FieldRef Name='Author' />\
                    <FieldRef Name='Created' />\
                    <FieldRef Name='MessageType' />\
                </ViewFields>";

            var _spServicesJsonMapping = {
                ows_ID: { mappedName: "Id", objectType: "Number" },
                ows_Title: { mappedName: "Title", objectType: "Text" },
                ows_To: { mappedName: "To", objectType: "Text" },
                ows_From: { mappedName: "From", objectType: "Text" },
                ows_Text: { mappedName: "Text", objectType: "Text" },
                ows_Options: { mappedName: "Options", objectType: "Text" },
                ows_RelatedItemID: { mappedName: "RelatedItemID", objectType: "Number" },
                ows_Author: { mappedName: "Author", objectType: "User" },
                ows_Created: { mappedName: "Created", objectType: "DateTime" },
                ows_MessageType: { mappedName: "MessageType", objectType: "Lookup" }
            };

            var Message = function (item) {
                this.Id = item.Id;
                this.Title = item.Title;
                this.To = item.To;
                this.From = item.From;
                this.Text = item.Text;
                this.Options = item.Options;
                this.RelatedItemID = item.RelatedItemID;
                this.Author = item.Author;
                this.Created = item.Created;
                this.MessageType = item.MessageType;
            };

            Message.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return Message;

        }]);

})(angular);
(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('MissionProduct', ['spListItem', function (spListItem) {

            var _siteUrl = "/OAA";
            var _listName = "Mission Products";
            var _viewFields =
                "<ViewFields>\
                    <FieldRef Name='Classification' />\
                    <FieldRef Name='Caveats' />\
                    <FieldRef Name='Created' />\
                    <FieldRef Name='ID' />\
                    <FieldRef Name='Title' />\
                    <FieldRef Name='Modified' />\
                    <FieldRef Name='Author' />\
                    <FieldRef Name='Editor' />\
                    <FieldRef Name='SpecialReleasability' />\
                    <FieldRef Name='ReleasabilityNotes' />\
                    <FieldRef Name='US_x0020_Unit' />\
                    <FieldRef Name='Country' />\
                    <FieldRef Name='Document_x0020_Type' />\
                    <FieldRef Name='Draft_x002f_Final' />\
                    <FieldRef Name='Expiration_x0020_Date00' />\
                    <FieldRef Name='Reporting_x0020_Date' />\
                    <FieldRef Name='Show_x0020_on_x0020_Country_x0020_Page' />\
                    <FieldRef Name='FileLeafRef' />\
                    <FieldRef Name='KeyDocument' />\
                    <FieldRef Name='SOFLE_x002f_SOLO_x002f_SOFREP' />\
                    <FieldRef Name='GeoTags' />\
                </ViewFields>";

            var _spServicesJsonMapping = {

                ows_US_x0020_Unit: {mappedName: "US_x0020_Unit", objectType: "MultiChoice"},
                ows_Country: {mappedName: "Country", objectType: "Lookup"},
                ows_Document_x0020_Type: {mappedName: "Document_x0020_Type", objectType: "Choice"},
                ows_Draft_x002f_Final: {mappedName: "Draft_x002f_Final", objectType: "Choice"},
                ows_Expiration_x0020_Date00: {mappedName: "Expiration_x0020_Date00", objectType: "DateTime"},
                ows_Reporting_x0020_Date: {mappedName: "Reporting_x0020_Date", objectType: "DateTime"},
                ows_Show_x0020_on_x0020_Country_x0020_Page: {mappedName: "Show_x0020_on_x0020_Country_x0020_Page", objectType: "Choice"},
                ows_FileLeafRef: {mappedName: "FileLeafRef", objectType: "Text"},
                ows_KeyDocument: {mappedName: "KeyDocument", objectType: "Boolean"},

                //Fields common to all lists		
                ows_ID: {mappedName: "Id", objectType: "Number"},
                ows_Title: {mappedName: "Title", objectType: "Text"},
                ows_Created: {mappedName: "Created", objectType: "DateTime"},
                ows_Modified: {mappedName: "Modified", objectType: "DateTime"},
                ows_Author: {mappedName: "Author", objectType: "User"},
                ows_Editor: {mappedName: "Editor", objectType: "User"},
                ows_Classification: {mappedName: "Classification", objectType: "Text"},		
                ows_Caveats: {mappedName: "Caveats", objectType: "Text"},		
                ows_ReleasabilityNotes: {mappedName: "ReleasabilityNotes", objectType: "Text"},		
                ows_SpecialReleasability: {mappedName: "SpecialReleasability", objectType: "Text"},
                ows_SOFLE_x002f_SOLO_x002f_SOFREP: {mappedName: "SOFLE_x002f_SOLO_x002f_SOFREP", objectType: "Lookup"},
                ows_GeoTags: {mappedName: "GeoTags", objectType: "Text"}
            };

            var MissionProduct = function (item) {
                this.US_x0020_Unit= item.US_x0020_Unit;
                this.Country=item.Country;
                this.Document_x0020_Type= item.Document_x0020_Type;
                this.Draft_x002f_Final=item.Draft_x002f_Final;
                this.Expiration_x0020_Date00= item.Expiration_x0020_Date00;
                this.Reporting_x0020_Date=item.Reporting_x0020_Date;
                this.Show_x0020_on_x0020_Country_x0020_Page=item.Show_x0020_on_x0020_Country_x0020_Page;
                this.FileLeafRef = item.FileLeafRef;

                //Fields common to all lists		
                this.Id = item.Id;
                this.Title = item.Title;
                this.Created =item.Created;
                this.Modified = item.Modified;
                this.Author =  item.Author;
                this.Editor = item.Editor;
                this.Classification = item.Classification;
                this.Caveats = 	 item.Caveats;
                this.ReleasabilityNotes = item.ReleasabilityNotes;
                this.SpecialReleasability =  item.SpecialReleasability;
                this.KeyDocument = item.KeyDocument;
                this.SOFLE_x002f_SOLO_x002f_SOFREP = item.SOFLE_x002f_SOLO_x002f_SOFREP;
                this.GeoTags = item.GeoTags;
            };

            MissionProduct.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            //special override for this because its different for document libraries
            MissionProduct.prototype.getListItemType = function(){
                return "SP.Data.Mission_x0020_ProductsItem";
            };

            return MissionProduct;

        }]);

})(angular);
(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('OAA', ['spListItem', 'moment', function (spListItem, moment) {

            var _siteUrl = "/OAA";
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
                    <FieldRef Name='Event_x0020_ID' />\
                    <FieldRef Name='US_x0020_Unit' />\
                    <FieldRef Name='US_x0020_Pax' />\
                    <FieldRef Name='Concept_x002f_Comments' />\
                    <FieldRef Name='Event_x003a_Priority' />\
                    <FieldRef Name='Event_x003a_OAA_x0020_Type' />\
                    <FieldRef Name='Status' />\
                </ViewFields>";

            var _spServicesJsonMapping = {
                ows_ID: { mappedName: "Id", objectType: "Number" },
                ows_Title: { mappedName: "Title", objectType: "Text" },
                ows_LAT: { mappedName: "LAT", objectType: "Number" },
                ows_LONG: { mappedName: "LONG", objectType: "Number" },
                ows_EventID: { mappedName: "EventID", objectType: "Text" },
                ows_Start_x0020_Date: { mappedName: "Start_x0020_Date", objectType: "DateTime" },
                ows_End_x0020_Date: { mappedName: "End_x0020_Date", objectType: "DateTime" },
                ows_Event_x0020_ID: { mappedName: "Event_x0020_ID", objectType: "Lookup" },
                ows_US_x0020_Unit: { mappedName: "US_x0020_Unit", objectType: "MultiChoice" },
                ows_US_x0020_Pax: { mappedName: "US_x0020_Pax", objectType: "Number" },
                ows_Concept_x002f_Comments: { mappedName: "Concept_x002f_Comments", objectType: "Text" },
                ows_Event_x003a_Priority: { mappedName: "Event_x003a_Priority", objectType: "Text" },
                ows_Event_x003a_OAA_x0020_Type: { mappedName: "Event_x003a_OAA_x0020_Type", objectType: "Text" },
                ows_Status: { mappedName: "Status", objectType: "Text" }

            };

            var OAA = function (item) {
                this.Id = item.Id;
                this.Title = item.Title;
                this.LAT = item.LAT;
                this.LONG = item.LONG;
                this.EventID = item.EventID;
                this.Start_x0020_Date = moment(item.Start_x0020_Date).toISOString();
                this.End_x0020_Date = moment(item.End_x0020_Date).toISOString();
                this.Event_x0020_ID = item.Event_x0020_ID;
                this.US_x0020_Unit = item.US_x0020_Unit;
                this.US_x0020_Pax = item.US_x0020_Pax;
                this.Concept_x002f_Comments = item.Concept_x002f_Comments;
                this.Event_x003a_Priority = item.Event_x003a_Priority;
                this.Event_x003a_OAA_x0020_Type = item.Event_x003a_OAA_x0020_Type;
                this.Status = item.Status;
            };

            OAA.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return OAA;

        }]);

})(angular);
(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('OAAType', ['spListItem', function (spListItem) {

            var _siteUrl = "/OAA";
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
(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('OAATypeCategory', ['spListItem', function (spListItem) {

            var _siteUrl = "/OAA";
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
(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('Priority', ['spListItem', function (spListItem) {

            var _siteUrl = "/OAA";
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
(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('Staffing', ['spListItem', function (spListItem) {

            var _siteUrl = "/OAA";
            var _listName = "Staffing";
            var _viewFields =
                "<ViewFields>\
                    <FieldRef Name='ID' />\
					<FieldRef Name='Reviewer' />\
					<FieldRef Name='productname' />\
					<FieldRef Name='productdesc' />\
					<FieldRef Name='mpid' />\
					<FieldRef Name='oaaid' />\
					<FieldRef Name='eventid' />\
					<FieldRef Name='oaatype' />\
					<FieldRef Name='oaastart' />\
					<FieldRef Name='oaaend' />\
					<FieldRef Name='units' />\
					<FieldRef Name='countries' />\
					<FieldRef Name='Status' />\
					<FieldRef Name='Title' />\
					<FieldRef Name='productcreator' />\
					<FieldRef Name='producttype' />\
					<FieldRef Name='countryteam' />\
					<FieldRef Name='approvalauthoritylevel' />\
					<FieldRef Name='mpkey' />\
					<FieldRef Name='staffingphase' />\
					<FieldRef Name='movementtype' />\
					<FieldRef Name='commsrequirement' />\
					<FieldRef Name='staffingProcessJSON' />\
					<FieldRef Name='selectedAoStaffers' />\
					<FieldRef Name='dwgDate' />\
					<FieldRef Name='notifiedAoStaffers' />\
					<FieldRef Name='Test' />\
					<FieldRef Name='AOR' />\
					<FieldRef Name='Priority' />\
					<FieldRef Name='notifiedCanxDisapprv' />\
					<FieldRef Name='StaffingUpdate' />\
					<FieldRef Name='ConopLevel' />\
				</ViewFields>";

            var _spServicesJsonMapping = {
                ows_ID: { mappedName: "Id", objectType: "Number" },
                ows_Title: { mappedName: "Title", objectType: "Text" },
                ows_Reviewer: {mappedName: "Reviewer", objectType: "Choice"},
                ows_productname: {mappedName: "productname", objectType: "Text"},
                ows_productdesc: {mappedName: "productdesc", objectType: "Text"},
                ows_mpid: {mappedName: "mpid", objectType: "Number"},
                ows_oaaid: {mappedName: "oaaid", objectType: "Number"},
                ows_eventid: {mappedName: "eventid", objectType: "Number"},
                ows_oaastart: {mappedName: "oaastart", objectType: "DateTime"},
                ows_oaaend: {mappedName: "oaaend", objectType: "DateTime"},
                ows_units: {mappedName: "units", objectType: "Text"},
                ows_countries: {mappedName: "countries", objectType: "Text"},
                ows_Status: {mappedName: "Status", objectType: "Text"},
                ows_productcreator: {mappedName: "productcreator", objectType: "Text"},
                ows_producttype: {mappedName: "producttype", objectType: "Text"},
                ows_countryteam: {mappedName: "countryteam", objectType: "Text"},
                ows_approvalauthoritylevel: {mappedName: "approvalauthoritylevel", objectType: "Text"},
                ows_mpkey: {mappedName: "mpkey", objectType: "Text"},
                ows_staffingphase: {mappedName: "staffingphase", objectType: "Text"},
                ows_movementtype: {mappedName: "movementtype", objectType: "Text"},
                ows_commsrequirement: {mappedName: "commsrequirement", objectType: "Text"},
                ows_staffingProcessJSON: {mappedName: "staffingProcessJSON", objectType: "Text"},
                ows_selectedAoStaffers: {mappedName: "selectedAoStaffers", objectType: "Text"},
                ows_dwgDate: {mappedName: "dwgDate", objectType: "DateTime"},
                ows_notifiedAoStaffers: {mappedName: "notifiedAoStaffers", objectType: "Text"},
                ows_Test: {mappedName: "Test", objectType: "Text"},
                ows_AOR: {mappedName: "AOR", objectType: "Text"},
                ows_Priority: {mappedName: "Priority", objectType: "Text"},
                ows_notifiedCanxDisapprv: {mappedName: "notifiedCanxDisapprv", objectType: "Text"},
                ows_StaffingUpdate: {mappedName: "StaffingUpdate", objectType: "Text"},
                ows_ConopLevel: {mappedName: "ConopLevel", objectType: "Lookup"}
            };

            var Staffing = function (item) {
                this.Id = item.Id;
                this.Title = item.Title;
                this.Reviewer = item.Reviewer;
                this.productname = item.productname;
                this.productdesc = item.productdesc;
                this.mpid = item.mpid;
                this.oaaid = item.oaaid;
                this.eventid = item.eventid;
                this.oaastart = item.oaastart;
                this.oaaend = item.oaaend;
                this.units = item.units;
                this.countries = item.countries;
                this.Status = item.Status;
                this.productcreator = item.productcreator;
                this.producttype = item.producttype;
                this.countryteam = item.countryteam;
                this.approvalauthoritylevel = item.approvalauthoritylevel;
                this.mpkey = item.mpkey;
                this.staffingphase = item.staffingphase;
                this.movementtype = item.movementtype;
                this.commsrequirement = item.commsrequirement;
                this.staffingProcessJSON = item.staffingProcessJSON;
                this.selectedAoStaffers = item.selectedAoStaffers;
                this.dwgDate = item.dwgDate;
                this.notifiedAoStaffers = item.notifiedAoStaffers;
                this.Test = item.Test;
                this.AOR = item.AOR;
                this.Priority = item.Priority;
                this.notifiedCanxDisapprv = item.notifiedCanxDisapprv;
                this.StaffingUpdate = item.StaffingUpdate;
                this.ConopLevel = item.ConopLevel;
            };

            Staffing.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return Staffing;

        }]);

})(angular);
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
(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("countryContactsService", ['CountryContact', 'spListService',
		function (CountryContact, spListService) {

			var svc = new spListService(CountryContact);

			return svc;

		}]);

})(angular);
(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("countryService", ['Country', 'spListService', function (Country, spListService) {

		var svc = new spListService(Country);
		
		svc.getCountryItemsByRegion = function (region, options) {
			return svc.get(options)
				.then(function(countries){
					if( region == 'SOCEUR' ) {
						//return array of country names where Region is not blank
						countries = _.difference(countries, _.where(countries, {Region: ''}));
					}
					else {
						//return array of country names where Region matches
						countries = _.where(countries, {Region: region});
					}
					return countries;
				});
		};

		return svc;

	}]);

})(angular);
(function (angular) {

	'use strict';

	angular.module('oaa.data')
		.factory("countryTeamEventService", ['CountryTeamEvent', 'spListService', "_",
			function (CountryTeamEvent, spListService, _) {

				var svc = new spListService(CountryTeamEvent);

				return svc;

			}]);

})(angular);
(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("eventService", ['Event', 'spListService', '_', 'moment',
		function (Event, spListService, _, moment) {

			var svc = new spListService(Event);

			//returns a rest $filter string given a start and end date
			svc.getDateFilter = function (start, end) {
				var start = moment(start).startOf('day').toISOString();
				var end = moment(end).endOf('day').toISOString();

				var filter = ''

				//starts or ends in the search window
				var dateFilter1 = "(((Start_x0020_Date ge datetime'" + start + "') and (Start_x0020_Date le datetime'" + end + "')) or \
								((End_x0020_Date ge datetime'" + start + "') and (End_x0020_Date le datetime'" + end + "')))";

				//starts before window and ends after window
				var dateFilter2 = "((Start_x0020_Date le datetime'" + start + "') and (End_x0020_Date ge datetime'" + end + "'))";
				filter = "(" + dateFilter1 + " or " + dateFilter2 + ")";

				return filter;
			};

			//returns a rest $filter string given an array of countries
			svc.getCountryFilter = function (countries, operator) {
				var filters = [];
				var operator = operator || 'or';

				if (countries.length > 0) {
					_.each(countries, function (country) {
						filters.push("substringof('" + country + "',Primary_x0020_Country_x003a_Titl)");
					});
				}

				return "(" + filters.join(' ' + operator + ' ') + ")";
			};

			svc.getCurrentEventsForCountry = function (country, options) {
				var filters = [];

				filters.push("Status eq 'Approved'");
				filters.push(svc.getDateFilter(moment(), moment()));
				filters.push(svc.getCountryFilter([country], 'or'));

				var filter = filters.join(' and ');

				return svc.getByFilters(filter, options);
			}

			return svc;

		}]);

})(angular);
(function (angular) {

	'use strict';

	angular.module('oaa.data')
		.factory("messageService", ['Message', 'spListService', function (Message, spListService) {

		var svc = new spListService(Message);

		svc.getByArrayOfRelatedItemIDs = function(idArray){
			var valueArray = [];
			
			_.each(idArray, function(id){
				valueArray.push("<Value Type='Text'>" + id + "</Value>")
			});
			
			var query = "<Query><Where><In><FieldRef Name='RelatedItemID'/><Values>" + valueArray.join('') + "</Values></In></Where></Query>";
			return svc.executeCamlQuery(query);
		};

		return svc;

	}]);

})(angular);
(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("missionProductsService", ['MissionProduct', 'spListService', function (MissionProduct, spListService) {

		var svc = new spListService(MissionProduct);

		return svc;

	}]);

})(angular);
(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("oaaService", ['OAA', 'spListService', '_', 'moment',
		function (OAA, spListService, _, moment) {

			var svc = new spListService(OAA);

			//returns a rest $filter string given a start and end date
			svc.getDateFilter = function (start, end) {
				var start = moment(start).startOf('day').toISOString();
				var end = moment(end).endOf('day').toISOString();

				var filter = ''

				//starts or ends in the search window
				var dateFilter1 = "(((Start_x0020_Date ge datetime'" + start + "') and (Start_x0020_Date le datetime'" + end + "')) or \
								((End_x0020_Date ge datetime'" + start + "') and (End_x0020_Date le datetime'" + end + "')))";

				//starts before window and ends after window
				var dateFilter2 = "((Start_x0020_Date le datetime'" + start + "') and (End_x0020_Date ge datetime'" + end + "'))";
				filter = "(" + dateFilter1 + " or " + dateFilter2 + ")";

				return filter;
			};

			//returns a rest $filter string given an array of countries
			svc.getCountryFilter = function (countries, operator) {
				var filters = [];
				var operator = operator || 'or';

				if (countries.length > 0) {
					_.each(countries, function (country) {
						filters.push("substringof('" + country + "',Countries)");
					});
				}

				return "(" + filters.join(' ' + operator + ' ') + ")";
			};

			svc.getCurrentOaasForCountry = function (country, options) {
				var filters = [];

				filters.push("Status eq 'Approved'");
				filters.push(svc.getDateFilter(moment(), moment()));
				filters.push(svc.getCountryFilter([country], 'or'));

				var filter = filters.join(' and ');
				return svc.getByFilters(filter, options);
			}

			return svc;

		}]);

})(angular);
(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("oaaTypeCategoryService", ['OAATypeCategory', 'spListService', "_", function (OAATypeCategory, spListService, _) {

		var svc = new spListService(OAATypeCategory);

		return svc;

	}]);

})(angular);
(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("oaaTypesService", ['OAAType', 'spListService', "_", function (OAAType, spListService, _) {

		var svc = new spListService(OAAType);

		return svc;

	}]);

})(angular);
(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("prioritiesService", ['Priority', 'spListService', function (Priority, spListService) {

		var svc = new spListService(Priority);

		return svc;

	}]);

})(angular);
(function (angular) {

	'use strict';

	angular.module('oaa.data')
		.factory("staffingService", ['Staffing', 'spListService', function (Staffing, spListService) {

		var svc = new spListService(Staffing);

		//returns a rest $filter string given an array of countries
		svc.getCountryFilter = function(countries, operator){
			var filters = [];
			var operator = operator || 'or';

			if( countries.length > 0 ) {
				_.each(countries, function(country){
					filters.push("substringof('" + country + "',countries)");
				});
			}

			return "(" + filters.join(' ' + operator + ' ') + ")";
		};

		svc.getCurrentStaffingItemsForCountry = function(country, options) {
			var filters = [];

			filters.push("Status eq 'Staffing'");
			filters.push(svc.getCountryFilter([country], 'or'));

			var filter = filters.join(' and ');
			return svc.getByFilters(filter, options);
		};

		return svc;

	}]);

})(angular);
(function (angular) {

	'use strict';

	angular.module('oaa.data').factory("unitService", ['Unit', 'spListService', function (Unit, spListService) {

		var svc = new spListService(Unit);

		return svc;

	}]);

})(angular);