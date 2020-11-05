(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/systemverilog/systemverilog.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/systemverilog/systemverilog.js ***!
  \******************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var conf = {
    comments: {
        lineComment: '//',
        blockComment: ['/*', '*/']
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
        ['begin', 'end'],
        ['case', 'endcase'],
        ['casex', 'endcase'],
        ['casez', 'endcase'],
        ['checker', 'endchecker'],
        ['class', 'endclass'],
        ['clocking', 'endclocking'],
        ['config', 'endconfig'],
        ['function', 'endfunction'],
        ['generate', 'endgenerate'],
        ['group', 'endgroup'],
        ['interface', 'endinterface'],
        ['module', 'endmodule'],
        ['package', 'endpackage'],
        ['primitive', 'endprimitive'],
        ['program', 'endprogram'],
        ['property', 'endproperty'],
        ['specify', 'endspecify'],
        ['sequence', 'endsequence'],
        ['table', 'endtable'],
        ['task', 'endtask']
    ],
    autoClosingPairs: [
        { open: '[', close: ']' },
        { open: '{', close: '}' },
        { open: '(', close: ')' },
        { open: "'", close: "'", notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    folding: {
        offSide: false,
        markers: {
            start: new RegExp('^(?:\\s*|.*(?!\\/[\\/\\*])[^\\w])(?:begin|case(x|z)?|class|clocking|config|covergroup|function|generate|interface|module|package|primitive|property|program|sequence|specify|table|task)\\b'),
            end: new RegExp('^(?:\\s*|.*(?!\\/[\\/\\*])[^\\w])(?:end|endcase|endclass|endclocking|endconfig|endgroup|endfunction|endgenerate|endinterface|endmodule|endpackage|endprimitive|endproperty|endprogram|endsequence|endspecify|endtable|endtask)\\b')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.sv',
    brackets: [
        { token: 'delimiter.curly', open: '{', close: '}' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.square', open: '[', close: ']' },
        { token: 'delimiter.angle', open: '<', close: '>' }
    ],
    keywords: [
        'accept_on',
        'alias',
        'always',
        'always_comb',
        'always_ff',
        'always_latch',
        'and',
        'assert',
        'assign',
        'assume',
        'automatic',
        'before',
        'begin',
        'bind',
        'bins',
        'binsof',
        'bit',
        'break',
        'buf',
        'bufif0',
        'bufif1',
        'byte',
        'case',
        'casex',
        'casez',
        'cell',
        'chandle',
        'checker',
        'class',
        'clocking',
        'cmos',
        'config',
        'const',
        'constraint',
        'context',
        'continue',
        'cover',
        'covergroup',
        'coverpoint',
        'cross',
        'deassign',
        'default',
        'defparam',
        'design',
        'disable',
        'dist',
        'do',
        'edge',
        'else',
        'end',
        'endcase',
        'endchecker',
        'endclass',
        'endclocking',
        'endconfig',
        'endfunction',
        'endgenerate',
        'endgroup',
        'endinterface',
        'endmodule',
        'endpackage',
        'endprimitive',
        'endprogram',
        'endproperty',
        'endspecify',
        'endsequence',
        'endtable',
        'endtask',
        'enum',
        'event',
        'eventually',
        'expect',
        'export',
        'extends',
        'extern',
        'final',
        'first_match',
        'for',
        'force',
        'foreach',
        'forever',
        'fork',
        'forkjoin',
        'function',
        'generate',
        'genvar',
        'global',
        'highz0',
        'highz1',
        'if',
        'iff',
        'ifnone',
        'ignore_bins',
        'illegal_bins',
        'implements',
        'implies',
        'import',
        'incdir',
        'include',
        'initial',
        'inout',
        'input',
        'inside',
        'instance',
        'int',
        'integer',
        'interconnect',
        'interface',
        'intersect',
        'join',
        'join_any',
        'join_none',
        'large',
        'let',
        'liblist',
        'library',
        'local',
        'localparam',
        'logic',
        'longint',
        'macromodule',
        'matches',
        'medium',
        'modport',
        'module',
        'nand',
        'negedge',
        'nettype',
        'new',
        'nexttime',
        'nmos',
        'nor',
        'noshowcancelled',
        'not',
        'notif0',
        'notif1',
        'null',
        'or',
        'output',
        'package',
        'packed',
        'parameter',
        'pmos',
        'posedge',
        'primitive',
        'priority',
        'program',
        'property',
        'protected',
        'pull0',
        'pull1',
        'pulldown',
        'pullup',
        'pulsestyle_ondetect',
        'pulsestyle_onevent',
        'pure',
        'rand',
        'randc',
        'randcase',
        'randsequence',
        'rcmos',
        'real',
        'realtime',
        'ref',
        'reg',
        'reject_on',
        'release',
        'repeat',
        'restrict',
        'return',
        'rnmos',
        'rpmos',
        'rtran',
        'rtranif0',
        'rtranif1',
        's_always',
        's_eventually',
        's_nexttime',
        's_until',
        's_until_with',
        'scalared',
        'sequence',
        'shortint',
        'shortreal',
        'showcancelled',
        'signed',
        'small',
        'soft',
        'solve',
        'specify',
        'specparam',
        'static',
        'string',
        'strong',
        'strong0',
        'strong1',
        'struct',
        'super',
        'supply0',
        'supply1',
        'sync_accept_on',
        'sync_reject_on',
        'table',
        'tagged',
        'task',
        'this',
        'throughout',
        'time',
        'timeprecision',
        'timeunit',
        'tran',
        'tranif0',
        'tranif1',
        'tri',
        'tri0',
        'tri1',
        'triand',
        'trior',
        'trireg',
        'type',
        'typedef',
        'union',
        'unique',
        'unique0',
        'unsigned',
        'until',
        'until_with',
        'untyped',
        'use',
        'uwire',
        'var',
        'vectored',
        'virtual',
        'void',
        'wait',
        'wait_order',
        'wand',
        'weak',
        'weak0',
        'weak1',
        'while',
        'wildcard',
        'wire',
        'with',
        'within',
        'wor',
        'xnor',
        'xor'
    ],
    builtin_gates: [
        'and',
        'nand',
        'nor',
        'or',
        'xor',
        'xnor',
        'buf',
        'not',
        'bufif0',
        'bufif1',
        'notif1',
        'notif0',
        'cmos',
        'nmos',
        'pmos',
        'rcmos',
        'rnmos',
        'rpmos',
        'tran',
        'tranif1',
        'tranif0',
        'rtran',
        'rtranif1',
        'rtranif0'
    ],
    operators: [
        // assignment operators
        '=',
        '+=',
        '-=',
        '*=',
        '/=',
        '%=',
        '&=',
        '|=',
        '^=',
        '<<=',
        '>>+',
        '<<<=',
        '>>>=',
        // conditional expression
        '?',
        ':',
        // Unary operators
        '+',
        '-',
        '!',
        '~',
        '&',
        '~&',
        '|',
        '~|',
        '^',
        '~^',
        '^~',
        //binary operators
        '+',
        '-',
        '*',
        '/',
        '%',
        '==',
        '!=',
        '===',
        '!==',
        '==?',
        '!=?',
        '&&',
        '||',
        '**',
        '<',
        '<=',
        '>',
        '>=',
        '&',
        '|',
        '^',
        '>>',
        '<<',
        '>>>',
        '<<<',
        // increment or decrement operator
        '++',
        '--',
        //binary logical operator
        '->',
        '<->',
        // binary set membership operator
        'inside',
        // binary distrubution operator
        'dist',
        '::',
        '+:',
        '-:',
        '*>',
        '&&&',
        '|->',
        '|=>',
        '#=#'
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%#]+/,
    escapes: /%%|\\(?:[antvf\\"']|x[0-9A-Fa-f]{1,2}|[0-7]{1,3})/,
    identifier: /(?:[a-zA-Z_][a-zA-Z0-9_$\.]*|\\\S+ )/,
    systemcall: /[$][a-zA-Z0-9_]+/,
    timeunits: /s|ms|us|ns|ps|fs/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // module instances
            [
                /^(\s*)(@identifier)/,
                [
                    '',
                    {
                        cases: {
                            '@builtin_gates': {
                                token: 'keyword.$2',
                                next: '@module_instance'
                            },
                            '@keywords': { token: 'keyword.$2' },
                            '@default': {
                                token: 'identifier',
                                next: '@module_instance'
                            }
                        }
                    }
                ]
            ],
            // include statements
            [/^\s*`include/, { token: 'keyword.directive.include', next: '@include' }],
            // Preprocessor directives
            [/^\s*`\s*\w+/, 'keyword'],
            // identifiers and keywords
            { include: '@identifier_or_keyword' },
            // whitespace
            { include: '@whitespace' },
            // (* attributes *).
            [/\(\*.*\*\)/, 'annotation'],
            // Systemcall
            [/@systemcall/, 'variable.predefined'],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [
                /@symbols/,
                {
                    cases: {
                        '@operators': 'delimiter',
                        '@default': ''
                    }
                }
            ],
            // numbers
            { include: '@numbers' },
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            { include: '@strings' }
        ],
        identifier_or_keyword: [
            [
                /@identifier/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        numbers: [
            [/\d+?[\d_]*(?:\.[\d_]+)?[eE][\-+]?\d+/, 'number.float'],
            [/\d+?[\d_]*\.[\d_]+(?:\s*@timeunits)?/, 'number.float'],
            [/(?:\d+?[\d_]*\s*)?'[sS]?[dD]\s*[0-9xXzZ?]+?[0-9xXzZ?_]*/, 'number'],
            [/(?:\d+?[\d_]*\s*)?'[sS]?[bB]\s*[0-1xXzZ?]+?[0-1xXzZ?_]*/, 'number.binary'],
            [/(?:\d+?[\d_]*\s*)?'[sS]?[oO]\s*[0-7xXzZ?]+?[0-7xXzZ?_]*/, 'number.octal'],
            [/(?:\d+?[\d_]*\s*)?'[sS]?[hH]\s*[0-9a-fA-FxXzZ?]+?[0-9a-fA-FxXzZ?_]*/, 'number.hex'],
            [/1step/, 'number'],
            [/[\dxXzZ]+?[\dxXzZ_]*(?:\s*@timeunits)?/, 'number'],
            [/'[01xXzZ]+/, 'number']
        ],
        module_instance: [
            { include: '@whitespace' },
            [/(#?)(\()/, ['', { token: '@brackets', next: '@port_connection' }]],
            [/@identifier\s*[;={}\[\],]/, { token: '@rematch', next: '@pop' }],
            [/@symbols|[;={}\[\],]/, { token: '@rematch', next: '@pop' }],
            [/@identifier/, 'type'],
            [/;/, 'delimiter', '@pop']
        ],
        port_connection: [
            { include: '@identifier_or_keyword' },
            { include: '@whitespace' },
            [/@systemcall/, 'variable.predefined'],
            { include: '@numbers' },
            { include: '@strings' },
            [/[,]/, 'delimiter'],
            [/\(/, '@brackets', '@port_connection'],
            [/\)/, '@brackets', '@pop']
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment']
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        strings: [
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop']
        ],
        include: [
            [
                /(\s*)(")([\w*\/*]*)(.\w*)(")/,
                [
                    '',
                    'string.include.identifier',
                    'string.include.identifier',
                    'string.include.identifier',
                    { token: 'string.include.identifier', next: '@pop' }
                ]
            ],
            [
                /(\s*)(<)([\w*\/*]*)(.\w*)(>)/,
                [
                    '',
                    'string.include.identifier',
                    'string.include.identifier',
                    'string.include.identifier',
                    { token: 'string.include.identifier', next: '@pop' }
                ]
            ]
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3N5c3RlbXZlcmlsb2cvc3lzdGVtdmVyaWxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVMsbUNBQW1DLFlBQVksR0FBRztBQUMzRCxTQUFTLHdEQUF3RDtBQUNqRSxTQUFTLG1EQUFtRDtBQUM1RCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLElBQUksT0FBTyxJQUFJO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLDBDQUEwQyxzQkFBc0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHVEQUF1RDtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9DQUFvQztBQUNqRDtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQkFBc0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDLCtCQUErQiwrQ0FBK0M7QUFDOUUsOEJBQThCLEdBQUcsVUFBVSxrQ0FBa0M7QUFDN0UseUJBQXlCLEdBQUcsVUFBVSxrQ0FBa0M7QUFDeEU7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWEsb0NBQW9DO0FBQ2pELGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nLFxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXVxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXSxcbiAgICAgICAgWydiZWdpbicsICdlbmQnXSxcbiAgICAgICAgWydjYXNlJywgJ2VuZGNhc2UnXSxcbiAgICAgICAgWydjYXNleCcsICdlbmRjYXNlJ10sXG4gICAgICAgIFsnY2FzZXonLCAnZW5kY2FzZSddLFxuICAgICAgICBbJ2NoZWNrZXInLCAnZW5kY2hlY2tlciddLFxuICAgICAgICBbJ2NsYXNzJywgJ2VuZGNsYXNzJ10sXG4gICAgICAgIFsnY2xvY2tpbmcnLCAnZW5kY2xvY2tpbmcnXSxcbiAgICAgICAgWydjb25maWcnLCAnZW5kY29uZmlnJ10sXG4gICAgICAgIFsnZnVuY3Rpb24nLCAnZW5kZnVuY3Rpb24nXSxcbiAgICAgICAgWydnZW5lcmF0ZScsICdlbmRnZW5lcmF0ZSddLFxuICAgICAgICBbJ2dyb3VwJywgJ2VuZGdyb3VwJ10sXG4gICAgICAgIFsnaW50ZXJmYWNlJywgJ2VuZGludGVyZmFjZSddLFxuICAgICAgICBbJ21vZHVsZScsICdlbmRtb2R1bGUnXSxcbiAgICAgICAgWydwYWNrYWdlJywgJ2VuZHBhY2thZ2UnXSxcbiAgICAgICAgWydwcmltaXRpdmUnLCAnZW5kcHJpbWl0aXZlJ10sXG4gICAgICAgIFsncHJvZ3JhbScsICdlbmRwcm9ncmFtJ10sXG4gICAgICAgIFsncHJvcGVydHknLCAnZW5kcHJvcGVydHknXSxcbiAgICAgICAgWydzcGVjaWZ5JywgJ2VuZHNwZWNpZnknXSxcbiAgICAgICAgWydzZXF1ZW5jZScsICdlbmRzZXF1ZW5jZSddLFxuICAgICAgICBbJ3RhYmxlJywgJ2VuZHRhYmxlJ10sXG4gICAgICAgIFsndGFzaycsICdlbmR0YXNrJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZyddIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxuICAgIF0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBvZmZTaWRlOiBmYWxzZSxcbiAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoJ14oPzpcXFxccyp8LiooPyFcXFxcL1tcXFxcL1xcXFwqXSlbXlxcXFx3XSkoPzpiZWdpbnxjYXNlKHh8eik/fGNsYXNzfGNsb2NraW5nfGNvbmZpZ3xjb3Zlcmdyb3VwfGZ1bmN0aW9ufGdlbmVyYXRlfGludGVyZmFjZXxtb2R1bGV8cGFja2FnZXxwcmltaXRpdmV8cHJvcGVydHl8cHJvZ3JhbXxzZXF1ZW5jZXxzcGVjaWZ5fHRhYmxlfHRhc2spXFxcXGInKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cCgnXig/OlxcXFxzKnwuKig/IVxcXFwvW1xcXFwvXFxcXCpdKVteXFxcXHddKSg/OmVuZHxlbmRjYXNlfGVuZGNsYXNzfGVuZGNsb2NraW5nfGVuZGNvbmZpZ3xlbmRncm91cHxlbmRmdW5jdGlvbnxlbmRnZW5lcmF0ZXxlbmRpbnRlcmZhY2V8ZW5kbW9kdWxlfGVuZHBhY2thZ2V8ZW5kcHJpbWl0aXZlfGVuZHByb3BlcnR5fGVuZHByb2dyYW18ZW5kc2VxdWVuY2V8ZW5kc3BlY2lmeXxlbmR0YWJsZXxlbmR0YXNrKVxcXFxiJylcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnN2JyxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnLCBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5hbmdsZScsIG9wZW46ICc8JywgY2xvc2U6ICc+JyB9XG4gICAgXSxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAnYWNjZXB0X29uJyxcbiAgICAgICAgJ2FsaWFzJyxcbiAgICAgICAgJ2Fsd2F5cycsXG4gICAgICAgICdhbHdheXNfY29tYicsXG4gICAgICAgICdhbHdheXNfZmYnLFxuICAgICAgICAnYWx3YXlzX2xhdGNoJyxcbiAgICAgICAgJ2FuZCcsXG4gICAgICAgICdhc3NlcnQnLFxuICAgICAgICAnYXNzaWduJyxcbiAgICAgICAgJ2Fzc3VtZScsXG4gICAgICAgICdhdXRvbWF0aWMnLFxuICAgICAgICAnYmVmb3JlJyxcbiAgICAgICAgJ2JlZ2luJyxcbiAgICAgICAgJ2JpbmQnLFxuICAgICAgICAnYmlucycsXG4gICAgICAgICdiaW5zb2YnLFxuICAgICAgICAnYml0JyxcbiAgICAgICAgJ2JyZWFrJyxcbiAgICAgICAgJ2J1ZicsXG4gICAgICAgICdidWZpZjAnLFxuICAgICAgICAnYnVmaWYxJyxcbiAgICAgICAgJ2J5dGUnLFxuICAgICAgICAnY2FzZScsXG4gICAgICAgICdjYXNleCcsXG4gICAgICAgICdjYXNleicsXG4gICAgICAgICdjZWxsJyxcbiAgICAgICAgJ2NoYW5kbGUnLFxuICAgICAgICAnY2hlY2tlcicsXG4gICAgICAgICdjbGFzcycsXG4gICAgICAgICdjbG9ja2luZycsXG4gICAgICAgICdjbW9zJyxcbiAgICAgICAgJ2NvbmZpZycsXG4gICAgICAgICdjb25zdCcsXG4gICAgICAgICdjb25zdHJhaW50JyxcbiAgICAgICAgJ2NvbnRleHQnLFxuICAgICAgICAnY29udGludWUnLFxuICAgICAgICAnY292ZXInLFxuICAgICAgICAnY292ZXJncm91cCcsXG4gICAgICAgICdjb3ZlcnBvaW50JyxcbiAgICAgICAgJ2Nyb3NzJyxcbiAgICAgICAgJ2RlYXNzaWduJyxcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAnZGVmcGFyYW0nLFxuICAgICAgICAnZGVzaWduJyxcbiAgICAgICAgJ2Rpc2FibGUnLFxuICAgICAgICAnZGlzdCcsXG4gICAgICAgICdkbycsXG4gICAgICAgICdlZGdlJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnZW5kJyxcbiAgICAgICAgJ2VuZGNhc2UnLFxuICAgICAgICAnZW5kY2hlY2tlcicsXG4gICAgICAgICdlbmRjbGFzcycsXG4gICAgICAgICdlbmRjbG9ja2luZycsXG4gICAgICAgICdlbmRjb25maWcnLFxuICAgICAgICAnZW5kZnVuY3Rpb24nLFxuICAgICAgICAnZW5kZ2VuZXJhdGUnLFxuICAgICAgICAnZW5kZ3JvdXAnLFxuICAgICAgICAnZW5kaW50ZXJmYWNlJyxcbiAgICAgICAgJ2VuZG1vZHVsZScsXG4gICAgICAgICdlbmRwYWNrYWdlJyxcbiAgICAgICAgJ2VuZHByaW1pdGl2ZScsXG4gICAgICAgICdlbmRwcm9ncmFtJyxcbiAgICAgICAgJ2VuZHByb3BlcnR5JyxcbiAgICAgICAgJ2VuZHNwZWNpZnknLFxuICAgICAgICAnZW5kc2VxdWVuY2UnLFxuICAgICAgICAnZW5kdGFibGUnLFxuICAgICAgICAnZW5kdGFzaycsXG4gICAgICAgICdlbnVtJyxcbiAgICAgICAgJ2V2ZW50JyxcbiAgICAgICAgJ2V2ZW50dWFsbHknLFxuICAgICAgICAnZXhwZWN0JyxcbiAgICAgICAgJ2V4cG9ydCcsXG4gICAgICAgICdleHRlbmRzJyxcbiAgICAgICAgJ2V4dGVybicsXG4gICAgICAgICdmaW5hbCcsXG4gICAgICAgICdmaXJzdF9tYXRjaCcsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnZm9yY2UnLFxuICAgICAgICAnZm9yZWFjaCcsXG4gICAgICAgICdmb3JldmVyJyxcbiAgICAgICAgJ2ZvcmsnLFxuICAgICAgICAnZm9ya2pvaW4nLFxuICAgICAgICAnZnVuY3Rpb24nLFxuICAgICAgICAnZ2VuZXJhdGUnLFxuICAgICAgICAnZ2VudmFyJyxcbiAgICAgICAgJ2dsb2JhbCcsXG4gICAgICAgICdoaWdoejAnLFxuICAgICAgICAnaGlnaHoxJyxcbiAgICAgICAgJ2lmJyxcbiAgICAgICAgJ2lmZicsXG4gICAgICAgICdpZm5vbmUnLFxuICAgICAgICAnaWdub3JlX2JpbnMnLFxuICAgICAgICAnaWxsZWdhbF9iaW5zJyxcbiAgICAgICAgJ2ltcGxlbWVudHMnLFxuICAgICAgICAnaW1wbGllcycsXG4gICAgICAgICdpbXBvcnQnLFxuICAgICAgICAnaW5jZGlyJyxcbiAgICAgICAgJ2luY2x1ZGUnLFxuICAgICAgICAnaW5pdGlhbCcsXG4gICAgICAgICdpbm91dCcsXG4gICAgICAgICdpbnB1dCcsXG4gICAgICAgICdpbnNpZGUnLFxuICAgICAgICAnaW5zdGFuY2UnLFxuICAgICAgICAnaW50JyxcbiAgICAgICAgJ2ludGVnZXInLFxuICAgICAgICAnaW50ZXJjb25uZWN0JyxcbiAgICAgICAgJ2ludGVyZmFjZScsXG4gICAgICAgICdpbnRlcnNlY3QnLFxuICAgICAgICAnam9pbicsXG4gICAgICAgICdqb2luX2FueScsXG4gICAgICAgICdqb2luX25vbmUnLFxuICAgICAgICAnbGFyZ2UnLFxuICAgICAgICAnbGV0JyxcbiAgICAgICAgJ2xpYmxpc3QnLFxuICAgICAgICAnbGlicmFyeScsXG4gICAgICAgICdsb2NhbCcsXG4gICAgICAgICdsb2NhbHBhcmFtJyxcbiAgICAgICAgJ2xvZ2ljJyxcbiAgICAgICAgJ2xvbmdpbnQnLFxuICAgICAgICAnbWFjcm9tb2R1bGUnLFxuICAgICAgICAnbWF0Y2hlcycsXG4gICAgICAgICdtZWRpdW0nLFxuICAgICAgICAnbW9kcG9ydCcsXG4gICAgICAgICdtb2R1bGUnLFxuICAgICAgICAnbmFuZCcsXG4gICAgICAgICduZWdlZGdlJyxcbiAgICAgICAgJ25ldHR5cGUnLFxuICAgICAgICAnbmV3JyxcbiAgICAgICAgJ25leHR0aW1lJyxcbiAgICAgICAgJ25tb3MnLFxuICAgICAgICAnbm9yJyxcbiAgICAgICAgJ25vc2hvd2NhbmNlbGxlZCcsXG4gICAgICAgICdub3QnLFxuICAgICAgICAnbm90aWYwJyxcbiAgICAgICAgJ25vdGlmMScsXG4gICAgICAgICdudWxsJyxcbiAgICAgICAgJ29yJyxcbiAgICAgICAgJ291dHB1dCcsXG4gICAgICAgICdwYWNrYWdlJyxcbiAgICAgICAgJ3BhY2tlZCcsXG4gICAgICAgICdwYXJhbWV0ZXInLFxuICAgICAgICAncG1vcycsXG4gICAgICAgICdwb3NlZGdlJyxcbiAgICAgICAgJ3ByaW1pdGl2ZScsXG4gICAgICAgICdwcmlvcml0eScsXG4gICAgICAgICdwcm9ncmFtJyxcbiAgICAgICAgJ3Byb3BlcnR5JyxcbiAgICAgICAgJ3Byb3RlY3RlZCcsXG4gICAgICAgICdwdWxsMCcsXG4gICAgICAgICdwdWxsMScsXG4gICAgICAgICdwdWxsZG93bicsXG4gICAgICAgICdwdWxsdXAnLFxuICAgICAgICAncHVsc2VzdHlsZV9vbmRldGVjdCcsXG4gICAgICAgICdwdWxzZXN0eWxlX29uZXZlbnQnLFxuICAgICAgICAncHVyZScsXG4gICAgICAgICdyYW5kJyxcbiAgICAgICAgJ3JhbmRjJyxcbiAgICAgICAgJ3JhbmRjYXNlJyxcbiAgICAgICAgJ3JhbmRzZXF1ZW5jZScsXG4gICAgICAgICdyY21vcycsXG4gICAgICAgICdyZWFsJyxcbiAgICAgICAgJ3JlYWx0aW1lJyxcbiAgICAgICAgJ3JlZicsXG4gICAgICAgICdyZWcnLFxuICAgICAgICAncmVqZWN0X29uJyxcbiAgICAgICAgJ3JlbGVhc2UnLFxuICAgICAgICAncmVwZWF0JyxcbiAgICAgICAgJ3Jlc3RyaWN0JyxcbiAgICAgICAgJ3JldHVybicsXG4gICAgICAgICdybm1vcycsXG4gICAgICAgICdycG1vcycsXG4gICAgICAgICdydHJhbicsXG4gICAgICAgICdydHJhbmlmMCcsXG4gICAgICAgICdydHJhbmlmMScsXG4gICAgICAgICdzX2Fsd2F5cycsXG4gICAgICAgICdzX2V2ZW50dWFsbHknLFxuICAgICAgICAnc19uZXh0dGltZScsXG4gICAgICAgICdzX3VudGlsJyxcbiAgICAgICAgJ3NfdW50aWxfd2l0aCcsXG4gICAgICAgICdzY2FsYXJlZCcsXG4gICAgICAgICdzZXF1ZW5jZScsXG4gICAgICAgICdzaG9ydGludCcsXG4gICAgICAgICdzaG9ydHJlYWwnLFxuICAgICAgICAnc2hvd2NhbmNlbGxlZCcsXG4gICAgICAgICdzaWduZWQnLFxuICAgICAgICAnc21hbGwnLFxuICAgICAgICAnc29mdCcsXG4gICAgICAgICdzb2x2ZScsXG4gICAgICAgICdzcGVjaWZ5JyxcbiAgICAgICAgJ3NwZWNwYXJhbScsXG4gICAgICAgICdzdGF0aWMnLFxuICAgICAgICAnc3RyaW5nJyxcbiAgICAgICAgJ3N0cm9uZycsXG4gICAgICAgICdzdHJvbmcwJyxcbiAgICAgICAgJ3N0cm9uZzEnLFxuICAgICAgICAnc3RydWN0JyxcbiAgICAgICAgJ3N1cGVyJyxcbiAgICAgICAgJ3N1cHBseTAnLFxuICAgICAgICAnc3VwcGx5MScsXG4gICAgICAgICdzeW5jX2FjY2VwdF9vbicsXG4gICAgICAgICdzeW5jX3JlamVjdF9vbicsXG4gICAgICAgICd0YWJsZScsXG4gICAgICAgICd0YWdnZWQnLFxuICAgICAgICAndGFzaycsXG4gICAgICAgICd0aGlzJyxcbiAgICAgICAgJ3Rocm91Z2hvdXQnLFxuICAgICAgICAndGltZScsXG4gICAgICAgICd0aW1lcHJlY2lzaW9uJyxcbiAgICAgICAgJ3RpbWV1bml0JyxcbiAgICAgICAgJ3RyYW4nLFxuICAgICAgICAndHJhbmlmMCcsXG4gICAgICAgICd0cmFuaWYxJyxcbiAgICAgICAgJ3RyaScsXG4gICAgICAgICd0cmkwJyxcbiAgICAgICAgJ3RyaTEnLFxuICAgICAgICAndHJpYW5kJyxcbiAgICAgICAgJ3RyaW9yJyxcbiAgICAgICAgJ3RyaXJlZycsXG4gICAgICAgICd0eXBlJyxcbiAgICAgICAgJ3R5cGVkZWYnLFxuICAgICAgICAndW5pb24nLFxuICAgICAgICAndW5pcXVlJyxcbiAgICAgICAgJ3VuaXF1ZTAnLFxuICAgICAgICAndW5zaWduZWQnLFxuICAgICAgICAndW50aWwnLFxuICAgICAgICAndW50aWxfd2l0aCcsXG4gICAgICAgICd1bnR5cGVkJyxcbiAgICAgICAgJ3VzZScsXG4gICAgICAgICd1d2lyZScsXG4gICAgICAgICd2YXInLFxuICAgICAgICAndmVjdG9yZWQnLFxuICAgICAgICAndmlydHVhbCcsXG4gICAgICAgICd2b2lkJyxcbiAgICAgICAgJ3dhaXQnLFxuICAgICAgICAnd2FpdF9vcmRlcicsXG4gICAgICAgICd3YW5kJyxcbiAgICAgICAgJ3dlYWsnLFxuICAgICAgICAnd2VhazAnLFxuICAgICAgICAnd2VhazEnLFxuICAgICAgICAnd2hpbGUnLFxuICAgICAgICAnd2lsZGNhcmQnLFxuICAgICAgICAnd2lyZScsXG4gICAgICAgICd3aXRoJyxcbiAgICAgICAgJ3dpdGhpbicsXG4gICAgICAgICd3b3InLFxuICAgICAgICAneG5vcicsXG4gICAgICAgICd4b3InXG4gICAgXSxcbiAgICBidWlsdGluX2dhdGVzOiBbXG4gICAgICAgICdhbmQnLFxuICAgICAgICAnbmFuZCcsXG4gICAgICAgICdub3InLFxuICAgICAgICAnb3InLFxuICAgICAgICAneG9yJyxcbiAgICAgICAgJ3hub3InLFxuICAgICAgICAnYnVmJyxcbiAgICAgICAgJ25vdCcsXG4gICAgICAgICdidWZpZjAnLFxuICAgICAgICAnYnVmaWYxJyxcbiAgICAgICAgJ25vdGlmMScsXG4gICAgICAgICdub3RpZjAnLFxuICAgICAgICAnY21vcycsXG4gICAgICAgICdubW9zJyxcbiAgICAgICAgJ3Btb3MnLFxuICAgICAgICAncmNtb3MnLFxuICAgICAgICAncm5tb3MnLFxuICAgICAgICAncnBtb3MnLFxuICAgICAgICAndHJhbicsXG4gICAgICAgICd0cmFuaWYxJyxcbiAgICAgICAgJ3RyYW5pZjAnLFxuICAgICAgICAncnRyYW4nLFxuICAgICAgICAncnRyYW5pZjEnLFxuICAgICAgICAncnRyYW5pZjAnXG4gICAgXSxcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgICAgLy8gYXNzaWdubWVudCBvcGVyYXRvcnNcbiAgICAgICAgJz0nLFxuICAgICAgICAnKz0nLFxuICAgICAgICAnLT0nLFxuICAgICAgICAnKj0nLFxuICAgICAgICAnLz0nLFxuICAgICAgICAnJT0nLFxuICAgICAgICAnJj0nLFxuICAgICAgICAnfD0nLFxuICAgICAgICAnXj0nLFxuICAgICAgICAnPDw9JyxcbiAgICAgICAgJz4+KycsXG4gICAgICAgICc8PDw9JyxcbiAgICAgICAgJz4+Pj0nLFxuICAgICAgICAvLyBjb25kaXRpb25hbCBleHByZXNzaW9uXG4gICAgICAgICc/JyxcbiAgICAgICAgJzonLFxuICAgICAgICAvLyBVbmFyeSBvcGVyYXRvcnNcbiAgICAgICAgJysnLFxuICAgICAgICAnLScsXG4gICAgICAgICchJyxcbiAgICAgICAgJ34nLFxuICAgICAgICAnJicsXG4gICAgICAgICd+JicsXG4gICAgICAgICd8JyxcbiAgICAgICAgJ358JyxcbiAgICAgICAgJ14nLFxuICAgICAgICAnfl4nLFxuICAgICAgICAnXn4nLFxuICAgICAgICAvL2JpbmFyeSBvcGVyYXRvcnNcbiAgICAgICAgJysnLFxuICAgICAgICAnLScsXG4gICAgICAgICcqJyxcbiAgICAgICAgJy8nLFxuICAgICAgICAnJScsXG4gICAgICAgICc9PScsXG4gICAgICAgICchPScsXG4gICAgICAgICc9PT0nLFxuICAgICAgICAnIT09JyxcbiAgICAgICAgJz09PycsXG4gICAgICAgICchPT8nLFxuICAgICAgICAnJiYnLFxuICAgICAgICAnfHwnLFxuICAgICAgICAnKionLFxuICAgICAgICAnPCcsXG4gICAgICAgICc8PScsXG4gICAgICAgICc+JyxcbiAgICAgICAgJz49JyxcbiAgICAgICAgJyYnLFxuICAgICAgICAnfCcsXG4gICAgICAgICdeJyxcbiAgICAgICAgJz4+JyxcbiAgICAgICAgJzw8JyxcbiAgICAgICAgJz4+PicsXG4gICAgICAgICc8PDwnLFxuICAgICAgICAvLyBpbmNyZW1lbnQgb3IgZGVjcmVtZW50IG9wZXJhdG9yXG4gICAgICAgICcrKycsXG4gICAgICAgICctLScsXG4gICAgICAgIC8vYmluYXJ5IGxvZ2ljYWwgb3BlcmF0b3JcbiAgICAgICAgJy0+JyxcbiAgICAgICAgJzwtPicsXG4gICAgICAgIC8vIGJpbmFyeSBzZXQgbWVtYmVyc2hpcCBvcGVyYXRvclxuICAgICAgICAnaW5zaWRlJyxcbiAgICAgICAgLy8gYmluYXJ5IGRpc3RydWJ1dGlvbiBvcGVyYXRvclxuICAgICAgICAnZGlzdCcsXG4gICAgICAgICc6OicsXG4gICAgICAgICcrOicsXG4gICAgICAgICctOicsXG4gICAgICAgICcqPicsXG4gICAgICAgICcmJiYnLFxuICAgICAgICAnfC0+JyxcbiAgICAgICAgJ3w9PicsXG4gICAgICAgICcjPSMnXG4gICAgXSxcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgc3ltYm9sczogL1s9Pjwhfj86JnwrXFwtKlxcL1xcXiUjXSsvLFxuICAgIGVzY2FwZXM6IC8lJXxcXFxcKD86W2FudHZmXFxcXFwiJ118eFswLTlBLUZhLWZdezEsMn18WzAtN117MSwzfSkvLFxuICAgIGlkZW50aWZpZXI6IC8oPzpbYS16QS1aX11bYS16QS1aMC05XyRcXC5dKnxcXFxcXFxTKyApLyxcbiAgICBzeXN0ZW1jYWxsOiAvWyRdW2EtekEtWjAtOV9dKy8sXG4gICAgdGltZXVuaXRzOiAvc3xtc3x1c3xuc3xwc3xmcy8sXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIC8vIG1vZHVsZSBpbnN0YW5jZXNcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXihcXHMqKShAaWRlbnRpZmllcikvLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BidWlsdGluX2dhdGVzJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2tleXdvcmQuJDInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQG1vZHVsZV9pbnN0YW5jZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZC4kMicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAnaWRlbnRpZmllcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAbW9kdWxlX2luc3RhbmNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBpbmNsdWRlIHN0YXRlbWVudHNcbiAgICAgICAgICAgIFsvXlxccypgaW5jbHVkZS8sIHsgdG9rZW46ICdrZXl3b3JkLmRpcmVjdGl2ZS5pbmNsdWRlJywgbmV4dDogJ0BpbmNsdWRlJyB9XSxcbiAgICAgICAgICAgIC8vIFByZXByb2Nlc3NvciBkaXJlY3RpdmVzXG4gICAgICAgICAgICBbL15cXHMqYFxccypcXHcrLywgJ2tleXdvcmQnXSxcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGlkZW50aWZpZXJfb3Jfa2V5d29yZCcgfSxcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgLy8gKCogYXR0cmlidXRlcyAqKS5cbiAgICAgICAgICAgIFsvXFwoXFwqLipcXCpcXCkvLCAnYW5ub3RhdGlvbiddLFxuICAgICAgICAgICAgLy8gU3lzdGVtY2FsbFxuICAgICAgICAgICAgWy9Ac3lzdGVtY2FsbC8sICd2YXJpYWJsZS5wcmVkZWZpbmVkJ10sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9bPD5dKD8hQHN5bWJvbHMpLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9Ac3ltYm9scy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnZGVsaW1pdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG51bWJlcnMnIH0sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXI6IGFmdGVyIG51bWJlciBiZWNhdXNlIG9mIC5cXGQgZmxvYXRzXG4gICAgICAgICAgICBbL1s7LC5dLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH1cbiAgICAgICAgXSxcbiAgICAgICAgaWRlbnRpZmllcl9vcl9rZXl3b3JkOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL0BpZGVudGlmaWVyLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgbnVtYmVyczogW1xuICAgICAgICAgICAgWy9cXGQrP1tcXGRfXSooPzpcXC5bXFxkX10rKT9bZUVdW1xcLStdP1xcZCsvLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbL1xcZCs/W1xcZF9dKlxcLltcXGRfXSsoPzpcXHMqQHRpbWV1bml0cyk/LywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy8oPzpcXGQrP1tcXGRfXSpcXHMqKT8nW3NTXT9bZERdXFxzKlswLTl4WHpaP10rP1swLTl4WHpaP19dKi8sICdudW1iZXInXSxcbiAgICAgICAgICAgIFsvKD86XFxkKz9bXFxkX10qXFxzKik/J1tzU10/W2JCXVxccypbMC0xeFh6Wj9dKz9bMC0xeFh6Wj9fXSovLCAnbnVtYmVyLmJpbmFyeSddLFxuICAgICAgICAgICAgWy8oPzpcXGQrP1tcXGRfXSpcXHMqKT8nW3NTXT9bb09dXFxzKlswLTd4WHpaP10rP1swLTd4WHpaP19dKi8sICdudW1iZXIub2N0YWwnXSxcbiAgICAgICAgICAgIFsvKD86XFxkKz9bXFxkX10qXFxzKik/J1tzU10/W2hIXVxccypbMC05YS1mQS1GeFh6Wj9dKz9bMC05YS1mQS1GeFh6Wj9fXSovLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy8xc3RlcC8sICdudW1iZXInXSxcbiAgICAgICAgICAgIFsvW1xcZHhYelpdKz9bXFxkeFh6Wl9dKig/OlxccypAdGltZXVuaXRzKT8vLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICBbLydbMDF4WHpaXSsvLCAnbnVtYmVyJ11cbiAgICAgICAgXSxcbiAgICAgICAgbW9kdWxlX2luc3RhbmNlOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIFsvKCM/KShcXCgpLywgWycnLCB7IHRva2VuOiAnQGJyYWNrZXRzJywgbmV4dDogJ0Bwb3J0X2Nvbm5lY3Rpb24nIH1dXSxcbiAgICAgICAgICAgIFsvQGlkZW50aWZpZXJcXHMqWzs9e31cXFtcXF0sXS8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvQHN5bWJvbHN8Wzs9e31cXFtcXF0sXS8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvQGlkZW50aWZpZXIvLCAndHlwZSddLFxuICAgICAgICAgICAgWy87LywgJ2RlbGltaXRlcicsICdAcG9wJ11cbiAgICAgICAgXSxcbiAgICAgICAgcG9ydF9jb25uZWN0aW9uOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAaWRlbnRpZmllcl9vcl9rZXl3b3JkJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICBbL0BzeXN0ZW1jYWxsLywgJ3ZhcmlhYmxlLnByZWRlZmluZWQnXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXG4gICAgICAgICAgICBbL1ssXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvXFwoLywgJ0BicmFja2V0cycsICdAcG9ydF9jb25uZWN0aW9uJ10sXG4gICAgICAgICAgICBbL1xcKS8sICdAYnJhY2tldHMnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwvXFwvLiokLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwqXFwvLywgJ2NvbW1lbnQnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9bXFwvKl0vLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ3M6IFtcbiAgICAgICAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAcG9wJ11cbiAgICAgICAgXSxcbiAgICAgICAgaW5jbHVkZTogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oXFxzKikoXCIpKFtcXHcqXFwvKl0qKSguXFx3KikoXCIpLyxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgICAgICAgICAnc3RyaW5nLmluY2x1ZGUuaWRlbnRpZmllcicsXG4gICAgICAgICAgICAgICAgICAgICdzdHJpbmcuaW5jbHVkZS5pZGVudGlmaWVyJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5pbmNsdWRlLmlkZW50aWZpZXInLFxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAnc3RyaW5nLmluY2x1ZGUuaWRlbnRpZmllcicsIG5leHQ6ICdAcG9wJyB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKFxccyopKDwpKFtcXHcqXFwvKl0qKSguXFx3KikoPikvLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICdzdHJpbmcuaW5jbHVkZS5pZGVudGlmaWVyJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5pbmNsdWRlLmlkZW50aWZpZXInLFxuICAgICAgICAgICAgICAgICAgICAnc3RyaW5nLmluY2x1ZGUuaWRlbnRpZmllcicsXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICdzdHJpbmcuaW5jbHVkZS5pZGVudGlmaWVyJywgbmV4dDogJ0Bwb3AnIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==