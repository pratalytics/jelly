 
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
        sheets[prop].autoResizeColumns(2,3)
    }
}



var displayGAEvents = function (gtmResources, sheets) {
    
    var vals = []
    gtmResources.tag.forEach(function (el) {
      var tag = {
        'name': '',
        'eventCategory': '',
        'eventAction': '',
        'eventLabel': '',
        'nonInteraction': ''
    }
      
        el.parameter.forEach(function (pel) {
            if (pel.key === 'eventCategory') {
                tag.name = el.name
                tag.eventCategory = pel.value
            } else if (pel.key === 'eventAction') {
                tag.eventAction = pel.value
            } else if (pel.key === 'eventLabel') {
                tag.eventLabel = pel.value
            } else if (pel.key === 'nonInteraction') {
                tag.nonInteraction = pel.value
            }
            
        })
        if (tag.name != '') {
          vals.push([tag.name, tag.eventCategory, tag.eventAction, tag.eventLabel, tag.nonInteraction])
        }
        
        

    })
    sheets['events'].getRange('B2:F' + (vals.length+1)).setValues(vals)
}
