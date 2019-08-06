function myFunction() {
  
  var workSpace = TagManager.Accounts.Containers.Workspaces.getStatus(path)
  var wsChangesArr = workSpace.workspaceChange

  tagSheet.deleteRows(2, tagSheet.getLastRow())
  
  gtmResource(wsChangesArr,'tag',tagArr)
  tagResource(tagArr, 'name', tagNameArr)
  
  /*
  wsChangesArr.forEach(function (el) {
    if (el.tag) {
      tagNameArr.push(el.tag.name)
    } else if (el.trigger) {
      triggerNameArr.push(el.trigger.name)
    } else if (el.variable) {
      variableNameArr.push(el.variable.name)
    }
  })*/
  
  tagQAFun(tagNameArr, tagQATests, tagQAResults)
  Logger.log(tagQAResults)
  
  displayEntityNames(tagNameArr,tagSheet, "B")
  displayEntityNames(tagArr,tagSheet, "G")
  //displayEntityNames(triggerNameArr,triggerSheet, "B")
  //displayEntityNames(variableNameArr,variabaleSheet, "B")
  
  tagSheet.autoResizeColumn(2)
  
 
}
