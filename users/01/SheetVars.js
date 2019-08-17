var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
//var overViewSheet = spreadSheet.getSheetByName('overview');

var sheets = {
    overview: spreadSheet.getSheetByName('overview'),
    tag: spreadSheet.getSheetByName('tags'),
    trigger: spreadSheet.getSheetByName('triggers'),
    variable: spreadSheet.getSheetByName('variables'),
    folder: spreadSheet.getSheetByName('folders')
}

var gtm_url = sheets.overview.getRange('B2').getValue();
//var path = gtm_url.substring(gtm_url.indexOf('accounts/'), gtm_url.indexOf('?'));
var path = ''

if (gtm_url.indexOf('orgId') > -1) {
    path = gtm_url.substring(gtm_url.indexOf('accounts/'), gtm_url.indexOf('?'));
} else {
    path = gtm_url.substring(gtm_url.indexOf('accounts/'));
}


var workSpace = TagManager.Accounts.Containers.Workspaces.getStatus(path)
var wsChangesArr = workSpace.workspaceChange
var tagSheet = spreadSheet.getSheetByName('tags');
var triggerSheet = spreadSheet.getSheetByName('triggers');
var variableSheet = spreadSheet.getSheetByName('variables');
var folderSheet = spreadSheet.getSheetByName('folders');

var gtmResources = {
    tag: [],
    trigger: [],
    variable: []
}

var tagArr = []
var triggerArr = []
var variableArr = []
var tagNameArr = []
var triggerNameArr = []
var variableNameArr = []


/*
var gtmResource = function (wsChangesArr, resource, resourceArr) {
    if (wsChangesArr) {
        wsChangesArr.forEach(function (el) {
            if (el[resource]) {
                resourceArr.push(el[resource])
            }
        })
    } else {
        SpreadsheetApp.getUi().alert('No Changes in the workspace');
    }
    
}


var gtmResource = function (wsChangesArr, resourceObj) {
    if (wsChangesArr) {
        resource = ['tag', 'trigger', 'variable']
        wsChangesArr.forEach(function (el) {
            resource.forEach( function(res) {
                if (el[res]) {
                    resourceObj[res].push(el[res])
                }
            })
            
        })
    } else {
        SpreadsheetApp.getUi().alert('No Changes in the workspace');
    }
    
}*/

var gtmResource = function (wsChangesArr, resourceObj) {
    if (wsChangesArr) {
        resource = ['tag', 'trigger', 'variable']
        wsChangesArr.forEach(function (el) {
            resource.forEach( function(res) {
                if (el[res]) {
                    el[res]['changeStatus'] = el['changeStatus']
                    resourceObj[res].push(el[res])
                }
            })
            
        })
    } else {
        SpreadsheetApp.getUi().alert('No Changes in the workspace');
    }
    
}
