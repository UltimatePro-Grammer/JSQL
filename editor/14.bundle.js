(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js ***!
  \****************************************************************************/
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
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: '//',
        blockComment: ['/*', '*/']
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: "'", close: "'", notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '<', close: '>' },
        { open: "'", close: "'" },
        { open: '"', close: '"' }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*#region\\b'),
            end: new RegExp('^\\s*#endregion\\b')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.cs',
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    keywords: [
        'extern',
        'alias',
        'using',
        'bool',
        'decimal',
        'sbyte',
        'byte',
        'short',
        'ushort',
        'int',
        'uint',
        'long',
        'ulong',
        'char',
        'float',
        'double',
        'object',
        'dynamic',
        'string',
        'assembly',
        'is',
        'as',
        'ref',
        'out',
        'this',
        'base',
        'new',
        'typeof',
        'void',
        'checked',
        'unchecked',
        'default',
        'delegate',
        'var',
        'const',
        'if',
        'else',
        'switch',
        'case',
        'while',
        'do',
        'for',
        'foreach',
        'in',
        'break',
        'continue',
        'goto',
        'return',
        'throw',
        'try',
        'catch',
        'finally',
        'lock',
        'yield',
        'from',
        'let',
        'where',
        'join',
        'on',
        'equals',
        'into',
        'orderby',
        'ascending',
        'descending',
        'select',
        'group',
        'by',
        'namespace',
        'partial',
        'class',
        'field',
        'event',
        'method',
        'param',
        'property',
        'public',
        'protected',
        'internal',
        'private',
        'abstract',
        'sealed',
        'static',
        'struct',
        'readonly',
        'volatile',
        'virtual',
        'override',
        'params',
        'get',
        'set',
        'add',
        'remove',
        'operator',
        'true',
        'false',
        'implicit',
        'explicit',
        'interface',
        'enum',
        'null',
        'async',
        'await',
        'fixed',
        'sizeof',
        'stackalloc',
        'unsafe',
        'nameof',
        'when'
    ],
    namespaceFollows: ['namespace', 'using'],
    parenFollows: ['if', 'for', 'while', 'switch', 'foreach', 'using', 'catch', 'when'],
    operators: [
        '=',
        '??',
        '||',
        '&&',
        '|',
        '^',
        '&',
        '==',
        '!=',
        '<=',
        '>=',
        '<<',
        '+',
        '-',
        '*',
        '/',
        '%',
        '!',
        '~',
        '++',
        '--',
        '+=',
        '-=',
        '*=',
        '/=',
        '%=',
        '&=',
        '|=',
        '^=',
        '<<=',
        '>>=',
        '>>',
        '=>'
    ],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    // escape sequences
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [
                /\@?[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@namespaceFollows': {
                            token: 'keyword.$0',
                            next: '@namespace'
                        },
                        '@keywords': {
                            token: 'keyword.$0',
                            next: '@qualified'
                        },
                        '@default': { token: 'identifier', next: '@qualified' }
                    }
                }
            ],
            // whitespace
            { include: '@whitespace' },
            // delimiters and operators
            [
                /}/,
                {
                    cases: {
                        '$S2==interpolatedstring': {
                            token: 'string.quote',
                            next: '@pop'
                        },
                        '$S2==litinterpstring': {
                            token: 'string.quote',
                            next: '@pop'
                        },
                        '@default': '@brackets'
                    }
                }
            ],
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
            [/[0-9_]*\.[0-9_]+([eE][\-+]?\d+)?[fFdD]?/, 'number.float'],
            [/0[xX][0-9a-fA-F_]+/, 'number.hex'],
            [/0[bB][01_]+/, 'number.hex'],
            [/[0-9_]+/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, { token: 'string.quote', next: '@string' }],
            [/\$\@"/, { token: 'string.quote', next: '@litinterpstring' }],
            [/\@"/, { token: 'string.quote', next: '@litstring' }],
            [/\$"/, { token: 'string.quote', next: '@interpolatedstring' }],
            // characters
            [/'[^\\']'/, 'string'],
            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
            [/'/, 'string.invalid']
        ],
        qualified: [
            [
                /[a-zA-Z_][\w]*/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }
            ],
            [/\./, 'delimiter'],
            ['', '', '@pop']
        ],
        namespace: [
            { include: '@whitespace' },
            [/[A-Z]\w*/, 'namespace'],
            [/[\.=]/, 'delimiter'],
            ['', '', '@pop']
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            // [/\/\*/,    'comment', '@push' ],    // no nested comments :-(
            ['\\*/', 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, { token: 'string.quote', next: '@pop' }]
        ],
        litstring: [
            [/[^"]+/, 'string'],
            [/""/, 'string.escape'],
            [/"/, { token: 'string.quote', next: '@pop' }]
        ],
        litinterpstring: [
            [/[^"{]+/, 'string'],
            [/""/, 'string.escape'],
            [/{{/, 'string.escape'],
            [/}}/, 'string.escape'],
            [/{/, { token: 'string.quote', next: 'root.litinterpstring' }],
            [/"/, { token: 'string.quote', next: '@pop' }]
        ],
        interpolatedstring: [
            [/[^\\"{]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/{{/, 'string.escape'],
            [/}}/, 'string.escape'],
            [/{/, { token: 'string.quote', next: 'root.interpolatedstring' }],
            [/"/, { token: 'string.quote', next: '@pop' }]
        ],
        whitespace: [
            [/^[ \t\v\f]*#((r)|(load))(?=\s)/, 'directive.csx'],
            [/^[ \t\v\f]*#\w.*$/, 'namespace.cpp'],
            [/[ \t\v\f\r\n]+/, ''],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2NzaGFycC9jc2hhcnAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxvRUFBb0UsSUFBSSxNQUFNO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSw2QkFBNkI7QUFDM0QsU0FBUyxtREFBbUQ7QUFDNUQsU0FBUyx3REFBd0Q7QUFDakUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsbUJBQW1CLHlDQUF5QztBQUM1RCx1QkFBdUIsa0RBQWtEO0FBQ3pFLHFCQUFxQiw0Q0FBNEM7QUFDakUscUJBQXFCLHFEQUFxRDtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzQkFBc0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0NBQXNDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNDQUFzQztBQUN6RDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0EsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixlQUFlLElBQUksc0RBQXNEO0FBQ3pFLG1CQUFtQixzQ0FBc0M7QUFDekQ7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixlQUFlLElBQUkseURBQXlEO0FBQzVFLG1CQUFtQixzQ0FBc0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMTQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgd29yZFBhdHRlcm46IC8oLT9cXGQqXFwuXFxkXFx3Kil8KFteXFxgXFx+XFwhXFwjXFwkXFwlXFxeXFwmXFwqXFwoXFwpXFwtXFw9XFwrXFxbXFx7XFxdXFx9XFxcXFxcfFxcO1xcOlxcJ1xcXCJcXCxcXC5cXDxcXD5cXC9cXD9cXHNdKykvZyxcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ11cbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfVxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9XG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKCdeXFxcXHMqI3JlZ2lvblxcXFxiJyksXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoJ15cXFxccyojZW5kcmVnaW9uXFxcXGInKVxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcuY3MnLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JywgdG9rZW46ICdkZWxpbWl0ZXIuYW5nbGUnIH1cbiAgICBdLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICdleHRlcm4nLFxuICAgICAgICAnYWxpYXMnLFxuICAgICAgICAndXNpbmcnLFxuICAgICAgICAnYm9vbCcsXG4gICAgICAgICdkZWNpbWFsJyxcbiAgICAgICAgJ3NieXRlJyxcbiAgICAgICAgJ2J5dGUnLFxuICAgICAgICAnc2hvcnQnLFxuICAgICAgICAndXNob3J0JyxcbiAgICAgICAgJ2ludCcsXG4gICAgICAgICd1aW50JyxcbiAgICAgICAgJ2xvbmcnLFxuICAgICAgICAndWxvbmcnLFxuICAgICAgICAnY2hhcicsXG4gICAgICAgICdmbG9hdCcsXG4gICAgICAgICdkb3VibGUnLFxuICAgICAgICAnb2JqZWN0JyxcbiAgICAgICAgJ2R5bmFtaWMnLFxuICAgICAgICAnc3RyaW5nJyxcbiAgICAgICAgJ2Fzc2VtYmx5JyxcbiAgICAgICAgJ2lzJyxcbiAgICAgICAgJ2FzJyxcbiAgICAgICAgJ3JlZicsXG4gICAgICAgICdvdXQnLFxuICAgICAgICAndGhpcycsXG4gICAgICAgICdiYXNlJyxcbiAgICAgICAgJ25ldycsXG4gICAgICAgICd0eXBlb2YnLFxuICAgICAgICAndm9pZCcsXG4gICAgICAgICdjaGVja2VkJyxcbiAgICAgICAgJ3VuY2hlY2tlZCcsXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgJ2RlbGVnYXRlJyxcbiAgICAgICAgJ3ZhcicsXG4gICAgICAgICdjb25zdCcsXG4gICAgICAgICdpZicsXG4gICAgICAgICdlbHNlJyxcbiAgICAgICAgJ3N3aXRjaCcsXG4gICAgICAgICdjYXNlJyxcbiAgICAgICAgJ3doaWxlJyxcbiAgICAgICAgJ2RvJyxcbiAgICAgICAgJ2ZvcicsXG4gICAgICAgICdmb3JlYWNoJyxcbiAgICAgICAgJ2luJyxcbiAgICAgICAgJ2JyZWFrJyxcbiAgICAgICAgJ2NvbnRpbnVlJyxcbiAgICAgICAgJ2dvdG8nLFxuICAgICAgICAncmV0dXJuJyxcbiAgICAgICAgJ3Rocm93JyxcbiAgICAgICAgJ3RyeScsXG4gICAgICAgICdjYXRjaCcsXG4gICAgICAgICdmaW5hbGx5JyxcbiAgICAgICAgJ2xvY2snLFxuICAgICAgICAneWllbGQnLFxuICAgICAgICAnZnJvbScsXG4gICAgICAgICdsZXQnLFxuICAgICAgICAnd2hlcmUnLFxuICAgICAgICAnam9pbicsXG4gICAgICAgICdvbicsXG4gICAgICAgICdlcXVhbHMnLFxuICAgICAgICAnaW50bycsXG4gICAgICAgICdvcmRlcmJ5JyxcbiAgICAgICAgJ2FzY2VuZGluZycsXG4gICAgICAgICdkZXNjZW5kaW5nJyxcbiAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICdncm91cCcsXG4gICAgICAgICdieScsXG4gICAgICAgICduYW1lc3BhY2UnLFxuICAgICAgICAncGFydGlhbCcsXG4gICAgICAgICdjbGFzcycsXG4gICAgICAgICdmaWVsZCcsXG4gICAgICAgICdldmVudCcsXG4gICAgICAgICdtZXRob2QnLFxuICAgICAgICAncGFyYW0nLFxuICAgICAgICAncHJvcGVydHknLFxuICAgICAgICAncHVibGljJyxcbiAgICAgICAgJ3Byb3RlY3RlZCcsXG4gICAgICAgICdpbnRlcm5hbCcsXG4gICAgICAgICdwcml2YXRlJyxcbiAgICAgICAgJ2Fic3RyYWN0JyxcbiAgICAgICAgJ3NlYWxlZCcsXG4gICAgICAgICdzdGF0aWMnLFxuICAgICAgICAnc3RydWN0JyxcbiAgICAgICAgJ3JlYWRvbmx5JyxcbiAgICAgICAgJ3ZvbGF0aWxlJyxcbiAgICAgICAgJ3ZpcnR1YWwnLFxuICAgICAgICAnb3ZlcnJpZGUnLFxuICAgICAgICAncGFyYW1zJyxcbiAgICAgICAgJ2dldCcsXG4gICAgICAgICdzZXQnLFxuICAgICAgICAnYWRkJyxcbiAgICAgICAgJ3JlbW92ZScsXG4gICAgICAgICdvcGVyYXRvcicsXG4gICAgICAgICd0cnVlJyxcbiAgICAgICAgJ2ZhbHNlJyxcbiAgICAgICAgJ2ltcGxpY2l0JyxcbiAgICAgICAgJ2V4cGxpY2l0JyxcbiAgICAgICAgJ2ludGVyZmFjZScsXG4gICAgICAgICdlbnVtJyxcbiAgICAgICAgJ251bGwnLFxuICAgICAgICAnYXN5bmMnLFxuICAgICAgICAnYXdhaXQnLFxuICAgICAgICAnZml4ZWQnLFxuICAgICAgICAnc2l6ZW9mJyxcbiAgICAgICAgJ3N0YWNrYWxsb2MnLFxuICAgICAgICAndW5zYWZlJyxcbiAgICAgICAgJ25hbWVvZicsXG4gICAgICAgICd3aGVuJ1xuICAgIF0sXG4gICAgbmFtZXNwYWNlRm9sbG93czogWyduYW1lc3BhY2UnLCAndXNpbmcnXSxcbiAgICBwYXJlbkZvbGxvd3M6IFsnaWYnLCAnZm9yJywgJ3doaWxlJywgJ3N3aXRjaCcsICdmb3JlYWNoJywgJ3VzaW5nJywgJ2NhdGNoJywgJ3doZW4nXSxcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgICAgJz0nLFxuICAgICAgICAnPz8nLFxuICAgICAgICAnfHwnLFxuICAgICAgICAnJiYnLFxuICAgICAgICAnfCcsXG4gICAgICAgICdeJyxcbiAgICAgICAgJyYnLFxuICAgICAgICAnPT0nLFxuICAgICAgICAnIT0nLFxuICAgICAgICAnPD0nLFxuICAgICAgICAnPj0nLFxuICAgICAgICAnPDwnLFxuICAgICAgICAnKycsXG4gICAgICAgICctJyxcbiAgICAgICAgJyonLFxuICAgICAgICAnLycsXG4gICAgICAgICclJyxcbiAgICAgICAgJyEnLFxuICAgICAgICAnficsXG4gICAgICAgICcrKycsXG4gICAgICAgICctLScsXG4gICAgICAgICcrPScsXG4gICAgICAgICctPScsXG4gICAgICAgICcqPScsXG4gICAgICAgICcvPScsXG4gICAgICAgICclPScsXG4gICAgICAgICcmPScsXG4gICAgICAgICd8PScsXG4gICAgICAgICdePScsXG4gICAgICAgICc8PD0nLFxuICAgICAgICAnPj49JyxcbiAgICAgICAgJz4+JyxcbiAgICAgICAgJz0+J1xuICAgIF0sXG4gICAgc3ltYm9sczogL1s9Pjwhfj86JnwrXFwtKlxcL1xcXiVdKy8sXG4gICAgLy8gZXNjYXBlIHNlcXVlbmNlc1xuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cXEA/W2EtekEtWl9dXFx3Ki8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BuYW1lc3BhY2VGb2xsb3dzJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAna2V5d29yZC4kMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BuYW1lc3BhY2UnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2tleXdvcmQuJDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAcXVhbGlmaWVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdpZGVudGlmaWVyJywgbmV4dDogJ0BxdWFsaWZpZWQnIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnMgYW5kIG9wZXJhdG9yc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC99LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1pbnRlcnBvbGF0ZWRzdHJpbmcnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdzdHJpbmcucXVvdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAcG9wJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICckUzI9PWxpdGludGVycHN0cmluZyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3N0cmluZy5xdW90ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0Bwb3AnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ0BicmFja2V0cydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvQHN5bWJvbHMvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ2RlbGltaXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvWzAtOV9dKlxcLlswLTlfXSsoW2VFXVtcXC0rXT9cXGQrKT9bZkZkRF0/LywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy8wW3hYXVswLTlhLWZBLUZfXSsvLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy8wW2JCXVswMV9dKy8sICdudW1iZXIuaGV4J10sXG4gICAgICAgICAgICBbL1swLTlfXSsvLCAnbnVtYmVyJ10sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXI6IGFmdGVyIG51bWJlciBiZWNhdXNlIG9mIC5cXGQgZmxvYXRzXG4gICAgICAgICAgICBbL1s7LC5dLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICAgICAgWy9cIihbXlwiXFxcXF18XFxcXC4pKiQvLCAnc3RyaW5nLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0BzdHJpbmcnIH1dLFxuICAgICAgICAgICAgWy9cXCRcXEBcIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQGxpdGludGVycHN0cmluZycgfV0sXG4gICAgICAgICAgICBbL1xcQFwiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAbGl0c3RyaW5nJyB9XSxcbiAgICAgICAgICAgIFsvXFwkXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0BpbnRlcnBvbGF0ZWRzdHJpbmcnIH1dLFxuICAgICAgICAgICAgLy8gY2hhcmFjdGVyc1xuICAgICAgICAgICAgWy8nW15cXFxcJ10nLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8oJykoQGVzY2FwZXMpKCcpLywgWydzdHJpbmcnLCAnc3RyaW5nLmVzY2FwZScsICdzdHJpbmcnXV0sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmludmFsaWQnXVxuICAgICAgICBdLFxuICAgICAgICBxdWFsaWZpZWQ6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW2EtekEtWl9dW1xcd10qLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1xcLi8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsnJywgJycsICdAcG9wJ11cbiAgICAgICAgXSxcbiAgICAgICAgbmFtZXNwYWNlOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIFsvW0EtWl1cXHcqLywgJ25hbWVzcGFjZSddLFxuICAgICAgICAgICAgWy9bXFwuPV0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW15cXC8qXSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgLy8gWy9cXC9cXCovLCAgICAnY29tbWVudCcsICdAcHVzaCcgXSwgICAgLy8gbm8gbmVzdGVkIGNvbW1lbnRzIDotKFxuICAgICAgICAgICAgWydcXFxcKi8nLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1tcXC8qXS8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBsaXRzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9cIlwiLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGxpdGludGVycHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlwie10rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9cIlwiLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsve3svLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy99fS8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL3svLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ3Jvb3QubGl0aW50ZXJwc3RyaW5nJyB9XSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGludGVycG9sYXRlZHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFxcIntdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsve3svLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy99fS8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL3svLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ3Jvb3QuaW50ZXJwb2xhdGVkc3RyaW5nJyB9XSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvXlsgXFx0XFx2XFxmXSojKChyKXwobG9hZCkpKD89XFxzKS8sICdkaXJlY3RpdmUuY3N4J10sXG4gICAgICAgICAgICBbL15bIFxcdFxcdlxcZl0qI1xcdy4qJC8sICduYW1lc3BhY2UuY3BwJ10sXG4gICAgICAgICAgICBbL1sgXFx0XFx2XFxmXFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9