  var displayEntityNames = function (entityArr, entitySheet, char) {
    entityArr.forEach(function (el, index) {
      entitySheet.getRange(char + (index + 2)).setValue(el)
    })
  }
