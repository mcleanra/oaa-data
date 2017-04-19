(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('CountryContact', ['spListItem', function (spListItem) {

            var _siteUrl = _spPageContextInfo.siteAbsoluteUrl;
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