"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

html`
  <${Div} id="foo"> hello ${you} 😀${"<"} <//>
`;
var a = [1, 2, 3];
var b = [1, ...a, 2, 3];
var c = {
  a: 1,
  b: 2,
  c: 3
};

var d = _objectSpread({
  a: 2
}, c, {
  c: 5
});

var App = () => React.createElement("div", null, "asd");