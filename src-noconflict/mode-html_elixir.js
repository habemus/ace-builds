ace.define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var lang = require("../lib/lang");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
var supportType = exports.supportType = "align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|min-height|min-width|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index";
var supportFunction = exports.supportFunction = "rgb|rgba|url|attr|counter|counters";
var supportConstant = exports.supportConstant = "absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero";
var supportConstantColor = exports.supportConstantColor = "aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow";
var supportConstantFonts = exports.supportConstantFonts = "arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace";

var numRe = exports.numRe = "\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))";
var pseudoElements = exports.pseudoElements = "(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b";
var pseudoClasses  = exports.pseudoClasses =  "(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b";

var CssHighlightRules = function() {

    var keywordMapper = this.createKeywordMapper({
        "support.function": supportFunction,
        "support.constant": supportConstant,
        "support.type": supportType,
        "support.constant.color": supportConstantColor,
        "support.constant.fonts": supportConstantFonts
    }, "text", true);

    this.$rules = {
        "start" : [{
            token : "comment", // multi line comment
            regex : "\\/\\*",
            push : "comment"
        }, {
            token: "paren.lparen",
            regex: "\\{",
            push:  "ruleset"
        }, {
            token: "string",
            regex: "@.*?{",
            push:  "media"
        }, {
            token: "keyword",
            regex: "#[a-z0-9-_]+"
        }, {
            token: "variable",
            regex: "\\.[a-z0-9-_]+"
        }, {
            token: "string",
            regex: ":[a-z0-9-_]+"
        }, {
            token: "constant",
            regex: "[a-z0-9-_]+"
        }, {
            caseInsensitive: true
        }],

        "media" : [{
            token : "comment", // multi line comment
            regex : "\\/\\*",
            push : "comment"
        }, {
            token: "paren.lparen",
            regex: "\\{",
            push:  "ruleset"
        }, {
            token: "string",
            regex: "\\}",
            next:  "pop"
        }, {
            token: "keyword",
            regex: "#[a-z0-9-_]+"
        }, {
            token: "variable",
            regex: "\\.[a-z0-9-_]+"
        }, {
            token: "string",
            regex: ":[a-z0-9-_]+"
        }, {
            token: "constant",
            regex: "[a-z0-9-_]+"
        }, {
            caseInsensitive: true
        }],

        "comment" : [{
            token : "comment",
            regex : "\\*\\/",
            next : "pop"
        }, {
            defaultToken : "comment"
        }],

        "ruleset" : [
        {
            token : "paren.rparen",
            regex : "\\}",
            next:   "pop"
        }, {
            token : "comment", // multi line comment
            regex : "\\/\\*",
            push : "comment"
        }, {
            token : "string", // single line
            regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
        }, {
            token : "string", // single line
            regex : "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
        }, {
            token : ["constant.numeric", "keyword"],
            regex : "(" + numRe + ")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)"
        }, {
            token : "constant.numeric",
            regex : numRe
        }, {
            token : "constant.numeric",  // hex6 color
            regex : "#[a-f0-9]{6}"
        }, {
            token : "constant.numeric", // hex3 color
            regex : "#[a-f0-9]{3}"
        }, {
            token : ["punctuation", "entity.other.attribute-name.pseudo-element.css"],
            regex : pseudoElements
        }, {
            token : ["punctuation", "entity.other.attribute-name.pseudo-class.css"],
            regex : pseudoClasses
        }, {
            token : ["support.function", "string", "support.function"],
            regex : "(url\\()(.*)(\\))"
        }, {
            token : keywordMapper,
            regex : "\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"
        }, {
            caseInsensitive: true
        }]
    };

    this.normalizeRules();
};

oop.inherits(CssHighlightRules, TextHighlightRules);

exports.CssHighlightRules = CssHighlightRules;

});

ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var DocCommentHighlightRules = function() {
    this.$rules = {
        "start" : [ {
            token : "comment.doc.tag",
            regex : "@[\\w\\d_]+" // TODO: fix email addresses
        }, 
        DocCommentHighlightRules.getTagRule(),
        {
            defaultToken : "comment.doc",
            caseInsensitive: true
        }]
    };
};

oop.inherits(DocCommentHighlightRules, TextHighlightRules);

DocCommentHighlightRules.getTagRule = function(start) {
    return {
        token : "comment.doc.tag.storage.type",
        regex : "\\b(?:TODO|FIXME|XXX|HACK)\\b"
    };
}

DocCommentHighlightRules.getStartRule = function(start) {
    return {
        token : "comment.doc", // doc comment
        regex : "\\/\\*(?=\\*)",
        next  : start
    };
};

DocCommentHighlightRules.getEndRule = function (start) {
    return {
        token : "comment.doc", // closing comment
        regex : "\\*\\/",
        next  : start
    };
};


exports.DocCommentHighlightRules = DocCommentHighlightRules;

});

ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var DocCommentHighlightRules = require("./doc_comment_highlight_rules").DocCommentHighlightRules;
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
var identifierRe = "[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*";

var JavaScriptHighlightRules = function(options) {
    var keywordMapper = this.createKeywordMapper({
        "variable.language":
            "Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|"  + // Constructors
            "Namespace|QName|XML|XMLList|"                                             + // E4X
            "ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|"   +
            "Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|"                    +
            "Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|"   + // Errors
            "SyntaxError|TypeError|URIError|"                                          +
            "decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|" + // Non-constructor functions
            "isNaN|parseFloat|parseInt|"                                               +
            "JSON|Math|"                                                               + // Other
            "this|arguments|prototype|window|document"                                 , // Pseudo
        "keyword":
            "const|yield|import|get|set|async|await|" +
            "break|case|catch|continue|default|delete|do|else|finally|for|function|" +
            "if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|" +
            "__parent__|__count__|escape|unescape|with|__proto__|" +
            "class|enum|extends|super|export|implements|private|public|interface|package|protected|static",
        "storage.type":
            "const|let|var|function",
        "constant.language":
            "null|Infinity|NaN|undefined",
        "support.function":
            "alert",
        "constant.language.boolean": "true|false"
    }, "identifier");
    var kwBeforeRe = "case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void";

    var escapedRe = "\\\\(?:x[0-9a-fA-F]{2}|" + // hex
        "u[0-9a-fA-F]{4}|" + // unicode
        "u{[0-9a-fA-F]{1,6}}|" + // es6 unicode
        "[0-2][0-7]{0,2}|" + // oct
        "3[0-7][0-7]?|" + // oct
        "[4-7][0-7]?|" + //oct
        ".)";

    this.$rules = {
        "no_regex" : [
            DocCommentHighlightRules.getStartRule("doc-start"),
            comments("no_regex"),
            {
                token : "string",
                regex : "'(?=.)",
                next  : "qstring"
            }, {
                token : "string",
                regex : '"(?=.)',
                next  : "qqstring"
            }, {
                token : "constant.numeric", // hex
                regex : /0(?:[xX][0-9a-fA-F]+|[bB][01]+)\b/
            }, {
                token : "constant.numeric", // float
                regex : /[+-]?\d[\d_]*(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/
            }, {
                token : [
                    "storage.type", "punctuation.operator", "support.function",
                    "punctuation.operator", "entity.name.function", "text","keyword.operator"
                ],
                regex : "(" + identifierRe + ")(\\.)(prototype)(\\.)(" + identifierRe +")(\\s*)(=)",
                next: "function_arguments"
            }, {
                token : [
                    "storage.type", "punctuation.operator", "entity.name.function", "text",
                    "keyword.operator", "text", "storage.type", "text", "paren.lparen"
                ],
                regex : "(" + identifierRe + ")(\\.)(" + identifierRe +")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "entity.name.function", "text", "keyword.operator", "text", "storage.type",
                    "text", "paren.lparen"
                ],
                regex : "(" + identifierRe +")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "storage.type", "punctuation.operator", "entity.name.function", "text",
                    "keyword.operator", "text",
                    "storage.type", "text", "entity.name.function", "text", "paren.lparen"
                ],
                regex : "(" + identifierRe + ")(\\.)(" + identifierRe +")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "storage.type", "text", "entity.name.function", "text", "paren.lparen"
                ],
                regex : "(function)(\\s+)(" + identifierRe + ")(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "entity.name.function", "text", "punctuation.operator",
                    "text", "storage.type", "text", "paren.lparen"
                ],
                regex : "(" + identifierRe + ")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "text", "text", "storage.type", "text", "paren.lparen"
                ],
                regex : "(:)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : "keyword",
                regex : "(?:" + kwBeforeRe + ")\\b",
                next : "start"
            }, {
                token : ["support.constant"],
                regex : /that\b/
            }, {
                token : ["storage.type", "punctuation.operator", "support.function.firebug"],
                regex : /(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/
            }, {
                token : keywordMapper,
                regex : identifierRe
            }, {
                token : "punctuation.operator",
                regex : /[.](?![.])/,
                next  : "property"
            }, {
                token : "keyword.operator",
                regex : /--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,
                next  : "start"
            }, {
                token : "punctuation.operator",
                regex : /[?:,;.]/,
                next  : "start"
            }, {
                token : "paren.lparen",
                regex : /[\[({]/,
                next  : "start"
            }, {
                token : "paren.rparen",
                regex : /[\])}]/
            }, {
                token: "comment",
                regex: /^#!.*$/
            }
        ],
        property: [{
                token : "text",
                regex : "\\s+"
            }, {
                token : [
                    "storage.type", "punctuation.operator", "entity.name.function", "text",
                    "keyword.operator", "text",
                    "storage.type", "text", "entity.name.function", "text", "paren.lparen"
                ],
                regex : "(" + identifierRe + ")(\\.)(" + identifierRe +")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : "punctuation.operator",
                regex : /[.](?![.])/
            }, {
                token : "support.function",
                regex : /(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/
            }, {
                token : "support.function.dom",
                regex : /(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/
            }, {
                token :  "support.constant",
                regex : /(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/
            }, {
                token : "identifier",
                regex : identifierRe
            }, {
                regex: "",
                token: "empty",
                next: "no_regex"
            }
        ],
        "start": [
            DocCommentHighlightRules.getStartRule("doc-start"),
            comments("start"),
            {
                token: "string.regexp",
                regex: "\\/",
                next: "regex"
            }, {
                token : "text",
                regex : "\\s+|^$",
                next : "start"
            }, {
                token: "empty",
                regex: "",
                next: "no_regex"
            }
        ],
        "regex": [
            {
                token: "regexp.keyword.operator",
                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            }, {
                token: "string.regexp",
                regex: "/[sxngimy]*",
                next: "no_regex"
            }, {
                token : "invalid",
                regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
            }, {
                token : "constant.language.escape",
                regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
            }, {
                token : "constant.language.delimiter",
                regex: /\|/
            }, {
                token: "constant.language.escape",
                regex: /\[\^?/,
                next: "regex_character_class"
            }, {
                token: "empty",
                regex: "$",
                next: "no_regex"
            }, {
                defaultToken: "string.regexp"
            }
        ],
        "regex_character_class": [
            {
                token: "regexp.charclass.keyword.operator",
                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            }, {
                token: "constant.language.escape",
                regex: "]",
                next: "regex"
            }, {
                token: "constant.language.escape",
                regex: "-"
            }, {
                token: "empty",
                regex: "$",
                next: "no_regex"
            }, {
                defaultToken: "string.regexp.charachterclass"
            }
        ],
        "function_arguments": [
            {
                token: "variable.parameter",
                regex: identifierRe
            }, {
                token: "punctuation.operator",
                regex: "[, ]+"
            }, {
                token: "punctuation.operator",
                regex: "$"
            }, {
                token: "empty",
                regex: "",
                next: "no_regex"
            }
        ],
        "qqstring" : [
            {
                token : "constant.language.escape",
                regex : escapedRe
            }, {
                token : "string",
                regex : "\\\\$",
                next  : "qqstring"
            }, {
                token : "string",
                regex : '"|$',
                next  : "no_regex"
            }, {
                defaultToken: "string"
            }
        ],
        "qstring" : [
            {
                token : "constant.language.escape",
                regex : escapedRe
            }, {
                token : "string",
                regex : "\\\\$",
                next  : "qstring"
            }, {
                token : "string",
                regex : "'|$",
                next  : "no_regex"
            }, {
                defaultToken: "string"
            }
        ]
    };
    
    
    if (!options || !options.noES6) {
        this.$rules.no_regex.unshift({
            regex: "[{}]", onMatch: function(val, state, stack) {
                this.next = val == "{" ? this.nextState : "";
                if (val == "{" && stack.length) {
                    stack.unshift("start", state);
                }
                else if (val == "}" && stack.length) {
                    stack.shift();
                    this.next = stack.shift();
                    if (this.next.indexOf("string") != -1 || this.next.indexOf("jsx") != -1)
                        return "paren.quasi.end";
                }
                return val == "{" ? "paren.lparen" : "paren.rparen";
            },
            nextState: "start"
        }, {
            token : "string.quasi.start",
            regex : /`/,
            push  : [{
                token : "constant.language.escape",
                regex : escapedRe
            }, {
                token : "paren.quasi.start",
                regex : /\${/,
                push  : "start"
            }, {
                token : "string.quasi.end",
                regex : /`/,
                next  : "pop"
            }, {
                defaultToken: "string.quasi"
            }]
        });
        
        if (!options || options.jsx != false)
            JSX.call(this);
    }
    
    this.embedRules(DocCommentHighlightRules, "doc-",
        [ DocCommentHighlightRules.getEndRule("no_regex") ]);
    
    this.normalizeRules();
};

oop.inherits(JavaScriptHighlightRules, TextHighlightRules);

function JSX() {
    var tagRegex = identifierRe.replace("\\d", "\\d\\-");
    var jsxTag = {
        onMatch : function(val, state, stack) {
            var offset = val.charAt(1) == "/" ? 2 : 1;
            if (offset == 1) {
                if (state != this.nextState)
                    stack.unshift(this.next, this.nextState, 0);
                else
                    stack.unshift(this.next);
                stack[2]++;
            } else if (offset == 2) {
                if (state == this.nextState) {
                    stack[1]--;
                    if (!stack[1] || stack[1] < 0) {
                        stack.shift();
                        stack.shift();
                    }
                }
            }
            return [{
                type: "meta.tag.punctuation." + (offset == 1 ? "" : "end-") + "tag-open.xml",
                value: val.slice(0, offset)
            }, {
                type: "meta.tag.tag-name.xml",
                value: val.substr(offset)
            }];
        },
        regex : "</?" + tagRegex + "",
        next: "jsxAttributes",
        nextState: "jsx"
    };
    this.$rules.start.unshift(jsxTag);
    var jsxJsRule = {
        regex: "{",
        token: "paren.quasi.start",
        push: "start"
    };
    this.$rules.jsx = [
        jsxJsRule,
        jsxTag,
        {include : "reference"},
        {defaultToken: "string"}
    ];
    this.$rules.jsxAttributes = [{
        token : "meta.tag.punctuation.tag-close.xml", 
        regex : "/?>", 
        onMatch : function(value, currentState, stack) {
            if (currentState == stack[0])
                stack.shift();
            if (value.length == 2) {
                if (stack[0] == this.nextState)
                    stack[1]--;
                if (!stack[1] || stack[1] < 0) {
                    stack.splice(0, 2);
                }
            }
            this.next = stack[0] || "start";
            return [{type: this.token, value: value}];
        },
        nextState: "jsx"
    }, 
    jsxJsRule,
    comments("jsxAttributes"),
    {
        token : "entity.other.attribute-name.xml",
        regex : tagRegex
    }, {
        token : "keyword.operator.attribute-equals.xml",
        regex : "="
    }, {
        token : "text.tag-whitespace.xml",
        regex : "\\s+"
    }, {
        token : "string.attribute-value.xml",
        regex : "'",
        stateName : "jsx_attr_q",
        push : [
            {token : "string.attribute-value.xml", regex: "'", next: "pop"},
            {include : "reference"},
            {defaultToken : "string.attribute-value.xml"}
        ]
    }, {
        token : "string.attribute-value.xml",
        regex : '"',
        stateName : "jsx_attr_qq",
        push : [
            {token : "string.attribute-value.xml", regex: '"', next: "pop"},
            {include : "reference"},
            {defaultToken : "string.attribute-value.xml"}
        ]
    },
    jsxTag
    ];
    this.$rules.reference = [{
        token : "constant.language.escape.reference.xml",
        regex : "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
    }];
}

function comments(next) {
    return [
        {
            token : "comment", // multi line comment
            regex : /\/\*/,
            next: [
                DocCommentHighlightRules.getTagRule(),
                {token : "comment", regex : "\\*\\/", next : next || "pop"},
                {defaultToken : "comment", caseInsensitive: true}
            ]
        }, {
            token : "comment",
            regex : "\\/\\/",
            next: [
                DocCommentHighlightRules.getTagRule(),
                {token : "comment", regex : "$|^", next : next || "pop"},
                {defaultToken : "comment", caseInsensitive: true}
            ]
        }
    ];
}
exports.JavaScriptHighlightRules = JavaScriptHighlightRules;
});

ace.define("ace/mode/xml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var XmlHighlightRules = function(normalize) {
    var tagRegex = "[_:a-zA-Z\xc0-\uffff][-_:.a-zA-Z0-9\xc0-\uffff]*";

    this.$rules = {
        start : [
            {token : "string.cdata.xml", regex : "<\\!\\[CDATA\\[", next : "cdata"},
            {
                token : ["punctuation.xml-decl.xml", "keyword.xml-decl.xml"],
                regex : "(<\\?)(xml)(?=[\\s])", next : "xml_decl", caseInsensitive: true
            },
            {
                token : ["punctuation.instruction.xml", "keyword.instruction.xml"],
                regex : "(<\\?)(" + tagRegex + ")", next : "processing_instruction"
            },
            {token : "comment.xml", regex : "<\\!--", next : "comment"},
            {
                token : ["xml-pe.doctype.xml", "xml-pe.doctype.xml"],
                regex : "(<\\!)(DOCTYPE)(?=[\\s])", next : "doctype", caseInsensitive: true
            },
            {include : "tag"},
            {token : "text.end-tag-open.xml", regex: "</"},
            {token : "text.tag-open.xml", regex: "<"},
            {include : "reference"},
            {defaultToken : "text.xml"}
        ],

        xml_decl : [{
            token : "entity.other.attribute-name.decl-attribute-name.xml",
            regex : "(?:" + tagRegex + ":)?" + tagRegex + ""
        }, {
            token : "keyword.operator.decl-attribute-equals.xml",
            regex : "="
        }, {
            include: "whitespace"
        }, {
            include: "string"
        }, {
            token : "punctuation.xml-decl.xml",
            regex : "\\?>",
            next : "start"
        }],

        processing_instruction : [
            {token : "punctuation.instruction.xml", regex : "\\?>", next : "start"},
            {defaultToken : "instruction.xml"}
        ],

        doctype : [
            {include : "whitespace"},
            {include : "string"},
            {token : "xml-pe.doctype.xml", regex : ">", next : "start"},
            {token : "xml-pe.xml", regex : "[-_a-zA-Z0-9:]+"},
            {token : "punctuation.int-subset", regex : "\\[", push : "int_subset"}
        ],

        int_subset : [{
            token : "text.xml",
            regex : "\\s+"
        }, {
            token: "punctuation.int-subset.xml",
            regex: "]",
            next: "pop"
        }, {
            token : ["punctuation.markup-decl.xml", "keyword.markup-decl.xml"],
            regex : "(<\\!)(" + tagRegex + ")",
            push : [{
                token : "text",
                regex : "\\s+"
            },
            {
                token : "punctuation.markup-decl.xml",
                regex : ">",
                next : "pop"
            },
            {include : "string"}]
        }],

        cdata : [
            {token : "string.cdata.xml", regex : "\\]\\]>", next : "start"},
            {token : "text.xml", regex : "\\s+"},
            {token : "text.xml", regex : "(?:[^\\]]|\\](?!\\]>))+"}
        ],

        comment : [
            {token : "comment.xml", regex : "-->", next : "start"},
            {defaultToken : "comment.xml"}
        ],

        reference : [{
            token : "constant.language.escape.reference.xml",
            regex : "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
        }],

        attr_reference : [{
            token : "constant.language.escape.reference.attribute-value.xml",
            regex : "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
        }],

        tag : [{
            token : ["meta.tag.punctuation.tag-open.xml", "meta.tag.punctuation.end-tag-open.xml", "meta.tag.tag-name.xml"],
            regex : "(?:(<)|(</))((?:" + tagRegex + ":)?" + tagRegex + ")",
            next: [
                {include : "attributes"},
                {token : "meta.tag.punctuation.tag-close.xml", regex : "/?>", next : "start"}
            ]
        }],

        tag_whitespace : [
            {token : "text.tag-whitespace.xml", regex : "\\s+"}
        ],
        whitespace : [
            {token : "text.whitespace.xml", regex : "\\s+"}
        ],
        string: [{
            token : "string.xml",
            regex : "'",
            push : [
                {token : "string.xml", regex: "'", next: "pop"},
                {defaultToken : "string.xml"}
            ]
        }, {
            token : "string.xml",
            regex : '"',
            push : [
                {token : "string.xml", regex: '"', next: "pop"},
                {defaultToken : "string.xml"}
            ]
        }],

        attributes: [{
            token : "entity.other.attribute-name.xml",
            regex : "(?:" + tagRegex + ":)?" + tagRegex + ""
        }, {
            token : "keyword.operator.attribute-equals.xml",
            regex : "="
        }, {
            include: "tag_whitespace"
        }, {
            include: "attribute_value"
        }],

        attribute_value: [{
            token : "string.attribute-value.xml",
            regex : "'",
            push : [
                {token : "string.attribute-value.xml", regex: "'", next: "pop"},
                {include : "attr_reference"},
                {defaultToken : "string.attribute-value.xml"}
            ]
        }, {
            token : "string.attribute-value.xml",
            regex : '"',
            push : [
                {token : "string.attribute-value.xml", regex: '"', next: "pop"},
                {include : "attr_reference"},
                {defaultToken : "string.attribute-value.xml"}
            ]
        }]
    };

    if (this.constructor === XmlHighlightRules)
        this.normalizeRules();
};


(function() {

    this.embedTagRules = function(HighlightRules, prefix, tag){
        this.$rules.tag.unshift({
            token : ["meta.tag.punctuation.tag-open.xml", "meta.tag." + tag + ".tag-name.xml"],
            regex : "(<)(" + tag + "(?=\\s|>|$))",
            next: [
                {include : "attributes"},
                {token : "meta.tag.punctuation.tag-close.xml", regex : "/?>", next : prefix + "start"}
            ]
        });

        this.$rules[tag + "-end"] = [
            {include : "attributes"},
            {token : "meta.tag.punctuation.tag-close.xml", regex : "/?>",  next: "start",
                onMatch : function(value, currentState, stack) {
                    stack.splice(0);
                    return this.token;
            }}
        ]

        this.embedRules(HighlightRules, prefix, [{
            token: ["meta.tag.punctuation.end-tag-open.xml", "meta.tag." + tag + ".tag-name.xml"],
            regex : "(</)(" + tag + "(?=\\s|>|$))",
            next: tag + "-end"
        }, {
            token: "string.cdata.xml",
            regex : "<\\!\\[CDATA\\["
        }, {
            token: "string.cdata.xml",
            regex : "\\]\\]>"
        }]);
    };

}).call(TextHighlightRules.prototype);

oop.inherits(XmlHighlightRules, TextHighlightRules);

exports.XmlHighlightRules = XmlHighlightRules;
});

ace.define("ace/mode/html_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/css_highlight_rules","ace/mode/javascript_highlight_rules","ace/mode/xml_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var lang = require("../lib/lang");
var CssHighlightRules = require("./css_highlight_rules").CssHighlightRules;
var JavaScriptHighlightRules = require("./javascript_highlight_rules").JavaScriptHighlightRules;
var XmlHighlightRules = require("./xml_highlight_rules").XmlHighlightRules;

var tagMap = lang.createMap({
    a           : 'anchor',
    button 	    : 'form',
    form        : 'form',
    img         : 'image',
    input       : 'form',
    label       : 'form',
    option      : 'form',
    script      : 'script',
    select      : 'form',
    textarea    : 'form',
    style       : 'style',
    table       : 'table',
    tbody       : 'table',
    td          : 'table',
    tfoot       : 'table',
    th          : 'table',
    tr          : 'table'
});

var HtmlHighlightRules = function() {
    XmlHighlightRules.call(this);

    this.addRules({
        attributes: [{
            include : "tag_whitespace"
        }, {
            token : "entity.other.attribute-name.xml",
            regex : "[-_a-zA-Z0-9:.]+"
        }, {
            token : "keyword.operator.attribute-equals.xml",
            regex : "=",
            push : [{
                include: "tag_whitespace"
            }, {
                token : "string.unquoted.attribute-value.html",
                regex : "[^<>='\"`\\s]+",
                next : "pop"
            }, {
                token : "empty",
                regex : "",
                next : "pop"
            }]
        }, {
            include : "attribute_value"
        }],
        tag: [{
            token : function(start, tag) {
                var group = tagMap[tag];
                return ["meta.tag.punctuation." + (start == "<" ? "" : "end-") + "tag-open.xml",
                    "meta.tag" + (group ? "." + group : "") + ".tag-name.xml"];
            },
            regex : "(</?)([-_a-zA-Z0-9:.]+)",
            next: "tag_stuff"
        }],
        tag_stuff: [
            {include : "attributes"},
            {token : "meta.tag.punctuation.tag-close.xml", regex : "/?>", next : "start"}
        ]
    });

    this.embedTagRules(CssHighlightRules, "css-", "style");
    this.embedTagRules(new JavaScriptHighlightRules({jsx: false}).getRules(), "js-", "script");

    if (this.constructor === HtmlHighlightRules)
        this.normalizeRules();
};

oop.inherits(HtmlHighlightRules, XmlHighlightRules);

exports.HtmlHighlightRules = HtmlHighlightRules;
});

ace.define("ace/mode/elixir_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var ElixirHighlightRules = function() {

    this.$rules = { start: 
       [ { token: 
            [ 'meta.module.elixir',
              'keyword.control.module.elixir',
              'meta.module.elixir',
              'entity.name.type.module.elixir' ],
           regex: '^(\\s*)(defmodule)(\\s+)((?:[A-Z]\\w*\\s*\\.\\s*)*[A-Z]\\w*)' },
         { token: 'comment.documentation.heredoc',
           regex: '@(?:module|type)?doc (?:~[a-z])?"""',
           push: 
            [ { token: 'comment.documentation.heredoc',
                regex: '\\s*"""',
                next: 'pop' },
              { include: '#interpolated_elixir' },
              { include: '#escaped_char' },
              { defaultToken: 'comment.documentation.heredoc' } ],
           comment: '@doc with heredocs is treated as documentation' },
         { token: 'comment.documentation.heredoc',
           regex: '@(?:module|type)?doc ~[A-Z]"""',
           push: 
            [ { token: 'comment.documentation.heredoc',
                regex: '\\s*"""',
                next: 'pop' },
              { defaultToken: 'comment.documentation.heredoc' } ],
           comment: '@doc with heredocs is treated as documentation' },
         { token: 'comment.documentation.heredoc',
           regex: '@(?:module|type)?doc (?:~[a-z])?\'\'\'',
           push: 
            [ { token: 'comment.documentation.heredoc',
                regex: '\\s*\'\'\'',
                next: 'pop' },
              { include: '#interpolated_elixir' },
              { include: '#escaped_char' },
              { defaultToken: 'comment.documentation.heredoc' } ],
           comment: '@doc with heredocs is treated as documentation' },
         { token: 'comment.documentation.heredoc',
           regex: '@(?:module|type)?doc ~[A-Z]\'\'\'',
           push: 
            [ { token: 'comment.documentation.heredoc',
                regex: '\\s*\'\'\'',
                next: 'pop' },
              { defaultToken: 'comment.documentation.heredoc' } ],
           comment: '@doc with heredocs is treated as documentation' },
         { token: 'comment.documentation.false',
           regex: '@(?:module|type)?doc false',
           comment: '@doc false is treated as documentation' },
         { token: 'comment.documentation.string',
           regex: '@(?:module|type)?doc "',
           push: 
            [ { token: 'comment.documentation.string',
                regex: '"',
                next: 'pop' },
              { include: '#interpolated_elixir' },
              { include: '#escaped_char' },
              { defaultToken: 'comment.documentation.string' } ],
           comment: '@doc with string is treated as documentation' },
         { token: 'keyword.control.elixir',
           regex: '\\b(?:do|end|case|bc|lc|for|if|cond|unless|try|receive|fn|defmodule|defp?|defprotocol|defimpl|defrecord|defstruct|defmacrop?|defdelegate|defcallback|defmacrocallback|defexception|defoverridable|exit|after|rescue|catch|else|raise|throw|import|require|alias|use|quote|unquote|super)\\b(?![?!])',
           TODO: 'FIXME: regexp doesn\'t have js equivalent',
           originalRegex: '(?<!\\.)\\b(do|end|case|bc|lc|for|if|cond|unless|try|receive|fn|defmodule|defp?|defprotocol|defimpl|defrecord|defstruct|defmacrop?|defdelegate|defcallback|defmacrocallback|defexception|defoverridable|exit|after|rescue|catch|else|raise|throw|import|require|alias|use|quote|unquote|super)\\b(?![?!])' },
         { token: 'keyword.operator.elixir',
           regex: '\\b(?:and|not|or|when|xor|in|inlist|inbits)\\b',
           TODO: 'FIXME: regexp doesn\'t have js equivalent',
           originalRegex: '(?<!\\.)\\b(and|not|or|when|xor|in|inlist|inbits)\\b',
           comment: ' as above, just doesn\'t need a \'end\' and does a logic operation' },
         { token: 'constant.language.elixir',
           regex: '\\b(?:nil|true|false)\\b(?![?!])' },
         { token: 'variable.language.elixir',
           regex: '\\b__(?:CALLER|ENV|MODULE|DIR)__\\b(?![?!])' },
         { token: 
            [ 'punctuation.definition.variable.elixir',
              'variable.other.readwrite.module.elixir' ],
           regex: '(@)([a-zA-Z_]\\w*)' },
         { token: 
            [ 'punctuation.definition.variable.elixir',
              'variable.other.anonymous.elixir' ],
           regex: '(&)(\\d*)' },
         { token: 'variable.other.constant.elixir',
           regex: '\\b[A-Z]\\w*\\b' },
         { token: 'constant.numeric.elixir',
           regex: '\\b(?:0x[\\da-fA-F](?:_?[\\da-fA-F])*|\\d(?:_?\\d)*(?:\\.(?![^[:space:][:digit:]])(?:_?\\d)*)?(?:[eE][-+]?\\d(?:_?\\d)*)?|0b[01]+|0o[0-7]+)\\b',
           TODO: 'FIXME: regexp doesn\'t have js equivalent',
           originalRegex: '\\b(0x\\h(?>_?\\h)*|\\d(?>_?\\d)*(\\.(?![^[:space:][:digit:]])(?>_?\\d)*)?([eE][-+]?\\d(?>_?\\d)*)?|0b[01]+|0o[0-7]+)\\b' },
         { token: 'punctuation.definition.constant.elixir',
           regex: ':\'',
           push: 
            [ { token: 'punctuation.definition.constant.elixir',
                regex: '\'',
                next: 'pop' },
              { include: '#interpolated_elixir' },
              { include: '#escaped_char' },
              { defaultToken: 'constant.other.symbol.single-quoted.elixir' } ] },
         { token: 'punctuation.definition.constant.elixir',
           regex: ':"',
           push: 
            [ { token: 'punctuation.definition.constant.elixir',
                regex: '"',
                next: 'pop' },
              { include: '#interpolated_elixir' },
              { include: '#escaped_char' },
              { defaultToken: 'constant.other.symbol.double-quoted.elixir' } ] },
         { token: 'punctuation.definition.string.begin.elixir',
           regex: '(?:\'\'\')',
           TODO: 'FIXME: regexp doesn\'t have js equivalent',
           originalRegex: '(?>\'\'\')',
           push: 
            [ { token: 'punctuation.definition.string.end.elixir',
                regex: '^\\s*\'\'\'',
                next: 'pop' },
              { include: '#interpolated_elixir' },
              { include: '#escaped_char' },
              { defaultToken: 'support.function.variable.quoted.single.heredoc.elixir' } ],
           comment: 'Single-quoted heredocs' },
         { token: 'punctuation.definition.string.begin.elixir',
           regex: '\'',
           push: 
            [ { token: 'punctuation.definition.string.end.elixir',
                regex: '\'',
                next: 'pop' },
              { include: '#interpolated_elixir' },
              { include: '#escaped_char' },
              { defaultToken: 'support.function.variable.quoted.single.elixir' } ],
           comment: 'single quoted string (allows for interpolation)' },
         { token: 'punctuation.definition.string.begin.elixir',
           regex: '(?:""")',
           TODO: 'FIXME: regexp doesn\'t have js equivalent',
           originalRegex: '(?>""")',
           push: 
            [ { token: 'punctuation.definition.string.end.elixir',
                regex: '^\\s*"""',
                next: 'pop' },
              { include: '#interpolated_elixir' },
              { include: '#escaped_char' },
              { defaultToken: 'string.quoted.double.heredoc.elixir' } ],
           comment: 'Double-quoted heredocs' },
         { token: 'punctuation.definition.string.begin.elixir',
           regex: '"',
           push: 
            [ { token: 'punctuation.definition.string.end.elixir',
                regex: '"',
                next: 'pop' },
              { include: '#interpolated_elixir' },
              { include: '#escaped_char' },
              { defaultToken: 'string.quoted.double.elixir' } ],
           comment: 'double quoted string (allows for interpolation)' },
         { token: 'punctuation.definition.string.begin.elixir',
           regex: '~[a-z](?:""")',
           TODO: 'FIXME: regexp doesn\'t have js equivalent',
           originalRegex: '~[a-z](?>""")',
           push: 
            [ { token: 'punctuation.definition.string.end.elixir',
                regex: '^\\s*"""',
                next: 'pop' },
              { include: '#interpolated_elixir' },
              { include: '#escaped_char' },
              { defaultToken: 'string.quoted.double.heredoc.elixir' } ],
           comment: 'Double-quoted heredocs sigils' },
         { token: 'punctuation.definition.string.begin.elixir',
           regex: '~[a-z]\\{',
           push: 
            [ { token: 'punctuation.definition.string.end.elixir',
                regex: '\\}[a-z]*',
                next: 'pop' },
              { include: '#interpolated_elixir' },
              { include: '#escaped_char' },
              { defaultToken: 'string.interpolated.elixir' } ],
           comment: 'sigil (allow for interpolation)' },
         { token: 'punctuation.definition.string.begin.elixir',
           regex: '~[a-z]\\[',
           push: 
            [ { token: 'punctuation.definition.string.end.elixir',
                regex: '\\][a-z]*',
                next: 'pop' },
              { include: '#interpolated_elixir' },
              { include: '#escaped_char' },
              { defaultToken: 'string.interpolated.elixir' } ],
           comment: 'sigil (allow for interpolation)' },
         { token: 'punctuation.definition.string.begin.elixir',
           regex: '~[a-z]\\<',
           push: 
            [ { token: 'punctuation.definition.string.end.elixir',
                regex: '\\>[a-z]*',
                next: 'pop' },
              { include: '#interpolated_elixir' },
              { include: '#escaped_char' },
              { defaultToken: 'string.interpolated.elixir' } ],
           comment: 'sigil (allow for interpolation)' },
         { token: 'punctuation.definition.string.begin.elixir',
           regex: '~[a-z]\\(',
           push: 
            [ { token: 'punctuation.definition.string.end.elixir',
                regex: '\\)[a-z]*',
                next: 'pop' },
              { include: '#interpolated_elixir' },
              { include: '#escaped_char' },
              { defaultToken: 'string.interpolated.elixir' } ],
           comment: 'sigil (allow for interpolation)' },
         { token: 'punctuation.definition.string.begin.elixir',
           regex: '~[a-z][^\\w]',
           push: 
            [ { token: 'punctuation.definition.string.end.elixir',
                regex: '[^\\w][a-z]*',
                next: 'pop' },
              { include: '#interpolated_elixir' },
              { include: '#escaped_char' },
              { include: '#escaped_char' },
              { defaultToken: 'string.interpolated.elixir' } ],
           comment: 'sigil (allow for interpolation)' },
         { token: 'punctuation.definition.string.begin.elixir',
           regex: '~[A-Z](?:""")',
           TODO: 'FIXME: regexp doesn\'t have js equivalent',
           originalRegex: '~[A-Z](?>""")',
           push: 
            [ { token: 'punctuation.definition.string.end.elixir',
                regex: '^\\s*"""',
                next: 'pop' },
              { defaultToken: 'string.quoted.other.literal.upper.elixir' } ],
           comment: 'Double-quoted heredocs sigils' },
         { token: 'punctuation.definition.string.begin.elixir',
           regex: '~[A-Z]\\{',
           push: 
            [ { token: 'punctuation.definition.string.end.elixir',
                regex: '\\}[a-z]*',
                next: 'pop' },
              { defaultToken: 'string.quoted.other.literal.upper.elixir' } ],
           comment: 'sigil (without interpolation)' },
         { token: 'punctuation.definition.string.begin.elixir',
           regex: '~[A-Z]\\[',
           push: 
            [ { token: 'punctuation.definition.string.end.elixir',
                regex: '\\][a-z]*',
                next: 'pop' },
              { defaultToken: 'string.quoted.other.literal.upper.elixir' } ],
           comment: 'sigil (without interpolation)' },
         { token: 'punctuation.definition.string.begin.elixir',
           regex: '~[A-Z]\\<',
           push: 
            [ { token: 'punctuation.definition.string.end.elixir',
                regex: '\\>[a-z]*',
                next: 'pop' },
              { defaultToken: 'string.quoted.other.literal.upper.elixir' } ],
           comment: 'sigil (without interpolation)' },
         { token: 'punctuation.definition.string.begin.elixir',
           regex: '~[A-Z]\\(',
           push: 
            [ { token: 'punctuation.definition.string.end.elixir',
                regex: '\\)[a-z]*',
                next: 'pop' },
              { defaultToken: 'string.quoted.other.literal.upper.elixir' } ],
           comment: 'sigil (without interpolation)' },
         { token: 'punctuation.definition.string.begin.elixir',
           regex: '~[A-Z][^\\w]',
           push: 
            [ { token: 'punctuation.definition.string.end.elixir',
                regex: '[^\\w][a-z]*',
                next: 'pop' },
              { defaultToken: 'string.quoted.other.literal.upper.elixir' } ],
           comment: 'sigil (without interpolation)' },
         { token: ['punctuation.definition.constant.elixir', 'constant.other.symbol.elixir'],
           regex: '(:)([a-zA-Z_][\\w@]*(?:[?!]|=(?![>=]))?|\\<\\>|===?|!==?|<<>>|<<<|>>>|~~~|::|<\\-|\\|>|=>|~|~=|=|/|\\\\\\\\|\\*\\*?|\\.\\.?\\.?|>=?|<=?|&&?&?|\\+\\+?|\\-\\-?|\\|\\|?\\|?|\\!|@|\\%?\\{\\}|%|\\[\\]|\\^(?:\\^\\^)?)',
           TODO: 'FIXME: regexp doesn\'t have js equivalent',
           originalRegex: '(?<!:)(:)(?>[a-zA-Z_][\\w@]*(?>[?!]|=(?![>=]))?|\\<\\>|===?|!==?|<<>>|<<<|>>>|~~~|::|<\\-|\\|>|=>|~|~=|=|/|\\\\\\\\|\\*\\*?|\\.\\.?\\.?|>=?|<=?|&&?&?|\\+\\+?|\\-\\-?|\\|\\|?\\|?|\\!|@|\\%?\\{\\}|%|\\[\\]|\\^(\\^\\^)?)',
           comment: 'symbols' },
         { token: 'punctuation.definition.constant.elixir',
           regex: '(?:[a-zA-Z_][\\w@]*(?:[?!])?):(?!:)',
           TODO: 'FIXME: regexp doesn\'t have js equivalent',
           originalRegex: '(?>[a-zA-Z_][\\w@]*(?>[?!])?)(:)(?!:)',
           comment: 'symbols' },
         { token: 
            [ 'punctuation.definition.comment.elixir',
              'comment.line.number-sign.elixir' ],
           regex: '(#)(.*)' },
         { token: 'constant.numeric.elixir',
           regex: '\\?(?:\\\\(?:x[\\da-fA-F]{1,2}(?![\\da-fA-F])\\b|[^xMC])|[^\\s\\\\])',
           TODO: 'FIXME: regexp doesn\'t have js equivalent',
           originalRegex: '(?<!\\w)\\?(\\\\(x\\h{1,2}(?!\\h)\\b|[^xMC])|[^\\s\\\\])',
           comment: '\n\t\t\tmatches questionmark-letters.\n\n\t\t\texamples (1st alternation = hex):\n\t\t\t?\\x1     ?\\x61\n\n\t\t\texamples (2rd alternation = escaped):\n\t\t\t?\\n      ?\\b\n\n\t\t\texamples (3rd alternation = normal):\n\t\t\t?a       ?A       ?0 \n\t\t\t?*       ?"       ?( \n\t\t\t?.       ?#\n\t\t\t\n\t\t\tthe negative lookbehind prevents against matching\n\t\t\tp(42.tainted?)\n\t\t\t' },
         { token: 'keyword.operator.assignment.augmented.elixir',
           regex: '\\+=|\\-=|\\|\\|=|~=|&&=' },
         { token: 'keyword.operator.comparison.elixir',
           regex: '===?|!==?|<=?|>=?' },
         { token: 'keyword.operator.bitwise.elixir',
           regex: '\\|{3}|&{3}|\\^{3}|<{3}|>{3}|~{3}' },
         { token: 'keyword.operator.logical.elixir',
           regex: '!+|\\bnot\\b|&&|\\band\\b|\\|\\||\\bor\\b|\\bxor\\b',
           originalRegex: '(?<=[ \\t])!+|\\bnot\\b|&&|\\band\\b|\\|\\||\\bor\\b|\\bxor\\b' },
         { token: 'keyword.operator.arithmetic.elixir',
           regex: '\\*|\\+|\\-|/' },
         { token: 'keyword.operator.other.elixir',
           regex: '\\||\\+\\+|\\-\\-|\\*\\*|\\\\\\\\|\\<\\-|\\<\\>|\\<\\<|\\>\\>|\\:\\:|\\.\\.|\\|>|~|=>' },
         { token: 'keyword.operator.assignment.elixir', regex: '=' },
         { token: 'punctuation.separator.other.elixir', regex: ':' },
         { token: 'punctuation.separator.statement.elixir',
           regex: '\\;' },
         { token: 'punctuation.separator.object.elixir', regex: ',' },
         { token: 'punctuation.separator.method.elixir', regex: '\\.' },
         { token: 'punctuation.section.scope.elixir', regex: '\\{|\\}' },
         { token: 'punctuation.section.array.elixir', regex: '\\[|\\]' },
         { token: 'punctuation.section.function.elixir',
           regex: '\\(|\\)' } ],
      '#escaped_char': 
       [ { token: 'constant.character.escape.elixir',
           regex: '\\\\(?:x[\\da-fA-F]{1,2}|.)' } ],
      '#interpolated_elixir': 
       [ { token: 
            [ 'source.elixir.embedded.source',
              'source.elixir.embedded.source.empty' ],
           regex: '(#\\{)(\\})' },
         { todo: 
            { token: 'punctuation.section.embedded.elixir',
              regex: '#\\{',
              push: 
               [ { token: 'punctuation.section.embedded.elixir',
                   regex: '\\}',
                   next: 'pop' },
                 { include: '#nest_curly_and_self' },
                 { include: '$self' },
                 { defaultToken: 'source.elixir.embedded.source' } ] } } ],
      '#nest_curly_and_self': 
       [ { token: 'punctuation.section.scope.elixir',
           regex: '\\{',
           push: 
            [ { token: 'punctuation.section.scope.elixir',
                regex: '\\}',
                next: 'pop' },
              { include: '#nest_curly_and_self' } ] },
         { include: '$self' } ],
      '#regex_sub': 
       [ { include: '#interpolated_elixir' },
         { include: '#escaped_char' },
         { token: 
            [ 'punctuation.definition.arbitrary-repitition.elixir',
              'string.regexp.arbitrary-repitition.elixir',
              'string.regexp.arbitrary-repitition.elixir',
              'punctuation.definition.arbitrary-repitition.elixir' ],
           regex: '(\\{)(\\d+)((?:,\\d+)?)(\\})' },
         { token: 'punctuation.definition.character-class.elixir',
           regex: '\\[(?:\\^?\\])?',
           push: 
            [ { token: 'punctuation.definition.character-class.elixir',
                regex: '\\]',
                next: 'pop' },
              { include: '#escaped_char' },
              { defaultToken: 'string.regexp.character-class.elixir' } ] },
         { token: 'punctuation.definition.group.elixir',
           regex: '\\(',
           push: 
            [ { token: 'punctuation.definition.group.elixir',
                regex: '\\)',
                next: 'pop' },
              { include: '#regex_sub' },
              { defaultToken: 'string.regexp.group.elixir' } ] },
         { token: 
            [ 'punctuation.definition.comment.elixir',
              'comment.line.number-sign.elixir' ],
           regex: '(?:^|\\s)(#)(\\s[[a-zA-Z0-9,. \\t?!-][^\\x00-\\x7F]]*$)',
           originalRegex: '(?<=^|\\s)(#)\\s[[a-zA-Z0-9,. \\t?!-][^\\x{00}-\\x{7F}]]*$',
           comment: 'We are restrictive in what we allow to go after the comment character to avoid false positives, since the availability of comments depend on regexp flags.' } ] }
    
    this.normalizeRules();
};

ElixirHighlightRules.metaData = { comment: 'Textmate bundle for Elixir Programming Language.',
      fileTypes: [ 'ex', 'exs' ],
      firstLineMatch: '^#!/.*\\belixir',
      foldingStartMarker: '(after|else|catch|rescue|\\-\\>|\\{|\\[|do)\\s*$',
      foldingStopMarker: '^\\s*((\\}|\\]|after|else|catch|rescue)\\s*$|end\\b)',
      keyEquivalent: '^~E',
      name: 'Elixir',
      scopeName: 'source.elixir' }


oop.inherits(ElixirHighlightRules, TextHighlightRules);

exports.ElixirHighlightRules = ElixirHighlightRules;
});

ace.define("ace/mode/html_elixir_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/html_highlight_rules","ace/mode/elixir_highlight_rules"], function(require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var HtmlHighlightRules = require("./html_highlight_rules").HtmlHighlightRules;
    var ElixirHighlightRules = require("./elixir_highlight_rules").ElixirHighlightRules;

    var HtmlElixirHighlightRules = function() {
        HtmlHighlightRules.call(this);

        var startRules = [
            {
                regex: "<%%|%%>",
                token: "constant.language.escape"
            }, {
                token : "comment.start.eex",
                regex : "<%#",
                push  : [{
                    token : "comment.end.eex",
                    regex: "%>",
                    next: "pop",
                    defaultToken:"comment"
                }]
            }, {
                token : "support.elixir_tag",
                regex : "<%+(?!>)[-=]?",
                push  : "elixir-start"
            }
        ];

        var endRules = [
            {
                token : "support.elixir_tag",
                regex : "%>",
                next  : "pop"
            }, {
                token: "comment",
                regex: "#(?:[^%]|%[^>])*"
            }
        ];

        for (var key in this.$rules)
            this.$rules[key].unshift.apply(this.$rules[key], startRules);

        this.embedRules(ElixirHighlightRules, "elixir-", endRules, ["start"]);

        this.normalizeRules();
    };


    oop.inherits(HtmlElixirHighlightRules, HtmlHighlightRules);

    exports.HtmlElixirHighlightRules = HtmlElixirHighlightRules;
});

ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"], function(require, exports, module) {
"use strict";

var Range = require("../range").Range;

var MatchingBraceOutdent = function() {};

(function() {

    this.checkOutdent = function(line, input) {
        if (! /^\s+$/.test(line))
            return false;

        return /^\s*\}/.test(input);
    };

    this.autoOutdent = function(doc, row) {
        var line = doc.getLine(row);
        var match = line.match(/^(\s*\})/);

        if (!match) return 0;

        var column = match[1].length;
        var openBracePos = doc.findMatchingBracket({row: row, column: column});

        if (!openBracePos || openBracePos.row == row) return 0;

        var indent = this.$getIndent(doc.getLine(openBracePos.row));
        doc.replace(new Range(row, 0, row, column-1), indent);
    };

    this.$getIndent = function(line) {
        return line.match(/^\s*/)[0];
    };

}).call(MatchingBraceOutdent.prototype);

exports.MatchingBraceOutdent = MatchingBraceOutdent;
});

ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(require, exports, module) {
"use strict";

var oop = require("../../lib/oop");
var Range = require("../../range").Range;
var BaseFoldMode = require("./fold_mode").FoldMode;

var FoldMode = exports.FoldMode = function(commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(
            this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
        );
        this.foldingStopMarker = new RegExp(
            this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
        );
    }
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {
    
    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe= /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
    
        if (this.singleLineBlockCommentRe.test(line)) {
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                return "";
        }
    
        var fw = this._getFoldWidgetBase(session, foldStyle, row);
    
        if (!fw && this.startRegionRe.test(line))
            return "start"; // lineCommentRegionStart
    
        return fw;
    };

    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);
        
        if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);
        
        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;

            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);
                
            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
            
            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                } else if (foldStyle != "all")
                    range = null;
            }
            
            return range;
        }

        if (foldStyle === "markbegin")
            return;

        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;

            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);

            return session.getCommentFoldRange(row, i, -1);
        }
    };
    
    this.getSectionRange = function(session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if  (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);
            
            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                } else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                } else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }
        
        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function(session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;
        
        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m) continue;
            if (m[1]) depth--;
            else depth++;

            if (!depth) break;
        }

        var endRow = row;
        if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
        }
    };

}).call(FoldMode.prototype);

});

ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var JavaScriptHighlightRules = require("./javascript_highlight_rules").JavaScriptHighlightRules;
var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;
var Range = require("../range").Range;
var WorkerClient = require("../worker/worker_client").WorkerClient;
var CstyleBehaviour = require("./behaviour/cstyle").CstyleBehaviour;
var CStyleFoldMode = require("./folding/cstyle").FoldMode;

var Mode = function() {
    this.HighlightRules = JavaScriptHighlightRules;
    
    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = new CstyleBehaviour();
    this.foldingRules = new CStyleFoldMode();
};
oop.inherits(Mode, TextMode);

(function() {

    this.lineCommentStart = "//";
    this.blockComment = {start: "/*", end: "*/"};

    this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);

        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
        var tokens = tokenizedLine.tokens;
        var endState = tokenizedLine.state;

        if (tokens.length && tokens[tokens.length-1].type == "comment") {
            return indent;
        }

        if (state == "start" || state == "no_regex") {
            var match = line.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);
            if (match) {
                indent += tab;
            }
        } else if (state == "doc-start") {
            if (endState == "start" || endState == "no_regex") {
                return "";
            }
            var match = line.match(/^\s*(\/?)\*/);
            if (match) {
                if (match[1]) {
                    indent += " ";
                }
                indent += "* ";
            }
        }

        return indent;
    };

    this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
    };

    this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
    };

    this.createWorker = function(session) {
        var worker = new WorkerClient(["ace"], "ace/mode/javascript_worker", "JavaScriptWorker");
        worker.attachToDocument(session.getDocument());

        worker.on("annotate", function(results) {
            session.setAnnotations(results.data);
        });

        worker.on("terminate", function() {
            session.clearAnnotations();
        });

        return worker;
    };

    this.$id = "ace/mode/javascript";
}).call(Mode.prototype);

exports.Mode = Mode;
});

ace.define("ace/mode/css_completions",["require","exports","module"], function(require, exports, module) {
"use strict";

var propertyMap = {
    "background": {"#$0": 1},
    "background-color": {"#$0": 1, "transparent": 1, "fixed": 1},
    "background-image": {"url('/$0')": 1},
    "background-repeat": {"repeat": 1, "repeat-x": 1, "repeat-y": 1, "no-repeat": 1, "inherit": 1},
    "background-position": {"bottom":2, "center":2, "left":2, "right":2, "top":2, "inherit":2},
    "background-attachment": {"scroll": 1, "fixed": 1},
    "background-size": {"cover": 1, "contain": 1},
    "background-clip": {"border-box": 1, "padding-box": 1, "content-box": 1},
    "background-origin": {"border-box": 1, "padding-box": 1, "content-box": 1},
    "border": {"solid $0": 1, "dashed $0": 1, "dotted $0": 1, "#$0": 1},
    "border-color": {"#$0": 1},
    "border-style": {"solid":2, "dashed":2, "dotted":2, "double":2, "groove":2, "hidden":2, "inherit":2, "inset":2, "none":2, "outset":2, "ridged":2},
    "border-collapse": {"collapse": 1, "separate": 1},
    "bottom": {"px": 1, "em": 1, "%": 1},
    "clear": {"left": 1, "right": 1, "both": 1, "none": 1},
    "color": {"#$0": 1, "rgb(#$00,0,0)": 1},
    "cursor": {"default": 1, "pointer": 1, "move": 1, "text": 1, "wait": 1, "help": 1, "progress": 1, "n-resize": 1, "ne-resize": 1, "e-resize": 1, "se-resize": 1, "s-resize": 1, "sw-resize": 1, "w-resize": 1, "nw-resize": 1},
    "display": {"none": 1, "block": 1, "inline": 1, "inline-block": 1, "table-cell": 1},
    "empty-cells": {"show": 1, "hide": 1},
    "float": {"left": 1, "right": 1, "none": 1},
    "font-family": {"Arial":2,"Comic Sans MS":2,"Consolas":2,"Courier New":2,"Courier":2,"Georgia":2,"Monospace":2,"Sans-Serif":2, "Segoe UI":2,"Tahoma":2,"Times New Roman":2,"Trebuchet MS":2,"Verdana": 1},
    "font-size": {"px": 1, "em": 1, "%": 1},
    "font-weight": {"bold": 1, "normal": 1},
    "font-style": {"italic": 1, "normal": 1},
    "font-variant": {"normal": 1, "small-caps": 1},
    "height": {"px": 1, "em": 1, "%": 1},
    "left": {"px": 1, "em": 1, "%": 1},
    "letter-spacing": {"normal": 1},
    "line-height": {"normal": 1},
    "list-style-type": {"none": 1, "disc": 1, "circle": 1, "square": 1, "decimal": 1, "decimal-leading-zero": 1, "lower-roman": 1, "upper-roman": 1, "lower-greek": 1, "lower-latin": 1, "upper-latin": 1, "georgian": 1, "lower-alpha": 1, "upper-alpha": 1},
    "margin": {"px": 1, "em": 1, "%": 1},
    "margin-right": {"px": 1, "em": 1, "%": 1},
    "margin-left": {"px": 1, "em": 1, "%": 1},
    "margin-top": {"px": 1, "em": 1, "%": 1},
    "margin-bottom": {"px": 1, "em": 1, "%": 1},
    "max-height": {"px": 1, "em": 1, "%": 1},
    "max-width": {"px": 1, "em": 1, "%": 1},
    "min-height": {"px": 1, "em": 1, "%": 1},
    "min-width": {"px": 1, "em": 1, "%": 1},
    "overflow": {"hidden": 1, "visible": 1, "auto": 1, "scroll": 1},
    "overflow-x": {"hidden": 1, "visible": 1, "auto": 1, "scroll": 1},
    "overflow-y": {"hidden": 1, "visible": 1, "auto": 1, "scroll": 1},
    "padding": {"px": 1, "em": 1, "%": 1},
    "padding-top": {"px": 1, "em": 1, "%": 1},
    "padding-right": {"px": 1, "em": 1, "%": 1},
    "padding-bottom": {"px": 1, "em": 1, "%": 1},
    "padding-left": {"px": 1, "em": 1, "%": 1},
    "page-break-after": {"auto": 1, "always": 1, "avoid": 1, "left": 1, "right": 1},
    "page-break-before": {"auto": 1, "always": 1, "avoid": 1, "left": 1, "right": 1},
    "position": {"absolute": 1, "relative": 1, "fixed": 1, "static": 1},
    "right": {"px": 1, "em": 1, "%": 1},
    "table-layout": {"fixed": 1, "auto": 1},
    "text-decoration": {"none": 1, "underline": 1, "line-through": 1, "blink": 1},
    "text-align": {"left": 1, "right": 1, "center": 1, "justify": 1},
    "text-transform": {"capitalize": 1, "uppercase": 1, "lowercase": 1, "none": 1},
    "top": {"px": 1, "em": 1, "%": 1},
    "vertical-align": {"top": 1, "bottom": 1},
    "visibility": {"hidden": 1, "visible": 1},
    "white-space": {"nowrap": 1, "normal": 1, "pre": 1, "pre-line": 1, "pre-wrap": 1},
    "width": {"px": 1, "em": 1, "%": 1},
    "word-spacing": {"normal": 1},
    "filter": {"alpha(opacity=$0100)": 1},

    "text-shadow": {"$02px 2px 2px #777": 1},
    "text-overflow": {"ellipsis-word": 1, "clip": 1, "ellipsis": 1},
    "-moz-border-radius": 1,
    "-moz-border-radius-topright": 1,
    "-moz-border-radius-bottomright": 1,
    "-moz-border-radius-topleft": 1,
    "-moz-border-radius-bottomleft": 1,
    "-webkit-border-radius": 1,
    "-webkit-border-top-right-radius": 1,
    "-webkit-border-top-left-radius": 1,
    "-webkit-border-bottom-right-radius": 1,
    "-webkit-border-bottom-left-radius": 1,
    "-moz-box-shadow": 1,
    "-webkit-box-shadow": 1,
    "transform": {"rotate($00deg)": 1, "skew($00deg)": 1},
    "-moz-transform": {"rotate($00deg)": 1, "skew($00deg)": 1},
    "-webkit-transform": {"rotate($00deg)": 1, "skew($00deg)": 1 }
};

var CssCompletions = function() {

};

(function() {

    this.completionsDefined = false;

    this.defineCompletions = function() {
        if (document) {
            var style = document.createElement('c').style;

            for (var i in style) {
                if (typeof style[i] !== 'string')
                    continue;

                var name = i.replace(/[A-Z]/g, function(x) {
                    return '-' + x.toLowerCase();
                });

                if (!propertyMap.hasOwnProperty(name))
                    propertyMap[name] = 1;
            }
        }

        this.completionsDefined = true;
    }

    this.getCompletions = function(state, session, pos, prefix) {
        if (!this.completionsDefined) {
            this.defineCompletions();
        }

        var token = session.getTokenAt(pos.row, pos.column);

        if (!token)
            return [];
        if (state==='ruleset'){
            var line = session.getLine(pos.row).substr(0, pos.column);
            if (/:[^;]+$/.test(line)) {
                /([\w\-]+):[^:]*$/.test(line);

                return this.getPropertyValueCompletions(state, session, pos, prefix);
            } else {
                return this.getPropertyCompletions(state, session, pos, prefix);
            }
        }

        return [];
    };

    this.getPropertyCompletions = function(state, session, pos, prefix) {
        var properties = Object.keys(propertyMap);
        return properties.map(function(property){
            return {
                caption: property,
                snippet: property + ': $0',
                meta: "property",
                score: Number.MAX_VALUE
            };
        });
    };

    this.getPropertyValueCompletions = function(state, session, pos, prefix) {
        var line = session.getLine(pos.row).substr(0, pos.column);
        var property = (/([\w\-]+):[^:]*$/.exec(line) || {})[1];

        if (!property)
            return [];
        var values = [];
        if (property in propertyMap && typeof propertyMap[property] === "object") {
            values = Object.keys(propertyMap[property]);
        }
        return values.map(function(value){
            return {
                caption: value,
                snippet: value,
                meta: "property value",
                score: Number.MAX_VALUE
            };
        });
    };

}).call(CssCompletions.prototype);

exports.CssCompletions = CssCompletions;
});

ace.define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"], function(require, exports, module) {
"use strict";

var oop = require("../../lib/oop");
var Behaviour = require("../behaviour").Behaviour;
var CstyleBehaviour = require("./cstyle").CstyleBehaviour;
var TokenIterator = require("../../token_iterator").TokenIterator;

var CssBehaviour = function () {

    this.inherit(CstyleBehaviour);

    this.add("colon", "insertion", function (state, action, editor, session, text) {
        if (text === ':') {
            var cursor = editor.getCursorPosition();
            var iterator = new TokenIterator(session, cursor.row, cursor.column);
            var token = iterator.getCurrentToken();
            if (token && token.value.match(/\s+/)) {
                token = iterator.stepBackward();
            }
            if (token && token.type === 'support.type') {
                var line = session.doc.getLine(cursor.row);
                var rightChar = line.substring(cursor.column, cursor.column + 1);
                if (rightChar === ':') {
                    return {
                       text: '',
                       selection: [1, 1]
                    }
                }
                if (!line.substring(cursor.column).match(/^\s*;/)) {
                    return {
                       text: ':;',
                       selection: [1, 1]
                    }
                }
            }
        }
    });

    this.add("colon", "deletion", function (state, action, editor, session, range) {
        var selected = session.doc.getTextRange(range);
        if (!range.isMultiLine() && selected === ':') {
            var cursor = editor.getCursorPosition();
            var iterator = new TokenIterator(session, cursor.row, cursor.column);
            var token = iterator.getCurrentToken();
            if (token && token.value.match(/\s+/)) {
                token = iterator.stepBackward();
            }
            if (token && token.type === 'support.type') {
                var line = session.doc.getLine(range.start.row);
                var rightChar = line.substring(range.end.column, range.end.column + 1);
                if (rightChar === ';') {
                    range.end.column ++;
                    return range;
                }
            }
        }
    });

    this.add("semicolon", "insertion", function (state, action, editor, session, text) {
        if (text === ';') {
            var cursor = editor.getCursorPosition();
            var line = session.doc.getLine(cursor.row);
            var rightChar = line.substring(cursor.column, cursor.column + 1);
            if (rightChar === ';') {
                return {
                   text: '',
                   selection: [1, 1]
                }
            }
        }
    });

}
oop.inherits(CssBehaviour, CstyleBehaviour);

exports.CssBehaviour = CssBehaviour;
});

ace.define("ace/mode/css",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/css_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/css_completions","ace/mode/behaviour/css","ace/mode/folding/cstyle"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var CssHighlightRules = require("./css_highlight_rules").CssHighlightRules;
var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;
var WorkerClient = require("../worker/worker_client").WorkerClient;
var CssCompletions = require("./css_completions").CssCompletions;
var CssBehaviour = require("./behaviour/css").CssBehaviour;
var CStyleFoldMode = require("./folding/cstyle").FoldMode;

var Mode = function() {
    this.HighlightRules = CssHighlightRules;
    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = new CssBehaviour();
    this.$completer = new CssCompletions();
    this.foldingRules = new CStyleFoldMode();
};
oop.inherits(Mode, TextMode);

(function() {

    this.foldingRules = "cStyle";
    this.blockComment = {start: "/*", end: "*/"};

    this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);
        var tokens = this.getTokenizer().getLineTokens(line, state).tokens;
        if (tokens.length && tokens[tokens.length-1].type == "comment") {
            return indent;
        }

        var match = line.match(/^.*\{\s*$/);
        if (match) {
            indent += tab;
        }

        return indent;
    };

    this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
    };

    this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
    };

    this.getCompletions = function(state, session, pos, prefix) {
        return this.$completer.getCompletions(state, session, pos, prefix);
    };

    this.createWorker = function(session) {
        var worker = new WorkerClient(["ace"], "ace/mode/css_worker", "Worker");
        worker.attachToDocument(session.getDocument());

        worker.on("annotate", function(e) {
            session.setAnnotations(e.data);
        });

        worker.on("terminate", function() {
            session.clearAnnotations();
        });

        return worker;
    };

    this.$id = "ace/mode/css";
}).call(Mode.prototype);

exports.Mode = Mode;

});

ace.define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"], function(require, exports, module) {
"use strict";

var oop = require("../../lib/oop");
var Behaviour = require("../behaviour").Behaviour;
var TokenIterator = require("../../token_iterator").TokenIterator;
var lang = require("../../lib/lang");

function is(token, type) {
    return token.type.lastIndexOf(type + ".xml") > -1;
}

var XmlBehaviour = function () {

    this.add("string_dquotes", "insertion", function (state, action, editor, session, text) {
        if (text == '"' || text == "'") {
            var quote = text;
            var selected = session.doc.getTextRange(editor.getSelectionRange());
            if (selected !== "" && selected !== "'" && selected != '"' && editor.getWrapBehavioursEnabled()) {
                return {
                    text: quote + selected + quote,
                    selection: false
                };
            }

            var cursor = editor.getCursorPosition();
            var line = session.doc.getLine(cursor.row);
            var rightChar = line.substring(cursor.column, cursor.column + 1);
            var iterator = new TokenIterator(session, cursor.row, cursor.column);
            var token = iterator.getCurrentToken();

            if (rightChar == quote && (is(token, "attribute-value") || is(token, "string"))) {
                return {
                    text: "",
                    selection: [1, 1]
                };
            }

            if (!token)
                token = iterator.stepBackward();

            if (!token)
                return;

            while (is(token, "tag-whitespace") || is(token, "whitespace")) {
                token = iterator.stepBackward();
            }
            var rightSpace = !rightChar || rightChar.match(/\s/);
            if (is(token, "attribute-equals") && (rightSpace || rightChar == '>') || (is(token, "decl-attribute-equals") && (rightSpace || rightChar == '?'))) {
                return {
                    text: quote + quote,
                    selection: [1, 1]
                };
            }
        }
    });

    this.add("string_dquotes", "deletion", function(state, action, editor, session, range) {
        var selected = session.doc.getTextRange(range);
        if (!range.isMultiLine() && (selected == '"' || selected == "'")) {
            var line = session.doc.getLine(range.start.row);
            var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
            if (rightChar == selected) {
                range.end.column++;
                return range;
            }
        }
    });

    this.add("autoclosing", "insertion", function (state, action, editor, session, text) {
        if (text == '>') {
            var position = editor.getSelectionRange().start;
            var iterator = new TokenIterator(session, position.row, position.column);
            var token = iterator.getCurrentToken() || iterator.stepBackward();
            if (!token || !(is(token, "tag-name") || is(token, "tag-whitespace") || is(token, "attribute-name") || is(token, "attribute-equals") || is(token, "attribute-value")))
                return;
            if (is(token, "reference.attribute-value"))
                return;
            if (is(token, "attribute-value")) {
                var firstChar = token.value.charAt(0);
                if (firstChar == '"' || firstChar == "'") {
                    var lastChar = token.value.charAt(token.value.length - 1);
                    var tokenEnd = iterator.getCurrentTokenColumn() + token.value.length;
                    if (tokenEnd > position.column || tokenEnd == position.column && firstChar != lastChar)
                        return;
                }
            }
            while (!is(token, "tag-name")) {
                token = iterator.stepBackward();
                if (token.value == "<") {
                    token = iterator.stepForward();
                    break;
                }
            }

            var tokenRow = iterator.getCurrentTokenRow();
            var tokenColumn = iterator.getCurrentTokenColumn();
            if (is(iterator.stepBackward(), "end-tag-open"))
                return;

            var element = token.value;
            if (tokenRow == position.row)
                element = element.substring(0, position.column - tokenColumn);

            if (this.voidElements.hasOwnProperty(element.toLowerCase()))
                 return;

            return {
               text: ">" + "</" + element + ">",
               selection: [1, 1]
            };
        }
    });

    this.add("autoindent", "insertion", function (state, action, editor, session, text) {
        if (text == "\n") {
            var cursor = editor.getCursorPosition();
            var line = session.getLine(cursor.row);
            var iterator = new TokenIterator(session, cursor.row, cursor.column);
            var token = iterator.getCurrentToken();

            if (token && token.type.indexOf("tag-close") !== -1) {
                if (token.value == "/>")
                    return;
                while (token && token.type.indexOf("tag-name") === -1) {
                    token = iterator.stepBackward();
                }

                if (!token) {
                    return;
                }

                var tag = token.value;
                var row = iterator.getCurrentTokenRow();
                token = iterator.stepBackward();
                if (!token || token.type.indexOf("end-tag") !== -1) {
                    return;
                }

                if (this.voidElements && !this.voidElements[tag]) {
                    var nextToken = session.getTokenAt(cursor.row, cursor.column+1);
                    var line = session.getLine(row);
                    var nextIndent = this.$getIndent(line);
                    var indent = nextIndent + session.getTabString();

                    if (nextToken && nextToken.value === "</") {
                        return {
                            text: "\n" + indent + "\n" + nextIndent,
                            selection: [1, indent.length, 1, indent.length]
                        };
                    } else {
                        return {
                            text: "\n" + indent
                        };
                    }
                }
            }
        }
    });

};

oop.inherits(XmlBehaviour, Behaviour);

exports.XmlBehaviour = XmlBehaviour;
});

ace.define("ace/mode/folding/mixed",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode"], function(require, exports, module) {
"use strict";

var oop = require("../../lib/oop");
var BaseFoldMode = require("./fold_mode").FoldMode;

var FoldMode = exports.FoldMode = function(defaultMode, subModes) {
    this.defaultMode = defaultMode;
    this.subModes = subModes;
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {


    this.$getMode = function(state) {
        if (typeof state != "string") 
            state = state[0];
        for (var key in this.subModes) {
            if (state.indexOf(key) === 0)
                return this.subModes[key];
        }
        return null;
    };
    
    this.$tryMode = function(state, session, foldStyle, row) {
        var mode = this.$getMode(state);
        return (mode ? mode.getFoldWidget(session, foldStyle, row) : "");
    };

    this.getFoldWidget = function(session, foldStyle, row) {
        return (
            this.$tryMode(session.getState(row-1), session, foldStyle, row) ||
            this.$tryMode(session.getState(row), session, foldStyle, row) ||
            this.defaultMode.getFoldWidget(session, foldStyle, row)
        );
    };

    this.getFoldWidgetRange = function(session, foldStyle, row) {
        var mode = this.$getMode(session.getState(row-1));
        
        if (!mode || !mode.getFoldWidget(session, foldStyle, row))
            mode = this.$getMode(session.getState(row));
        
        if (!mode || !mode.getFoldWidget(session, foldStyle, row))
            mode = this.defaultMode;
        
        return mode.getFoldWidgetRange(session, foldStyle, row);
    };

}).call(FoldMode.prototype);

});

ace.define("ace/mode/folding/xml",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/range","ace/mode/folding/fold_mode","ace/token_iterator"], function(require, exports, module) {
"use strict";

var oop = require("../../lib/oop");
var lang = require("../../lib/lang");
var Range = require("../../range").Range;
var BaseFoldMode = require("./fold_mode").FoldMode;
var TokenIterator = require("../../token_iterator").TokenIterator;

var FoldMode = exports.FoldMode = function(voidElements, optionalEndTags) {
    BaseFoldMode.call(this);
    this.voidElements = voidElements || {};
    this.optionalEndTags = oop.mixin({}, this.voidElements);
    if (optionalEndTags)
        oop.mixin(this.optionalEndTags, optionalEndTags);
    
};
oop.inherits(FoldMode, BaseFoldMode);

var Tag = function() {
    this.tagName = "";
    this.closing = false;
    this.selfClosing = false;
    this.start = {row: 0, column: 0};
    this.end = {row: 0, column: 0};
};

function is(token, type) {
    return token.type.lastIndexOf(type + ".xml") > -1;
}

(function() {

    this.getFoldWidget = function(session, foldStyle, row) {
        var tag = this._getFirstTagInLine(session, row);

        if (!tag)
            return "";

        if (tag.closing || (!tag.tagName && tag.selfClosing))
            return foldStyle == "markbeginend" ? "end" : "";

        if (!tag.tagName || tag.selfClosing || this.voidElements.hasOwnProperty(tag.tagName.toLowerCase()))
            return "";

        if (this._findEndTagInLine(session, row, tag.tagName, tag.end.column))
            return "";

        return "start";
    };
    this._getFirstTagInLine = function(session, row) {
        var tokens = session.getTokens(row);
        var tag = new Tag();

        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (is(token, "tag-open")) {
                tag.end.column = tag.start.column + token.value.length;
                tag.closing = is(token, "end-tag-open");
                token = tokens[++i];
                if (!token)
                    return null;
                tag.tagName = token.value;
                tag.end.column += token.value.length;
                for (i++; i < tokens.length; i++) {
                    token = tokens[i];
                    tag.end.column += token.value.length;
                    if (is(token, "tag-close")) {
                        tag.selfClosing = token.value == '/>';
                        break;
                    }
                }
                return tag;
            } else if (is(token, "tag-close")) {
                tag.selfClosing = token.value == '/>';
                return tag;
            }
            tag.start.column += token.value.length;
        }

        return null;
    };

    this._findEndTagInLine = function(session, row, tagName, startColumn) {
        var tokens = session.getTokens(row);
        var column = 0;
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            column += token.value.length;
            if (column < startColumn)
                continue;
            if (is(token, "end-tag-open")) {
                token = tokens[i + 1];
                if (token && token.value == tagName)
                    return true;
            }
        }
        return false;
    };
    this._readTagForward = function(iterator) {
        var token = iterator.getCurrentToken();
        if (!token)
            return null;

        var tag = new Tag();
        do {
            if (is(token, "tag-open")) {
                tag.closing = is(token, "end-tag-open");
                tag.start.row = iterator.getCurrentTokenRow();
                tag.start.column = iterator.getCurrentTokenColumn();
            } else if (is(token, "tag-name")) {
                tag.tagName = token.value;
            } else if (is(token, "tag-close")) {
                tag.selfClosing = token.value == "/>";
                tag.end.row = iterator.getCurrentTokenRow();
                tag.end.column = iterator.getCurrentTokenColumn() + token.value.length;
                iterator.stepForward();
                return tag;
            }
        } while(token = iterator.stepForward());

        return null;
    };
    
    this._readTagBackward = function(iterator) {
        var token = iterator.getCurrentToken();
        if (!token)
            return null;

        var tag = new Tag();
        do {
            if (is(token, "tag-open")) {
                tag.closing = is(token, "end-tag-open");
                tag.start.row = iterator.getCurrentTokenRow();
                tag.start.column = iterator.getCurrentTokenColumn();
                iterator.stepBackward();
                return tag;
            } else if (is(token, "tag-name")) {
                tag.tagName = token.value;
            } else if (is(token, "tag-close")) {
                tag.selfClosing = token.value == "/>";
                tag.end.row = iterator.getCurrentTokenRow();
                tag.end.column = iterator.getCurrentTokenColumn() + token.value.length;
            }
        } while(token = iterator.stepBackward());

        return null;
    };
    
    this._pop = function(stack, tag) {
        while (stack.length) {
            
            var top = stack[stack.length-1];
            if (!tag || top.tagName == tag.tagName) {
                return stack.pop();
            }
            else if (this.optionalEndTags.hasOwnProperty(top.tagName)) {
                stack.pop();
                continue;
            } else {
                return null;
            }
        }
    };
    
    this.getFoldWidgetRange = function(session, foldStyle, row) {
        var firstTag = this._getFirstTagInLine(session, row);
        
        if (!firstTag)
            return null;
        
        var isBackward = firstTag.closing || firstTag.selfClosing;
        var stack = [];
        var tag;
        
        if (!isBackward) {
            var iterator = new TokenIterator(session, row, firstTag.start.column);
            var start = {
                row: row,
                column: firstTag.start.column + firstTag.tagName.length + 2
            };
            if (firstTag.start.row == firstTag.end.row)
                start.column = firstTag.end.column;
            while (tag = this._readTagForward(iterator)) {
                if (tag.selfClosing) {
                    if (!stack.length) {
                        tag.start.column += tag.tagName.length + 2;
                        tag.end.column -= 2;
                        return Range.fromPoints(tag.start, tag.end);
                    } else
                        continue;
                }
                
                if (tag.closing) {
                    this._pop(stack, tag);
                    if (stack.length == 0)
                        return Range.fromPoints(start, tag.start);
                }
                else {
                    stack.push(tag);
                }
            }
        }
        else {
            var iterator = new TokenIterator(session, row, firstTag.end.column);
            var end = {
                row: row,
                column: firstTag.start.column
            };
            
            while (tag = this._readTagBackward(iterator)) {
                if (tag.selfClosing) {
                    if (!stack.length) {
                        tag.start.column += tag.tagName.length + 2;
                        tag.end.column -= 2;
                        return Range.fromPoints(tag.start, tag.end);
                    } else
                        continue;
                }
                
                if (!tag.closing) {
                    this._pop(stack, tag);
                    if (stack.length == 0) {
                        tag.start.column += tag.tagName.length + 2;
                        if (tag.start.row == tag.end.row && tag.start.column < tag.end.column)
                            tag.start.column = tag.end.column;
                        return Range.fromPoints(tag.start, end);
                    }
                }
                else {
                    stack.push(tag);
                }
            }
        }
        
    };

}).call(FoldMode.prototype);

});

ace.define("ace/mode/folding/html",["require","exports","module","ace/lib/oop","ace/mode/folding/mixed","ace/mode/folding/xml","ace/mode/folding/cstyle"], function(require, exports, module) {
"use strict";

var oop = require("../../lib/oop");
var MixedFoldMode = require("./mixed").FoldMode;
var XmlFoldMode = require("./xml").FoldMode;
var CStyleFoldMode = require("./cstyle").FoldMode;

var FoldMode = exports.FoldMode = function(voidElements, optionalTags) {
    MixedFoldMode.call(this, new XmlFoldMode(voidElements, optionalTags), {
        "js-": new CStyleFoldMode(),
        "css-": new CStyleFoldMode()
    });
};

oop.inherits(FoldMode, MixedFoldMode);

});

ace.define("ace/mode/html_completions_tag_snippets",["require","exports","module"], function(require, exports, module) {
"use strict";
var HtmlTagSnippets = 
[{"name":"a","tagName":"a","snippet":"<a href=\"http://${1:example.com}\">${2:link}</a>","example":"<a href=\"http://example.com>link to a website</a>","tabTrigger":"a","keywords":["link","url","website"],"land":{"pt-BR":{"snippet":"<a href=\"http://${1:exemplo.com}\">${2:link}</a>","example":"<a href=\"http://exemplo.com>link para um website</a>"}},"search":"a link url website"},{"name":"a:mail","keywords":["email"],"tagName":"a","snippet":"<a href=\"mailto:${1:joe@example.com}?subject=${2:feedback}\">${3:email me}</a>","tabTrigger":"a:mail","search":"a:mail email"},{"name":"address","tagName":"address","snippet":"<address>\n\t${1}\n</address>","tabTrigger":"address","example":"<address>\n  Voce pode contatar o autor em <a href=\"http://www.somedomain.com/contact\">www.somedomain.com</a>.<br>\n  Se encontrar qualquer bug, por favor <a href=\"mailto:webmaster@somedomain.com\">contate o administrador do site</a>.<br>\n  Você tambem pode querer nos visitar:<br>\n  Mozilla Foundation<br>\n  1981 Landings Drive<br>\n  Building K<br>\n  Mountain View, CA 94043-0801<br>\n  USA\n</address>\n","lang":{"pt-BR":{"keywords":["endereço"]}},"search":"address endereço"},{"name":"abbr","tagName":"abbr","snippet":"<abbr title=\"${1}\">${2}</abbr>","tabTrigger":"abbr","search":"abbr"},{"name":"area","tagName":"area","snippet":"<area shape=\"${1:rect}\" coords=\"${2}\" href=\"${3}\" alt=\"${4}\" />","tabTrigger":"area","search":"area"},{"name":"article","tagName":"article","lang":{"pt-BR":{"keywords":["artigo"]}},"snippet":"<article>\n\t<h1>${1:Article title}</h1>\n\t<p>${2:Paragraph content}</p>\n</article>","tabTrigger":"article","search":"article artigo"},{"name":"b","keywords":["bold"],"tagName":"b","lang":{"pt-BR":{"keywords":["destaque"]}},"snippet":"<b>${1}</b>","tabTrigger":"b","search":"b bold destaque"},{"name":"aside","keywords":["side"],"tagName":"aside","lang":{"pt-BR":{"keywords":["lateral"]}},"snippet":"<aside>\n\t${1}\n</aside>","tabTrigger":"aside","search":"aside side lateral"},{"name":"audio","keywords":["music"],"tagName":"audio","lang":{"pt-BR":{"keywords":["som"]}},"snippet":"<audio src=\"${1}>${2}</audio>","tabTrigger":"audio","search":"audio music som"},{"name":"bdo","keywords":["direction"],"tagName":"bdo","snippet":"<bdo dir=\"${1:rtl}\">${2}</bdo>","tabTrigger":"bdo","search":"bdo direction"},{"name":"bdi","keywords":["direction"],"tagName":"bdi","snippet":"<bdi>${1}</bdo>","tabTrigger":"bdi","search":"bdi direction"},{"name":"base","tagName":"base","snippet":"<base href=\"${1}\" target=\"${2}\" />","tabTrigger":"base","search":"base"},{"name":"blockquote","keywords":["quotation"],"tagName":"blockquote","lang":{"pt-BR":{"keywords":["citação"]}},"snippet":"<blockquote>\n\t${1}\n</blockquote>","example":"<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</blockquote>","tabTrigger":"blockquote","search":"blockquote quotation citação"},{"name":"body","tagName":"body","snippet":"<body>\n\t${1}\n</body>","tabTrigger":"body","search":"body"},{"name":"br","keywords":["word-break","break"],"tagName":"br","lang":{"pt-BR":{"keywords":["quebra","linha"]}},"snippet":"<br>${1}","tabTrigger":"br","search":"br word-break break quebra linha"},{"name":"button","tagName":"button","lang":{"pt-BR":{"keywords":["botão"]}},"snippet":"<button type=\"${1:submit}\">${2}</button>","example":"<button>Click me!</button>","tabTrigger":"button","search":"button botão"},{"name":"canvas","tagName":"canvas","snippet":"<canvas>\n\t${1}\n</canvas>","tabTrigger":"canvas","search":"canvas"},{"name":"caption","tagName":"caption","lang":{"pt-BR":{"keywords":["explicação"]}},"snippet":"<caption>${1}</caption>","tabTrigger":"caption","search":"caption explicação"},{"name":"code","tagName":"code","snippet":"<code>${1}</code>","example":"<code>\n  console.log('Hello world!')\n</code>\n","tabTrigger":"code","search":"code"},{"name":"col","tagName":"col","snippet":"<col />${1}","tabTrigger":"col","search":"col"},{"name":"cite","keywords":["quotation"],"tagName":"cite","lang":{"pt-BR":{"keywords":["citação"]}},"snippet":"<cite>${1}</cite>","tabTrigger":"cite","search":"cite quotation citação"},{"name":"colgroup","tagName":"colgroup","snippet":"<colgroup>\n\t${1}\n</colgroup>","tabTrigger":"colgroup","search":"colgroup"},{"name":"data","tagName":"data","snippet":"<data value=\"${1:value}\">${2:label}</data>","tabTrigger":"data","search":"data"},{"name":"del","tagName":"del","snippet":"<del>${1:this text has been deleted}</del>","tabTrigger":"del","search":"del"},{"name":"dd","tagName":"dd","snippet":"<dd>${1:data description}</dd>","tabTrigger":"dd","search":"dd"},{"name":"dialog","keywords":["modal"],"tagName":"dialog","snippet":"<dialog>\n\t${1:Dialog content}\n</dialog>","tabTrigger":"dialog","search":"dialog modal"},{"name":"details","tagName":"details","snippet":"<details>${1:Lorem ipsum dolor sit amet, consectetur adipiscing elit.}</details>","tabTrigger":"details","search":"details"},{"name":"div","tagName":"div","snippet":"<div>\n\t${1:Lorem ipsum dolor sit amet, consectetur adipiscing elit.}\n</div>","tabTrigger":"div","search":"div"},{"name":"dl","keywords":["data-list"],"tagName":"dl","snippet":"<dl>\n\t${1:<dt>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dt>}\n</dl>","tabTrigger":"dl","search":"dl data-list"},{"name":"dt","tagName":"dt","snippet":"<dt>${1:Lorem ipsum dolor sit amet, consectetur adipiscing elit.}</dt>","tabTrigger":"dt","search":"dt"},{"name":"datalist","keywords":["list"],"tagName":"datalist","snippet":"<datalist>\n\t${1}\n</datalist>","tabTrigger":"datalist","search":"datalist list"},{"name":"dfn","tagName":"dfn","snippet":"<dfn>${1:Lorem ipsum dolor sit amet, consectetur adipiscing elit.}</dfn>","tabTrigger":"dfn","search":"dfn"},{"name":"embed","tagName":"embed","snippet":"<embed src=${1} type=\"${2} />","tabTrigger":"embed","search":"embed"},{"name":"em","tagName":"em","snippet":"<em>${1:Lorem ipsum dolor sit amet, consectetur adipiscing elit.}</em>","tabTrigger":"em","search":"em"},{"name":"fieldset","tagName":"fieldset","snippet":"<fieldset>\n\t${1:<legend>Fieldset</legend>\n\t<input type=\"text\">}\n</fieldset>","tabTrigger":"fieldset","search":"fieldset"},{"name":"figcaption","tagName":"figcaption","snippet":"<figcaption>${1}</figcaption>","tabTrigger":"figcaption","search":"figcaption"},{"name":"form","tagName":"form","snippet":"<form accept-charset=\"utf-8\">\n\t${3}\n</form>","example":"<form>\n  <h2>Please fill this contact form</h2>\n  <label>name\n    <input type=\"text\">\n  </label>\n  <label>message\n    <textarea></textarea>\n  </label>\n</form>\n","tabTrigger":"form","search":"form"},{"name":"footer","tagName":"footer","lang":{"pt-BR":{"keywords":["rodapé"]}},"snippet":"<footer>\n\t${1}\n</footer>","example":"<footer>All rights left :)</footer>","tabTrigger":"footer","search":"footer rodapé"},{"name":"figure","tagName":"figure","snippet":"<figure>\n\t${1:<img src=\"${2}\">\n\t<figcaption>${3}</figcaption>\n\t}</figure>","tabTrigger":"figure","search":"figure"},{"name":"h1","keywords":["heading","title"],"tagName":"h1","lang":{"pt-BR":{"keywords":["título"]}},"snippet":"<h1>${1:Heading 1}</h1>","example":"<h1>Heading 1</h1>","tabTrigger":"h1","search":"h1 heading title título"},{"name":"h2","keywords":["heading"],"tagName":"h2","lang":{"pt-BR":{"keywords":["título"]}},"snippet":"<h2>${1:Heading 2}</h2>","example":"<h2>Heading 2</h2>","tabTrigger":"h2","search":"h2 heading título"},{"name":"h3","keywords":["heading"],"tagName":"h3","lang":{"pt-BR":{"keywords":["título"]}},"snippet":"<h3>${1:Heading 3}</h3>","example":"<h3>Heading 3</h3>","tabTrigger":"h3","search":"h3 heading título"},{"name":"h5","keywords":["heading"],"tagName":"h5","lang":{"pt-BR":{"keywords":["título"]}},"snippet":"<h5>${1:Heading 5}</h5>","example":"<h5>Heading 5</h5>","tabTrigger":"h5","search":"h5 heading título"},{"name":"h4","keywords":["heading"],"tagName":"h4","lang":{"pt-BR":{"keywords":["título"]}},"snippet":"<h4>${1:Heading 4}</h4>","example":"<h4>Heading 4</h4>","tabTrigger":"h4","search":"h4 heading título"},{"name":"head","tagName":"head","snippet":"<head>\n\t<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\" />\n\n\t<title>${1:Page title}</title>\n\t${2}\n</head>","tabTrigger":"head","search":"head"},{"name":"h6","keywords":["heading"],"tagName":"h6","lang":{"pt-BR":{"keywords":["título"]}},"snippet":"<h6>${1:Heading 6}</h6>","example":"<h6>Heading 6</h6>","tabTrigger":"h6","search":"h6 heading título"},{"name":"header","tagName":"header","lang":{"pt-BR":{"keywords":["cabeçalho"]}},"snippet":"<header>\n\t${1}\n</header>","example":"<header>Maybe a logo to the left... and some navigation controls to the right</header>","tabTrigger":"header","search":"header cabeçalho"},{"name":"hr","tagName":"hr","keywords":["separator","division","line"],"snippet":"<hr>","example":"<hr>","tabTrigger":"hr","search":"hr separator division line"},{"name":"i","tagName":"i","snippet":"<i>${1:Lorem ipsum dolor sit amet, consectetur adipiscing elit.}</i>","tabTrigger":"i","search":"i"},{"name":"iframe","tagName":"iframe","snippet":"<iframe src=\"${1}\" frameborder=\"0\"></iframe>${2}","tabTrigger":"iframe","search":"iframe"},{"name":"html","tagName":"html","snippet":"<html>\n  ${1}\n</html>","tabTrigger":"html","search":"html"},{"name":"html5","tagName":"html","snippet":"<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\" />\n\t\t<title>${1:Page title}</title>\n\t\t${2}\n\t</head>\n\t<body>\n\t\t${3:body}\n\t</body>\n</html>","tabTrigger":"html5","search":"html5"},{"name":"img","tagName":"img","keywords":["image","photo"],"lang":{"pt-BR":{"keywords":["foto"]}},"snippet":"<img src=\"${1:http://placehold.it/350x150}\" alt=\"${2:alternative text}\" >${3}","example":"<img src=\"http://placehold.it/350x150\" alt=\"alternative text\">","tabTrigger":"img","search":"img image photo foto"},{"name":"input","tagName":"input","lang":{"pt-BR":{"keywords":["campo"]}},"snippet":"<input type=\"${1:text/submit/hidden/button/image}\" name=\"${2}\" id=\"${3:$2}\" value=\"${4}\">${5}","example":"<input type=\"text\" name=\"first-name\" placeholder=\"First name\">","tabTrigger":"input","search":"input campo"},{"name":"input:autocomplete","tagName":"datalist","lang":{"pt-BR":{"keywords":["campo"]}},"snippet":"<input name=\"${1}\" list=\"${3:data-source}\">\n<datalist id=\"${3:data-source}\">\n  <option value=\"${4:Some value}\">\n  <option value=\"${5:Some other value}\">\n</datalist>\n","example":"<div>\n  <input name=\"cities\" list=\"example-city-list\">\n  <datalist id=\"example-city-list\">\n    <option value=\"São Paulo\">\n    <option value=\"New York\">\n    <option value=\"Beijing\">\n    <option value=\"Mumbai\">\n  </datalist>\n</div>\n","search":"input:autocomplete campo"},{"name":"input:text","tagName":"input","lang":{"pt-BR":{"keywords":["campo"]}},"snippet":"<input type=\"text\" name=\"${1}\" id=\"${2:$1}\" value=\"${3}\">${4}","example":"<input type=\"text\" name=\"first-name\" placeholder=\"First name\">","tabTrigger":"input:text","search":"input:text campo"},{"name":"input:submit","tagName":"input","snippet":"<input type=\"submit\" name=\"${1}\" id=\"${2:$1}\" value=\"${3}\">${4}","example":"<input type=\"submit\" value=\"Submit\">","tabTrigger":"input:submit","search":"input:submit"},{"name":"input:hidden","tagName":"input","snippet":"<input type=\"hidden\" name=\"${1}\" id=\"${2:$1}\" value=\"${3}\">${4}","example":"<label><input type=\"hidden\">hidden input</label>","tabTrigger":"input:hidden","search":"input:hidden"},{"name":"input:button","tagName":"input","snippet":"<input type=\"button\" name=\"${1}\" id=\"${2:$1}\" value=\"${3}\">${4}","example":"<input type=\"button\" value=\"Click me!\">","tabTrigger":"input:button","search":"input:button"},{"name":"input:image","tagName":"input","snippet":"<input type=\"image\" name=\"${1}\" id=\"${2:$1}\" src=\"${3}\" alt=\"${4}\">${5}","example":"<input type=\"image\" src=\"http://placehold.it/350x150\" alt=\"alternative text\">","tabTrigger":"input:image","search":"input:image"},{"name":"input:checkbox","tagName":"input","lang":{"pt-BR":{"keywords":["campo"]}},"snippet":"<input type=\"checkbox\" name=\"${1}\" id=\"${2:$1}\">${3}","example":"<label><input type=\"checkbox\">checkbox</label>","tabTrigger":"input:checkbox","search":"input:checkbox campo"},{"name":"input:radio","tagName":"input","lang":{"pt-BR":{"keywords":["campo","select"]}},"snippet":"<input type=\"radio\" name=\"${1}\" id=\"${2:$1}\">${3}","example":"<label for=\"example-radio-button\">\n  <input type=\"radio\" name=\"example-radio-button\" id=\"example-radio-button\">\n  Some option\n</label>\n","tabTrigger":"input:radio","search":"input:radio campo select"},{"name":"input:color","tagName":"input","lang":{"pt-BR":{"keywords":["campo","cor"]}},"snippet":"<input type=\"color\" name=\"${1}\" id=\"${2:$1}\" value=\"${3}\">${4}","example":"<input type=\"color\" name=\"example-color-input\" value=\"#0000FF\">","tabTrigger":"input:color","search":"input:color campo cor"},{"name":"input:date","tagName":"input","lang":{"pt-BR":{"keywords":["campo","data"]}},"snippet":"<input type=\"date\" name=\"${1}\" id=\"${2:$1}\" value=\"${3}\">${4}","example":"<input type=\"date\">","tabTrigger":"input:date","search":"input:date campo data"},{"name":"input:datetime","tagName":"input","lang":{"pt-BR":{"keywords":["campo","data"]}},"snippet":"<input type=\"datetime\" name=\"${1}\" id=\"${2:$1}\" value=\"${3}\">${4}","example":"<input type=\"datetime\">","tabTrigger":"input:datetime","search":"input:datetime campo data"},{"name":"input:datetime-local","tagName":"input","snippet":"<input type=\"datetime-local\" name=\"${1}\" id=\"${2:$1}\" value=\"${3}\">${4}","example":"<input type=\"datetime-local\">","tabTrigger":"input:datetime-local","search":"input:datetime-local"},{"name":"input:email","tagName":"input","lang":{"pt-BR":{"keywords":["campo","email"]}},"snippet":"<input type=\"email\" name=\"${1}\" id=\"${2:$1}\" value=\"${3}\">${4}","example":"<input type=\"email\" placeholder=\"mary@email.org\">","tabTrigger":"input:email","search":"input:email campo email"},{"name":"input:file","tagName":"input","lang":{"pt-BR":{"keywords":["campo","arquivo"]}},"snippet":"<input type=\"file\" name=\"${1}\" id=\"${2:$1}\" value=\"${3}\">${4}","example":"<input type=\"file\">","tabTrigger":"input:file","search":"input:file campo arquivo"},{"name":"input:month","tagName":"input","snippet":"<input type=\"month\" name=\"${1}\" id=\"${2:$1}\" value=\"${3}\">${4}","example":"<input type=\"month\">","tabTrigger":"input:month","search":"input:month"},{"name":"input:number","tagName":"input","snippet":"<input type=\"number\" name=\"${1}\" id=\"${2:$1}\" value=\"${3}\">${4}","example":"<input type=\"number\">","tabTrigger":"input:number","search":"input:number"},{"name":"input:password","tagName":"input","snippet":"<input type=\"password\" name=\"${1}\" id=\"${2:$1}\" value=\"${3}\">${4}","example":"<input type=\"password\" value=\"password\">","tabTrigger":"input:password","search":"input:password"},{"name":"input:range","tagName":"input","snippet":"<input type=\"range\" name=\"${1}\" id=\"${2:$1}\" value=\"${3}\">${4}","example":"<input type=\"range\" min=\"0\" max=\"100\" value=\"20\">","tabTrigger":"input:range","search":"input:range"},{"name":"input:search","tagName":"input","snippet":"<input type=\"search\" name=\"${1}\" id=\"${2:$1}\" value=\"${3}\">${4}","example":"<input type=\"search\" placeholder=\"Type some search here\">","tabTrigger":"input:search","search":"input:search"},{"name":"input:time","tagName":"input","snippet":"<input type=\"time\" name=\"${1}\" id=\"${2:$1}\" value=\"${3}\">${4}","example":"<input type=\"time\">","tabTrigger":"input:time","search":"input:time"},{"name":"input:url","tagName":"input","snippet":"<input type=\"url\" name=\"${1}\" id=\"${2:$1}\" value=\"${3}\">${4}","example":"<input type=\"url\" placeholder=\"http://example.com\">","tabTrigger":"input:url","search":"input:url"},{"name":"input:week","tagName":"input","snippet":"<input type=\"week\" name=\"${1}\" id=\"${2:$1}\" value=\"${3}\">${4}","example":"<input type=\"week\">","tabTrigger":"input:week","search":"input:week"},{"name":"ins","tagName":"ins","snippet":"<ins>${1}</ins>","tabTrigger":"ins","search":"ins"},{"name":"kbd","tagName":"kbd","snippet":"<kbd>${1}code</kbd>","tabTrigger":"kbd","search":"kbd"},{"name":"legend","tagName":"legend","snippet":"<legend>${1}</legend>","tabTrigger":"legend","search":"legend"},{"name":"li","keywords":["list-item"],"tagName":"li","snippet":"<li>${1}</li>","tabTrigger":"li","search":"li list-item"},{"name":"link","tagName":"link","snippet":"<link rel=\"${1}\" href=\"${2}\" title=\"${3}\" type=\"${4}\" />${5}","tabTrigger":"link","search":"link"},{"name":"link:css","keywords":["css","style"],"tagName":"link","lang":{"pt-BR":{"keywords":["estilo"]}},"snippet":"<link rel=\"stylesheet\" href=\"${2:style.css}\" type=\"text/css\" media=\"${3:all}\" />${4}","tabTrigger":"link:css","search":"link:css css style estilo"},{"name":"link:favicon","keywords":["favicon"],"tagName":"link","snippet":"<link rel=\"shortcut icon\" href=\"${1:favicon.ico}\" type=\"image/x-icon\" />${2}","tabTrigger":"link:favicon","search":"link:favicon favicon"},{"name":"link:touch","keywords":["favicon:touch"],"tagName":"link","snippet":"<link rel=\"apple-touch-icon\" href=\"${1:favicon.png}\" />${2}","tabTrigger":"link:touch","search":"link:touch favicon:touch"},{"name":"label","tagName":"label","lang":{"pt-BR":{"keywords":["etiqueta"]}},"snippet":"<label for=\"${2:$1}\">${1}</label>","tabTrigger":"label","search":"label etiqueta"},{"name":"label:i","tagName":"label","snippet":"<label for=\"${2:$1}\">${1}</label>\n<input type=\"${3:text/submit/hidden/button}\" name=\"${4:$2}\" id=\"${5:$2}\" value=\"${6}\" />${7}","tabTrigger":"label:i","search":"label:i"},{"name":"label:s","tagName":"label","snippet":"<label for=\"${2:$1}\">${1}</label>\n<select name=\"${3:$2}\" id=\"${4:$2}\">\n\t<option value=\"${5}\">${6:$5}</option>\n</select>","tabTrigger":"label:s","search":"label:s"},{"name":"meter","tagName":"meter","snippet":"<meter min=\"${2:200}\" max=\"${3:500}\" value=\"${1:350}\"></meter>","tabTrigger":"meter","search":"meter"},{"name":"mark","tagName":"mark","keywords":["highlight"],"snippet":"<mark>${1:highlighted text}</mark>","tabTrigger":"mark","search":"mark highlight"},{"name":"map","tagName":"map","snippet":"<map name=\"${1}\">\n\t${2}\n</map>","tabTrigger":"map","search":"map"},{"name":"meta","tagName":"meta","snippet":"<meta http-equiv=\"${1}\" content=\"${2}\" />${3}","tabTrigger":"meta","search":"meta"},{"name":"meta:compat","tagName":"meta","snippet":"<meta http-equiv=\"X-UA-Compatible\" content=\"IE=${1:7,8,edge}\" />${3}","tabTrigger":"meta:compat","search":"meta:compat"},{"name":"meta:refresh","tagName":"meta","snippet":"<meta http-equiv=\"refresh\" content=\"text/html;charset=UTF-8\" />${3}","tabTrigger":"meta:refresh","search":"meta:refresh"},{"name":"meta:utf","keywords":["utf","charset"],"tagName":"meta","snippet":"<meta http-equiv=\"content-type\" content=\"text/html;charset=UTF-8\" />${3}","tabTrigger":"meta:utf","search":"meta:utf utf charset"},{"name":"nav","keywords":["menu"],"tagName":"nav","snippet":"<nav>\n  <ul>\n    <li><a href=\"${1:/}\">${2:home}</a></li>\n    <li><a href=\"${3:#}\">${4:$3}</a></li>\n  </ul>\n</nav>\n","tabTrigger":"nav","search":"nav menu"},{"name":"noscript","keywords":["javascript","js"],"tagName":"noscript","snippet":"<noscript>\n\t${1:The page does not have javascript enabled.}\n</noscript>","tabTrigger":"noscript","search":"noscript javascript js"},{"name":"ol","keywords":["list","ordered-list"],"lang":{"pt-BR":{"keywords":["lista"]}},"tagName":"ol","snippet":"<ol>\n  <li>${1:Lorem ipsum dolor sit amet}</li>\n  <li>${2:Lorem ipsum dolor sit amet}</li>\n</ol>\n","example":"<ol>\n  <li>Lorem ipsum dolor sit amet</li>\n  <li>Lorem ipsum dolor sit amet</li>\n</ol>\n","tabTrigger":"ol","search":"ol list ordered-list lista"},{"name":"object","tagName":"object","snippet":"<object data=\"${1}\" type=\"${2}\">\n\t${3}\n</object>${4}","tabTrigger":"object","search":"object"},{"name":"optgroup","tagName":"optgroup","snippet":"<optgroup>\n\t<option value=\"${1}\">${2:$1}</option>\n\t${3}\n</optgroup>","tabTrigger":"optgroup","search":"optgroup"},{"name":"output","tagName":"output","snippet":"<output>${1}</output>","tabTrigger":"output","search":"output"},{"name":"option","tagName":"option","snippet":"<option value=\"${1:machine-value}\">${2:Readable label}</option>","tabTrigger":"option","search":"option"},{"name":"p","keywords":["paragraph"],"tagName":"p","snippet":"<p>\n\t${1:Lorem ipsum dolor sit amet, consectetur adipiscing elit.}\n</p>","tabTrigger":"p","search":"p paragraph"},{"name":"param","tagName":"param","snippet":"<param name=\"${1}\" value=\"${2}\" />${3}","tabTrigger":"param","relevance":0.5,"search":"param"},{"name":"pre","keywords":["code"],"tagName":"pre","snippet":"<pre>\n\t${1:helloWorld();}\n</pre>","tabTrigger":"pre","search":"pre code"},{"name":"progress","tagName":"progress","snippet":"<progress value=\"${1:70}\" max=\"${2:100}\">${1}%</progress>","tabTrigger":"progress","search":"progress"},{"name":"q","keywords":["cite","quotation"],"tagName":"q","snippet":"<q cite=\"${2:http://en.wikipedia.org}\">${1}</q>","tabTrigger":"q","search":"q cite quotation"},{"name":"rp","tagName":"rp","snippet":"<rp>${1}</rp>","tabTrigger":"rp","search":"rp"},{"name":"rt","tagName":"rt","snippet":"<rt>${1}</rt>","tabTrigger":"rt","search":"rt"},{"name":"s","keywords":["strikethrough"],"tagName":"s","snippet":"<s>${1}</s>","tabTrigger":"s","search":"s strikethrough"},{"name":"ruby","tagName":"ruby","snippet":"<ruby>\n\t<rp><rt>${1}</rt></rp>\n</ruby>","tabTrigger":"ruby","search":"ruby"},{"name":"samp","tagName":"samp","snippet":"<samp>\n\t${1}\n</samp>","tabTrigger":"samp","search":"samp"},{"name":"section","tagName":"section","snippet":"<section>\n\t${1}\n</section>","tabTrigger":"section","search":"section"},{"name":"section.","tagName":"section","snippet":"<section class=\"${1}\">\n\t${2}\n</section>","tabTrigger":"section.","search":"section."},{"name":"section#","tagName":"section","snippet":"<section id=\"${1}\">\n\t${2}\n</section>","tabTrigger":"section#","search":"section#"},{"name":"select","tagName":"select","keywords":["input"],"snippet":"<select name=\"${1}\" id=\"${2:$1}\">\n\t<option value=\"${3:value}\">${4:$3}</option>\n</select>","example":"<select>\n  <option>São Paulo</option>\n  <option>New York</option>\n  <option>Istambul</option>\n  <option>Beijing</option>\n</select>\n","tabTrigger":"select","search":"select input"},{"name":"script","keywords":["javascript","js"],"tagName":"script","snippet":"<script src=\"${1:/path-to/script.js}\" type=\"text/javascript\" charset=\"utf-8\"></script>","tabTrigger":"script","search":"script javascript js"},{"name":"small","tagName":"small","snippet":"<small>${1}</small>","tabTrigger":"small","search":"small"},{"name":"span","tagName":"span","snippet":"<span>${1}</span>","tabTrigger":"span","search":"span"},{"name":"strong","tagName":"strong","snippet":"<strong>${1}</strong>","example":"<strong>Text with emphasis!</strong>","tabTrigger":"strong","search":"strong"},{"name":"source","tagName":"source","snippet":"<source src=\"${1}\" type=\"${2}\" media=\"${3}\" />","tabTrigger":"source","search":"source"},{"name":"style","tagName":"style","lang":{"pt-BR":{"keywords":["estilo"]}},"snippet":"<style type=\"text/css\" media=\"${1:all}\">\n\t${2}\n</style>","tabTrigger":"style","search":"style estilo"},{"name":"summary","tagName":"summary","snippet":"<summary>\n\t${1}\n</summary>","tabTrigger":"summary","search":"summary"},{"name":"sub","tagName":"sub","snippet":"<sub>${1}</sub>","tabTrigger":"sub","search":"sub"},{"name":"sup","tagName":"sup","snippet":"<sup>${1}</sup>","tabTrigger":"sup","search":"sup"},{"name":"table","tagName":"table","snippet":"<table>\n  <caption>${1:This table is...}</caption>\n  <thead>\n    <tr>\n      <th>${2:Header content 1}</th>\n      <th>${3:Header content 2}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>${4:Body content 1}</td>\n      <td>${5:Body content 2}</td>\n    </tr>\n  </tbody>\n</table>\n","example":"<table>\n  <caption>Table about examples</caption>\n  <thead>\n    <tr>\n      <th>Header content</th>\n      <th>Header content</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Body content</td>\n      <td>Body content</td>\n    </tr>\n  </tbody>\n</table>\n","tabTrigger":"table","search":"table"},{"name":"tbody","keywords":["table-body"],"tagName":"tbody","snippet":"<tbody>\n  <tr>\n    <td>${1:Cell content 1}</td>\n    <td>${2:Cell content 2}</td>\n  </tr>\n</tbody>\n","tabTrigger":"tbody","search":"tbody table-body"},{"name":"td","keywords":["table-cell"],"tagName":"td","snippet":"<td>${1:Cell content}</td>","tabTrigger":"td","search":"td table-cell"},{"name":"td+","tagName":"td","snippet":"<td>${1}</td>\ntd+${2}","tabTrigger":"td+","search":"td+"},{"name":"textarea","tagName":"textarea","snippet":"<textarea name=\"${1}\" id=${2:$1} rows=\"${3:8}\" cols=\"${4:40}\">${5}</textarea>${6}","example":"<textarea rows=\"8\" cols=\"40\">Editable text field</textarea>","tabTrigger":"textarea","search":"textarea"},{"name":"tfoot","keywords":["table-footer"],"tagName":"tfoot","snippet":"<tfoot>\n  <tr>\n    <td>${1:Footer content 1}</td>\n    <td>${2:Footer content 2}</td>\n  </tr>\n</tfoot>\n","tabTrigger":"tfoot","search":"tfoot table-footer"},{"name":"th","keywords":["table-header-cell"],"tagName":"th","snippet":"<th>${1:Header content 1}</th>","tabTrigger":"th","search":"th table-header-cell"},{"name":"th+","tagName":"th","snippet":"<th>${1}</th>\nth+${2}","tabTrigger":"th+","search":"th+"},{"name":"thead","keywords":["table-header"],"tagName":"thead","snippet":"<thead>\n  <tr>\n    <th>${1:Header content 1}</th>\n    <th>${2:Header content 2}</th>\n  </tr>\n</thead>\n","tabTrigger":"thead","search":"thead table-header"},{"name":"time","tagName":"time","snippet":"<time datetime=\"${1}\" pubdate=\"${2:$1}>${3:$1}</time>","tabTrigger":"time","search":"time"},{"name":"title","tagName":"title","snippet":"<title>${1:Page title}</title>","tabTrigger":"title","search":"title"},{"name":"tr","keywords":["table-row"],"tagName":"tr","snippet":"<tr>\n  <td>${1}</td>\n  <td>${2}</td>\n</tr>\n","tabTrigger":"tr","search":"tr table-row"},{"name":"tr+","tagName":"tr","snippet":"<tr>\n\t<td>${1}</td>\n\ttd+${2}\n</tr>","tabTrigger":"tr+","search":"tr+"},{"name":"ul","keywords":["list","unordered-list"],"lang":{"pt-BR":{"keywords":["lista"]}},"tagName":"ul","snippet":"<ul>\n  <li>${1:Lorem ipsum dolor sit amet}</li>\n  <li>${2:Lorem ipsum dolor sit amet}</li>\n</ul>\n","example":"<ul>\n  <li>Lorem ipsum dolor sit amet</li>\n  <li>Lorem ipsum dolor sit amet</li>\n</ul>\n","tabTrigger":"ul","search":"ul list unordered-list lista"},{"name":"var","tagName":"var","snippet":"<var>${1}</var>","tabTrigger":"var","search":"var"},{"name":"track","tagName":"track","snippet":"<track src=\"${1}\" srclang=\"${2}\" label=\"${3}\" default=\"${4:default}>${5}</track>${6}","tabTrigger":"track","search":"track"},{"name":"video","tagName":"video","snippet":"<video src=\"${1} height=\"${2}\" width=\"${3}\" preload=\"${5:none}\" autoplay=\"${6:autoplay}>${7}</video>${8}","tabTrigger":"video","search":"video"},{"name":"wbr","keywords":["word-break","break"],"tagName":"wbr","snippet":"<wbr>${1}","tabTrigger":"wbr","search":"wbr word-break break"}]
HtmlTagSnippets.forEach(function (s) {
    s.snippet = s.snippet.replace(/^</, "").replace(/\n$/, "");
    s.meta = s.meta || "tag";
    s.score = Number.MAX_VALUE;
});
exports.HtmlTagSnippets = HtmlTagSnippets;
});

ace.define("ace/mode/html_completions",["require","exports","module","ace/token_iterator","ace/mode/html_completions_tag_snippets"], function(require, exports, module) {
"use strict";

var TokenIterator = require("../token_iterator").TokenIterator;

var commonAttributes = [
    "accesskey",
    "class",
    "contenteditable",
    "contextmenu",
    "dir",
    "draggable",
    "dropzone",
    "hidden",
    "id",
    "inert",
    "itemid",
    "itemprop",
    "itemref",
    "itemscope",
    "itemtype",
    "lang",
    "spellcheck",
    "style",
    "tabindex",
    "title",
    "translate"
];

var eventAttributes = [
    "onabort",
    "onblur",
    "oncancel",
    "oncanplay",
    "oncanplaythrough",
    "onchange",
    "onclick",
    "onclose",
    "oncontextmenu",
    "oncuechange",
    "ondblclick",
    "ondrag",
    "ondragend",
    "ondragenter",
    "ondragleave",
    "ondragover",
    "ondragstart",
    "ondrop",
    "ondurationchange",
    "onemptied",
    "onended",
    "onerror",
    "onfocus",
    "oninput",
    "oninvalid",
    "onkeydown",
    "onkeypress",
    "onkeyup",
    "onload",
    "onloadeddata",
    "onloadedmetadata",
    "onloadstart",
    "onmousedown",
    "onmousemove",
    "onmouseout",
    "onmouseover",
    "onmouseup",
    "onmousewheel",
    "onpause",
    "onplay",
    "onplaying",
    "onprogress",
    "onratechange",
    "onreset",
    "onscroll",
    "onseeked",
    "onseeking",
    "onselect",
    "onshow",
    "onstalled",
    "onsubmit",
    "onsuspend",
    "ontimeupdate",
    "onvolumechange",
    "onwaiting"
];

var globalAttributes = commonAttributes.concat(eventAttributes);

var attributeMap = {
    "html": {"manifest": 1},
    "head": {},
    "title": {},
    "base": {"href": 1, "target": 1},
    "link": {"href": 1, "hreflang": 1, "rel": {"stylesheet": 1, "icon": 1}, "media": {"all": 1, "screen": 1, "print": 1}, "type": {"text/css": 1, "image/png": 1, "image/jpeg": 1, "image/gif": 1}, "sizes": 1},
    "meta": {"http-equiv": {"content-type": 1}, "name": {"description": 1, "keywords": 1}, "content": {"text/html; charset=UTF-8": 1}, "charset": 1},
    "style": {"type": 1, "media": {"all": 1, "screen": 1, "print": 1}, "scoped": 1},
    "script": {"charset": 1, "type": {"text/javascript": 1}, "src": 1, "defer": 1, "async": 1},
    "noscript": {"href": 1},
    "body": {"onafterprint": 1, "onbeforeprint": 1, "onbeforeunload": 1, "onhashchange": 1, "onmessage": 1, "onoffline": 1, "onpopstate": 1, "onredo": 1, "onresize": 1, "onstorage": 1, "onundo": 1, "onunload": 1},
    "section": {},
    "nav": {},
    "article": {"pubdate": 1},
    "aside": {},
    "h1": {},
    "h2": {},
    "h3": {},
    "h4": {},
    "h5": {},
    "h6": {},
    "header": {},
    "footer": {},
    "address": {},
    "main": {},
    "p": {},
    "hr": {},
    "pre": {},
    "blockquote": {"cite": 1},
    "ol": {"start": 1, "reversed": 1},
    "ul": {},
    "li": {"value": 1},
    "dl": {},
    "dt": {},
    "dd": {},
    "figure": {},
    "figcaption": {},
    "div": {},
    "a": {"href": 1, "target": {"_blank": 1, "top": 1}, "ping": 1, "rel": {"nofollow": 1, "alternate": 1, "author": 1, "bookmark": 1, "help": 1, "license": 1, "next": 1, "noreferrer": 1, "prefetch": 1, "prev": 1, "search": 1, "tag": 1}, "media": 1, "hreflang": 1, "type": 1},
    "em": {},
    "strong": {},
    "small": {},
    "s": {},
    "cite": {},
    "q": {"cite": 1},
    "dfn": {},
    "abbr": {},
    "data": {},
    "time": {"datetime": 1},
    "code": {},
    "var": {},
    "samp": {},
    "kbd": {},
    "sub": {},
    "sup": {},
    "i": {},
    "b": {},
    "u": {},
    "mark": {},
    "ruby": {},
    "rt": {},
    "rp": {},
    "bdi": {},
    "bdo": {},
    "span": {},
    "br": {},
    "wbr": {},
    "ins": {"cite": 1, "datetime": 1},
    "del": {"cite": 1, "datetime": 1},
    "img": {"alt": 1, "src": 1, "height": 1, "width": 1, "usemap": 1, "ismap": 1},
    "iframe": {"name": 1, "src": 1, "height": 1, "width": 1, "sandbox": {"allow-same-origin": 1, "allow-top-navigation": 1, "allow-forms": 1, "allow-scripts": 1}, "seamless": {"seamless": 1}},
    "embed": {"src": 1, "height": 1, "width": 1, "type": 1},
    "object": {"param": 1, "data": 1, "type": 1, "height" : 1, "width": 1, "usemap": 1, "name": 1, "form": 1, "classid": 1},
    "param": {"name": 1, "value": 1},
    "video": {"src": 1, "autobuffer": 1, "autoplay": {"autoplay": 1}, "loop": {"loop": 1}, "controls": {"controls": 1}, "width": 1, "height": 1, "poster": 1, "muted": {"muted": 1}, "preload": {"auto": 1, "metadata": 1, "none": 1}},
    "audio": {"src": 1, "autobuffer": 1, "autoplay": {"autoplay": 1}, "loop": {"loop": 1}, "controls": {"controls": 1}, "muted": {"muted": 1}, "preload": {"auto": 1, "metadata": 1, "none": 1 }},
    "source": {"src": 1, "type": 1, "media": 1},
    "track": {"kind": 1, "src": 1, "srclang": 1, "label": 1, "default": 1},
    "canvas": {"width": 1, "height": 1},
    "map": {"name": 1},
    "area": {"shape": 1, "coords": 1, "href": 1, "hreflang": 1, "alt": 1, "target": 1, "media": 1, "rel": 1, "ping": 1, "type": 1},
    "svg": {},
    "math": {},
    "table": {"summary": 1},
    "caption": {},
    "colgroup": {"span": 1},
    "col": {"span": 1},
    "tbody": {},
    "thead": {},
    "tfoot": {},
    "tr": {},
    "td": {"headers": 1, "rowspan": 1, "colspan": 1},
    "th": {"headers": 1, "rowspan": 1, "colspan": 1, "scope": 1},
    "form": {"accept-charset": 1, "action": 1, "autocomplete": 1, "enctype": {"multipart/form-data": 1, "application/x-www-form-urlencoded": 1}, "method": {"get": 1, "post": 1}, "name": 1, "novalidate": 1, "target": {"_blank": 1, "top": 1}},
    "fieldset": {"disabled": 1, "form": 1, "name": 1},
    "legend": {},
    "label": {"form": 1, "for": 1},
    "input": {
        "type": {"text": 1, "password": 1, "hidden": 1, "checkbox": 1, "submit": 1, "radio": 1, "file": 1, "button": 1, "reset": 1, "image": 31, "color": 1, "date": 1, "datetime": 1, "datetime-local": 1, "email": 1, "month": 1, "number": 1, "range": 1, "search": 1, "tel": 1, "time": 1, "url": 1, "week": 1},
        "accept": 1, "alt": 1, "autocomplete": {"on": 1, "off": 1}, "autofocus": {"autofocus": 1}, "checked": {"checked": 1}, "disabled": {"disabled": 1}, "form": 1, "formaction": 1, "formenctype": {"application/x-www-form-urlencoded": 1, "multipart/form-data": 1, "text/plain": 1}, "formmethod": {"get": 1, "post": 1}, "formnovalidate": {"formnovalidate": 1}, "formtarget": {"_blank": 1, "_self": 1, "_parent": 1, "_top": 1}, "height": 1, "list": 1, "max": 1, "maxlength": 1, "min": 1, "multiple": {"multiple": 1}, "name": 1, "pattern": 1, "placeholder": 1, "readonly": {"readonly": 1}, "required": {"required": 1}, "size": 1, "src": 1, "step": 1, "width": 1, "files": 1, "value": 1},
    "button": {"autofocus": 1, "disabled": {"disabled": 1}, "form": 1, "formaction": 1, "formenctype": 1, "formmethod": 1, "formnovalidate": 1, "formtarget": 1, "name": 1, "value": 1, "type": {"button": 1, "submit": 1}},
    "select": {"autofocus": 1, "disabled": 1, "form": 1, "multiple": {"multiple": 1}, "name": 1, "size": 1, "readonly":{"readonly": 1}},
    "datalist": {},
    "optgroup": {"disabled": 1, "label": 1},
    "option": {"disabled": 1, "selected": 1, "label": 1, "value": 1},
    "textarea": {"autofocus": {"autofocus": 1}, "disabled": {"disabled": 1}, "form": 1, "maxlength": 1, "name": 1, "placeholder": 1, "readonly": {"readonly": 1}, "required": {"required": 1}, "rows": 1, "cols": 1, "wrap": {"on": 1, "off": 1, "hard": 1, "soft": 1}},
    "keygen": {"autofocus": 1, "challenge": {"challenge": 1}, "disabled": {"disabled": 1}, "form": 1, "keytype": {"rsa": 1, "dsa": 1, "ec": 1}, "name": 1},
    "output": {"for": 1, "form": 1, "name": 1},
    "progress": {"value": 1, "max": 1},
    "meter": {"value": 1, "min": 1, "max": 1, "low": 1, "high": 1, "optimum": 1},
    "details": {"open": 1},
    "summary": {},
    "command": {"type": 1, "label": 1, "icon": 1, "disabled": 1, "checked": 1, "radiogroup": 1, "command": 1},
    "menu": {"type": 1, "label": 1},
    "dialog": {"open": 1}
};

var elements = Object.keys(attributeMap);
var voidElements = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "menuitem", "param", "source", "track", "wbr"];
var normalElements = elements.reduce(function (acc, element) {
    if (voidElements.indexOf(element) === -1) {
        return acc.concat([element]);
    } else {
        return acc;
    }
}, []);

function is(token, type) {
    return token.type.lastIndexOf(type + ".xml") > -1;
}

function findTagName(session, pos) {
    var iterator = new TokenIterator(session, pos.row, pos.column);
    var token = iterator.getCurrentToken();
    while (token && !is(token, "tag-name")){
        token = iterator.stepBackward();
    }
    if (token)
        return token.value;
}

function findAttributeName(session, pos) {
    var iterator = new TokenIterator(session, pos.row, pos.column);
    var token = iterator.getCurrentToken();
    while (token && !is(token, "attribute-name")){
        token = iterator.stepBackward();
    }
    if (token)
        return token.value;
}

var HtmlCompletions = function() {

};

(function() {

    this.getCompletions = function(state, session, pos, prefix) {
        var token = session.getTokenAt(pos.row, pos.column);

        if (!token)
            return [];
        if (is(token, "tag-name") || is(token, "tag-open") || is(token, "end-tag-open"))
            return this.getTagCompletions(state, session, pos, prefix);
        if (is(token, "tag-whitespace") || is(token, "attribute-name"))
            return this.getAttributeCompletions(state, session, pos, prefix);
        if (is(token, "attribute-value"))
            return this.getAttributeValueCompletions(state, session, pos, prefix);
        var line = session.getLine(pos.row).substr(0, pos.column);
        if (/&[a-z]*$/i.test(line))
            return this.getHTMLEntityCompletions(state, session, pos, prefix);

        return [];
    };

    this.getTagCompletions = function(state, session, pos, prefix) {

        return require('./html_completions_tag_snippets').HtmlTagSnippets;
    };

    this.getAttributeCompletions = function(state, session, pos, prefix) {
        var tagName = findTagName(session, pos);
        if (!tagName)
            return [];
        var attributes = globalAttributes;
        if (tagName in attributeMap) {
            attributes = attributes.concat(Object.keys(attributeMap[tagName]));
        }
        return attributes.map(function(attribute){
            return {
                caption: attribute,
                snippet: attribute + '="$0"',
                meta: "attribute",
                score: Number.MAX_VALUE
            };
        });
    };

    this.getAttributeValueCompletions = function(state, session, pos, prefix) {
        var tagName = findTagName(session, pos);
        var attributeName = findAttributeName(session, pos);
        
        if (!tagName)
            return [];
        var values = [];
        if (tagName in attributeMap && attributeName in attributeMap[tagName] && typeof attributeMap[tagName][attributeName] === "object") {
            values = Object.keys(attributeMap[tagName][attributeName]);
        }
        return values.map(function(value){
            return {
                caption: value,
                snippet: value,
                meta: "attribute value",
                score: Number.MAX_VALUE
            };
        });
    };

    this.getHTMLEntityCompletions = function(state, session, pos, prefix) {
        var values = ['Aacute;', 'aacute;', 'Acirc;', 'acirc;', 'acute;', 'AElig;', 'aelig;', 'Agrave;', 'agrave;', 'alefsym;', 'Alpha;', 'alpha;', 'amp;', 'and;', 'ang;', 'Aring;', 'aring;', 'asymp;', 'Atilde;', 'atilde;', 'Auml;', 'auml;', 'bdquo;', 'Beta;', 'beta;', 'brvbar;', 'bull;', 'cap;', 'Ccedil;', 'ccedil;', 'cedil;', 'cent;', 'Chi;', 'chi;', 'circ;', 'clubs;', 'cong;', 'copy;', 'crarr;', 'cup;', 'curren;', 'Dagger;', 'dagger;', 'dArr;', 'darr;', 'deg;', 'Delta;', 'delta;', 'diams;', 'divide;', 'Eacute;', 'eacute;', 'Ecirc;', 'ecirc;', 'Egrave;', 'egrave;', 'empty;', 'emsp;', 'ensp;', 'Epsilon;', 'epsilon;', 'equiv;', 'Eta;', 'eta;', 'ETH;', 'eth;', 'Euml;', 'euml;', 'euro;', 'exist;', 'fnof;', 'forall;', 'frac12;', 'frac14;', 'frac34;', 'frasl;', 'Gamma;', 'gamma;', 'ge;', 'gt;', 'hArr;', 'harr;', 'hearts;', 'hellip;', 'Iacute;', 'iacute;', 'Icirc;', 'icirc;', 'iexcl;', 'Igrave;', 'igrave;', 'image;', 'infin;', 'int;', 'Iota;', 'iota;', 'iquest;', 'isin;', 'Iuml;', 'iuml;', 'Kappa;', 'kappa;', 'Lambda;', 'lambda;', 'lang;', 'laquo;', 'lArr;', 'larr;', 'lceil;', 'ldquo;', 'le;', 'lfloor;', 'lowast;', 'loz;', 'lrm;', 'lsaquo;', 'lsquo;', 'lt;', 'macr;', 'mdash;', 'micro;', 'middot;', 'minus;', 'Mu;', 'mu;', 'nabla;', 'nbsp;', 'ndash;', 'ne;', 'ni;', 'not;', 'notin;', 'nsub;', 'Ntilde;', 'ntilde;', 'Nu;', 'nu;', 'Oacute;', 'oacute;', 'Ocirc;', 'ocirc;', 'OElig;', 'oelig;', 'Ograve;', 'ograve;', 'oline;', 'Omega;', 'omega;', 'Omicron;', 'omicron;', 'oplus;', 'or;', 'ordf;', 'ordm;', 'Oslash;', 'oslash;', 'Otilde;', 'otilde;', 'otimes;', 'Ouml;', 'ouml;', 'para;', 'part;', 'permil;', 'perp;', 'Phi;', 'phi;', 'Pi;', 'pi;', 'piv;', 'plusmn;', 'pound;', 'Prime;', 'prime;', 'prod;', 'prop;', 'Psi;', 'psi;', 'quot;', 'radic;', 'rang;', 'raquo;', 'rArr;', 'rarr;', 'rceil;', 'rdquo;', 'real;', 'reg;', 'rfloor;', 'Rho;', 'rho;', 'rlm;', 'rsaquo;', 'rsquo;', 'sbquo;', 'Scaron;', 'scaron;', 'sdot;', 'sect;', 'shy;', 'Sigma;', 'sigma;', 'sigmaf;', 'sim;', 'spades;', 'sub;', 'sube;', 'sum;', 'sup;', 'sup1;', 'sup2;', 'sup3;', 'supe;', 'szlig;', 'Tau;', 'tau;', 'there4;', 'Theta;', 'theta;', 'thetasym;', 'thinsp;', 'THORN;', 'thorn;', 'tilde;', 'times;', 'trade;', 'Uacute;', 'uacute;', 'uArr;', 'uarr;', 'Ucirc;', 'ucirc;', 'Ugrave;', 'ugrave;', 'uml;', 'upsih;', 'Upsilon;', 'upsilon;', 'Uuml;', 'uuml;', 'weierp;', 'Xi;', 'xi;', 'Yacute;', 'yacute;', 'yen;', 'Yuml;', 'yuml;', 'Zeta;', 'zeta;', 'zwj;', 'zwnj;'];

        return values.map(function(value){
            return {
                caption: value,
                snippet: value,
                meta: "html entity",
                score: Number.MAX_VALUE
            };
        });
    };

}).call(HtmlCompletions.prototype);

exports.HtmlCompletions = HtmlCompletions;
});

ace.define("ace/mode/html",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text","ace/mode/javascript","ace/mode/css","ace/mode/html_highlight_rules","ace/mode/behaviour/xml","ace/mode/folding/html","ace/mode/html_completions","ace/worker/worker_client"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var lang = require("../lib/lang");
var TextMode = require("./text").Mode;
var JavaScriptMode = require("./javascript").Mode;
var CssMode = require("./css").Mode;
var HtmlHighlightRules = require("./html_highlight_rules").HtmlHighlightRules;
var XmlBehaviour = require("./behaviour/xml").XmlBehaviour;
var HtmlFoldMode = require("./folding/html").FoldMode;
var HtmlCompletions = require("./html_completions").HtmlCompletions;
var WorkerClient = require("../worker/worker_client").WorkerClient;
var voidElements = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "menuitem", "param", "source", "track", "wbr"];
var optionalEndTags = ["li", "dt", "dd", "p", "rt", "rp", "optgroup", "option", "colgroup", "td", "th"];

var Mode = function(options) {
    this.fragmentContext = options && options.fragmentContext;
    this.HighlightRules = HtmlHighlightRules;
    this.$behaviour = new XmlBehaviour();
    this.$completer = new HtmlCompletions();
    
    this.createModeDelegates({
        "js-": JavaScriptMode,
        "css-": CssMode
    });
    
    this.foldingRules = new HtmlFoldMode(this.voidElements, lang.arrayToMap(optionalEndTags));
};
oop.inherits(Mode, TextMode);

(function() {

    this.blockComment = {start: "<!--", end: "-->"};

    this.voidElements = lang.arrayToMap(voidElements);

    this.getNextLineIndent = function(state, line, tab) {
        return this.$getIndent(line);
    };

    this.checkOutdent = function(state, line, input) {
        return false;
    };

    this.getCompletions = function(state, session, pos, prefix) {
        return this.$completer.getCompletions(state, session, pos, prefix);
    };

    this.createWorker = function(session) {
        if (this.constructor != Mode)
            return;
        var worker = new WorkerClient(["ace"], "ace/mode/html_worker", "Worker");
        worker.attachToDocument(session.getDocument());

        if (this.fragmentContext)
            worker.call("setOptions", [{context: this.fragmentContext}]);

        worker.on("error", function(e) {
            session.setAnnotations(e.data);
        });

        worker.on("terminate", function() {
            session.clearAnnotations();
        });

        return worker;
    };

    this.$id = "ace/mode/html";
}).call(Mode.prototype);

exports.Mode = Mode;
});

ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"], function(require, exports, module) {
"use strict";

var oop = require("../../lib/oop");
var BaseFoldMode = require("./fold_mode").FoldMode;
var Range = require("../../range").Range;

var FoldMode = exports.FoldMode = function() {};
oop.inherits(FoldMode, BaseFoldMode);

(function() {

    this.getFoldWidgetRange = function(session, foldStyle, row) {
        var range = this.indentationBlock(session, row);
        if (range)
            return range;

        var re = /\S/;
        var line = session.getLine(row);
        var startLevel = line.search(re);
        if (startLevel == -1 || line[startLevel] != "#")
            return;

        var startColumn = line.length;
        var maxRow = session.getLength();
        var startRow = row;
        var endRow = row;

        while (++row < maxRow) {
            line = session.getLine(row);
            var level = line.search(re);

            if (level == -1)
                continue;

            if (line[level] != "#")
                break;

            endRow = row;
        }

        if (endRow > startRow) {
            var endColumn = session.getLine(endRow).length;
            return new Range(startRow, startColumn, endRow, endColumn);
        }
    };
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
        var indent = line.search(/\S/);
        var next = session.getLine(row + 1);
        var prev = session.getLine(row - 1);
        var prevIndent = prev.search(/\S/);
        var nextIndent = next.search(/\S/);

        if (indent == -1) {
            session.foldWidgets[row - 1] = prevIndent!= -1 && prevIndent < nextIndent ? "start" : "";
            return "";
        }
        if (prevIndent == -1) {
            if (indent == nextIndent && line[indent] == "#" && next[indent] == "#") {
                session.foldWidgets[row - 1] = "";
                session.foldWidgets[row + 1] = "";
                return "start";
            }
        } else if (prevIndent == indent && line[indent] == "#" && prev[indent] == "#") {
            if (session.getLine(row - 2).search(/\S/) == -1) {
                session.foldWidgets[row - 1] = "start";
                session.foldWidgets[row + 1] = "";
                return "";
            }
        }

        if (prevIndent!= -1 && prevIndent < indent)
            session.foldWidgets[row - 1] = "start";
        else
            session.foldWidgets[row - 1] = "";

        if (indent < nextIndent)
            return "start";
        else
            return "";
    };

}).call(FoldMode.prototype);

});

ace.define("ace/mode/elixir",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/elixir_highlight_rules","ace/mode/folding/coffee"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var ElixirHighlightRules = require("./elixir_highlight_rules").ElixirHighlightRules;
var FoldMode = require("./folding/coffee").FoldMode;

var Mode = function() {
    this.HighlightRules = ElixirHighlightRules;
    this.foldingRules = new FoldMode();
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "#";
    this.$id = "ace/mode/elixir"
}).call(Mode.prototype);

exports.Mode = Mode;
});

ace.define("ace/mode/html_elixir",["require","exports","module","ace/lib/oop","ace/mode/html_elixir_highlight_rules","ace/mode/html","ace/mode/javascript","ace/mode/css","ace/mode/elixir"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var HtmlElixirHighlightRules = require("./html_elixir_highlight_rules").HtmlElixirHighlightRules;
var HtmlMode = require("./html").Mode;
var JavaScriptMode = require("./javascript").Mode;
var CssMode = require("./css").Mode;
var ElixirMode = require("./elixir").Mode;

var Mode = function() {
    HtmlMode.call(this);   
    this.HighlightRules = HtmlElixirHighlightRules;
    this.createModeDelegates({
        "js-": JavaScriptMode,
        "css-": CssMode,
        "elixir-": ElixirMode
    });
};
oop.inherits(Mode, HtmlMode);

(function() {

    this.$id = "ace/mode/html_elixir";
}).call(Mode.prototype);

exports.Mode = Mode;
});
