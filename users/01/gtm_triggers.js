var triggerResource = function (triggerArr, key, triggerResourceArr) {
    triggerArr.forEach(function (el) {
        triggerResourceArr.push(el[key])
    })
}
