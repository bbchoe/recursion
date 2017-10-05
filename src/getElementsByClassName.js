// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // get input classname
  // return all document elements that possess this class name
  // return in the form of a flat array
  var outputArray = [];

  getMatchingNodes(document.body);

  function getMatchingNodes(inputObj) {
      if (inputObj.classList !== undefined && inputObj.classList.contains(className)) {
          outputArray.push(inputObj);
      }
      if (inputObj.hasChildNodes()) {
          var children = inputObj.childNodes;
          for (var i = 0; i < children.length; i++) {
              getMatchingNodes(children[i]);
          }
      }
  }
  return outputArray;
};
