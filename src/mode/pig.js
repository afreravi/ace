/*
  THIS FILE WAS AUTOGENERATED BY mode.tmpl.js
*/

"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var PigHighlightRules = require("./pig_highlight_rules").PigHighlightRules;
// TODO: pick appropriate fold mode
var FoldMode = require("./folding/cstyle").FoldMode;

var Mode = function() {
    this.HighlightRules = PigHighlightRules;
    this.foldingRules = new FoldMode();
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "--";
    this.blockComment = {start: "/*", end: "*/"};
    // Extra logic goes here.
    this.$id = "ace/mode/pig";
}).call(Mode.prototype);

exports.Mode = Mode;
