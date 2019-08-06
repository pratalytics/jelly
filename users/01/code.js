function myFunction() {
  
  var workSpace = TagManager.Accounts.Containers.Workspaces.getStatus(path)
  var wsChangesArr = workSpace.workspaceChange

  tagSheet.deleteRows(2, tagSheet.getLastRow())
  
  gtmResource(wsChangesArr,'tag',tagArr)
  tagResource(tagArr, 'name', tagNameArr)
  
  
  tagQAFun(tagNameArr, tagQATests, tagQAResults)
  Logger.log(tagQAResults)
  
  displayEntityNames(tagNameArr,tagSheet, "B")
  displayEntityNames(tagArr,tagSheet, "G")
  //displayEntityNames(triggerNameArr,triggerSheet, "B")
  //displayEntityNames(variableNameArr,variabaleSheet, "B")
  
  tagSheet.autoResizeColumn(2)
  
 
}
