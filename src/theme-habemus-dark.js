define("ace/theme/habemus-dark",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-habemus-dark";
exports.cssText = ".ace-habemus-dark .ace_gutter {\
background: #3c3c3c;\
color: #A3A3A3;\
}\
.ace-habemus-dark .ace_print-margin {\
width: 1px;\
background: #626262;\
}\
.ace-habemus-dark {\
background-color: #292929;\
color: #EAEAEA;\
font-family: 'Monaco';\
}\
.ace-habemus-dark .ace_cursor {\
color: #EAEAEA;\
}\
.ace-habemus-dark .ace_marker-layer .ace_selection {\
background: #3d3d3d;\
}\
.ace-habemus-dark.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
}\
.ace-habemus-dark .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-habemus-dark .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #bfbaa5;\
}\
.ace-habemus-dark .ace_marker-layer .ace_active-line {\
background: #333333;\
}\
.ace-habemus-dark .ace_gutter-active-line {\
background-color: #424242;\
}\
.ace-habemus-dark .ace_marker-layer .ace_selected-word {\
border: 1px solid #A3A3A3;\
}\
.ace-habemus-dark .ace_invisible {\
color: #333333;\
}\
.ace-habemus-dark .ace_entity.ace_name.ace_tag,\
.ace-habemus-dark .ace_keyword,\
.ace-habemus-dark .ace_meta.ace_tag,\
.ace-habemus-dark .ace_storage {\
color: #ed5f6d;\
}\
.ace-habemus-dark .ace_punctuation,\
.ace-habemus-dark .ace_punctuation.ace_tag {\
color: #EAEAEA;\
}\
.ace-habemus-dark .ace_constant.ace_character,\
.ace-habemus-dark .ace_constant.ace_language,\
.ace-habemus-dark .ace_constant.ace_numeric,\
.ace-habemus-dark .ace_constant.ace_other {\
color: #b47bb5;\
}\
.ace-habemus-dark .ace_invalid {\
color: #F8F8F0;\
background-color: #ed5f6d;\
}\
.ace-habemus-dark .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #b47bb5;\
}\
.ace-habemus-dark .ace_support.ace_constant,\
.ace-habemus-dark .ace_support.ace_function {\
color: #3eb8cc;\
}\
.ace-habemus-dark .ace_fold {\
background-color: #d99c64;\
border-color: #EAEAEA;\
}\
.ace-habemus-dark .ace_storage.ace_type,\
.ace-habemus-dark .ace_support.ace_class,\
.ace-habemus-dark .ace_support.ace_type {\
color: #3eb8cc;\
}\
.ace-habemus-dark .ace_entity.ace_name.ace_function,\
.ace-habemus-dark .ace_entity.ace_other,\
.ace-habemus-dark .ace_entity.ace_other.ace_attribute-name,\
.ace-habemus-dark .ace_variable {\
color: #d99c64;\
}\
.ace-habemus-dark .ace_variable.ace_parameter {\
font-style: italic;\
color: #fcb05e;\
}\
.ace-habemus-dark .ace_string {\
color: #b0cb78;\
}\
.ace-habemus-dark .ace_comment {\
color: #6B6B6B;\
}\
.ace-habemus-dark .ace_indent-guide {\
border-right:1px dotted #3D3D3D;\
margin-right:-1px;\
}\
.ace-habemus-dark .ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {\
background-color: #CAD6FA;\
z-index: 1;\
}\
.ace-habemus-dark .ace_editor.ace_autocomplete .ace_line-hover {\
border: 1px solid #abbffe;\
margin-top: -1px;\
background: rgba(233,233,253,0.4);\
}\
.ace-habemus-dark .ace_editor.ace_autocomplete .ace_line-hover {\
position: absolute;\
z-index: 2;\
}\
.ace-habemus-dark .ace_editor.ace_autocomplete .ace_scroller {\
background: none;\
border: none;\
box-shadow: none;\
}\
.ace_rightAlignedText {\
color: gray;\
display: inline-block;\
position: absolute;\
right: 4px;\
text-align: right;\
z-index: -1;\
}\
.ace-habemus-dark .ace_editor.ace_autocomplete .ace_completion-highlight{\
color: #000;\
text-shadow: 0 0 0.01em;\
}\
.ace-habemus-dark .ace_editor.ace_autocomplete {\
width: 280px;\
z-index: 200000;\
background: #fbfbfb;\
color: #444;\
border: 1px lightgray solid;\
position: fixed;\
box-shadow: 2px 3px 5px rgba(0,0,0,.2);\
line-height: 1.4;\
}\");\
";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});