function myFunction() {
  
  
  sheets.overview.getRange('B11').setValue(JSON.stringify(workSpace))
  
  sheets.overview.getRange('B13').setValue(JSON.stringify(wsChangesArr))
  
  cleanSheets(sheets)

  

  gtmResource(wsChangesArr, gtmResources)
  sheets.overview.getRange('B15').setValue(JSON.stringify(gtmResources))
  
  
  
  displayGTMResources(gtmResources, sheets, "B", "name")
  displayGTMResources(gtmResources, sheets, "D", "changeStatus")
  
  /*
  
  
  tagQAFun(tagNameArr, tagQATests, tagQAResults)
  //Logger.log(tagQAResults)
  
  orderedQAFun(tagNameArr,tagQAResults,orderedTagQAResults)
  //Logger.log(orderedTagQAResults[0])
  

  displayEntityNames(tagArr,tagSheet, "G")
  displayOverallQAResults(orderedTagQAResults,tagSheet, "H")
  //displayEntityNames(triggerNameArr,triggerSheet, "B")
  //displayEntityNames(variableNameArr,variabaleSheet, "B")*/
  

  autoResizeCols(sheets)
  
 
}
