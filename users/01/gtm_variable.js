var variableResource = function (variableArr, key, variableResourceArr) {
    variableArr.forEach(function (el) {
        variableResourceArr.push(el[key])
    })
}
