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
