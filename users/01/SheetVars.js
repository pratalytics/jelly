var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();

var sheets = {
    overview: spreadSheet.getSheetByName('overview'),
    tag: spreadSheet.getSheetByName('tags'),
    trigger: spreadSheet.getSheetByName('triggers'),
    variable: spreadSheet.getSheetByName('variables'),
    folder: spreadSheet.getSheetByName('folders'),
  events: spreadSheet.getSheetByName('events')
}

var gtm_url = sheets.overview.getRange('B2').getValue();
var path = ''

if (gtm_url.indexOf('orgId') > -1) {
    path = gtm_url.substring(gtm_url.indexOf('accounts/'), gtm_url.indexOf('?'));
} else {
    path = gtm_url.substring(gtm_url.indexOf('accounts/'));
}


var workSpace = TagManager.Accounts.Containers.Workspaces.getStatus(path)
var wsChangesArr = workSpace.workspaceChange


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



var gtmResource = function (wsChangesArr, resourceObj) {
    if (wsChangesArr) {
        resource = ['tag', 'trigger', 'variable']
        wsChangesArr.forEach(function (el) {
            resource.forEach( function(res) {
                if (el[res]) {
                    el[res]['changeStatus'] = el['changeStatus']
                    if (el[res]['parentFolderId']) {
                        el[res]['folderName'] = TagManager.Accounts.Containers.Workspaces.Folders.get(path + '/folders/' + el[res]['parentFolderId'])['name']
                    } else {
                        el[res]['folderName'] = 'Unfiled Items'
                    }
                    resourceObj[res].push(el[res])
                }
            })
            
        })
    } else {
        SpreadsheetApp.getUi().alert('No Changes in the workspace');
    }
    
}

