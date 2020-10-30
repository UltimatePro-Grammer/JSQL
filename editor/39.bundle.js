(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/perl/perl.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/perl/perl.js ***!
  \************************************************************************/
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
        lineComment: '#'
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
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: '`', close: '`' }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: '`', close: '`' }
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.perl',
    brackets: [
        { token: 'delimiter.bracket', open: '{', close: '}' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.square', open: '[', close: ']' }
    ],
    // https://learn.perl.org/docs/keywords.html
    // Perl syntax
    keywords: [
        '__DATA__',
        'else',
        'lock',
        '__END__',
        'elsif',
        'lt',
        '__FILE__',
        'eq',
        '__LINE__',
        'exp',
        'ne',
        'sub',
        '__PACKAGE__',
        'for',
        'no',
        'and',
        'foreach',
        'or',
        'unless',
        'cmp',
        'ge',
        'package',
        'until',
        'continue',
        'gt',
        'while',
        'CORE',
        'if',
        'xor',
        'do',
        'le',
        '__DIE__',
        '__WARN__'
    ],
    // Perl functions
    builtinFunctions: [
        '-A',
        'END',
        'length',
        'setpgrp',
        '-B',
        'endgrent',
        'link',
        'setpriority',
        '-b',
        'endhostent',
        'listen',
        'setprotoent',
        '-C',
        'endnetent',
        'local',
        'setpwent',
        '-c',
        'endprotoent',
        'localtime',
        'setservent',
        '-d',
        'endpwent',
        'log',
        'setsockopt',
        '-e',
        'endservent',
        'lstat',
        'shift',
        '-f',
        'eof',
        'map',
        'shmctl',
        '-g',
        'eval',
        'mkdir',
        'shmget',
        '-k',
        'exec',
        'msgctl',
        'shmread',
        '-l',
        'exists',
        'msgget',
        'shmwrite',
        '-M',
        'exit',
        'msgrcv',
        'shutdown',
        '-O',
        'fcntl',
        'msgsnd',
        'sin',
        '-o',
        'fileno',
        'my',
        'sleep',
        '-p',
        'flock',
        'next',
        'socket',
        '-r',
        'fork',
        'not',
        'socketpair',
        '-R',
        'format',
        'oct',
        'sort',
        '-S',
        'formline',
        'open',
        'splice',
        '-s',
        'getc',
        'opendir',
        'split',
        '-T',
        'getgrent',
        'ord',
        'sprintf',
        '-t',
        'getgrgid',
        'our',
        'sqrt',
        '-u',
        'getgrnam',
        'pack',
        'srand',
        '-w',
        'gethostbyaddr',
        'pipe',
        'stat',
        '-W',
        'gethostbyname',
        'pop',
        'state',
        '-X',
        'gethostent',
        'pos',
        'study',
        '-x',
        'getlogin',
        'print',
        'substr',
        '-z',
        'getnetbyaddr',
        'printf',
        'symlink',
        'abs',
        'getnetbyname',
        'prototype',
        'syscall',
        'accept',
        'getnetent',
        'push',
        'sysopen',
        'alarm',
        'getpeername',
        'quotemeta',
        'sysread',
        'atan2',
        'getpgrp',
        'rand',
        'sysseek',
        'AUTOLOAD',
        'getppid',
        'read',
        'system',
        'BEGIN',
        'getpriority',
        'readdir',
        'syswrite',
        'bind',
        'getprotobyname',
        'readline',
        'tell',
        'binmode',
        'getprotobynumber',
        'readlink',
        'telldir',
        'bless',
        'getprotoent',
        'readpipe',
        'tie',
        'break',
        'getpwent',
        'recv',
        'tied',
        'caller',
        'getpwnam',
        'redo',
        'time',
        'chdir',
        'getpwuid',
        'ref',
        'times',
        'CHECK',
        'getservbyname',
        'rename',
        'truncate',
        'chmod',
        'getservbyport',
        'require',
        'uc',
        'chomp',
        'getservent',
        'reset',
        'ucfirst',
        'chop',
        'getsockname',
        'return',
        'umask',
        'chown',
        'getsockopt',
        'reverse',
        'undef',
        'chr',
        'glob',
        'rewinddir',
        'UNITCHECK',
        'chroot',
        'gmtime',
        'rindex',
        'unlink',
        'close',
        'goto',
        'rmdir',
        'unpack',
        'closedir',
        'grep',
        'say',
        'unshift',
        'connect',
        'hex',
        'scalar',
        'untie',
        'cos',
        'index',
        'seek',
        'use',
        'crypt',
        'INIT',
        'seekdir',
        'utime',
        'dbmclose',
        'int',
        'select',
        'values',
        'dbmopen',
        'ioctl',
        'semctl',
        'vec',
        'defined',
        'join',
        'semget',
        'wait',
        'delete',
        'keys',
        'semop',
        'waitpid',
        'DESTROY',
        'kill',
        'send',
        'wantarray',
        'die',
        'last',
        'setgrent',
        'warn',
        'dump',
        'lc',
        'sethostent',
        'write',
        'each',
        'lcfirst',
        'setnetent'
    ],
    // File handlers
    builtinFileHandlers: ['ARGV', 'STDERR', 'STDOUT', 'ARGVOUT', 'STDIN', 'ENV'],
    // Perl variables
    builtinVariables: [
        '$!',
        '$^RE_TRIE_MAXBUF',
        '$LAST_REGEXP_CODE_RESULT',
        '$"',
        '$^S',
        '$LIST_SEPARATOR',
        '$#',
        '$^T',
        '$MATCH',
        '$$',
        '$^TAINT',
        '$MULTILINE_MATCHING',
        '$%',
        '$^UNICODE',
        '$NR',
        '$&',
        '$^UTF8LOCALE',
        '$OFMT',
        "$'",
        '$^V',
        '$OFS',
        '$(',
        '$^W',
        '$ORS',
        '$)',
        '$^WARNING_BITS',
        '$OS_ERROR',
        '$*',
        '$^WIDE_SYSTEM_CALLS',
        '$OSNAME',
        '$+',
        '$^X',
        '$OUTPUT_AUTO_FLUSH',
        '$,',
        '$_',
        '$OUTPUT_FIELD_SEPARATOR',
        '$-',
        '$`',
        '$OUTPUT_RECORD_SEPARATOR',
        '$.',
        '$a',
        '$PERL_VERSION',
        '$/',
        '$ACCUMULATOR',
        '$PERLDB',
        '$0',
        '$ARG',
        '$PID',
        '$:',
        '$ARGV',
        '$POSTMATCH',
        '$;',
        '$b',
        '$PREMATCH',
        '$<',
        '$BASETIME',
        '$PROCESS_ID',
        '$=',
        '$CHILD_ERROR',
        '$PROGRAM_NAME',
        '$>',
        '$COMPILING',
        '$REAL_GROUP_ID',
        '$?',
        '$DEBUGGING',
        '$REAL_USER_ID',
        '$@',
        '$EFFECTIVE_GROUP_ID',
        '$RS',
        '$[',
        '$EFFECTIVE_USER_ID',
        '$SUBSCRIPT_SEPARATOR',
        '$\\',
        '$EGID',
        '$SUBSEP',
        '$]',
        '$ERRNO',
        '$SYSTEM_FD_MAX',
        '$^',
        '$EUID',
        '$UID',
        '$^A',
        '$EVAL_ERROR',
        '$WARNING',
        '$^C',
        '$EXCEPTIONS_BEING_CAUGHT',
        '$|',
        '$^CHILD_ERROR_NATIVE',
        '$EXECUTABLE_NAME',
        '$~',
        '$^D',
        '$EXTENDED_OS_ERROR',
        '%!',
        '$^E',
        '$FORMAT_FORMFEED',
        '%^H',
        '$^ENCODING',
        '$FORMAT_LINE_BREAK_CHARACTERS',
        '%ENV',
        '$^F',
        '$FORMAT_LINES_LEFT',
        '%INC',
        '$^H',
        '$FORMAT_LINES_PER_PAGE',
        '%OVERLOAD',
        '$^I',
        '$FORMAT_NAME',
        '%SIG',
        '$^L',
        '$FORMAT_PAGE_NUMBER',
        '@+',
        '$^M',
        '$FORMAT_TOP_NAME',
        '@-',
        '$^N',
        '$GID',
        '@_',
        '$^O',
        '$INPLACE_EDIT',
        '@ARGV',
        '$^OPEN',
        '$INPUT_LINE_NUMBER',
        '@INC',
        '$^P',
        '$INPUT_RECORD_SEPARATOR',
        '@LAST_MATCH_START',
        '$^R',
        '$LAST_MATCH_END',
        '$^RE_DEBUG_FLAGS',
        '$LAST_PAREN_MATCH'
    ],
    // operators
    symbols: /[:+\-\^*$&%@=<>!?|\/~\.]/,
    quoteLikeOps: ['qr', 'm', 's', 'q', 'qq', 'qx', 'qw', 'tr', 'y'],
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            { include: '@whitespace' },
            [
                /[a-zA-Z\-_][\w\-_]*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtinFunctions': 'type.identifier',
                        '@builtinFileHandlers': 'variable.predefined',
                        '@quoteLikeOps': {
                            token: '@rematch',
                            next: 'quotedConstructs'
                        },
                        '@default': ''
                    }
                }
            ],
            // Perl variables
            [
                /[\$@%][*@#?\+\-\$!\w\\\^><~:;\.]+/,
                {
                    cases: {
                        '@builtinVariables': 'variable.predefined',
                        '@default': 'variable'
                    }
                }
            ],
            { include: '@strings' },
            { include: '@dblStrings' },
            // Perl Doc
            { include: '@perldoc' },
            // Here Doc
            { include: '@heredoc' },
            [/[{}\[\]()]/, '@brackets'],
            // RegExp
            [/[\/](?:(?:\[(?:\\]|[^\]])+\])|(?:\\\/|[^\]\/]))*[\/]\w*\s*(?=[).,;]|$)/, 'regexp'],
            [/@symbols/, 'operators'],
            { include: '@numbers' },
            [/[,;]/, 'delimiter']
        ],
        whitespace: [
            [/\s+/, 'white'],
            [/(^#!.*$)/, 'metatag'],
            [/(^#.*$)/, 'comment']
        ],
        numbers: [
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],
            [/\d+/, 'number']
        ],
        // Single quote string
        strings: [[/'/, 'string', '@stringBody']],
        stringBody: [
            [/'/, 'string', '@popall'],
            [/\\'/, 'string.escape'],
            [/./, 'string']
        ],
        // Double quote string
        dblStrings: [[/"/, 'string', '@dblStringBody']],
        dblStringBody: [
            [/"/, 'string', '@popall'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            { include: '@variables' },
            [/./, 'string']
        ],
        // Quoted constructs
        // Percent strings in Ruby are similar to quote-like operators in Perl.
        // This is adapted from pstrings in ../ruby/ruby.ts.
        quotedConstructs: [
            [/(q|qw|tr|y)\s*\(/, { token: 'string.delim', switchTo: '@qstring.(.)' }],
            [/(q|qw|tr|y)\s*\[/, { token: 'string.delim', switchTo: '@qstring.[.]' }],
            [/(q|qw|tr|y)\s*\{/, { token: 'string.delim', switchTo: '@qstring.{.}' }],
            [/(q|qw|tr|y)\s*</, { token: 'string.delim', switchTo: '@qstring.<.>' }],
            [/(q|qw|tr|y)#/, { token: 'string.delim', switchTo: '@qstring.#.#' }],
            [
                /(q|qw|tr|y)\s*([^A-Za-z0-9#\s])/,
                { token: 'string.delim', switchTo: '@qstring.$2.$2' }
            ],
            [/(q|qw|tr|y)\s+(\w)/, { token: 'string.delim', switchTo: '@qstring.$2.$2' }],
            [/(qr|m|s)\s*\(/, { token: 'regexp.delim', switchTo: '@qregexp.(.)' }],
            [/(qr|m|s)\s*\[/, { token: 'regexp.delim', switchTo: '@qregexp.[.]' }],
            [/(qr|m|s)\s*\{/, { token: 'regexp.delim', switchTo: '@qregexp.{.}' }],
            [/(qr|m|s)\s*</, { token: 'regexp.delim', switchTo: '@qregexp.<.>' }],
            [/(qr|m|s)#/, { token: 'regexp.delim', switchTo: '@qregexp.#.#' }],
            [
                /(qr|m|s)\s*([^A-Za-z0-9_#\s])/,
                { token: 'regexp.delim', switchTo: '@qregexp.$2.$2' }
            ],
            [/(qr|m|s)\s+(\w)/, { token: 'regexp.delim', switchTo: '@qregexp.$2.$2' }],
            [/(qq|qx)\s*\(/, { token: 'string.delim', switchTo: '@qqstring.(.)' }],
            [/(qq|qx)\s*\[/, { token: 'string.delim', switchTo: '@qqstring.[.]' }],
            [/(qq|qx)\s*\{/, { token: 'string.delim', switchTo: '@qqstring.{.}' }],
            [/(qq|qx)\s*</, { token: 'string.delim', switchTo: '@qqstring.<.>' }],
            [/(qq|qx)#/, { token: 'string.delim', switchTo: '@qqstring.#.#' }],
            [/(qq|qx)\s*([^A-Za-z0-9#\s])/, { token: 'string.delim', switchTo: '@qqstring.$2.$2' }],
            [/(qq|qx)\s+(\w)/, { token: 'string.delim', switchTo: '@qqstring.$2.$2' }]
        ],
        // Non-expanded quoted string
        // qstring<open>.<close>
        //  open = open delimiter
        //  close = close delimiter
        qstring: [
            [/\\./, 'string.escape'],
            [
                /./,
                {
                    cases: {
                        '$#==$S3': { token: 'string.delim', next: '@pop' },
                        '$#==$S2': { token: 'string.delim', next: '@push' },
                        '@default': 'string'
                    }
                }
            ]
        ],
        // Quoted regexp
        // qregexp.<open>.<close>
        //  open = open delimiter
        //  close = close delimiter
        qregexp: [
            { include: '@variables' },
            [/\\./, 'regexp.escape'],
            [
                /./,
                {
                    cases: {
                        '$#==$S3': {
                            token: 'regexp.delim',
                            next: '@regexpModifiers'
                        },
                        '$#==$S2': { token: 'regexp.delim', next: '@push' },
                        '@default': 'regexp'
                    }
                }
            ]
        ],
        regexpModifiers: [[/[msixpodualngcer]+/, { token: 'regexp.modifier', next: '@popall' }]],
        // Expanded quoted string
        // qqstring.<open>.<close>
        //  open = open delimiter
        //  close = close delimiter
        qqstring: [{ include: '@variables' }, { include: '@qstring' }],
        heredoc: [
            [
                /<<\s*['"`]?([\w\-]+)['"`]?/,
                { token: 'string.heredoc.delimiter', next: '@heredocBody.$1' }
            ]
        ],
        heredocBody: [
            [
                /^([\w\-]+)$/,
                {
                    cases: {
                        '$1==$S2': [
                            {
                                token: 'string.heredoc.delimiter',
                                next: '@popall'
                            }
                        ],
                        '@default': 'string.heredoc'
                    }
                }
            ],
            [/./, 'string.heredoc']
        ],
        perldoc: [[/^=\w/, 'comment.doc', '@perldocBody']],
        perldocBody: [
            [/^=cut\b/, 'type.identifier', '@popall'],
            [/./, 'comment.doc']
        ],
        variables: [
            [/\$\w+/, 'variable'],
            [/@\w+/, 'variable'],
            [/%\w+/, 'variable'] // key/value
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3BlcmwvcGVybC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxQ0FBcUMsWUFBWSxHQUFHO0FBQzdELFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQztBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGlCQUFpQjtBQUNqQjtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHdCQUF3QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0RBQWtEO0FBQ3BGLGtDQUFrQyxrREFBa0Q7QUFDcEYsOEJBQThCLElBQUksNkNBQTZDLEVBQUUsR0FBRztBQUNwRixpQ0FBaUMsa0RBQWtEO0FBQ25GLDhCQUE4QixrREFBa0Q7QUFDaEY7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLG9DQUFvQyxvREFBb0Q7QUFDeEYsK0JBQStCLGtEQUFrRDtBQUNqRiwrQkFBK0Isa0RBQWtEO0FBQ2pGLDJCQUEyQixJQUFJLDZDQUE2QyxFQUFFLEdBQUc7QUFDakYsOEJBQThCLGtEQUFrRDtBQUNoRiwyQkFBMkIsa0RBQWtEO0FBQzdFO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQ0FBaUMsb0RBQW9EO0FBQ3JGLDhCQUE4QixtREFBbUQ7QUFDakYsOEJBQThCLG1EQUFtRDtBQUNqRiwwQkFBMEIsSUFBSSw4Q0FBOEMsRUFBRSxHQUFHO0FBQ2pGLDZCQUE2QixtREFBbUQ7QUFDaEYsMEJBQTBCLG1EQUFtRDtBQUM3RSw2Q0FBNkMscURBQXFEO0FBQ2xHLGdDQUFnQyxxREFBcUQ7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxzQ0FBc0M7QUFDMUUsb0NBQW9DLHVDQUF1QztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsb0NBQW9DLHVDQUF1QztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDRDQUE0QztBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0IsR0FBRyxzQkFBc0I7QUFDckU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjM5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnIydcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcbiAgICAgICAgeyBvcGVuOiAnYCcsIGNsb3NlOiAnYCcgfVxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxuICAgICAgICB7IG9wZW46ICdgJywgY2xvc2U6ICdgJyB9XG4gICAgXVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcucGVybCcsXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0Jywgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnLCBvcGVuOiAnWycsIGNsb3NlOiAnXScgfVxuICAgIF0sXG4gICAgLy8gaHR0cHM6Ly9sZWFybi5wZXJsLm9yZy9kb2NzL2tleXdvcmRzLmh0bWxcbiAgICAvLyBQZXJsIHN5bnRheFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICdfX0RBVEFfXycsXG4gICAgICAgICdlbHNlJyxcbiAgICAgICAgJ2xvY2snLFxuICAgICAgICAnX19FTkRfXycsXG4gICAgICAgICdlbHNpZicsXG4gICAgICAgICdsdCcsXG4gICAgICAgICdfX0ZJTEVfXycsXG4gICAgICAgICdlcScsXG4gICAgICAgICdfX0xJTkVfXycsXG4gICAgICAgICdleHAnLFxuICAgICAgICAnbmUnLFxuICAgICAgICAnc3ViJyxcbiAgICAgICAgJ19fUEFDS0FHRV9fJyxcbiAgICAgICAgJ2ZvcicsXG4gICAgICAgICdubycsXG4gICAgICAgICdhbmQnLFxuICAgICAgICAnZm9yZWFjaCcsXG4gICAgICAgICdvcicsXG4gICAgICAgICd1bmxlc3MnLFxuICAgICAgICAnY21wJyxcbiAgICAgICAgJ2dlJyxcbiAgICAgICAgJ3BhY2thZ2UnLFxuICAgICAgICAndW50aWwnLFxuICAgICAgICAnY29udGludWUnLFxuICAgICAgICAnZ3QnLFxuICAgICAgICAnd2hpbGUnLFxuICAgICAgICAnQ09SRScsXG4gICAgICAgICdpZicsXG4gICAgICAgICd4b3InLFxuICAgICAgICAnZG8nLFxuICAgICAgICAnbGUnLFxuICAgICAgICAnX19ESUVfXycsXG4gICAgICAgICdfX1dBUk5fXydcbiAgICBdLFxuICAgIC8vIFBlcmwgZnVuY3Rpb25zXG4gICAgYnVpbHRpbkZ1bmN0aW9uczogW1xuICAgICAgICAnLUEnLFxuICAgICAgICAnRU5EJyxcbiAgICAgICAgJ2xlbmd0aCcsXG4gICAgICAgICdzZXRwZ3JwJyxcbiAgICAgICAgJy1CJyxcbiAgICAgICAgJ2VuZGdyZW50JyxcbiAgICAgICAgJ2xpbmsnLFxuICAgICAgICAnc2V0cHJpb3JpdHknLFxuICAgICAgICAnLWInLFxuICAgICAgICAnZW5kaG9zdGVudCcsXG4gICAgICAgICdsaXN0ZW4nLFxuICAgICAgICAnc2V0cHJvdG9lbnQnLFxuICAgICAgICAnLUMnLFxuICAgICAgICAnZW5kbmV0ZW50JyxcbiAgICAgICAgJ2xvY2FsJyxcbiAgICAgICAgJ3NldHB3ZW50JyxcbiAgICAgICAgJy1jJyxcbiAgICAgICAgJ2VuZHByb3RvZW50JyxcbiAgICAgICAgJ2xvY2FsdGltZScsXG4gICAgICAgICdzZXRzZXJ2ZW50JyxcbiAgICAgICAgJy1kJyxcbiAgICAgICAgJ2VuZHB3ZW50JyxcbiAgICAgICAgJ2xvZycsXG4gICAgICAgICdzZXRzb2Nrb3B0JyxcbiAgICAgICAgJy1lJyxcbiAgICAgICAgJ2VuZHNlcnZlbnQnLFxuICAgICAgICAnbHN0YXQnLFxuICAgICAgICAnc2hpZnQnLFxuICAgICAgICAnLWYnLFxuICAgICAgICAnZW9mJyxcbiAgICAgICAgJ21hcCcsXG4gICAgICAgICdzaG1jdGwnLFxuICAgICAgICAnLWcnLFxuICAgICAgICAnZXZhbCcsXG4gICAgICAgICdta2RpcicsXG4gICAgICAgICdzaG1nZXQnLFxuICAgICAgICAnLWsnLFxuICAgICAgICAnZXhlYycsXG4gICAgICAgICdtc2djdGwnLFxuICAgICAgICAnc2htcmVhZCcsXG4gICAgICAgICctbCcsXG4gICAgICAgICdleGlzdHMnLFxuICAgICAgICAnbXNnZ2V0JyxcbiAgICAgICAgJ3NobXdyaXRlJyxcbiAgICAgICAgJy1NJyxcbiAgICAgICAgJ2V4aXQnLFxuICAgICAgICAnbXNncmN2JyxcbiAgICAgICAgJ3NodXRkb3duJyxcbiAgICAgICAgJy1PJyxcbiAgICAgICAgJ2ZjbnRsJyxcbiAgICAgICAgJ21zZ3NuZCcsXG4gICAgICAgICdzaW4nLFxuICAgICAgICAnLW8nLFxuICAgICAgICAnZmlsZW5vJyxcbiAgICAgICAgJ215JyxcbiAgICAgICAgJ3NsZWVwJyxcbiAgICAgICAgJy1wJyxcbiAgICAgICAgJ2Zsb2NrJyxcbiAgICAgICAgJ25leHQnLFxuICAgICAgICAnc29ja2V0JyxcbiAgICAgICAgJy1yJyxcbiAgICAgICAgJ2ZvcmsnLFxuICAgICAgICAnbm90JyxcbiAgICAgICAgJ3NvY2tldHBhaXInLFxuICAgICAgICAnLVInLFxuICAgICAgICAnZm9ybWF0JyxcbiAgICAgICAgJ29jdCcsXG4gICAgICAgICdzb3J0JyxcbiAgICAgICAgJy1TJyxcbiAgICAgICAgJ2Zvcm1saW5lJyxcbiAgICAgICAgJ29wZW4nLFxuICAgICAgICAnc3BsaWNlJyxcbiAgICAgICAgJy1zJyxcbiAgICAgICAgJ2dldGMnLFxuICAgICAgICAnb3BlbmRpcicsXG4gICAgICAgICdzcGxpdCcsXG4gICAgICAgICctVCcsXG4gICAgICAgICdnZXRncmVudCcsXG4gICAgICAgICdvcmQnLFxuICAgICAgICAnc3ByaW50ZicsXG4gICAgICAgICctdCcsXG4gICAgICAgICdnZXRncmdpZCcsXG4gICAgICAgICdvdXInLFxuICAgICAgICAnc3FydCcsXG4gICAgICAgICctdScsXG4gICAgICAgICdnZXRncm5hbScsXG4gICAgICAgICdwYWNrJyxcbiAgICAgICAgJ3NyYW5kJyxcbiAgICAgICAgJy13JyxcbiAgICAgICAgJ2dldGhvc3RieWFkZHInLFxuICAgICAgICAncGlwZScsXG4gICAgICAgICdzdGF0JyxcbiAgICAgICAgJy1XJyxcbiAgICAgICAgJ2dldGhvc3RieW5hbWUnLFxuICAgICAgICAncG9wJyxcbiAgICAgICAgJ3N0YXRlJyxcbiAgICAgICAgJy1YJyxcbiAgICAgICAgJ2dldGhvc3RlbnQnLFxuICAgICAgICAncG9zJyxcbiAgICAgICAgJ3N0dWR5JyxcbiAgICAgICAgJy14JyxcbiAgICAgICAgJ2dldGxvZ2luJyxcbiAgICAgICAgJ3ByaW50JyxcbiAgICAgICAgJ3N1YnN0cicsXG4gICAgICAgICcteicsXG4gICAgICAgICdnZXRuZXRieWFkZHInLFxuICAgICAgICAncHJpbnRmJyxcbiAgICAgICAgJ3N5bWxpbmsnLFxuICAgICAgICAnYWJzJyxcbiAgICAgICAgJ2dldG5ldGJ5bmFtZScsXG4gICAgICAgICdwcm90b3R5cGUnLFxuICAgICAgICAnc3lzY2FsbCcsXG4gICAgICAgICdhY2NlcHQnLFxuICAgICAgICAnZ2V0bmV0ZW50JyxcbiAgICAgICAgJ3B1c2gnLFxuICAgICAgICAnc3lzb3BlbicsXG4gICAgICAgICdhbGFybScsXG4gICAgICAgICdnZXRwZWVybmFtZScsXG4gICAgICAgICdxdW90ZW1ldGEnLFxuICAgICAgICAnc3lzcmVhZCcsXG4gICAgICAgICdhdGFuMicsXG4gICAgICAgICdnZXRwZ3JwJyxcbiAgICAgICAgJ3JhbmQnLFxuICAgICAgICAnc3lzc2VlaycsXG4gICAgICAgICdBVVRPTE9BRCcsXG4gICAgICAgICdnZXRwcGlkJyxcbiAgICAgICAgJ3JlYWQnLFxuICAgICAgICAnc3lzdGVtJyxcbiAgICAgICAgJ0JFR0lOJyxcbiAgICAgICAgJ2dldHByaW9yaXR5JyxcbiAgICAgICAgJ3JlYWRkaXInLFxuICAgICAgICAnc3lzd3JpdGUnLFxuICAgICAgICAnYmluZCcsXG4gICAgICAgICdnZXRwcm90b2J5bmFtZScsXG4gICAgICAgICdyZWFkbGluZScsXG4gICAgICAgICd0ZWxsJyxcbiAgICAgICAgJ2Jpbm1vZGUnLFxuICAgICAgICAnZ2V0cHJvdG9ieW51bWJlcicsXG4gICAgICAgICdyZWFkbGluaycsXG4gICAgICAgICd0ZWxsZGlyJyxcbiAgICAgICAgJ2JsZXNzJyxcbiAgICAgICAgJ2dldHByb3RvZW50JyxcbiAgICAgICAgJ3JlYWRwaXBlJyxcbiAgICAgICAgJ3RpZScsXG4gICAgICAgICdicmVhaycsXG4gICAgICAgICdnZXRwd2VudCcsXG4gICAgICAgICdyZWN2JyxcbiAgICAgICAgJ3RpZWQnLFxuICAgICAgICAnY2FsbGVyJyxcbiAgICAgICAgJ2dldHB3bmFtJyxcbiAgICAgICAgJ3JlZG8nLFxuICAgICAgICAndGltZScsXG4gICAgICAgICdjaGRpcicsXG4gICAgICAgICdnZXRwd3VpZCcsXG4gICAgICAgICdyZWYnLFxuICAgICAgICAndGltZXMnLFxuICAgICAgICAnQ0hFQ0snLFxuICAgICAgICAnZ2V0c2VydmJ5bmFtZScsXG4gICAgICAgICdyZW5hbWUnLFxuICAgICAgICAndHJ1bmNhdGUnLFxuICAgICAgICAnY2htb2QnLFxuICAgICAgICAnZ2V0c2VydmJ5cG9ydCcsXG4gICAgICAgICdyZXF1aXJlJyxcbiAgICAgICAgJ3VjJyxcbiAgICAgICAgJ2Nob21wJyxcbiAgICAgICAgJ2dldHNlcnZlbnQnLFxuICAgICAgICAncmVzZXQnLFxuICAgICAgICAndWNmaXJzdCcsXG4gICAgICAgICdjaG9wJyxcbiAgICAgICAgJ2dldHNvY2tuYW1lJyxcbiAgICAgICAgJ3JldHVybicsXG4gICAgICAgICd1bWFzaycsXG4gICAgICAgICdjaG93bicsXG4gICAgICAgICdnZXRzb2Nrb3B0JyxcbiAgICAgICAgJ3JldmVyc2UnLFxuICAgICAgICAndW5kZWYnLFxuICAgICAgICAnY2hyJyxcbiAgICAgICAgJ2dsb2InLFxuICAgICAgICAncmV3aW5kZGlyJyxcbiAgICAgICAgJ1VOSVRDSEVDSycsXG4gICAgICAgICdjaHJvb3QnLFxuICAgICAgICAnZ210aW1lJyxcbiAgICAgICAgJ3JpbmRleCcsXG4gICAgICAgICd1bmxpbmsnLFxuICAgICAgICAnY2xvc2UnLFxuICAgICAgICAnZ290bycsXG4gICAgICAgICdybWRpcicsXG4gICAgICAgICd1bnBhY2snLFxuICAgICAgICAnY2xvc2VkaXInLFxuICAgICAgICAnZ3JlcCcsXG4gICAgICAgICdzYXknLFxuICAgICAgICAndW5zaGlmdCcsXG4gICAgICAgICdjb25uZWN0JyxcbiAgICAgICAgJ2hleCcsXG4gICAgICAgICdzY2FsYXInLFxuICAgICAgICAndW50aWUnLFxuICAgICAgICAnY29zJyxcbiAgICAgICAgJ2luZGV4JyxcbiAgICAgICAgJ3NlZWsnLFxuICAgICAgICAndXNlJyxcbiAgICAgICAgJ2NyeXB0JyxcbiAgICAgICAgJ0lOSVQnLFxuICAgICAgICAnc2Vla2RpcicsXG4gICAgICAgICd1dGltZScsXG4gICAgICAgICdkYm1jbG9zZScsXG4gICAgICAgICdpbnQnLFxuICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgJ3ZhbHVlcycsXG4gICAgICAgICdkYm1vcGVuJyxcbiAgICAgICAgJ2lvY3RsJyxcbiAgICAgICAgJ3NlbWN0bCcsXG4gICAgICAgICd2ZWMnLFxuICAgICAgICAnZGVmaW5lZCcsXG4gICAgICAgICdqb2luJyxcbiAgICAgICAgJ3NlbWdldCcsXG4gICAgICAgICd3YWl0JyxcbiAgICAgICAgJ2RlbGV0ZScsXG4gICAgICAgICdrZXlzJyxcbiAgICAgICAgJ3NlbW9wJyxcbiAgICAgICAgJ3dhaXRwaWQnLFxuICAgICAgICAnREVTVFJPWScsXG4gICAgICAgICdraWxsJyxcbiAgICAgICAgJ3NlbmQnLFxuICAgICAgICAnd2FudGFycmF5JyxcbiAgICAgICAgJ2RpZScsXG4gICAgICAgICdsYXN0JyxcbiAgICAgICAgJ3NldGdyZW50JyxcbiAgICAgICAgJ3dhcm4nLFxuICAgICAgICAnZHVtcCcsXG4gICAgICAgICdsYycsXG4gICAgICAgICdzZXRob3N0ZW50JyxcbiAgICAgICAgJ3dyaXRlJyxcbiAgICAgICAgJ2VhY2gnLFxuICAgICAgICAnbGNmaXJzdCcsXG4gICAgICAgICdzZXRuZXRlbnQnXG4gICAgXSxcbiAgICAvLyBGaWxlIGhhbmRsZXJzXG4gICAgYnVpbHRpbkZpbGVIYW5kbGVyczogWydBUkdWJywgJ1NUREVSUicsICdTVERPVVQnLCAnQVJHVk9VVCcsICdTVERJTicsICdFTlYnXSxcbiAgICAvLyBQZXJsIHZhcmlhYmxlc1xuICAgIGJ1aWx0aW5WYXJpYWJsZXM6IFtcbiAgICAgICAgJyQhJyxcbiAgICAgICAgJyReUkVfVFJJRV9NQVhCVUYnLFxuICAgICAgICAnJExBU1RfUkVHRVhQX0NPREVfUkVTVUxUJyxcbiAgICAgICAgJyRcIicsXG4gICAgICAgICckXlMnLFxuICAgICAgICAnJExJU1RfU0VQQVJBVE9SJyxcbiAgICAgICAgJyQjJyxcbiAgICAgICAgJyReVCcsXG4gICAgICAgICckTUFUQ0gnLFxuICAgICAgICAnJCQnLFxuICAgICAgICAnJF5UQUlOVCcsXG4gICAgICAgICckTVVMVElMSU5FX01BVENISU5HJyxcbiAgICAgICAgJyQlJyxcbiAgICAgICAgJyReVU5JQ09ERScsXG4gICAgICAgICckTlInLFxuICAgICAgICAnJCYnLFxuICAgICAgICAnJF5VVEY4TE9DQUxFJyxcbiAgICAgICAgJyRPRk1UJyxcbiAgICAgICAgXCIkJ1wiLFxuICAgICAgICAnJF5WJyxcbiAgICAgICAgJyRPRlMnLFxuICAgICAgICAnJCgnLFxuICAgICAgICAnJF5XJyxcbiAgICAgICAgJyRPUlMnLFxuICAgICAgICAnJCknLFxuICAgICAgICAnJF5XQVJOSU5HX0JJVFMnLFxuICAgICAgICAnJE9TX0VSUk9SJyxcbiAgICAgICAgJyQqJyxcbiAgICAgICAgJyReV0lERV9TWVNURU1fQ0FMTFMnLFxuICAgICAgICAnJE9TTkFNRScsXG4gICAgICAgICckKycsXG4gICAgICAgICckXlgnLFxuICAgICAgICAnJE9VVFBVVF9BVVRPX0ZMVVNIJyxcbiAgICAgICAgJyQsJyxcbiAgICAgICAgJyRfJyxcbiAgICAgICAgJyRPVVRQVVRfRklFTERfU0VQQVJBVE9SJyxcbiAgICAgICAgJyQtJyxcbiAgICAgICAgJyRgJyxcbiAgICAgICAgJyRPVVRQVVRfUkVDT1JEX1NFUEFSQVRPUicsXG4gICAgICAgICckLicsXG4gICAgICAgICckYScsXG4gICAgICAgICckUEVSTF9WRVJTSU9OJyxcbiAgICAgICAgJyQvJyxcbiAgICAgICAgJyRBQ0NVTVVMQVRPUicsXG4gICAgICAgICckUEVSTERCJyxcbiAgICAgICAgJyQwJyxcbiAgICAgICAgJyRBUkcnLFxuICAgICAgICAnJFBJRCcsXG4gICAgICAgICckOicsXG4gICAgICAgICckQVJHVicsXG4gICAgICAgICckUE9TVE1BVENIJyxcbiAgICAgICAgJyQ7JyxcbiAgICAgICAgJyRiJyxcbiAgICAgICAgJyRQUkVNQVRDSCcsXG4gICAgICAgICckPCcsXG4gICAgICAgICckQkFTRVRJTUUnLFxuICAgICAgICAnJFBST0NFU1NfSUQnLFxuICAgICAgICAnJD0nLFxuICAgICAgICAnJENISUxEX0VSUk9SJyxcbiAgICAgICAgJyRQUk9HUkFNX05BTUUnLFxuICAgICAgICAnJD4nLFxuICAgICAgICAnJENPTVBJTElORycsXG4gICAgICAgICckUkVBTF9HUk9VUF9JRCcsXG4gICAgICAgICckPycsXG4gICAgICAgICckREVCVUdHSU5HJyxcbiAgICAgICAgJyRSRUFMX1VTRVJfSUQnLFxuICAgICAgICAnJEAnLFxuICAgICAgICAnJEVGRkVDVElWRV9HUk9VUF9JRCcsXG4gICAgICAgICckUlMnLFxuICAgICAgICAnJFsnLFxuICAgICAgICAnJEVGRkVDVElWRV9VU0VSX0lEJyxcbiAgICAgICAgJyRTVUJTQ1JJUFRfU0VQQVJBVE9SJyxcbiAgICAgICAgJyRcXFxcJyxcbiAgICAgICAgJyRFR0lEJyxcbiAgICAgICAgJyRTVUJTRVAnLFxuICAgICAgICAnJF0nLFxuICAgICAgICAnJEVSUk5PJyxcbiAgICAgICAgJyRTWVNURU1fRkRfTUFYJyxcbiAgICAgICAgJyReJyxcbiAgICAgICAgJyRFVUlEJyxcbiAgICAgICAgJyRVSUQnLFxuICAgICAgICAnJF5BJyxcbiAgICAgICAgJyRFVkFMX0VSUk9SJyxcbiAgICAgICAgJyRXQVJOSU5HJyxcbiAgICAgICAgJyReQycsXG4gICAgICAgICckRVhDRVBUSU9OU19CRUlOR19DQVVHSFQnLFxuICAgICAgICAnJHwnLFxuICAgICAgICAnJF5DSElMRF9FUlJPUl9OQVRJVkUnLFxuICAgICAgICAnJEVYRUNVVEFCTEVfTkFNRScsXG4gICAgICAgICckficsXG4gICAgICAgICckXkQnLFxuICAgICAgICAnJEVYVEVOREVEX09TX0VSUk9SJyxcbiAgICAgICAgJyUhJyxcbiAgICAgICAgJyReRScsXG4gICAgICAgICckRk9STUFUX0ZPUk1GRUVEJyxcbiAgICAgICAgJyVeSCcsXG4gICAgICAgICckXkVOQ09ESU5HJyxcbiAgICAgICAgJyRGT1JNQVRfTElORV9CUkVBS19DSEFSQUNURVJTJyxcbiAgICAgICAgJyVFTlYnLFxuICAgICAgICAnJF5GJyxcbiAgICAgICAgJyRGT1JNQVRfTElORVNfTEVGVCcsXG4gICAgICAgICclSU5DJyxcbiAgICAgICAgJyReSCcsXG4gICAgICAgICckRk9STUFUX0xJTkVTX1BFUl9QQUdFJyxcbiAgICAgICAgJyVPVkVSTE9BRCcsXG4gICAgICAgICckXkknLFxuICAgICAgICAnJEZPUk1BVF9OQU1FJyxcbiAgICAgICAgJyVTSUcnLFxuICAgICAgICAnJF5MJyxcbiAgICAgICAgJyRGT1JNQVRfUEFHRV9OVU1CRVInLFxuICAgICAgICAnQCsnLFxuICAgICAgICAnJF5NJyxcbiAgICAgICAgJyRGT1JNQVRfVE9QX05BTUUnLFxuICAgICAgICAnQC0nLFxuICAgICAgICAnJF5OJyxcbiAgICAgICAgJyRHSUQnLFxuICAgICAgICAnQF8nLFxuICAgICAgICAnJF5PJyxcbiAgICAgICAgJyRJTlBMQUNFX0VESVQnLFxuICAgICAgICAnQEFSR1YnLFxuICAgICAgICAnJF5PUEVOJyxcbiAgICAgICAgJyRJTlBVVF9MSU5FX05VTUJFUicsXG4gICAgICAgICdASU5DJyxcbiAgICAgICAgJyReUCcsXG4gICAgICAgICckSU5QVVRfUkVDT1JEX1NFUEFSQVRPUicsXG4gICAgICAgICdATEFTVF9NQVRDSF9TVEFSVCcsXG4gICAgICAgICckXlInLFxuICAgICAgICAnJExBU1RfTUFUQ0hfRU5EJyxcbiAgICAgICAgJyReUkVfREVCVUdfRkxBR1MnLFxuICAgICAgICAnJExBU1RfUEFSRU5fTUFUQ0gnXG4gICAgXSxcbiAgICAvLyBvcGVyYXRvcnNcbiAgICBzeW1ib2xzOiAvWzorXFwtXFxeKiQmJUA9PD4hP3xcXC9+XFwuXS8sXG4gICAgcXVvdGVMaWtlT3BzOiBbJ3FyJywgJ20nLCAncycsICdxJywgJ3FxJywgJ3F4JywgJ3F3JywgJ3RyJywgJ3knXSxcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW2EtekEtWlxcLV9dW1xcd1xcLV9dKi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAYnVpbHRpbkZ1bmN0aW9ucyc6ICd0eXBlLmlkZW50aWZpZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BidWlsdGluRmlsZUhhbmRsZXJzJzogJ3ZhcmlhYmxlLnByZWRlZmluZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BxdW90ZUxpa2VPcHMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdAcmVtYXRjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ3F1b3RlZENvbnN0cnVjdHMnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBQZXJsIHZhcmlhYmxlc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bXFwkQCVdWypAIz9cXCtcXC1cXCQhXFx3XFxcXFxcXj48fjo7XFwuXSsvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAYnVpbHRpblZhcmlhYmxlcyc6ICd2YXJpYWJsZS5wcmVkZWZpbmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICd2YXJpYWJsZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BkYmxTdHJpbmdzJyB9LFxuICAgICAgICAgICAgLy8gUGVybCBEb2NcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BwZXJsZG9jJyB9LFxuICAgICAgICAgICAgLy8gSGVyZSBEb2NcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BoZXJlZG9jJyB9LFxuICAgICAgICAgICAgWy9be31cXFtcXF0oKV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICAvLyBSZWdFeHBcbiAgICAgICAgICAgIFsvW1xcL10oPzooPzpcXFsoPzpcXFxcXXxbXlxcXV0pK1xcXSl8KD86XFxcXFxcL3xbXlxcXVxcL10pKSpbXFwvXVxcdypcXHMqKD89WykuLDtdfCQpLywgJ3JlZ2V4cCddLFxuICAgICAgICAgICAgWy9Ac3ltYm9scy8sICdvcGVyYXRvcnMnXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxuICAgICAgICAgICAgWy9bLDtdLywgJ2RlbGltaXRlciddXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvXFxzKy8sICd3aGl0ZSddLFxuICAgICAgICAgICAgWy8oXiMhLiokKS8sICdtZXRhdGFnJ10sXG4gICAgICAgICAgICBbLyheIy4qJCkvLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIG51bWJlcnM6IFtcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRl9dKlswLTlhLWZBLUZdLywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXVxuICAgICAgICBdLFxuICAgICAgICAvLyBTaW5nbGUgcXVvdGUgc3RyaW5nXG4gICAgICAgIHN0cmluZ3M6IFtbLycvLCAnc3RyaW5nJywgJ0BzdHJpbmdCb2R5J11dLFxuICAgICAgICBzdHJpbmdCb2R5OiBbXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvXFxcXCcvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy8uLywgJ3N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIERvdWJsZSBxdW90ZSBzdHJpbmdcbiAgICAgICAgZGJsU3RyaW5nczogW1svXCIvLCAnc3RyaW5nJywgJ0BkYmxTdHJpbmdCb2R5J11dLFxuICAgICAgICBkYmxTdHJpbmdCb2R5OiBbXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdmFyaWFibGVzJyB9LFxuICAgICAgICAgICAgWy8uLywgJ3N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIFF1b3RlZCBjb25zdHJ1Y3RzXG4gICAgICAgIC8vIFBlcmNlbnQgc3RyaW5ncyBpbiBSdWJ5IGFyZSBzaW1pbGFyIHRvIHF1b3RlLWxpa2Ugb3BlcmF0b3JzIGluIFBlcmwuXG4gICAgICAgIC8vIFRoaXMgaXMgYWRhcHRlZCBmcm9tIHBzdHJpbmdzIGluIC4uL3J1YnkvcnVieS50cy5cbiAgICAgICAgcXVvdGVkQ29uc3RydWN0czogW1xuICAgICAgICAgICAgWy8ocXxxd3x0cnx5KVxccypcXCgvLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltJywgc3dpdGNoVG86ICdAcXN0cmluZy4oLiknIH1dLFxuICAgICAgICAgICAgWy8ocXxxd3x0cnx5KVxccypcXFsvLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltJywgc3dpdGNoVG86ICdAcXN0cmluZy5bLl0nIH1dLFxuICAgICAgICAgICAgWy8ocXxxd3x0cnx5KVxccypcXHsvLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltJywgc3dpdGNoVG86ICdAcXN0cmluZy57Ln0nIH1dLFxuICAgICAgICAgICAgWy8ocXxxd3x0cnx5KVxccyo8LywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbScsIHN3aXRjaFRvOiAnQHFzdHJpbmcuPC4+JyB9XSxcbiAgICAgICAgICAgIFsvKHF8cXd8dHJ8eSkjLywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbScsIHN3aXRjaFRvOiAnQHFzdHJpbmcuIy4jJyB9XSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKHF8cXd8dHJ8eSlcXHMqKFteQS1aYS16MC05I1xcc10pLyxcbiAgICAgICAgICAgICAgICB7IHRva2VuOiAnc3RyaW5nLmRlbGltJywgc3dpdGNoVG86ICdAcXN0cmluZy4kMi4kMicgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvKHF8cXd8dHJ8eSlcXHMrKFxcdykvLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltJywgc3dpdGNoVG86ICdAcXN0cmluZy4kMi4kMicgfV0sXG4gICAgICAgICAgICBbLyhxcnxtfHMpXFxzKlxcKC8sIHsgdG9rZW46ICdyZWdleHAuZGVsaW0nLCBzd2l0Y2hUbzogJ0BxcmVnZXhwLiguKScgfV0sXG4gICAgICAgICAgICBbLyhxcnxtfHMpXFxzKlxcWy8sIHsgdG9rZW46ICdyZWdleHAuZGVsaW0nLCBzd2l0Y2hUbzogJ0BxcmVnZXhwLlsuXScgfV0sXG4gICAgICAgICAgICBbLyhxcnxtfHMpXFxzKlxcey8sIHsgdG9rZW46ICdyZWdleHAuZGVsaW0nLCBzd2l0Y2hUbzogJ0BxcmVnZXhwLnsufScgfV0sXG4gICAgICAgICAgICBbLyhxcnxtfHMpXFxzKjwvLCB7IHRva2VuOiAncmVnZXhwLmRlbGltJywgc3dpdGNoVG86ICdAcXJlZ2V4cC48Lj4nIH1dLFxuICAgICAgICAgICAgWy8ocXJ8bXxzKSMvLCB7IHRva2VuOiAncmVnZXhwLmRlbGltJywgc3dpdGNoVG86ICdAcXJlZ2V4cC4jLiMnIH1dLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8ocXJ8bXxzKVxccyooW15BLVphLXowLTlfI1xcc10pLyxcbiAgICAgICAgICAgICAgICB7IHRva2VuOiAncmVnZXhwLmRlbGltJywgc3dpdGNoVG86ICdAcXJlZ2V4cC4kMi4kMicgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvKHFyfG18cylcXHMrKFxcdykvLCB7IHRva2VuOiAncmVnZXhwLmRlbGltJywgc3dpdGNoVG86ICdAcXJlZ2V4cC4kMi4kMicgfV0sXG4gICAgICAgICAgICBbLyhxcXxxeClcXHMqXFwoLywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbScsIHN3aXRjaFRvOiAnQHFxc3RyaW5nLiguKScgfV0sXG4gICAgICAgICAgICBbLyhxcXxxeClcXHMqXFxbLywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbScsIHN3aXRjaFRvOiAnQHFxc3RyaW5nLlsuXScgfV0sXG4gICAgICAgICAgICBbLyhxcXxxeClcXHMqXFx7LywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbScsIHN3aXRjaFRvOiAnQHFxc3RyaW5nLnsufScgfV0sXG4gICAgICAgICAgICBbLyhxcXxxeClcXHMqPC8sIHsgdG9rZW46ICdzdHJpbmcuZGVsaW0nLCBzd2l0Y2hUbzogJ0BxcXN0cmluZy48Lj4nIH1dLFxuICAgICAgICAgICAgWy8ocXF8cXgpIy8sIHsgdG9rZW46ICdzdHJpbmcuZGVsaW0nLCBzd2l0Y2hUbzogJ0BxcXN0cmluZy4jLiMnIH1dLFxuICAgICAgICAgICAgWy8ocXF8cXgpXFxzKihbXkEtWmEtejAtOSNcXHNdKS8sIHsgdG9rZW46ICdzdHJpbmcuZGVsaW0nLCBzd2l0Y2hUbzogJ0BxcXN0cmluZy4kMi4kMicgfV0sXG4gICAgICAgICAgICBbLyhxcXxxeClcXHMrKFxcdykvLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltJywgc3dpdGNoVG86ICdAcXFzdHJpbmcuJDIuJDInIH1dXG4gICAgICAgIF0sXG4gICAgICAgIC8vIE5vbi1leHBhbmRlZCBxdW90ZWQgc3RyaW5nXG4gICAgICAgIC8vIHFzdHJpbmc8b3Blbj4uPGNsb3NlPlxuICAgICAgICAvLyAgb3BlbiA9IG9wZW4gZGVsaW1pdGVyXG4gICAgICAgIC8vICBjbG9zZSA9IGNsb3NlIGRlbGltaXRlclxuICAgICAgICBxc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvLi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyQjPT0kUzMnOiB7IHRva2VuOiAnc3RyaW5nLmRlbGltJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTMic6IHsgdG9rZW46ICdzdHJpbmcuZGVsaW0nLCBuZXh0OiAnQHB1c2gnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICAvLyBRdW90ZWQgcmVnZXhwXG4gICAgICAgIC8vIHFyZWdleHAuPG9wZW4+LjxjbG9zZT5cbiAgICAgICAgLy8gIG9wZW4gPSBvcGVuIGRlbGltaXRlclxuICAgICAgICAvLyAgY2xvc2UgPSBjbG9zZSBkZWxpbWl0ZXJcbiAgICAgICAgcXJlZ2V4cDogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHZhcmlhYmxlcycgfSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAncmVnZXhwLmVzY2FwZSddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8uLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTMyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3JlZ2V4cC5kZWxpbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0ByZWdleHBNb2RpZmllcnMnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJyQjPT0kUzInOiB7IHRva2VuOiAncmVnZXhwLmRlbGltJywgbmV4dDogJ0BwdXNoJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3JlZ2V4cCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgcmVnZXhwTW9kaWZpZXJzOiBbWy9bbXNpeHBvZHVhbG5nY2VyXSsvLCB7IHRva2VuOiAncmVnZXhwLm1vZGlmaWVyJywgbmV4dDogJ0Bwb3BhbGwnIH1dXSxcbiAgICAgICAgLy8gRXhwYW5kZWQgcXVvdGVkIHN0cmluZ1xuICAgICAgICAvLyBxcXN0cmluZy48b3Blbj4uPGNsb3NlPlxuICAgICAgICAvLyAgb3BlbiA9IG9wZW4gZGVsaW1pdGVyXG4gICAgICAgIC8vICBjbG9zZSA9IGNsb3NlIGRlbGltaXRlclxuICAgICAgICBxcXN0cmluZzogW3sgaW5jbHVkZTogJ0B2YXJpYWJsZXMnIH0sIHsgaW5jbHVkZTogJ0Bxc3RyaW5nJyB9XSxcbiAgICAgICAgaGVyZWRvYzogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC88PFxccypbJ1wiYF0/KFtcXHdcXC1dKylbJ1wiYF0/LyxcbiAgICAgICAgICAgICAgICB7IHRva2VuOiAnc3RyaW5nLmhlcmVkb2MuZGVsaW1pdGVyJywgbmV4dDogJ0BoZXJlZG9jQm9keS4kMScgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBoZXJlZG9jQm9keTogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9eKFtcXHdcXC1dKykkLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJDE9PSRTMic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAnc3RyaW5nLmhlcmVkb2MuZGVsaW1pdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0Bwb3BhbGwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcuaGVyZWRvYydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbLy4vLCAnc3RyaW5nLmhlcmVkb2MnXVxuICAgICAgICBdLFxuICAgICAgICBwZXJsZG9jOiBbWy9ePVxcdy8sICdjb21tZW50LmRvYycsICdAcGVybGRvY0JvZHknXV0sXG4gICAgICAgIHBlcmxkb2NCb2R5OiBbXG4gICAgICAgICAgICBbL149Y3V0XFxiLywgJ3R5cGUuaWRlbnRpZmllcicsICdAcG9wYWxsJ10sXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudC5kb2MnXVxuICAgICAgICBdLFxuICAgICAgICB2YXJpYWJsZXM6IFtcbiAgICAgICAgICAgIFsvXFwkXFx3Ky8sICd2YXJpYWJsZSddLFxuICAgICAgICAgICAgWy9AXFx3Ky8sICd2YXJpYWJsZSddLFxuICAgICAgICAgICAgWy8lXFx3Ky8sICd2YXJpYWJsZSddIC8vIGtleS92YWx1ZVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=