(function (angular) {

    'use strict';

    angular.module('oaa.data')
        .factory('Staffing', ['spListItem', function (spListItem) {

            var _siteUrl = _spPageContextInfo.siteAbsoluteUrl;
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
                ows_ID: { mappedName: "ID", objectType: "Number" },
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
                this.ID = item.ID;
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