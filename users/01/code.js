function myFunction() {
  
  var workSpace = TagManager.Accounts.Containers.Workspaces.getStatus(path)
  overViewSheet.getRange('B11').setValue(JSON.stringify(workSpace))
  var wsChangesArr = workSpace.workspaceChange
  overViewSheet.getRange('B13').setValue(JSON.stringify(wsChangesArr))

  tagSheet.deleteRows(2, tagSheet.getLastRow())
  variableSheet.deleteRows(2, variableSheet.getLastRow())
  triggerSheet.deleteRows(2, triggerSheet.getLastRow())
  
  gtmResource(wsChangesArr,'tag',tagArr)
  gtmResource(wsChangesArr,'variable',variableArr)
  gtmResource(wsChangesArr,'trigger',triggerArr)
  
  
  tagResource(tagArr, 'name', tagNameArr)
  variableResource(variableArr, 'name', variableNameArr)
  triggerResource(triggerArr, 'name', triggerNameArr)
  
  tagQAFun(tagNameArr, tagQATests, tagQAResults)
  //Logger.log(tagQAResults)
  
  orderedQAFun(tagNameArr,tagQAResults,orderedTagQAResults)
  //Logger.log(orderedTagQAResults[0])
  
  displayEntityNames(tagNameArr,tagSheet, "B")
  displayEntityNames(variableNameArr,variableSheet, "B")
  displayEntityNames(triggerNameArr,triggerSheet, "B")
  displayEntityNames(tagArr,tagSheet, "G")
  displayOverallQAResults(orderedTagQAResults,tagSheet, "H")
  //displayEntityNames(triggerNameArr,triggerSheet, "B")
  //displayEntityNames(variableNameArr,variabaleSheet, "B")
  
  tagSheet.autoResizeColumn(2)
  
 
}
