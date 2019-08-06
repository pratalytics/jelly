var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
var overViewSheet = spreadSheet.getSheetByName('overview');
var gtm_url = overViewSheet.getRange('B2').getValue();
//var path = gtm_url.substring(gtm_url.indexOf('accounts/'), gtm_url.indexOf('?'));
var path = ''

if (gtm_url.indexOf('orgId') > -1) {
    path = gtm_url.substring(gtm_url.indexOf('accounts/'), gtm_url.indexOf('?'));
} else {
    path = gtm_url.substring(gtm_url.indexOf('accounts/'));
}


var tagSheet = spreadSheet.getSheetByName('tags');
var triggerSheet = spreadSheet.getSheetByName('triggers');
var variabaleSheet = spreadSheet.getSheetByName('variables');
var folderSheet = spreadSheet.getSheetByName('folders');


var tagArr = []
var tagNameArr = []
var triggerNameArr = []
var variableNameArr = []


var gtmResource = function (wsChangesArr, resource, resourceArr) {
    wsChangesArr.forEach(function (el) {
        if (el[resource]) {
            resourceArr.push(el[resource])
        }
    })
}
