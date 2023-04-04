"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var DroolsHighlightRules = require("./drools_highlight_rules").DroolsHighlightRules;
var DroolsFoldMode = require("./folding/drools").FoldMode;
var CstyleBehaviour = require("../mode/behaviour/cstyle").CstyleBehaviour;

var Mode = function() {
    this.HighlightRules = DroolsHighlightRules;
    this.foldingRules = new DroolsFoldMode();
    this.$behaviour = new CstyleBehaviour({closeDocComment: true});

};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "//";
    this.$id = "ace/mode/drools";
    this.snippetFileId = "ace/snippets/drools";
}).call(Mode.prototype);

exports.Mode = Mode;
