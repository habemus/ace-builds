define("ace/theme/habemus",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-habemus";
exports.cssText = ".ace-habemus .ace_gutter {\
background: #E2E2E2;\
color: #A3A3A3; // cinza 3\
3}\
.ace-habemus .ace_print-margin {\
width: 1px;\
background: #EAEAEA; // cinza 1.2\
}\
.ace-habemus {\
background-color: #F5F5F5; // cinza 1\
color: #6D6D6D; // cinza 4\
font-family: 'Inconsolata';\
line-height: 1.5;\
}\
.ace-habemus .ace_cursor {\
color: #3C3C3C; // cinza 5\
}\
.ace-habemus .ace_marker-layer .ace_selection {\
background: #cbf4e3; // verdinho habemus\
}\
.ace-habemus.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
}\
.ace-habemus .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-habemus .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #A3A3A3; // cinza 3\
}\
.ace-habemus .ace_marker-layer .ace_active-line {\
background: #EAEAEA; // cinza 1.2\
}\
.ace-habemus .ace_gutter-active-line {\
background-color: #DDDDDD;\
}\
.ace-habemus .ace_marker-layer .ace_selected-word {\
border: 1px solid #CECECE; // cinza 2\
}\
.ace-habemus .ace_invisible {\
color: #D6D6D6; // cinza 1.8\
}\
.ace-habemus .ace_entity.ace_name.ace_tag,\
.ace-habemus .ace_keyword,\
.ace-habemus .ace_meta.ace_tag,\
.ace-habemus .ace_storage {\
color: #0EA6AA; //verde agua\
}\
.ace-habemus .ace_punctuation,\
.ace-habemus .ace_punctuation.ace_tag {\
color: #6D6D6D; // cinza 4\
}\
.ace-habemus .ace_constant.ace_character,\
.ace-habemus .ace_constant.ace_language,\
.ace-habemus .ace_constant.ace_numeric,\
.ace-habemus .ace_constant.ace_other {\
color: #9E4AC6; // roxo\
}\
.ace-habemus .ace_invalid {\
color: #F8F8F0;\
background-color: #0EA6AA; //verde agua\
}\
.ace-habemus .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #9E4AC6; // roxo\
}\
.ace-habemus .ace_support.ace_constant,\
.ace-habemus .ace_support.ace_function {\
color: #2E8EEF; // azul claro\
}\
.ace-habemus .ace_fold {\
background-color: #ED4FAD; // rosa\
border-color: #F5F5F5;\
}\
.ace-habemus .ace_storage.ace_type,\
.ace-habemus .ace_support.ace_class,\
.ace-habemus .ace_support.ace_type {\
font-style: italic;\
color: #2E8EEF; // azul claro\
}\
.ace-habemus .ace_entity.ace_name.ace_function,\
.ace-habemus .ace_entity.ace_other,\
.ace-habemus .ace_entity.ace_other.ace_attribute-name,\
.ace-habemus .ace_variable {\
color: #ED4FAD; // rosa\
}\
.ace-habemus .ace_variable.ace_parameter {\
font-style: italic;\
color: #DD992A; // laranja\
}\
.ace-habemus .ace_string {\
color: #7f9e33; // verde limao\
}\
.ace-habemus .ace_comment {\
color: #CECECE; // cinza 2\
}\
.ace-habemus .ace_indent-guide {\
border-right:1px dotted #CECECE; // cinza 2\
margin-right:-1px;\
}\
";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
