var tagResource = function (tagArr, key, tagResourceArr) {
    tagArr.forEach(function (el) {
        tagResourceArr.push(el[key])
    })
}

var tagQAFun = function (tagResource, tagQATests, tagQAResults) {
  tagResource.forEach(function (el) {
    tagQATests.forEach(function (func) {
      func(el,tagQAResults)
    })
  })
}




var tagQAResults = []
var tagQATests = []

var is3Dashes = function (el, tagQAResults) {
    var resultobj = {'test': 'is3Dashes', 'flag': 'passed', 'message': 'passed', 'name': el}
    if (el.indexOf('GA') > -1) {
        var regexp = / - /gi
        var result = ''
        var indices = []
        

        while ((result = regexp.exec(el))) {
            indices.push(result.index)
            
        }

        if (indices.length === 3) {
          tagQAResults.push(resultobj)
        } else if (indices.length < 3) {
          resultobj.flag = 'fail'
          resultobj.message = 'Less Number of Dashes'
          tagQAResults.push(resultobj)
        } else {
          resultobj.flag = 'fail'
          resultobj.message = 'Too many dashes'
          tagQAResults.push(resultobj)
        }
    } else {
      resultobj.flag = 'NA'
      resultobj.message = 'NA'
      tagQAResults.push(resultobj)
    }
}

tagQATests.push(is3Dashes)


var isScope = function (el, tagQAResults) {
    var resultObj = {'test': 'isScope', 'flag': 'passed', 'message': 'passed', 'name': el}
    if (el.indexOf('Global') > -1 || el.indexOf('Local') > -1) {
        tagQAResults.push(resultObj)
    } else {
        resultObj.flag = 'fail'
        resultObj.message = 'Scope is not defined'
        tagQAResults.push(resultObj)
    }
}

tagQATests.push(isScope)
