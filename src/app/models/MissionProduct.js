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
                this.ID=item.ID;
                this.Title=item.Title;
                this.Created=item.Created;
                this.Modified= item.Modified;
                this.Author=  item.Author;
                this.Editor= item.Editor;
                this.Classification=item.Classification;
                this.Caveats= 	 item.Caveats;
                this.ReleasabilityNotes= item.ReleasabilityNotes;
                this.SpecialReleasability=  item.SpecialReleasability;

            };

            MissionProduct.prototype = new spListItem(_siteUrl, _listName, _viewFields, _spServicesJsonMapping);

            return MissionProduct;

        }]);

})(angular);