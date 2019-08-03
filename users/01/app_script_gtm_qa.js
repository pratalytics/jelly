function myFunction() {
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var overViewSheet = spreadSheet.getSheetByName('overview');
  var gtm_url = overViewSheet.getRange('B2').getValue();
  var path = gtm_url.substring(gtm_url.indexOf('accounts/'), gtm_url.indexOf('?'));
  
  var tagSheet = spreadSheet.getSheetByName('tags');
  var triggerSheet = spreadSheet.getSheetByName('triggers');
  var variabaleSheet = spreadSheet.getSheetByName('variables');
  var folderSheet = spreadSheet.getSheetByName('folders');
  
  var workSpace = TagManager.Accounts.Containers.Workspaces.getStatus(path)
  var wsChangesArr = workSpace.workspaceChange
  var tagNameArr = []
  var triggerNameArr = []
  var variableNameArr = []
  
  wsChangesArr.forEach(function (el) {
    if (el.tag) {
      tagNameArr.push(el.tag.name)
    } else if (el.trigger) {
      triggerNameArr.push(el.trigger.name)
    } else if (el.variable) {
      variableNameArr.push(el.variable.name)
    }
  })
  
  var displayEntityNames = function (entityArr, entitySheet) {
    entityArr.forEach(function (el, index) {
      entitySheet.getRange("B"+ (index + 2)).setValue(el)
    })
  }
  
  displayEntityNames(tagNameArr,tagSheet)
  displayEntityNames(triggerNameArr,triggerSheet)
  displayEntityNames(variableNameArr,variabaleSheet)
  
  /*
  tagNameArr.forEach(function (el, index) {
    tagSheet.getRange("B"+ (index + 2)).setValue(el)
  })
  
  
  triggerNameArr.forEach(function (el, index) {
    triggerSheet.getRange("B"+ (index + 2)).setValue(el)
  })*/
 
}
