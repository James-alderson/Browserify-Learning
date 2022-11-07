(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function header() {
  var headerStr = "<h1>Learning browserify and babel</h1> <p>Browserify is module bundler<br>Babel is js transcompailer</p>"

  return headerStr
}

module.exports = header()

},{}],2:[function(require,module,exports){
function main () {
  var mainStr = "<p>Browserify is an open-source JavaScript bundler tool that allows developers to write and use Node.js-style modules that compile for use in the browser.</p>"

  return mainStr
}

module.exports = main()

},{}],3:[function(require,module,exports){
var header = require("./components/header")
var main = require("./components/main")

var HEADER = document.querySelector("header")
var MAIN = document.querySelector("section")

HEADER.innerHTML = header
MAIN.innerHTML = main

},{"./components/header":1,"./components/main":2}]},{},[3])
//# sourceMappingURL=bundle.js.map
