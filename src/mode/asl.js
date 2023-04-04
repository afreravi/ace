"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var ASLHighlightRules = require("./asl_highlight_rules").ASLHighlightRules;
var FoldMode = require("./folding/cstyle").FoldMode;
var CstyleBehaviour = require("../mode/behaviour/cstyle").CstyleBehaviour;

var Mode = function () {
    this.HighlightRules = ASLHighlightRules;
    this.foldingRules = new FoldMode();
    this.$behaviour = new CstyleBehaviour({closeDocComment: true});
};
oop.inherits(Mode, TextMode);

(function () {
    this.$id = "ace/mode/asl";
}).call(Mode.prototype);

exports.Mode = Mode;
