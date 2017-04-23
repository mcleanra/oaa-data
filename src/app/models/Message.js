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