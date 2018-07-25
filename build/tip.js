"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tip = function Tip(props) {
  var direction = props.direction;

  var size = props.size || 24;
  var isPortrait = direction === "up" || direction === "down";
  var mainLength = size;
  var crossLength = size * 2;
  var points = direction === "up" ? "0," + mainLength + " " + mainLength + ",0, " + crossLength + "," + mainLength : direction === "down" ? "0,0 " + mainLength + "," + mainLength + ", " + crossLength + ",0" : direction === "left" ? mainLength + ",0 0," + mainLength + ", " + mainLength + "," + crossLength : "0,0 " + mainLength + "," + mainLength + ", 0," + crossLength;

  var marginDir = {
    'up': 'margin-bottom',
    'down': 'margin-top',
    'left': 'margin-right',
    'right': 'margin-left'
  }[direction];

  var svgProps = {
    className: "Popover-tip",
    width: isPortrait ? crossLength : mainLength,
    height: isPortrait ? mainLength : crossLength,
    style: _defineProperty({}, marginDir, '-1px')
  };

  return _react2.default.createElement(
    "svg",
    svgProps,
    _react2.default.createElement("polygon", { className: "Popover-tipShape", points: points }),
    _react2.default.createElement("polyline", { className: "Popover-tipStroke", points: points })
  );
};

exports.default = Tip;