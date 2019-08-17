  var displayEntityNames = function (entityArr, entitySheet, char) {
    entityArr.forEach(function (el, index) {
      entitySheet.getRange(char + (index + 2)).setValue(el)
    })
  }
  
 
  var displayOverallQAResults = function (entityArr, entitySheet, char) {
    entityArr.forEach(function (el, index) {
      entitySheet.getRange(char + (index + 2)).setValue(JSON.stringify(el))
    })
  }
  
  var cleanSheets = function (sheetObj) {
    for (var key in sheetObj) {
        if (key !== 'overview') {
            sheetObj[key].deleteRows(2, sheetObj[key].getLastRow())
        }
    }
}
  

var displayGTMResources = function (gtmResources, sheets, char, key) {
    for (var prop in gtmResources) {
        if (gtmResources[prop].length > 0) {
            gtmResources[prop].forEach( function (el, index) {
                sheets[prop].getRange(char + (index + 2)).setValue(el[key])
            })
        }
    }
}


var autoResizeCols = function (sheets) {
    for (var prop in sheets) {
        sheets[prop].autoResizeColumns(2,2)
    }
}
