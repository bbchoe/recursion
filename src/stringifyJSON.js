// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    // Handle simple stuff first
    // Handle Objects
    // Handle Array

    if (typeof obj === 'number') {
        return obj.toString();
    } else if (typeof obj === 'string') {
        return '\"' + obj + '\"';
    } else if (typeof obj === 'boolean') {
        return obj.toString();
    } else if (obj === null) {
        return 'null';
    } else if (typeof obj === 'object' && Array.isArray(obj)) {
        if (obj.length === 0) {
            return '[]';
        } else {
            return '[' + obj.slice(1).reduce(function(allElements, current) {
                return allElements.concat(',', stringifyJSON(current));
            }, stringifyJSON(obj[0])) + ']';
        }
    } else if (typeof obj === 'object' && !Array.isArray(obj)) {
        return getObjString(obj);
    }
};

function getObjString(inputObj) {
    var objStr = '{';
    for (var key in inputObj) {
        if (typeof inputObj[key] !== 'function' && typeof inputObj[key] !== 'undefined') {
            objStr += stringifyJSON(key) + ':' + stringifyJSON(inputObj[key]) + ',';
        }
    }
    return objStr.slice(0, Math.max(objStr.length - 1, 2)) +'}'
}
