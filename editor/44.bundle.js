(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.js":
/*!************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.js ***!
  \************************************************************************************/
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
    // the default separators except `$-`
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#%\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: '#',
        blockComment: ['<#', '#>']
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
        { open: '"', close: '"', notIn: ['string'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
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
    ignoreCase: true,
    tokenPostfix: '.ps1',
    brackets: [
        { token: 'delimiter.curly', open: '{', close: '}' },
        { token: 'delimiter.square', open: '[', close: ']' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' }
    ],
    keywords: [
        'begin',
        'break',
        'catch',
        'class',
        'continue',
        'data',
        'define',
        'do',
        'dynamicparam',
        'else',
        'elseif',
        'end',
        'exit',
        'filter',
        'finally',
        'for',
        'foreach',
        'from',
        'function',
        'if',
        'in',
        'param',
        'process',
        'return',
        'switch',
        'throw',
        'trap',
        'try',
        'until',
        'using',
        'var',
        'while',
        'workflow',
        'parallel',
        'sequence',
        'inlinescript',
        'configuration'
    ],
    helpKeywords: /SYNOPSIS|DESCRIPTION|PARAMETER|EXAMPLE|INPUTS|OUTPUTS|NOTES|LINK|COMPONENT|ROLE|FUNCTIONALITY|FORWARDHELPTARGETNAME|FORWARDHELPCATEGORY|REMOTEHELPRUNSPACE|EXTERNALHELP/,
    // we include these common regular expressions
    symbols: /[=><!~?&%|+\-*\/\^;\.,]+/,
    escapes: /`(?:[abfnrtv\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // commands and keywords
            [
                /[a-zA-Z_][\w-]*/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': ''
                    }
                }
            ],
            // whitespace
            [/[ \t\r\n]+/, ''],
            // labels
            [/^:\w*/, 'metatag'],
            // variables
            [
                /\$(\{((global|local|private|script|using):)?[\w]+\}|((global|local|private|script|using):)?[\w]+)/,
                'variable'
            ],
            // Comments
            [/<#/, 'comment', '@comment'],
            [/#.*$/, 'comment'],
            // delimiters
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, 'delimiter'],
            // numbers
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],
            [/\d+?/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings:
            [/\@"/, 'string', '@herestring."'],
            [/\@'/, 'string', "@herestring.'"],
            [
                /"/,
                {
                    cases: {
                        '@eos': 'string',
                        '@default': { token: 'string', next: '@string."' }
                    }
                }
            ],
            [
                /'/,
                {
                    cases: {
                        '@eos': 'string',
                        '@default': { token: 'string', next: "@string.'" }
                    }
                }
            ]
        ],
        string: [
            [
                /[^"'\$`]+/,
                {
                    cases: {
                        '@eos': { token: 'string', next: '@popall' },
                        '@default': 'string'
                    }
                }
            ],
            [
                /@escapes/,
                {
                    cases: {
                        '@eos': { token: 'string.escape', next: '@popall' },
                        '@default': 'string.escape'
                    }
                }
            ],
            [
                /`./,
                {
                    cases: {
                        '@eos': {
                            token: 'string.escape.invalid',
                            next: '@popall'
                        },
                        '@default': 'string.escape.invalid'
                    }
                }
            ],
            [
                /\$[\w]+$/,
                {
                    cases: {
                        '$S2=="': { token: 'variable', next: '@popall' },
                        '@default': { token: 'string', next: '@popall' }
                    }
                }
            ],
            [
                /\$[\w]+/,
                {
                    cases: {
                        '$S2=="': 'variable',
                        '@default': 'string'
                    }
                }
            ],
            [
                /["']/,
                {
                    cases: {
                        '$#==$S2': { token: 'string', next: '@pop' },
                        '@default': {
                            cases: {
                                '@eos': { token: 'string', next: '@popall' },
                                '@default': 'string'
                            }
                        }
                    }
                }
            ]
        ],
        herestring: [
            [
                /^\s*(["'])@/,
                {
                    cases: {
                        '$1==$S2': { token: 'string', next: '@pop' },
                        '@default': 'string'
                    }
                }
            ],
            [/[^\$`]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/`./, 'string.escape.invalid'],
            [
                /\$[\w]+/,
                {
                    cases: {
                        '$S2=="': 'variable',
                        '@default': 'string'
                    }
                }
            ]
        ],
        comment: [
            [/[^#\.]+/, 'comment'],
            [/#>/, 'comment', '@pop'],
            [/(\.)(@helpKeywords)(?!\w)/, { token: 'comment.keyword.$2' }],
            [/[\.#]/, 'comment']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3Bvd2Vyc2hlbGwvcG93ZXJzaGVsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsaUVBQWlFLElBQUksTUFBTTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMkNBQTJDO0FBQ3BELFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1DQUFtQyxZQUFZLEdBQUc7QUFDM0QsU0FBUyxtREFBbUQ7QUFDNUQsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyw4Q0FBOEMsSUFBSSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhDQUE4QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUNBQW1DO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMENBQTBDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxxQ0FBcUM7QUFDeEUscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdDQUFnQztBQUNwRTtBQUNBO0FBQ0EseUNBQXlDLG1DQUFtQztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0NBQWdDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsOEJBQThCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjQ0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIC8vIHRoZSBkZWZhdWx0IHNlcGFyYXRvcnMgZXhjZXB0IGAkLWBcbiAgICB3b3JkUGF0dGVybjogLygtP1xcZCpcXC5cXGRcXHcqKXwoW15cXGBcXH5cXCFcXEBcXCMlXFxeXFwmXFwqXFwoXFwpXFw9XFwrXFxbXFx7XFxdXFx9XFxcXFxcfFxcO1xcOlxcJ1xcXCJcXCxcXC5cXDxcXD5cXC9cXD9cXHNdKykvZyxcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJyMnLFxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnPCMnLCAnIz4nXVxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnXSB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfVxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKCdeXFxcXHMqI3JlZ2lvblxcXFxiJyksXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoJ15cXFxccyojZW5kcmVnaW9uXFxcXGInKVxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxuICAgIHRva2VuUG9zdGZpeDogJy5wczEnLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnLCBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG9wZW46ICcoJywgY2xvc2U6ICcpJyB9XG4gICAgXSxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAnYmVnaW4nLFxuICAgICAgICAnYnJlYWsnLFxuICAgICAgICAnY2F0Y2gnLFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY29udGludWUnLFxuICAgICAgICAnZGF0YScsXG4gICAgICAgICdkZWZpbmUnLFxuICAgICAgICAnZG8nLFxuICAgICAgICAnZHluYW1pY3BhcmFtJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnZWxzZWlmJyxcbiAgICAgICAgJ2VuZCcsXG4gICAgICAgICdleGl0JyxcbiAgICAgICAgJ2ZpbHRlcicsXG4gICAgICAgICdmaW5hbGx5JyxcbiAgICAgICAgJ2ZvcicsXG4gICAgICAgICdmb3JlYWNoJyxcbiAgICAgICAgJ2Zyb20nLFxuICAgICAgICAnZnVuY3Rpb24nLFxuICAgICAgICAnaWYnLFxuICAgICAgICAnaW4nLFxuICAgICAgICAncGFyYW0nLFxuICAgICAgICAncHJvY2VzcycsXG4gICAgICAgICdyZXR1cm4nLFxuICAgICAgICAnc3dpdGNoJyxcbiAgICAgICAgJ3Rocm93JyxcbiAgICAgICAgJ3RyYXAnLFxuICAgICAgICAndHJ5JyxcbiAgICAgICAgJ3VudGlsJyxcbiAgICAgICAgJ3VzaW5nJyxcbiAgICAgICAgJ3ZhcicsXG4gICAgICAgICd3aGlsZScsXG4gICAgICAgICd3b3JrZmxvdycsXG4gICAgICAgICdwYXJhbGxlbCcsXG4gICAgICAgICdzZXF1ZW5jZScsXG4gICAgICAgICdpbmxpbmVzY3JpcHQnLFxuICAgICAgICAnY29uZmlndXJhdGlvbidcbiAgICBdLFxuICAgIGhlbHBLZXl3b3JkczogL1NZTk9QU0lTfERFU0NSSVBUSU9OfFBBUkFNRVRFUnxFWEFNUExFfElOUFVUU3xPVVRQVVRTfE5PVEVTfExJTkt8Q09NUE9ORU5UfFJPTEV8RlVOQ1RJT05BTElUWXxGT1JXQVJESEVMUFRBUkdFVE5BTUV8Rk9SV0FSREhFTFBDQVRFR09SWXxSRU1PVEVIRUxQUlVOU1BBQ0V8RVhURVJOQUxIRUxQLyxcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgc3ltYm9sczogL1s9Pjwhfj8mJXwrXFwtKlxcL1xcXjtcXC4sXSsvLFxuICAgIGVzY2FwZXM6IC9gKD86W2FiZm5ydHZcXFxcXCInJF18eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICAvLyBjb21tYW5kcyBhbmQga2V5d29yZHNcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW2EtekEtWl9dW1xcdy1dKi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICAvLyBsYWJlbHNcbiAgICAgICAgICAgIFsvXjpcXHcqLywgJ21ldGF0YWcnXSxcbiAgICAgICAgICAgIC8vIHZhcmlhYmxlc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cXCQoXFx7KChnbG9iYWx8bG9jYWx8cHJpdmF0ZXxzY3JpcHR8dXNpbmcpOik/W1xcd10rXFx9fCgoZ2xvYmFsfGxvY2FsfHByaXZhdGV8c2NyaXB0fHVzaW5nKTopP1tcXHddKykvLFxuICAgICAgICAgICAgICAgICd2YXJpYWJsZSdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBDb21tZW50c1xuICAgICAgICAgICAgWy88Iy8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbLyMuKiQvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyc1xuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL0BzeW1ib2xzLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GX10qWzAtOWEtZkEtRl0vLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy9cXGQrPy8sICdudW1iZXInXSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcjogYWZ0ZXIgbnVtYmVyIGJlY2F1c2Ugb2YgLlxcZCBmbG9hdHNcbiAgICAgICAgICAgIFsvWzssLl0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICAvLyBzdHJpbmdzOlxuICAgICAgICAgICAgWy9cXEBcIi8sICdzdHJpbmcnLCAnQGhlcmVzdHJpbmcuXCInXSxcbiAgICAgICAgICAgIFsvXFxAJy8sICdzdHJpbmcnLCBcIkBoZXJlc3RyaW5nLidcIl0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1wiLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAc3RyaW5nLlwiJyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8nLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6IFwiQHN0cmluZy4nXCIgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmc6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW15cIidcXCRgXSsvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wYWxsJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL0Blc2NhcGVzLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdzdHJpbmcuZXNjYXBlJywgbmV4dDogJ0Bwb3BhbGwnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nLmVzY2FwZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL2AuLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3N0cmluZy5lc2NhcGUuaW52YWxpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0Bwb3BhbGwnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZy5lc2NhcGUuaW52YWxpZCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xcJFtcXHddKyQvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckUzI9PVwiJzogeyB0b2tlbjogJ3ZhcmlhYmxlJywgbmV4dDogJ0Bwb3BhbGwnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3BhbGwnIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xcJFtcXHddKy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyRTMj09XCInOiAndmFyaWFibGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1tcIiddLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTMic6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcGFsbCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIGhlcmVzdHJpbmc6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXlxccyooW1wiJ10pQC8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyQxPT0kUzInOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvW15cXCRgXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvYC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xcJFtcXHddKy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyRTMj09XCInOiAndmFyaWFibGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWy9bXiNcXC5dKy8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbLyM+LywgJ2NvbW1lbnQnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy8oXFwuKShAaGVscEtleXdvcmRzKSg/IVxcdykvLCB7IHRva2VuOiAnY29tbWVudC5rZXl3b3JkLiQyJyB9XSxcbiAgICAgICAgICAgIFsvW1xcLiNdLywgJ2NvbW1lbnQnXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=