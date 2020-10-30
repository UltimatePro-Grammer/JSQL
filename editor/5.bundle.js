(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js ***!
  \***********************************************************************************/
/*! exports provided: flattenDiagnosticMessageText, Adapter, LibFiles, DiagnosticsAdapter, SuggestAdapter, SignatureHelpAdapter, QuickInfoAdapter, OccurrencesAdapter, DefinitionAdapter, ReferenceAdapter, OutlineAdapter, Kind, FormatHelper, FormatAdapter, FormatOnTypeAdapter, CodeActionAdaptor, RenameAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenDiagnosticMessageText", function() { return flattenDiagnosticMessageText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adapter", function() { return Adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibFiles", function() { return LibFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticsAdapter", function() { return DiagnosticsAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestAdapter", function() { return SuggestAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureHelpAdapter", function() { return SignatureHelpAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickInfoAdapter", function() { return QuickInfoAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccurrencesAdapter", function() { return OccurrencesAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionAdapter", function() { return DefinitionAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceAdapter", function() { return ReferenceAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlineAdapter", function() { return OutlineAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return Kind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatHelper", function() { return FormatHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatAdapter", function() { return FormatAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatOnTypeAdapter", function() { return FormatOnTypeAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeActionAdaptor", function() { return CodeActionAdaptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameAdapter", function() { return RenameAdapter; });
/* harmony import */ var _lib_lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib.index.js */ "./node_modules/monaco-editor/esm/vs/language/typescript/lib/lib.index.js");
/* harmony import */ var _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fillers/monaco-editor-core.js */ "./node_modules/monaco-editor/esm/vs/language/typescript/fillers/monaco-editor-core.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


//#region utils copied from typescript to prevent loading the entire typescriptServices ---
var IndentStyle;
(function (IndentStyle) {
    IndentStyle[IndentStyle["None"] = 0] = "None";
    IndentStyle[IndentStyle["Block"] = 1] = "Block";
    IndentStyle[IndentStyle["Smart"] = 2] = "Smart";
})(IndentStyle || (IndentStyle = {}));
function flattenDiagnosticMessageText(diag, newLine, indent) {
    if (indent === void 0) { indent = 0; }
    if (typeof diag === 'string') {
        return diag;
    }
    else if (diag === undefined) {
        return '';
    }
    var result = '';
    if (indent) {
        result += newLine;
        for (var i = 0; i < indent; i++) {
            result += '  ';
        }
    }
    result += diag.messageText;
    indent++;
    if (diag.next) {
        for (var _i = 0, _a = diag.next; _i < _a.length; _i++) {
            var kid = _a[_i];
            result += flattenDiagnosticMessageText(kid, newLine, indent);
        }
    }
    return result;
}
function displayPartsToString(displayParts) {
    if (displayParts) {
        return displayParts.map(function (displayPart) { return displayPart.text; }).join('');
    }
    return '';
}
//#endregion
var Adapter = /** @class */ (function () {
    function Adapter(_worker) {
        this._worker = _worker;
    }
    // protected _positionToOffset(model: editor.ITextModel, position: monaco.IPosition): number {
    // 	return model.getOffsetAt(position);
    // }
    // protected _offsetToPosition(model: editor.ITextModel, offset: number): monaco.IPosition {
    // 	return model.getPositionAt(offset);
    // }
    Adapter.prototype._textSpanToRange = function (model, span) {
        var p1 = model.getPositionAt(span.start);
        var p2 = model.getPositionAt(span.start + span.length);
        var startLineNumber = p1.lineNumber, startColumn = p1.column;
        var endLineNumber = p2.lineNumber, endColumn = p2.column;
        return { startLineNumber: startLineNumber, startColumn: startColumn, endLineNumber: endLineNumber, endColumn: endColumn };
    };
    return Adapter;
}());

// --- lib files
var LibFiles = /** @class */ (function () {
    function LibFiles(_worker) {
        this._worker = _worker;
        this._libFiles = {};
        this._hasFetchedLibFiles = false;
        this._fetchLibFilesPromise = null;
    }
    LibFiles.prototype.isLibFile = function (uri) {
        if (!uri) {
            return false;
        }
        if (uri.path.indexOf('/lib.') === 0) {
            return !!_lib_lib_index_js__WEBPACK_IMPORTED_MODULE_0__["libFileSet"][uri.path.slice(1)];
        }
        return false;
    };
    LibFiles.prototype.getOrCreateModel = function (uri) {
        var model = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].getModel(uri);
        if (model) {
            return model;
        }
        if (this.isLibFile(uri) && this._hasFetchedLibFiles) {
            return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].createModel(this._libFiles[uri.path.slice(1)], 'javascript', uri);
        }
        return null;
    };
    LibFiles.prototype._containsLibFile = function (uris) {
        for (var _i = 0, uris_1 = uris; _i < uris_1.length; _i++) {
            var uri = uris_1[_i];
            if (this.isLibFile(uri)) {
                return true;
            }
        }
        return false;
    };
    LibFiles.prototype.fetchLibFilesIfNecessary = function (uris) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._containsLibFile(uris)) {
                            // no lib files necessary
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this._fetchLibFiles()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LibFiles.prototype._fetchLibFiles = function () {
        var _this = this;
        if (!this._fetchLibFilesPromise) {
            this._fetchLibFilesPromise = this._worker()
                .then(function (w) { return w.getLibFiles(); })
                .then(function (libFiles) {
                _this._hasFetchedLibFiles = true;
                _this._libFiles = libFiles;
            });
        }
        return this._fetchLibFilesPromise;
    };
    return LibFiles;
}());

// --- diagnostics --- ---
var DiagnosticCategory;
(function (DiagnosticCategory) {
    DiagnosticCategory[DiagnosticCategory["Warning"] = 0] = "Warning";
    DiagnosticCategory[DiagnosticCategory["Error"] = 1] = "Error";
    DiagnosticCategory[DiagnosticCategory["Suggestion"] = 2] = "Suggestion";
    DiagnosticCategory[DiagnosticCategory["Message"] = 3] = "Message";
})(DiagnosticCategory || (DiagnosticCategory = {}));
var DiagnosticsAdapter = /** @class */ (function (_super) {
    __extends(DiagnosticsAdapter, _super);
    function DiagnosticsAdapter(_libFiles, _defaults, _selector, worker) {
        var _this = _super.call(this, worker) || this;
        _this._libFiles = _libFiles;
        _this._defaults = _defaults;
        _this._selector = _selector;
        _this._disposables = [];
        _this._listener = Object.create(null);
        var onModelAdd = function (model) {
            if (model.getModeId() !== _selector) {
                return;
            }
            var handle;
            var changeSubscription = model.onDidChangeContent(function () {
                clearTimeout(handle);
                handle = setTimeout(function () { return _this._doValidate(model); }, 500);
            });
            _this._listener[model.uri.toString()] = {
                dispose: function () {
                    changeSubscription.dispose();
                    clearTimeout(handle);
                }
            };
            _this._doValidate(model);
        };
        var onModelRemoved = function (model) {
            _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].setModelMarkers(model, _this._selector, []);
            var key = model.uri.toString();
            if (_this._listener[key]) {
                _this._listener[key].dispose();
                delete _this._listener[key];
            }
        };
        _this._disposables.push(_fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].onDidCreateModel(onModelAdd));
        _this._disposables.push(_fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].onWillDisposeModel(onModelRemoved));
        _this._disposables.push(_fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].onDidChangeModelLanguage(function (event) {
            onModelRemoved(event.model);
            onModelAdd(event.model);
        }));
        _this._disposables.push({
            dispose: function () {
                for (var _i = 0, _a = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].getModels(); _i < _a.length; _i++) {
                    var model = _a[_i];
                    onModelRemoved(model);
                }
            }
        });
        var recomputeDiagostics = function () {
            // redo diagnostics when options change
            for (var _i = 0, _a = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].getModels(); _i < _a.length; _i++) {
                var model = _a[_i];
                onModelRemoved(model);
                onModelAdd(model);
            }
        };
        _this._disposables.push(_this._defaults.onDidChange(recomputeDiagostics));
        _this._disposables.push(_this._defaults.onDidExtraLibsChange(recomputeDiagostics));
        _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].getModels().forEach(onModelAdd);
        return _this;
    }
    DiagnosticsAdapter.prototype.dispose = function () {
        this._disposables.forEach(function (d) { return d && d.dispose(); });
        this._disposables = [];
    };
    DiagnosticsAdapter.prototype._doValidate = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var worker, promises, _a, noSyntaxValidation, noSemanticValidation, noSuggestionDiagnostics, allDiagnostics, diagnostics, relatedUris;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._worker(model.uri)];
                    case 1:
                        worker = _b.sent();
                        if (model.isDisposed()) {
                            // model was disposed in the meantime
                            return [2 /*return*/];
                        }
                        promises = [];
                        _a = this._defaults.getDiagnosticsOptions(), noSyntaxValidation = _a.noSyntaxValidation, noSemanticValidation = _a.noSemanticValidation, noSuggestionDiagnostics = _a.noSuggestionDiagnostics;
                        if (!noSyntaxValidation) {
                            promises.push(worker.getSyntacticDiagnostics(model.uri.toString()));
                        }
                        if (!noSemanticValidation) {
                            promises.push(worker.getSemanticDiagnostics(model.uri.toString()));
                        }
                        if (!noSuggestionDiagnostics) {
                            promises.push(worker.getSuggestionDiagnostics(model.uri.toString()));
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 2:
                        allDiagnostics = _b.sent();
                        if (!allDiagnostics || model.isDisposed()) {
                            // model was disposed in the meantime
                            return [2 /*return*/];
                        }
                        diagnostics = allDiagnostics
                            .reduce(function (p, c) { return c.concat(p); }, [])
                            .filter(function (d) {
                            return (_this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore || []).indexOf(d.code) ===
                                -1;
                        });
                        relatedUris = diagnostics
                            .map(function (d) { return d.relatedInformation || []; })
                            .reduce(function (p, c) { return c.concat(p); }, [])
                            .map(function (relatedInformation) {
                            return relatedInformation.file ? _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["Uri"].parse(relatedInformation.file.fileName) : null;
                        });
                        return [4 /*yield*/, this._libFiles.fetchLibFilesIfNecessary(relatedUris)];
                    case 3:
                        _b.sent();
                        if (model.isDisposed()) {
                            // model was disposed in the meantime
                            return [2 /*return*/];
                        }
                        _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["editor"].setModelMarkers(model, this._selector, diagnostics.map(function (d) { return _this._convertDiagnostics(model, d); }));
                        return [2 /*return*/];
                }
            });
        });
    };
    DiagnosticsAdapter.prototype._convertDiagnostics = function (model, diag) {
        var diagStart = diag.start || 0;
        var diagLength = diag.length || 1;
        var _a = model.getPositionAt(diagStart), startLineNumber = _a.lineNumber, startColumn = _a.column;
        var _b = model.getPositionAt(diagStart + diagLength), endLineNumber = _b.lineNumber, endColumn = _b.column;
        var tags = [];
        if (diag.reportsUnnecessary) {
            tags.push(_fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["MarkerTag"].Unnecessary);
        }
        if (diag.reportsDeprecated) {
            tags.push(_fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["MarkerTag"].Deprecated);
        }
        return {
            severity: this._tsDiagnosticCategoryToMarkerSeverity(diag.category),
            startLineNumber: startLineNumber,
            startColumn: startColumn,
            endLineNumber: endLineNumber,
            endColumn: endColumn,
            message: flattenDiagnosticMessageText(diag.messageText, '\n'),
            code: diag.code.toString(),
            tags: tags,
            relatedInformation: this._convertRelatedInformation(model, diag.relatedInformation)
        };
    };
    DiagnosticsAdapter.prototype._convertRelatedInformation = function (model, relatedInformation) {
        var _this = this;
        if (!relatedInformation) {
            return;
        }
        var result = [];
        relatedInformation.forEach(function (info) {
            var relatedResource = model;
            if (info.file) {
                var relatedResourceUri = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["Uri"].parse(info.file.fileName);
                relatedResource = _this._libFiles.getOrCreateModel(relatedResourceUri);
            }
            if (!relatedResource) {
                return;
            }
            var infoStart = info.start || 0;
            var infoLength = info.length || 1;
            var _a = relatedResource.getPositionAt(infoStart), startLineNumber = _a.lineNumber, startColumn = _a.column;
            var _b = relatedResource.getPositionAt(infoStart + infoLength), endLineNumber = _b.lineNumber, endColumn = _b.column;
            result.push({
                resource: relatedResource.uri,
                startLineNumber: startLineNumber,
                startColumn: startColumn,
                endLineNumber: endLineNumber,
                endColumn: endColumn,
                message: flattenDiagnosticMessageText(info.messageText, '\n')
            });
        });
        return result;
    };
    DiagnosticsAdapter.prototype._tsDiagnosticCategoryToMarkerSeverity = function (category) {
        switch (category) {
            case DiagnosticCategory.Error:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["MarkerSeverity"].Error;
            case DiagnosticCategory.Message:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["MarkerSeverity"].Info;
            case DiagnosticCategory.Warning:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["MarkerSeverity"].Warning;
            case DiagnosticCategory.Suggestion:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["MarkerSeverity"].Hint;
        }
        return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["MarkerSeverity"].Info;
    };
    return DiagnosticsAdapter;
}(Adapter));

var SuggestAdapter = /** @class */ (function (_super) {
    __extends(SuggestAdapter, _super);
    function SuggestAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SuggestAdapter.prototype, "triggerCharacters", {
        get: function () {
            return ['.'];
        },
        enumerable: false,
        configurable: true
    });
    SuggestAdapter.prototype.provideCompletionItems = function (model, position, _context, token) {
        return __awaiter(this, void 0, void 0, function () {
            var wordInfo, wordRange, resource, offset, worker, info, suggestions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wordInfo = model.getWordUntilPosition(position);
                        wordRange = new _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["Range"](position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getCompletionsAtPosition(resource.toString(), offset)];
                    case 2:
                        info = _a.sent();
                        if (!info || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        suggestions = info.entries.map(function (entry) {
                            var _a;
                            var range = wordRange;
                            if (entry.replacementSpan) {
                                var p1 = model.getPositionAt(entry.replacementSpan.start);
                                var p2 = model.getPositionAt(entry.replacementSpan.start + entry.replacementSpan.length);
                                range = new _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["Range"](p1.lineNumber, p1.column, p2.lineNumber, p2.column);
                            }
                            var tags = [];
                            if (((_a = entry.kindModifiers) === null || _a === void 0 ? void 0 : _a.indexOf('deprecated')) !== -1) {
                                tags.push(_fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemTag.Deprecated);
                            }
                            return {
                                uri: resource,
                                position: position,
                                offset: offset,
                                range: range,
                                label: entry.name,
                                insertText: entry.name,
                                sortText: entry.sortText,
                                kind: SuggestAdapter.convertKind(entry.kind),
                                tags: tags
                            };
                        });
                        return [2 /*return*/, {
                                suggestions: suggestions
                            }];
                }
            });
        });
    };
    SuggestAdapter.prototype.resolveCompletionItem = function (item, token) {
        return __awaiter(this, void 0, void 0, function () {
            var myItem, resource, position, offset, worker, details;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myItem = item;
                        resource = myItem.uri;
                        position = myItem.position;
                        offset = myItem.offset;
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getCompletionEntryDetails(resource.toString(), offset, myItem.label)];
                    case 2:
                        details = _a.sent();
                        if (!details) {
                            return [2 /*return*/, myItem];
                        }
                        return [2 /*return*/, {
                                uri: resource,
                                position: position,
                                label: details.name,
                                kind: SuggestAdapter.convertKind(details.kind),
                                detail: displayPartsToString(details.displayParts),
                                documentation: {
                                    value: SuggestAdapter.createDocumentationString(details)
                                }
                            }];
                }
            });
        });
    };
    SuggestAdapter.convertKind = function (kind) {
        switch (kind) {
            case Kind.primitiveType:
            case Kind.keyword:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.Keyword;
            case Kind.variable:
            case Kind.localVariable:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.Variable;
            case Kind.memberVariable:
            case Kind.memberGetAccessor:
            case Kind.memberSetAccessor:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.Field;
            case Kind.function:
            case Kind.memberFunction:
            case Kind.constructSignature:
            case Kind.callSignature:
            case Kind.indexSignature:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.Function;
            case Kind.enum:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.Enum;
            case Kind.module:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.Module;
            case Kind.class:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.Class;
            case Kind.interface:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.Interface;
            case Kind.warning:
                return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.File;
        }
        return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].CompletionItemKind.Property;
    };
    SuggestAdapter.createDocumentationString = function (details) {
        var documentationString = displayPartsToString(details.documentation);
        if (details.tags) {
            for (var _i = 0, _a = details.tags; _i < _a.length; _i++) {
                var tag = _a[_i];
                documentationString += "\n\n" + tagToString(tag);
            }
        }
        return documentationString;
    };
    return SuggestAdapter;
}(Adapter));

function tagToString(tag) {
    var tagLabel = "*@" + tag.name + "*";
    if (tag.name === 'param' && tag.text) {
        var _a = tag.text.split(' '), paramName = _a[0], rest = _a.slice(1);
        tagLabel += "`" + paramName + "`";
        if (rest.length > 0)
            tagLabel += " \u2014 " + rest.join(' ');
    }
    else if (tag.text) {
        tagLabel += " \u2014 " + tag.text;
    }
    return tagLabel;
}
var SignatureHelpAdapter = /** @class */ (function (_super) {
    __extends(SignatureHelpAdapter, _super);
    function SignatureHelpAdapter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.signatureHelpTriggerCharacters = ['(', ','];
        return _this;
    }
    SignatureHelpAdapter.prototype.provideSignatureHelp = function (model, position, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, offset, worker, info, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getSignatureHelpItems(resource.toString(), offset)];
                    case 2:
                        info = _a.sent();
                        if (!info || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        ret = {
                            activeSignature: info.selectedItemIndex,
                            activeParameter: info.argumentIndex,
                            signatures: []
                        };
                        info.items.forEach(function (item) {
                            var signature = {
                                label: '',
                                parameters: []
                            };
                            signature.documentation = {
                                value: displayPartsToString(item.documentation)
                            };
                            signature.label += displayPartsToString(item.prefixDisplayParts);
                            item.parameters.forEach(function (p, i, a) {
                                var label = displayPartsToString(p.displayParts);
                                var parameter = {
                                    label: label,
                                    documentation: {
                                        value: displayPartsToString(p.documentation)
                                    }
                                };
                                signature.label += label;
                                signature.parameters.push(parameter);
                                if (i < a.length - 1) {
                                    signature.label += displayPartsToString(item.separatorDisplayParts);
                                }
                            });
                            signature.label += displayPartsToString(item.suffixDisplayParts);
                            ret.signatures.push(signature);
                        });
                        return [2 /*return*/, {
                                value: ret,
                                dispose: function () { }
                            }];
                }
            });
        });
    };
    return SignatureHelpAdapter;
}(Adapter));

// --- hover ------
var QuickInfoAdapter = /** @class */ (function (_super) {
    __extends(QuickInfoAdapter, _super);
    function QuickInfoAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuickInfoAdapter.prototype.provideHover = function (model, position, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, offset, worker, info, documentation, tags, contents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getQuickInfoAtPosition(resource.toString(), offset)];
                    case 2:
                        info = _a.sent();
                        if (!info || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        documentation = displayPartsToString(info.documentation);
                        tags = info.tags ? info.tags.map(function (tag) { return tagToString(tag); }).join('  \n\n') : '';
                        contents = displayPartsToString(info.displayParts);
                        return [2 /*return*/, {
                                range: this._textSpanToRange(model, info.textSpan),
                                contents: [
                                    {
                                        value: '```typescript\n' + contents + '\n```\n'
                                    },
                                    {
                                        value: documentation + (tags ? '\n\n' + tags : '')
                                    }
                                ]
                            }];
                }
            });
        });
    };
    return QuickInfoAdapter;
}(Adapter));

// --- occurrences ------
var OccurrencesAdapter = /** @class */ (function (_super) {
    __extends(OccurrencesAdapter, _super);
    function OccurrencesAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OccurrencesAdapter.prototype.provideDocumentHighlights = function (model, position, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, offset, worker, entries;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getOccurrencesAtPosition(resource.toString(), offset)];
                    case 2:
                        entries = _a.sent();
                        if (!entries || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, entries.map(function (entry) {
                                return {
                                    range: _this._textSpanToRange(model, entry.textSpan),
                                    kind: entry.isWriteAccess
                                        ? _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].DocumentHighlightKind.Write
                                        : _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].DocumentHighlightKind.Text
                                };
                            })];
                }
            });
        });
    };
    return OccurrencesAdapter;
}(Adapter));

// --- definition ------
var DefinitionAdapter = /** @class */ (function (_super) {
    __extends(DefinitionAdapter, _super);
    function DefinitionAdapter(_libFiles, worker) {
        var _this = _super.call(this, worker) || this;
        _this._libFiles = _libFiles;
        return _this;
    }
    DefinitionAdapter.prototype.provideDefinition = function (model, position, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, offset, worker, entries, result, _i, entries_1, entry, uri, refModel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getDefinitionAtPosition(resource.toString(), offset)];
                    case 2:
                        entries = _a.sent();
                        if (!entries || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        // Fetch lib files if necessary
                        return [4 /*yield*/, this._libFiles.fetchLibFilesIfNecessary(entries.map(function (entry) { return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["Uri"].parse(entry.fileName); }))];
                    case 3:
                        // Fetch lib files if necessary
                        _a.sent();
                        if (model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        result = [];
                        for (_i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                            entry = entries_1[_i];
                            uri = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["Uri"].parse(entry.fileName);
                            refModel = this._libFiles.getOrCreateModel(uri);
                            if (refModel) {
                                result.push({
                                    uri: uri,
                                    range: this._textSpanToRange(refModel, entry.textSpan)
                                });
                            }
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return DefinitionAdapter;
}(Adapter));

// --- references ------
var ReferenceAdapter = /** @class */ (function (_super) {
    __extends(ReferenceAdapter, _super);
    function ReferenceAdapter(_libFiles, worker) {
        var _this = _super.call(this, worker) || this;
        _this._libFiles = _libFiles;
        return _this;
    }
    ReferenceAdapter.prototype.provideReferences = function (model, position, context, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, offset, worker, entries, result, _i, entries_2, entry, uri, refModel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getReferencesAtPosition(resource.toString(), offset)];
                    case 2:
                        entries = _a.sent();
                        if (!entries || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        // Fetch lib files if necessary
                        return [4 /*yield*/, this._libFiles.fetchLibFilesIfNecessary(entries.map(function (entry) { return _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["Uri"].parse(entry.fileName); }))];
                    case 3:
                        // Fetch lib files if necessary
                        _a.sent();
                        if (model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        result = [];
                        for (_i = 0, entries_2 = entries; _i < entries_2.length; _i++) {
                            entry = entries_2[_i];
                            uri = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["Uri"].parse(entry.fileName);
                            refModel = this._libFiles.getOrCreateModel(uri);
                            if (refModel) {
                                result.push({
                                    uri: uri,
                                    range: this._textSpanToRange(refModel, entry.textSpan)
                                });
                            }
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return ReferenceAdapter;
}(Adapter));

// --- outline ------
var OutlineAdapter = /** @class */ (function (_super) {
    __extends(OutlineAdapter, _super);
    function OutlineAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OutlineAdapter.prototype.provideDocumentSymbols = function (model, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, worker, items, convert, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getNavigationBarItems(resource.toString())];
                    case 2:
                        items = _a.sent();
                        if (!items || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        convert = function (bucket, item, containerLabel) {
                            var result = {
                                name: item.text,
                                detail: '',
                                kind: (outlineTypeTable[item.kind] || _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Variable),
                                range: _this._textSpanToRange(model, item.spans[0]),
                                selectionRange: _this._textSpanToRange(model, item.spans[0]),
                                tags: [],
                                containerName: containerLabel
                            };
                            if (item.childItems && item.childItems.length > 0) {
                                for (var _i = 0, _a = item.childItems; _i < _a.length; _i++) {
                                    var child = _a[_i];
                                    convert(bucket, child, result.name);
                                }
                            }
                            bucket.push(result);
                        };
                        result = [];
                        items.forEach(function (item) { return convert(result, item); });
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return OutlineAdapter;
}(Adapter));

var Kind = /** @class */ (function () {
    function Kind() {
    }
    Kind.unknown = '';
    Kind.keyword = 'keyword';
    Kind.script = 'script';
    Kind.module = 'module';
    Kind.class = 'class';
    Kind.interface = 'interface';
    Kind.type = 'type';
    Kind.enum = 'enum';
    Kind.variable = 'var';
    Kind.localVariable = 'local var';
    Kind.function = 'function';
    Kind.localFunction = 'local function';
    Kind.memberFunction = 'method';
    Kind.memberGetAccessor = 'getter';
    Kind.memberSetAccessor = 'setter';
    Kind.memberVariable = 'property';
    Kind.constructorImplementation = 'constructor';
    Kind.callSignature = 'call';
    Kind.indexSignature = 'index';
    Kind.constructSignature = 'construct';
    Kind.parameter = 'parameter';
    Kind.typeParameter = 'type parameter';
    Kind.primitiveType = 'primitive type';
    Kind.label = 'label';
    Kind.alias = 'alias';
    Kind.const = 'const';
    Kind.let = 'let';
    Kind.warning = 'warning';
    return Kind;
}());

var outlineTypeTable = Object.create(null);
outlineTypeTable[Kind.module] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Module;
outlineTypeTable[Kind.class] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Class;
outlineTypeTable[Kind.enum] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Enum;
outlineTypeTable[Kind.interface] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Interface;
outlineTypeTable[Kind.memberFunction] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Method;
outlineTypeTable[Kind.memberVariable] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Property;
outlineTypeTable[Kind.memberGetAccessor] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Property;
outlineTypeTable[Kind.memberSetAccessor] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Property;
outlineTypeTable[Kind.variable] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Variable;
outlineTypeTable[Kind.const] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Variable;
outlineTypeTable[Kind.localVariable] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Variable;
outlineTypeTable[Kind.variable] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Variable;
outlineTypeTable[Kind.function] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Function;
outlineTypeTable[Kind.localFunction] = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["languages"].SymbolKind.Function;
// --- formatting ----
var FormatHelper = /** @class */ (function (_super) {
    __extends(FormatHelper, _super);
    function FormatHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatHelper._convertOptions = function (options) {
        return {
            ConvertTabsToSpaces: options.insertSpaces,
            TabSize: options.tabSize,
            IndentSize: options.tabSize,
            IndentStyle: IndentStyle.Smart,
            NewLineCharacter: '\n',
            InsertSpaceAfterCommaDelimiter: true,
            InsertSpaceAfterSemicolonInForStatements: true,
            InsertSpaceBeforeAndAfterBinaryOperators: true,
            InsertSpaceAfterKeywordsInControlFlowStatements: true,
            InsertSpaceAfterFunctionKeywordForAnonymousFunctions: true,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false,
            InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: false,
            PlaceOpenBraceOnNewLineForControlBlocks: false,
            PlaceOpenBraceOnNewLineForFunctions: false
        };
    };
    FormatHelper.prototype._convertTextChanges = function (model, change) {
        return {
            text: change.newText,
            range: this._textSpanToRange(model, change.span)
        };
    };
    return FormatHelper;
}(Adapter));

var FormatAdapter = /** @class */ (function (_super) {
    __extends(FormatAdapter, _super);
    function FormatAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatAdapter.prototype.provideDocumentRangeFormattingEdits = function (model, range, options, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, startOffset, endOffset, worker, edits;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        startOffset = model.getOffsetAt({
                            lineNumber: range.startLineNumber,
                            column: range.startColumn
                        });
                        endOffset = model.getOffsetAt({
                            lineNumber: range.endLineNumber,
                            column: range.endColumn
                        });
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getFormattingEditsForRange(resource.toString(), startOffset, endOffset, FormatHelper._convertOptions(options))];
                    case 2:
                        edits = _a.sent();
                        if (!edits || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, edits.map(function (edit) { return _this._convertTextChanges(model, edit); })];
                }
            });
        });
    };
    return FormatAdapter;
}(FormatHelper));

var FormatOnTypeAdapter = /** @class */ (function (_super) {
    __extends(FormatOnTypeAdapter, _super);
    function FormatOnTypeAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FormatOnTypeAdapter.prototype, "autoFormatTriggerCharacters", {
        get: function () {
            return [';', '}', '\n'];
        },
        enumerable: false,
        configurable: true
    });
    FormatOnTypeAdapter.prototype.provideOnTypeFormattingEdits = function (model, position, ch, options, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, offset, worker, edits;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getFormattingEditsAfterKeystroke(resource.toString(), offset, ch, FormatHelper._convertOptions(options))];
                    case 2:
                        edits = _a.sent();
                        if (!edits || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, edits.map(function (edit) { return _this._convertTextChanges(model, edit); })];
                }
            });
        });
    };
    return FormatOnTypeAdapter;
}(FormatHelper));

// --- code actions ------
var CodeActionAdaptor = /** @class */ (function (_super) {
    __extends(CodeActionAdaptor, _super);
    function CodeActionAdaptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CodeActionAdaptor.prototype.provideCodeActions = function (model, range, context, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, start, end, formatOptions, errorCodes, worker, codeFixes, actions;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        start = model.getOffsetAt({
                            lineNumber: range.startLineNumber,
                            column: range.startColumn
                        });
                        end = model.getOffsetAt({
                            lineNumber: range.endLineNumber,
                            column: range.endColumn
                        });
                        formatOptions = FormatHelper._convertOptions(model.getOptions());
                        errorCodes = context.markers
                            .filter(function (m) { return m.code; })
                            .map(function (m) { return m.code; })
                            .map(Number);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getCodeFixesAtPosition(resource.toString(), start, end, errorCodes, formatOptions)];
                    case 2:
                        codeFixes = _a.sent();
                        if (!codeFixes || model.isDisposed()) {
                            return [2 /*return*/, { actions: [], dispose: function () { } }];
                        }
                        actions = codeFixes
                            .filter(function (fix) {
                            // Removes any 'make a new file'-type code fix
                            return fix.changes.filter(function (change) { return change.isNewFile; }).length === 0;
                        })
                            .map(function (fix) {
                            return _this._tsCodeFixActionToMonacoCodeAction(model, context, fix);
                        });
                        return [2 /*return*/, {
                                actions: actions,
                                dispose: function () { }
                            }];
                }
            });
        });
    };
    CodeActionAdaptor.prototype._tsCodeFixActionToMonacoCodeAction = function (model, context, codeFix) {
        var edits = [];
        for (var _i = 0, _a = codeFix.changes; _i < _a.length; _i++) {
            var change = _a[_i];
            for (var _b = 0, _c = change.textChanges; _b < _c.length; _b++) {
                var textChange = _c[_b];
                edits.push({
                    resource: model.uri,
                    edit: {
                        range: this._textSpanToRange(model, textChange.span),
                        text: textChange.newText
                    }
                });
            }
        }
        var action = {
            title: codeFix.description,
            edit: { edits: edits },
            diagnostics: context.markers,
            kind: 'quickfix'
        };
        return action;
    };
    return CodeActionAdaptor;
}(FormatHelper));

// --- rename ----
var RenameAdapter = /** @class */ (function (_super) {
    __extends(RenameAdapter, _super);
    function RenameAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RenameAdapter.prototype.provideRenameEdits = function (model, position, newName, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, fileName, offset, worker, renameInfo, renameLocations, edits, _i, renameLocations_1, renameLocation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = model.uri;
                        fileName = resource.toString();
                        offset = model.getOffsetAt(position);
                        return [4 /*yield*/, this._worker(resource)];
                    case 1:
                        worker = _a.sent();
                        return [4 /*yield*/, worker.getRenameInfo(fileName, offset, {
                                allowRenameOfImportPath: false
                            })];
                    case 2:
                        renameInfo = _a.sent();
                        if (renameInfo.canRename === false) {
                            // use explicit comparison so that the discriminated union gets resolved properly
                            return [2 /*return*/, {
                                    edits: [],
                                    rejectReason: renameInfo.localizedErrorMessage
                                }];
                        }
                        if (renameInfo.fileToRename !== undefined) {
                            throw new Error('Renaming files is not supported.');
                        }
                        return [4 /*yield*/, worker.findRenameLocations(fileName, offset, 
                            /*strings*/ false, 
                            /*comments*/ false, 
                            /*prefixAndSuffix*/ false)];
                    case 3:
                        renameLocations = _a.sent();
                        if (!renameLocations || model.isDisposed()) {
                            return [2 /*return*/];
                        }
                        edits = [];
                        for (_i = 0, renameLocations_1 = renameLocations; _i < renameLocations_1.length; _i++) {
                            renameLocation = renameLocations_1[_i];
                            edits.push({
                                resource: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_1__["Uri"].parse(renameLocation.fileName),
                                edit: {
                                    range: this._textSpanToRange(model, renameLocation.textSpan),
                                    text: newName
                                }
                            });
                        }
                        return [2 /*return*/, { edits: edits }];
                }
            });
        });
    };
    return RenameAdapter;
}(Adapter));



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/typescript/lib/lib.index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/typescript/lib/lib.index.js ***!
  \********************************************************************************/
/*! exports provided: libFileSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "libFileSet", function() { return libFileSet; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
//
// **NOTE**: Do not edit directly! This file is generated using `npm run import-typescript`
//
/** Contains all the lib files */
var libFileSet = {};
libFileSet['lib.d.ts'] = true;
libFileSet['lib.dom.d.ts'] = true;
libFileSet['lib.dom.iterable.d.ts'] = true;
libFileSet['lib.es2015.collection.d.ts'] = true;
libFileSet['lib.es2015.core.d.ts'] = true;
libFileSet['lib.es2015.d.ts'] = true;
libFileSet['lib.es2015.generator.d.ts'] = true;
libFileSet['lib.es2015.iterable.d.ts'] = true;
libFileSet['lib.es2015.promise.d.ts'] = true;
libFileSet['lib.es2015.proxy.d.ts'] = true;
libFileSet['lib.es2015.reflect.d.ts'] = true;
libFileSet['lib.es2015.symbol.d.ts'] = true;
libFileSet['lib.es2015.symbol.wellknown.d.ts'] = true;
libFileSet['lib.es2016.array.include.d.ts'] = true;
libFileSet['lib.es2016.d.ts'] = true;
libFileSet['lib.es2016.full.d.ts'] = true;
libFileSet['lib.es2017.d.ts'] = true;
libFileSet['lib.es2017.full.d.ts'] = true;
libFileSet['lib.es2017.intl.d.ts'] = true;
libFileSet['lib.es2017.object.d.ts'] = true;
libFileSet['lib.es2017.sharedmemory.d.ts'] = true;
libFileSet['lib.es2017.string.d.ts'] = true;
libFileSet['lib.es2017.typedarrays.d.ts'] = true;
libFileSet['lib.es2018.asyncgenerator.d.ts'] = true;
libFileSet['lib.es2018.asynciterable.d.ts'] = true;
libFileSet['lib.es2018.d.ts'] = true;
libFileSet['lib.es2018.full.d.ts'] = true;
libFileSet['lib.es2018.intl.d.ts'] = true;
libFileSet['lib.es2018.promise.d.ts'] = true;
libFileSet['lib.es2018.regexp.d.ts'] = true;
libFileSet['lib.es2019.array.d.ts'] = true;
libFileSet['lib.es2019.d.ts'] = true;
libFileSet['lib.es2019.full.d.ts'] = true;
libFileSet['lib.es2019.object.d.ts'] = true;
libFileSet['lib.es2019.string.d.ts'] = true;
libFileSet['lib.es2019.symbol.d.ts'] = true;
libFileSet['lib.es2020.bigint.d.ts'] = true;
libFileSet['lib.es2020.d.ts'] = true;
libFileSet['lib.es2020.full.d.ts'] = true;
libFileSet['lib.es2020.intl.d.ts'] = true;
libFileSet['lib.es2020.promise.d.ts'] = true;
libFileSet['lib.es2020.string.d.ts'] = true;
libFileSet['lib.es2020.symbol.wellknown.d.ts'] = true;
libFileSet['lib.es5.d.ts'] = true;
libFileSet['lib.es6.d.ts'] = true;
libFileSet['lib.esnext.d.ts'] = true;
libFileSet['lib.esnext.full.d.ts'] = true;
libFileSet['lib.esnext.intl.d.ts'] = true;
libFileSet['lib.esnext.promise.d.ts'] = true;
libFileSet['lib.esnext.string.d.ts'] = true;
libFileSet['lib.scripthost.d.ts'] = true;
libFileSet['lib.webworker.d.ts'] = true;
libFileSet['lib.webworker.importscripts.d.ts'] = true;


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js":
/*!*************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js ***!
  \*************************************************************************/
/*! exports provided: setupTypeScript, setupJavaScript, getJavaScriptWorker, getTypeScriptWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTypeScript", function() { return setupTypeScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupJavaScript", function() { return setupJavaScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJavaScriptWorker", function() { return getJavaScriptWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeScriptWorker", function() { return getTypeScriptWorker; });
/* harmony import */ var _workerManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workerManager.js */ "./node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js");
/* harmony import */ var _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languageFeatures.js */ "./node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js");
/* harmony import */ var _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fillers/monaco-editor-core.js */ "./node_modules/monaco-editor/esm/vs/language/typescript/fillers/monaco-editor-core.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




var javaScriptWorker;
var typeScriptWorker;
function setupTypeScript(defaults) {
    typeScriptWorker = setupMode(defaults, 'typescript');
}
function setupJavaScript(defaults) {
    javaScriptWorker = setupMode(defaults, 'javascript');
}
function getJavaScriptWorker() {
    return new Promise(function (resolve, reject) {
        if (!javaScriptWorker) {
            return reject('JavaScript not registered!');
        }
        resolve(javaScriptWorker);
    });
}
function getTypeScriptWorker() {
    return new Promise(function (resolve, reject) {
        if (!typeScriptWorker) {
            return reject('TypeScript not registered!');
        }
        resolve(typeScriptWorker);
    });
}
function setupMode(defaults, modeId) {
    var client = new _workerManager_js__WEBPACK_IMPORTED_MODULE_0__["WorkerManager"](modeId, defaults);
    var worker = function () {
        var uris = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            uris[_i] = arguments[_i];
        }
        return client.getLanguageServiceWorker.apply(client, uris);
    };
    var libFiles = new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["LibFiles"](worker);
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerCompletionItemProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["SuggestAdapter"](worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerSignatureHelpProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["SignatureHelpAdapter"](worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerHoverProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["QuickInfoAdapter"](worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerDocumentHighlightProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["OccurrencesAdapter"](worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerDefinitionProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DefinitionAdapter"](libFiles, worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerReferenceProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["ReferenceAdapter"](libFiles, worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerDocumentSymbolProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["OutlineAdapter"](worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerDocumentRangeFormattingEditProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["FormatAdapter"](worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerOnTypeFormattingEditProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["FormatOnTypeAdapter"](worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerCodeActionProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["CodeActionAdaptor"](worker));
    _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_2__["languages"].registerRenameProvider(modeId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["RenameAdapter"](worker));
    new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DiagnosticsAdapter"](libFiles, defaults, modeId, worker);
    return worker;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js ***!
  \********************************************************************************/
/*! exports provided: WorkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerManager", function() { return WorkerManager; });
/* harmony import */ var _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fillers/monaco-editor-core.js */ "./node_modules/monaco-editor/esm/vs/language/typescript/fillers/monaco-editor-core.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var WorkerManager = /** @class */ (function () {
    function WorkerManager(modeId, defaults) {
        var _this = this;
        this._modeId = modeId;
        this._defaults = defaults;
        this._worker = null;
        this._client = null;
        this._configChangeListener = this._defaults.onDidChange(function () { return _this._stopWorker(); });
        this._updateExtraLibsToken = 0;
        this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(function () {
            return _this._updateExtraLibs();
        });
    }
    WorkerManager.prototype._stopWorker = function () {
        if (this._worker) {
            this._worker.dispose();
            this._worker = null;
        }
        this._client = null;
    };
    WorkerManager.prototype.dispose = function () {
        this._configChangeListener.dispose();
        this._extraLibsChangeListener.dispose();
        this._stopWorker();
    };
    WorkerManager.prototype._updateExtraLibs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var myToken, proxy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._worker) {
                            return [2 /*return*/];
                        }
                        myToken = ++this._updateExtraLibsToken;
                        return [4 /*yield*/, this._worker.getProxy()];
                    case 1:
                        proxy = _a.sent();
                        if (this._updateExtraLibsToken !== myToken) {
                            // avoid multiple calls
                            return [2 /*return*/];
                        }
                        proxy.updateExtraLibs(this._defaults.getExtraLibs());
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkerManager.prototype._getClient = function () {
        var _this = this;
        if (!this._client) {
            this._worker = _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__["editor"].createWebWorker({
                // module that exports the create() method and returns a `TypeScriptWorker` instance
                moduleId: 'vs/language/typescript/tsWorker',
                label: this._modeId,
                keepIdleModels: true,
                // passed in to the create() method
                createData: {
                    compilerOptions: this._defaults.getCompilerOptions(),
                    extraLibs: this._defaults.getExtraLibs(),
                    customWorkerPath: this._defaults.workerOptions.customWorkerPath
                }
            });
            var p = this._worker.getProxy();
            if (this._defaults.getEagerModelSync()) {
                p = p.then(function (worker) {
                    if (_this._worker) {
                        return _this._worker.withSyncedResources(_fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__["editor"]
                            .getModels()
                            .filter(function (model) { return model.getModeId() === _this._modeId; })
                            .map(function (model) { return model.uri; }));
                    }
                    return worker;
                });
            }
            this._client = p;
        }
        return this._client;
    };
    WorkerManager.prototype.getLanguageServiceWorker = function () {
        var _this = this;
        var resources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            resources[_i] = arguments[_i];
        }
        var _client;
        return this._getClient()
            .then(function (client) {
            _client = client;
        })
            .then(function (_) {
            if (_this._worker) {
                return _this._worker.withSyncedResources(resources);
            }
        })
            .then(function (_) { return _client; });
    };
    return WorkerManager;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvdHlwZXNjcmlwdC9sYW5ndWFnZUZlYXR1cmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9sYW5ndWFnZS90eXBlc2NyaXB0L2xpYi9saWIuaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2xhbmd1YWdlL3R5cGVzY3JpcHQvdHNNb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9sYW5ndWFnZS90eXBlc2NyaXB0L3dvcmtlck1hbmFnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ2IsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLDhFQUE4RTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUks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NEMsRUFBRTtBQUNwRyxtREFBbUQsa0JBQWtCLEVBQUU7QUFDdkU7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsZ0NBQWdDLGdCQUFnQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQSxDQUFDO0FBQ3dCIiwiZmlsZSI6IjUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGxpYkZpbGVTZXQgfSBmcm9tICcuL2xpYi9saWIuaW5kZXguanMnO1xuaW1wb3J0IHsgZWRpdG9yLCBsYW5ndWFnZXMsIFVyaSwgUmFuZ2UsIE1hcmtlclRhZywgTWFya2VyU2V2ZXJpdHkgfSBmcm9tICcuL2ZpbGxlcnMvbW9uYWNvLWVkaXRvci1jb3JlLmpzJztcbi8vI3JlZ2lvbiB1dGlscyBjb3BpZWQgZnJvbSB0eXBlc2NyaXB0IHRvIHByZXZlbnQgbG9hZGluZyB0aGUgZW50aXJlIHR5cGVzY3JpcHRTZXJ2aWNlcyAtLS1cbnZhciBJbmRlbnRTdHlsZTtcbihmdW5jdGlvbiAoSW5kZW50U3R5bGUpIHtcbiAgICBJbmRlbnRTdHlsZVtJbmRlbnRTdHlsZVtcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xuICAgIEluZGVudFN0eWxlW0luZGVudFN0eWxlW1wiQmxvY2tcIl0gPSAxXSA9IFwiQmxvY2tcIjtcbiAgICBJbmRlbnRTdHlsZVtJbmRlbnRTdHlsZVtcIlNtYXJ0XCJdID0gMl0gPSBcIlNtYXJ0XCI7XG59KShJbmRlbnRTdHlsZSB8fCAoSW5kZW50U3R5bGUgPSB7fSkpO1xuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW5EaWFnbm9zdGljTWVzc2FnZVRleHQoZGlhZywgbmV3TGluZSwgaW5kZW50KSB7XG4gICAgaWYgKGluZGVudCA9PT0gdm9pZCAwKSB7IGluZGVudCA9IDA7IH1cbiAgICBpZiAodHlwZW9mIGRpYWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBkaWFnO1xuICAgIH1cbiAgICBlbHNlIGlmIChkaWFnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgaWYgKGluZGVudCkge1xuICAgICAgICByZXN1bHQgKz0gbmV3TGluZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmRlbnQ7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICcgICc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0ICs9IGRpYWcubWVzc2FnZVRleHQ7XG4gICAgaW5kZW50Kys7XG4gICAgaWYgKGRpYWcubmV4dCkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gZGlhZy5uZXh0OyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGtpZCA9IF9hW19pXTtcbiAgICAgICAgICAgIHJlc3VsdCArPSBmbGF0dGVuRGlhZ25vc3RpY01lc3NhZ2VUZXh0KGtpZCwgbmV3TGluZSwgaW5kZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZGlzcGxheVBhcnRzVG9TdHJpbmcoZGlzcGxheVBhcnRzKSB7XG4gICAgaWYgKGRpc3BsYXlQYXJ0cykge1xuICAgICAgICByZXR1cm4gZGlzcGxheVBhcnRzLm1hcChmdW5jdGlvbiAoZGlzcGxheVBhcnQpIHsgcmV0dXJuIGRpc3BsYXlQYXJ0LnRleHQ7IH0pLmpvaW4oJycpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG59XG4vLyNlbmRyZWdpb25cbnZhciBBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFkYXB0ZXIoX3dvcmtlcikge1xuICAgICAgICB0aGlzLl93b3JrZXIgPSBfd29ya2VyO1xuICAgIH1cbiAgICAvLyBwcm90ZWN0ZWQgX3Bvc2l0aW9uVG9PZmZzZXQobW9kZWw6IGVkaXRvci5JVGV4dE1vZGVsLCBwb3NpdGlvbjogbW9uYWNvLklQb3NpdGlvbik6IG51bWJlciB7XG4gICAgLy8gXHRyZXR1cm4gbW9kZWwuZ2V0T2Zmc2V0QXQocG9zaXRpb24pO1xuICAgIC8vIH1cbiAgICAvLyBwcm90ZWN0ZWQgX29mZnNldFRvUG9zaXRpb24obW9kZWw6IGVkaXRvci5JVGV4dE1vZGVsLCBvZmZzZXQ6IG51bWJlcik6IG1vbmFjby5JUG9zaXRpb24ge1xuICAgIC8vIFx0cmV0dXJuIG1vZGVsLmdldFBvc2l0aW9uQXQob2Zmc2V0KTtcbiAgICAvLyB9XG4gICAgQWRhcHRlci5wcm90b3R5cGUuX3RleHRTcGFuVG9SYW5nZSA9IGZ1bmN0aW9uIChtb2RlbCwgc3Bhbikge1xuICAgICAgICB2YXIgcDEgPSBtb2RlbC5nZXRQb3NpdGlvbkF0KHNwYW4uc3RhcnQpO1xuICAgICAgICB2YXIgcDIgPSBtb2RlbC5nZXRQb3NpdGlvbkF0KHNwYW4uc3RhcnQgKyBzcGFuLmxlbmd0aCk7XG4gICAgICAgIHZhciBzdGFydExpbmVOdW1iZXIgPSBwMS5saW5lTnVtYmVyLCBzdGFydENvbHVtbiA9IHAxLmNvbHVtbjtcbiAgICAgICAgdmFyIGVuZExpbmVOdW1iZXIgPSBwMi5saW5lTnVtYmVyLCBlbmRDb2x1bW4gPSBwMi5jb2x1bW47XG4gICAgICAgIHJldHVybiB7IHN0YXJ0TGluZU51bWJlcjogc3RhcnRMaW5lTnVtYmVyLCBzdGFydENvbHVtbjogc3RhcnRDb2x1bW4sIGVuZExpbmVOdW1iZXI6IGVuZExpbmVOdW1iZXIsIGVuZENvbHVtbjogZW5kQ29sdW1uIH07XG4gICAgfTtcbiAgICByZXR1cm4gQWRhcHRlcjtcbn0oKSk7XG5leHBvcnQgeyBBZGFwdGVyIH07XG4vLyAtLS0gbGliIGZpbGVzXG52YXIgTGliRmlsZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGliRmlsZXMoX3dvcmtlcikge1xuICAgICAgICB0aGlzLl93b3JrZXIgPSBfd29ya2VyO1xuICAgICAgICB0aGlzLl9saWJGaWxlcyA9IHt9O1xuICAgICAgICB0aGlzLl9oYXNGZXRjaGVkTGliRmlsZXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZmV0Y2hMaWJGaWxlc1Byb21pc2UgPSBudWxsO1xuICAgIH1cbiAgICBMaWJGaWxlcy5wcm90b3R5cGUuaXNMaWJGaWxlID0gZnVuY3Rpb24gKHVyaSkge1xuICAgICAgICBpZiAoIXVyaSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1cmkucGF0aC5pbmRleE9mKCcvbGliLicpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gISFsaWJGaWxlU2V0W3VyaS5wYXRoLnNsaWNlKDEpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBMaWJGaWxlcy5wcm90b3R5cGUuZ2V0T3JDcmVhdGVNb2RlbCA9IGZ1bmN0aW9uICh1cmkpIHtcbiAgICAgICAgdmFyIG1vZGVsID0gZWRpdG9yLmdldE1vZGVsKHVyaSk7XG4gICAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzTGliRmlsZSh1cmkpICYmIHRoaXMuX2hhc0ZldGNoZWRMaWJGaWxlcykge1xuICAgICAgICAgICAgcmV0dXJuIGVkaXRvci5jcmVhdGVNb2RlbCh0aGlzLl9saWJGaWxlc1t1cmkucGF0aC5zbGljZSgxKV0sICdqYXZhc2NyaXB0JywgdXJpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIExpYkZpbGVzLnByb3RvdHlwZS5fY29udGFpbnNMaWJGaWxlID0gZnVuY3Rpb24gKHVyaXMpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB1cmlzXzEgPSB1cmlzOyBfaSA8IHVyaXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciB1cmkgPSB1cmlzXzFbX2ldO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNMaWJGaWxlKHVyaSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBMaWJGaWxlcy5wcm90b3R5cGUuZmV0Y2hMaWJGaWxlc0lmTmVjZXNzYXJ5ID0gZnVuY3Rpb24gKHVyaXMpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jb250YWluc0xpYkZpbGUodXJpcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBubyBsaWIgZmlsZXMgbmVjZXNzYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fZmV0Y2hMaWJGaWxlcygpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIExpYkZpbGVzLnByb3RvdHlwZS5fZmV0Y2hMaWJGaWxlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLl9mZXRjaExpYkZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgdGhpcy5fZmV0Y2hMaWJGaWxlc1Byb21pc2UgPSB0aGlzLl93b3JrZXIoKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh3KSB7IHJldHVybiB3LmdldExpYkZpbGVzKCk7IH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGxpYkZpbGVzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2hhc0ZldGNoZWRMaWJGaWxlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2xpYkZpbGVzID0gbGliRmlsZXM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZmV0Y2hMaWJGaWxlc1Byb21pc2U7XG4gICAgfTtcbiAgICByZXR1cm4gTGliRmlsZXM7XG59KCkpO1xuZXhwb3J0IHsgTGliRmlsZXMgfTtcbi8vIC0tLSBkaWFnbm9zdGljcyAtLS0gLS0tXG52YXIgRGlhZ25vc3RpY0NhdGVnb3J5O1xuKGZ1bmN0aW9uIChEaWFnbm9zdGljQ2F0ZWdvcnkpIHtcbiAgICBEaWFnbm9zdGljQ2F0ZWdvcnlbRGlhZ25vc3RpY0NhdGVnb3J5W1wiV2FybmluZ1wiXSA9IDBdID0gXCJXYXJuaW5nXCI7XG4gICAgRGlhZ25vc3RpY0NhdGVnb3J5W0RpYWdub3N0aWNDYXRlZ29yeVtcIkVycm9yXCJdID0gMV0gPSBcIkVycm9yXCI7XG4gICAgRGlhZ25vc3RpY0NhdGVnb3J5W0RpYWdub3N0aWNDYXRlZ29yeVtcIlN1Z2dlc3Rpb25cIl0gPSAyXSA9IFwiU3VnZ2VzdGlvblwiO1xuICAgIERpYWdub3N0aWNDYXRlZ29yeVtEaWFnbm9zdGljQ2F0ZWdvcnlbXCJNZXNzYWdlXCJdID0gM10gPSBcIk1lc3NhZ2VcIjtcbn0pKERpYWdub3N0aWNDYXRlZ29yeSB8fCAoRGlhZ25vc3RpY0NhdGVnb3J5ID0ge30pKTtcbnZhciBEaWFnbm9zdGljc0FkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERpYWdub3N0aWNzQWRhcHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEaWFnbm9zdGljc0FkYXB0ZXIoX2xpYkZpbGVzLCBfZGVmYXVsdHMsIF9zZWxlY3Rvciwgd29ya2VyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHdvcmtlcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX2xpYkZpbGVzID0gX2xpYkZpbGVzO1xuICAgICAgICBfdGhpcy5fZGVmYXVsdHMgPSBfZGVmYXVsdHM7XG4gICAgICAgIF90aGlzLl9zZWxlY3RvciA9IF9zZWxlY3RvcjtcbiAgICAgICAgX3RoaXMuX2Rpc3Bvc2FibGVzID0gW107XG4gICAgICAgIF90aGlzLl9saXN0ZW5lciA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBvbk1vZGVsQWRkID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgICAgICBpZiAobW9kZWwuZ2V0TW9kZUlkKCkgIT09IF9zZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoYW5kbGU7XG4gICAgICAgICAgICB2YXIgY2hhbmdlU3Vic2NyaXB0aW9uID0gbW9kZWwub25EaWRDaGFuZ2VDb250ZW50KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBoYW5kbGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9kb1ZhbGlkYXRlKG1vZGVsKTsgfSwgNTAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVyW21vZGVsLnVyaS50b1N0cmluZygpXSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfdGhpcy5fZG9WYWxpZGF0ZShtb2RlbCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbk1vZGVsUmVtb3ZlZCA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgZWRpdG9yLnNldE1vZGVsTWFya2Vycyhtb2RlbCwgX3RoaXMuX3NlbGVjdG9yLCBbXSk7XG4gICAgICAgICAgICB2YXIga2V5ID0gbW9kZWwudXJpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAoX3RoaXMuX2xpc3RlbmVyW2tleV0pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fbGlzdGVuZXJba2V5XS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzLl9saXN0ZW5lcltrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5fZGlzcG9zYWJsZXMucHVzaChlZGl0b3Iub25EaWRDcmVhdGVNb2RlbChvbk1vZGVsQWRkKSk7XG4gICAgICAgIF90aGlzLl9kaXNwb3NhYmxlcy5wdXNoKGVkaXRvci5vbldpbGxEaXNwb3NlTW9kZWwob25Nb2RlbFJlbW92ZWQpKTtcbiAgICAgICAgX3RoaXMuX2Rpc3Bvc2FibGVzLnB1c2goZWRpdG9yLm9uRGlkQ2hhbmdlTW9kZWxMYW5ndWFnZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIG9uTW9kZWxSZW1vdmVkKGV2ZW50Lm1vZGVsKTtcbiAgICAgICAgICAgIG9uTW9kZWxBZGQoZXZlbnQubW9kZWwpO1xuICAgICAgICB9KSk7XG4gICAgICAgIF90aGlzLl9kaXNwb3NhYmxlcy5wdXNoKHtcbiAgICAgICAgICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gZWRpdG9yLmdldE1vZGVscygpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9kZWwgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgICAgIG9uTW9kZWxSZW1vdmVkKG1vZGVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcmVjb21wdXRlRGlhZ29zdGljcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHJlZG8gZGlhZ25vc3RpY3Mgd2hlbiBvcHRpb25zIGNoYW5nZVxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IGVkaXRvci5nZXRNb2RlbHMoKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbW9kZWwgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgb25Nb2RlbFJlbW92ZWQobW9kZWwpO1xuICAgICAgICAgICAgICAgIG9uTW9kZWxBZGQobW9kZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5fZGlzcG9zYWJsZXMucHVzaChfdGhpcy5fZGVmYXVsdHMub25EaWRDaGFuZ2UocmVjb21wdXRlRGlhZ29zdGljcykpO1xuICAgICAgICBfdGhpcy5fZGlzcG9zYWJsZXMucHVzaChfdGhpcy5fZGVmYXVsdHMub25EaWRFeHRyYUxpYnNDaGFuZ2UocmVjb21wdXRlRGlhZ29zdGljcykpO1xuICAgICAgICBlZGl0b3IuZ2V0TW9kZWxzKCkuZm9yRWFjaChvbk1vZGVsQWRkKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBEaWFnbm9zdGljc0FkYXB0ZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2FibGVzLmZvckVhY2goZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgJiYgZC5kaXNwb3NlKCk7IH0pO1xuICAgICAgICB0aGlzLl9kaXNwb3NhYmxlcyA9IFtdO1xuICAgIH07XG4gICAgRGlhZ25vc3RpY3NBZGFwdGVyLnByb3RvdHlwZS5fZG9WYWxpZGF0ZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd29ya2VyLCBwcm9taXNlcywgX2EsIG5vU3ludGF4VmFsaWRhdGlvbiwgbm9TZW1hbnRpY1ZhbGlkYXRpb24sIG5vU3VnZ2VzdGlvbkRpYWdub3N0aWNzLCBhbGxEaWFnbm9zdGljcywgZGlhZ25vc3RpY3MsIHJlbGF0ZWRVcmlzO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fd29ya2VyKG1vZGVsLnVyaSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwuaXNEaXNwb3NlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbW9kZWwgd2FzIGRpc3Bvc2VkIGluIHRoZSBtZWFudGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXMuX2RlZmF1bHRzLmdldERpYWdub3N0aWNzT3B0aW9ucygpLCBub1N5bnRheFZhbGlkYXRpb24gPSBfYS5ub1N5bnRheFZhbGlkYXRpb24sIG5vU2VtYW50aWNWYWxpZGF0aW9uID0gX2Eubm9TZW1hbnRpY1ZhbGlkYXRpb24sIG5vU3VnZ2VzdGlvbkRpYWdub3N0aWNzID0gX2Eubm9TdWdnZXN0aW9uRGlhZ25vc3RpY3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5vU3ludGF4VmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2god29ya2VyLmdldFN5bnRhY3RpY0RpYWdub3N0aWNzKG1vZGVsLnVyaS50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5vU2VtYW50aWNWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh3b3JrZXIuZ2V0U2VtYW50aWNEaWFnbm9zdGljcyhtb2RlbC51cmkudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFub1N1Z2dlc3Rpb25EaWFnbm9zdGljcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2god29ya2VyLmdldFN1Z2dlc3Rpb25EaWFnbm9zdGljcyhtb2RlbC51cmkudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5hbGwocHJvbWlzZXMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsRGlhZ25vc3RpY3MgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFsbERpYWdub3N0aWNzIHx8IG1vZGVsLmlzRGlzcG9zZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1vZGVsIHdhcyBkaXNwb3NlZCBpbiB0aGUgbWVhbnRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFnbm9zdGljcyA9IGFsbERpYWdub3N0aWNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAocCwgYykgeyByZXR1cm4gYy5jb25jYXQocCk7IH0sIFtdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF90aGlzLl9kZWZhdWx0cy5nZXREaWFnbm9zdGljc09wdGlvbnMoKS5kaWFnbm9zdGljQ29kZXNUb0lnbm9yZSB8fCBbXSkuaW5kZXhPZihkLmNvZGUpID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlZFVyaXMgPSBkaWFnbm9zdGljc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQucmVsYXRlZEluZm9ybWF0aW9uIHx8IFtdOyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHAsIGMpIHsgcmV0dXJuIGMuY29uY2F0KHApOyB9LCBbXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyZWxhdGVkSW5mb3JtYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVsYXRlZEluZm9ybWF0aW9uLmZpbGUgPyBVcmkucGFyc2UocmVsYXRlZEluZm9ybWF0aW9uLmZpbGUuZmlsZU5hbWUpIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fbGliRmlsZXMuZmV0Y2hMaWJGaWxlc0lmTmVjZXNzYXJ5KHJlbGF0ZWRVcmlzKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5pc0Rpc3Bvc2VkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtb2RlbCB3YXMgZGlzcG9zZWQgaW4gdGhlIG1lYW50aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yLnNldE1vZGVsTWFya2Vycyhtb2RlbCwgdGhpcy5fc2VsZWN0b3IsIGRpYWdub3N0aWNzLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gX3RoaXMuX2NvbnZlcnREaWFnbm9zdGljcyhtb2RlbCwgZCk7IH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEaWFnbm9zdGljc0FkYXB0ZXIucHJvdG90eXBlLl9jb252ZXJ0RGlhZ25vc3RpY3MgPSBmdW5jdGlvbiAobW9kZWwsIGRpYWcpIHtcbiAgICAgICAgdmFyIGRpYWdTdGFydCA9IGRpYWcuc3RhcnQgfHwgMDtcbiAgICAgICAgdmFyIGRpYWdMZW5ndGggPSBkaWFnLmxlbmd0aCB8fCAxO1xuICAgICAgICB2YXIgX2EgPSBtb2RlbC5nZXRQb3NpdGlvbkF0KGRpYWdTdGFydCksIHN0YXJ0TGluZU51bWJlciA9IF9hLmxpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uID0gX2EuY29sdW1uO1xuICAgICAgICB2YXIgX2IgPSBtb2RlbC5nZXRQb3NpdGlvbkF0KGRpYWdTdGFydCArIGRpYWdMZW5ndGgpLCBlbmRMaW5lTnVtYmVyID0gX2IubGluZU51bWJlciwgZW5kQ29sdW1uID0gX2IuY29sdW1uO1xuICAgICAgICB2YXIgdGFncyA9IFtdO1xuICAgICAgICBpZiAoZGlhZy5yZXBvcnRzVW5uZWNlc3NhcnkpIHtcbiAgICAgICAgICAgIHRhZ3MucHVzaChNYXJrZXJUYWcuVW5uZWNlc3NhcnkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaWFnLnJlcG9ydHNEZXByZWNhdGVkKSB7XG4gICAgICAgICAgICB0YWdzLnB1c2goTWFya2VyVGFnLkRlcHJlY2F0ZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXZlcml0eTogdGhpcy5fdHNEaWFnbm9zdGljQ2F0ZWdvcnlUb01hcmtlclNldmVyaXR5KGRpYWcuY2F0ZWdvcnkpLFxuICAgICAgICAgICAgc3RhcnRMaW5lTnVtYmVyOiBzdGFydExpbmVOdW1iZXIsXG4gICAgICAgICAgICBzdGFydENvbHVtbjogc3RhcnRDb2x1bW4sXG4gICAgICAgICAgICBlbmRMaW5lTnVtYmVyOiBlbmRMaW5lTnVtYmVyLFxuICAgICAgICAgICAgZW5kQ29sdW1uOiBlbmRDb2x1bW4sXG4gICAgICAgICAgICBtZXNzYWdlOiBmbGF0dGVuRGlhZ25vc3RpY01lc3NhZ2VUZXh0KGRpYWcubWVzc2FnZVRleHQsICdcXG4nKSxcbiAgICAgICAgICAgIGNvZGU6IGRpYWcuY29kZS50b1N0cmluZygpLFxuICAgICAgICAgICAgdGFnczogdGFncyxcbiAgICAgICAgICAgIHJlbGF0ZWRJbmZvcm1hdGlvbjogdGhpcy5fY29udmVydFJlbGF0ZWRJbmZvcm1hdGlvbihtb2RlbCwgZGlhZy5yZWxhdGVkSW5mb3JtYXRpb24pXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBEaWFnbm9zdGljc0FkYXB0ZXIucHJvdG90eXBlLl9jb252ZXJ0UmVsYXRlZEluZm9ybWF0aW9uID0gZnVuY3Rpb24gKG1vZGVsLCByZWxhdGVkSW5mb3JtYXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFyZWxhdGVkSW5mb3JtYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIHJlbGF0ZWRJbmZvcm1hdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgICAgICB2YXIgcmVsYXRlZFJlc291cmNlID0gbW9kZWw7XG4gICAgICAgICAgICBpZiAoaW5mby5maWxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlbGF0ZWRSZXNvdXJjZVVyaSA9IFVyaS5wYXJzZShpbmZvLmZpbGUuZmlsZU5hbWUpO1xuICAgICAgICAgICAgICAgIHJlbGF0ZWRSZXNvdXJjZSA9IF90aGlzLl9saWJGaWxlcy5nZXRPckNyZWF0ZU1vZGVsKHJlbGF0ZWRSZXNvdXJjZVVyaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJlbGF0ZWRSZXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpbmZvU3RhcnQgPSBpbmZvLnN0YXJ0IHx8IDA7XG4gICAgICAgICAgICB2YXIgaW5mb0xlbmd0aCA9IGluZm8ubGVuZ3RoIHx8IDE7XG4gICAgICAgICAgICB2YXIgX2EgPSByZWxhdGVkUmVzb3VyY2UuZ2V0UG9zaXRpb25BdChpbmZvU3RhcnQpLCBzdGFydExpbmVOdW1iZXIgPSBfYS5saW5lTnVtYmVyLCBzdGFydENvbHVtbiA9IF9hLmNvbHVtbjtcbiAgICAgICAgICAgIHZhciBfYiA9IHJlbGF0ZWRSZXNvdXJjZS5nZXRQb3NpdGlvbkF0KGluZm9TdGFydCArIGluZm9MZW5ndGgpLCBlbmRMaW5lTnVtYmVyID0gX2IubGluZU51bWJlciwgZW5kQ29sdW1uID0gX2IuY29sdW1uO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIHJlc291cmNlOiByZWxhdGVkUmVzb3VyY2UudXJpLFxuICAgICAgICAgICAgICAgIHN0YXJ0TGluZU51bWJlcjogc3RhcnRMaW5lTnVtYmVyLFxuICAgICAgICAgICAgICAgIHN0YXJ0Q29sdW1uOiBzdGFydENvbHVtbixcbiAgICAgICAgICAgICAgICBlbmRMaW5lTnVtYmVyOiBlbmRMaW5lTnVtYmVyLFxuICAgICAgICAgICAgICAgIGVuZENvbHVtbjogZW5kQ29sdW1uLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGZsYXR0ZW5EaWFnbm9zdGljTWVzc2FnZVRleHQoaW5mby5tZXNzYWdlVGV4dCwgJ1xcbicpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBEaWFnbm9zdGljc0FkYXB0ZXIucHJvdG90eXBlLl90c0RpYWdub3N0aWNDYXRlZ29yeVRvTWFya2VyU2V2ZXJpdHkgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcbiAgICAgICAgc3dpdGNoIChjYXRlZ29yeSkge1xuICAgICAgICAgICAgY2FzZSBEaWFnbm9zdGljQ2F0ZWdvcnkuRXJyb3I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtlclNldmVyaXR5LkVycm9yO1xuICAgICAgICAgICAgY2FzZSBEaWFnbm9zdGljQ2F0ZWdvcnkuTWVzc2FnZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gTWFya2VyU2V2ZXJpdHkuSW5mbztcbiAgICAgICAgICAgIGNhc2UgRGlhZ25vc3RpY0NhdGVnb3J5Lldhcm5pbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hcmtlclNldmVyaXR5Lldhcm5pbmc7XG4gICAgICAgICAgICBjYXNlIERpYWdub3N0aWNDYXRlZ29yeS5TdWdnZXN0aW9uOlxuICAgICAgICAgICAgICAgIHJldHVybiBNYXJrZXJTZXZlcml0eS5IaW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXJrZXJTZXZlcml0eS5JbmZvO1xuICAgIH07XG4gICAgcmV0dXJuIERpYWdub3N0aWNzQWRhcHRlcjtcbn0oQWRhcHRlcikpO1xuZXhwb3J0IHsgRGlhZ25vc3RpY3NBZGFwdGVyIH07XG52YXIgU3VnZ2VzdEFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN1Z2dlc3RBZGFwdGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1Z2dlc3RBZGFwdGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdWdnZXN0QWRhcHRlci5wcm90b3R5cGUsIFwidHJpZ2dlckNoYXJhY3RlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBbJy4nXTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFN1Z2dlc3RBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlQ29tcGxldGlvbkl0ZW1zID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgX2NvbnRleHQsIHRva2VuKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3b3JkSW5mbywgd29yZFJhbmdlLCByZXNvdXJjZSwgb2Zmc2V0LCB3b3JrZXIsIGluZm8sIHN1Z2dlc3Rpb25zO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgd29yZEluZm8gPSBtb2RlbC5nZXRXb3JkVW50aWxQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JkUmFuZ2UgPSBuZXcgUmFuZ2UocG9zaXRpb24ubGluZU51bWJlciwgd29yZEluZm8uc3RhcnRDb2x1bW4sIHBvc2l0aW9uLmxpbmVOdW1iZXIsIHdvcmRJbmZvLmVuZENvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IG1vZGVsLmdldE9mZnNldEF0KHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX3dvcmtlcihyZXNvdXJjZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB3b3JrZXIuZ2V0Q29tcGxldGlvbnNBdFBvc2l0aW9uKHJlc291cmNlLnRvU3RyaW5nKCksIG9mZnNldCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmZvIHx8IG1vZGVsLmlzRGlzcG9zZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zID0gaW5mby5lbnRyaWVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gd29yZFJhbmdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5yZXBsYWNlbWVudFNwYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAxID0gbW9kZWwuZ2V0UG9zaXRpb25BdChlbnRyeS5yZXBsYWNlbWVudFNwYW4uc3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcDIgPSBtb2RlbC5nZXRQb3NpdGlvbkF0KGVudHJ5LnJlcGxhY2VtZW50U3Bhbi5zdGFydCArIGVudHJ5LnJlcGxhY2VtZW50U3Bhbi5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZSA9IG5ldyBSYW5nZShwMS5saW5lTnVtYmVyLCBwMS5jb2x1bW4sIHAyLmxpbmVOdW1iZXIsIHAyLmNvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YWdzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgoX2EgPSBlbnRyeS5raW5kTW9kaWZpZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5kZXhPZignZGVwcmVjYXRlZCcpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncy5wdXNoKGxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbVRhZy5EZXByZWNhdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiByZXNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHJhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZW50cnkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0VGV4dDogZW50cnkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydFRleHQ6IGVudHJ5LnNvcnRUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiBTdWdnZXN0QWRhcHRlci5jb252ZXJ0S2luZChlbnRyeS5raW5kKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnczogdGFnc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBzdWdnZXN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1Z2dlc3RBZGFwdGVyLnByb3RvdHlwZS5yZXNvbHZlQ29tcGxldGlvbkl0ZW0gPSBmdW5jdGlvbiAoaXRlbSwgdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG15SXRlbSwgcmVzb3VyY2UsIHBvc2l0aW9uLCBvZmZzZXQsIHdvcmtlciwgZGV0YWlscztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG15SXRlbSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSA9IG15SXRlbS51cmk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IG15SXRlbS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IG15SXRlbS5vZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl93b3JrZXIocmVzb3VyY2UpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd29ya2VyLmdldENvbXBsZXRpb25FbnRyeURldGFpbHMocmVzb3VyY2UudG9TdHJpbmcoKSwgb2Zmc2V0LCBteUl0ZW0ubGFiZWwpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlscyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGV0YWlscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBteUl0ZW1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiByZXNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZGV0YWlscy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiBTdWdnZXN0QWRhcHRlci5jb252ZXJ0S2luZChkZXRhaWxzLmtpbmQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IGRpc3BsYXlQYXJ0c1RvU3RyaW5nKGRldGFpbHMuZGlzcGxheVBhcnRzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFN1Z2dlc3RBZGFwdGVyLmNyZWF0ZURvY3VtZW50YXRpb25TdHJpbmcoZGV0YWlscylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1Z2dlc3RBZGFwdGVyLmNvbnZlcnRLaW5kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgICAgICBjYXNlIEtpbmQucHJpbWl0aXZlVHlwZTpcbiAgICAgICAgICAgIGNhc2UgS2luZC5rZXl3b3JkOlxuICAgICAgICAgICAgICAgIHJldHVybiBsYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLktleXdvcmQ7XG4gICAgICAgICAgICBjYXNlIEtpbmQudmFyaWFibGU6XG4gICAgICAgICAgICBjYXNlIEtpbmQubG9jYWxWYXJpYWJsZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5WYXJpYWJsZTtcbiAgICAgICAgICAgIGNhc2UgS2luZC5tZW1iZXJWYXJpYWJsZTpcbiAgICAgICAgICAgIGNhc2UgS2luZC5tZW1iZXJHZXRBY2Nlc3NvcjpcbiAgICAgICAgICAgIGNhc2UgS2luZC5tZW1iZXJTZXRBY2Nlc3NvcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5GaWVsZDtcbiAgICAgICAgICAgIGNhc2UgS2luZC5mdW5jdGlvbjpcbiAgICAgICAgICAgIGNhc2UgS2luZC5tZW1iZXJGdW5jdGlvbjpcbiAgICAgICAgICAgIGNhc2UgS2luZC5jb25zdHJ1Y3RTaWduYXR1cmU6XG4gICAgICAgICAgICBjYXNlIEtpbmQuY2FsbFNpZ25hdHVyZTpcbiAgICAgICAgICAgIGNhc2UgS2luZC5pbmRleFNpZ25hdHVyZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5GdW5jdGlvbjtcbiAgICAgICAgICAgIGNhc2UgS2luZC5lbnVtOlxuICAgICAgICAgICAgICAgIHJldHVybiBsYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLkVudW07XG4gICAgICAgICAgICBjYXNlIEtpbmQubW9kdWxlOlxuICAgICAgICAgICAgICAgIHJldHVybiBsYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLk1vZHVsZTtcbiAgICAgICAgICAgIGNhc2UgS2luZC5jbGFzczpcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5DbGFzcztcbiAgICAgICAgICAgIGNhc2UgS2luZC5pbnRlcmZhY2U6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuSW50ZXJmYWNlO1xuICAgICAgICAgICAgY2FzZSBLaW5kLndhcm5pbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQuRmlsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5Qcm9wZXJ0eTtcbiAgICB9O1xuICAgIFN1Z2dlc3RBZGFwdGVyLmNyZWF0ZURvY3VtZW50YXRpb25TdHJpbmcgPSBmdW5jdGlvbiAoZGV0YWlscykge1xuICAgICAgICB2YXIgZG9jdW1lbnRhdGlvblN0cmluZyA9IGRpc3BsYXlQYXJ0c1RvU3RyaW5nKGRldGFpbHMuZG9jdW1lbnRhdGlvbik7XG4gICAgICAgIGlmIChkZXRhaWxzLnRhZ3MpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBkZXRhaWxzLnRhZ3M7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhZyA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudGF0aW9uU3RyaW5nICs9IFwiXFxuXFxuXCIgKyB0YWdUb1N0cmluZyh0YWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkb2N1bWVudGF0aW9uU3RyaW5nO1xuICAgIH07XG4gICAgcmV0dXJuIFN1Z2dlc3RBZGFwdGVyO1xufShBZGFwdGVyKSk7XG5leHBvcnQgeyBTdWdnZXN0QWRhcHRlciB9O1xuZnVuY3Rpb24gdGFnVG9TdHJpbmcodGFnKSB7XG4gICAgdmFyIHRhZ0xhYmVsID0gXCIqQFwiICsgdGFnLm5hbWUgKyBcIipcIjtcbiAgICBpZiAodGFnLm5hbWUgPT09ICdwYXJhbScgJiYgdGFnLnRleHQpIHtcbiAgICAgICAgdmFyIF9hID0gdGFnLnRleHQuc3BsaXQoJyAnKSwgcGFyYW1OYW1lID0gX2FbMF0sIHJlc3QgPSBfYS5zbGljZSgxKTtcbiAgICAgICAgdGFnTGFiZWwgKz0gXCJgXCIgKyBwYXJhbU5hbWUgKyBcImBcIjtcbiAgICAgICAgaWYgKHJlc3QubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHRhZ0xhYmVsICs9IFwiIFxcdTIwMTQgXCIgKyByZXN0LmpvaW4oJyAnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGFnLnRleHQpIHtcbiAgICAgICAgdGFnTGFiZWwgKz0gXCIgXFx1MjAxNCBcIiArIHRhZy50ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdGFnTGFiZWw7XG59XG52YXIgU2lnbmF0dXJlSGVscEFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNpZ25hdHVyZUhlbHBBZGFwdGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNpZ25hdHVyZUhlbHBBZGFwdGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2lnbmF0dXJlSGVscFRyaWdnZXJDaGFyYWN0ZXJzID0gWycoJywgJywnXTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTaWduYXR1cmVIZWxwQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZVNpZ25hdHVyZUhlbHAgPSBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uLCB0b2tlbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UsIG9mZnNldCwgd29ya2VyLCBpbmZvLCByZXQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IG1vZGVsLmdldE9mZnNldEF0KHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX3dvcmtlcihyZXNvdXJjZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB3b3JrZXIuZ2V0U2lnbmF0dXJlSGVscEl0ZW1zKHJlc291cmNlLnRvU3RyaW5nKCksIG9mZnNldCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmZvIHx8IG1vZGVsLmlzRGlzcG9zZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVTaWduYXR1cmU6IGluZm8uc2VsZWN0ZWRJdGVtSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFyYW1ldGVyOiBpbmZvLmFyZ3VtZW50SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlczogW11cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2lnbmF0dXJlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnM6IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmUuZG9jdW1lbnRhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRpc3BsYXlQYXJ0c1RvU3RyaW5nKGl0ZW0uZG9jdW1lbnRhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS5sYWJlbCArPSBkaXNwbGF5UGFydHNUb1N0cmluZyhpdGVtLnByZWZpeERpc3BsYXlQYXJ0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXJhbWV0ZXJzLmZvckVhY2goZnVuY3Rpb24gKHAsIGksIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhYmVsID0gZGlzcGxheVBhcnRzVG9TdHJpbmcocC5kaXNwbGF5UGFydHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1ldGVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkaXNwbGF5UGFydHNUb1N0cmluZyhwLmRvY3VtZW50YXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS5sYWJlbCArPSBsYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlLnBhcmFtZXRlcnMucHVzaChwYXJhbWV0ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IGEubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlLmxhYmVsICs9IGRpc3BsYXlQYXJ0c1RvU3RyaW5nKGl0ZW0uc2VwYXJhdG9yRGlzcGxheVBhcnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZS5sYWJlbCArPSBkaXNwbGF5UGFydHNUb1N0cmluZyhpdGVtLnN1ZmZpeERpc3BsYXlQYXJ0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnNpZ25hdHVyZXMucHVzaChzaWduYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gU2lnbmF0dXJlSGVscEFkYXB0ZXI7XG59KEFkYXB0ZXIpKTtcbmV4cG9ydCB7IFNpZ25hdHVyZUhlbHBBZGFwdGVyIH07XG4vLyAtLS0gaG92ZXIgLS0tLS0tXG52YXIgUXVpY2tJbmZvQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUXVpY2tJbmZvQWRhcHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRdWlja0luZm9BZGFwdGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFF1aWNrSW5mb0FkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVIb3ZlciA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIHRva2VuKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNvdXJjZSwgb2Zmc2V0LCB3b3JrZXIsIGluZm8sIGRvY3VtZW50YXRpb24sIHRhZ3MsIGNvbnRlbnRzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBtb2RlbC5nZXRPZmZzZXRBdChwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl93b3JrZXIocmVzb3VyY2UpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd29ya2VyLmdldFF1aWNrSW5mb0F0UG9zaXRpb24ocmVzb3VyY2UudG9TdHJpbmcoKSwgb2Zmc2V0KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm8gPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWluZm8gfHwgbW9kZWwuaXNEaXNwb3NlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRhdGlvbiA9IGRpc3BsYXlQYXJ0c1RvU3RyaW5nKGluZm8uZG9jdW1lbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdzID0gaW5mby50YWdzID8gaW5mby50YWdzLm1hcChmdW5jdGlvbiAodGFnKSB7IHJldHVybiB0YWdUb1N0cmluZyh0YWcpOyB9KS5qb2luKCcgIFxcblxcbicpIDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50cyA9IGRpc3BsYXlQYXJ0c1RvU3RyaW5nKGluZm8uZGlzcGxheVBhcnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiB0aGlzLl90ZXh0U3BhblRvUmFuZ2UobW9kZWwsIGluZm8udGV4dFNwYW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnYGBgdHlwZXNjcmlwdFxcbicgKyBjb250ZW50cyArICdcXG5gYGBcXG4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkb2N1bWVudGF0aW9uICsgKHRhZ3MgPyAnXFxuXFxuJyArIHRhZ3MgOiAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBRdWlja0luZm9BZGFwdGVyO1xufShBZGFwdGVyKSk7XG5leHBvcnQgeyBRdWlja0luZm9BZGFwdGVyIH07XG4vLyAtLS0gb2NjdXJyZW5jZXMgLS0tLS0tXG52YXIgT2NjdXJyZW5jZXNBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPY2N1cnJlbmNlc0FkYXB0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT2NjdXJyZW5jZXNBZGFwdGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9jY3VycmVuY2VzQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZURvY3VtZW50SGlnaGxpZ2h0cyA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIHRva2VuKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNvdXJjZSwgb2Zmc2V0LCB3b3JrZXIsIGVudHJpZXM7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBtb2RlbC5nZXRPZmZzZXRBdChwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl93b3JrZXIocmVzb3VyY2UpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd29ya2VyLmdldE9jY3VycmVuY2VzQXRQb3NpdGlvbihyZXNvdXJjZS50b1N0cmluZygpLCBvZmZzZXQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cmllcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZW50cmllcyB8fCBtb2RlbC5pc0Rpc3Bvc2VkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZW50cmllcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogX3RoaXMuX3RleHRTcGFuVG9SYW5nZShtb2RlbCwgZW50cnkudGV4dFNwYW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogZW50cnkuaXNXcml0ZUFjY2Vzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbGFuZ3VhZ2VzLkRvY3VtZW50SGlnaGxpZ2h0S2luZC5Xcml0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbGFuZ3VhZ2VzLkRvY3VtZW50SGlnaGxpZ2h0S2luZC5UZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBPY2N1cnJlbmNlc0FkYXB0ZXI7XG59KEFkYXB0ZXIpKTtcbmV4cG9ydCB7IE9jY3VycmVuY2VzQWRhcHRlciB9O1xuLy8gLS0tIGRlZmluaXRpb24gLS0tLS0tXG52YXIgRGVmaW5pdGlvbkFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERlZmluaXRpb25BZGFwdGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERlZmluaXRpb25BZGFwdGVyKF9saWJGaWxlcywgd29ya2VyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHdvcmtlcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX2xpYkZpbGVzID0gX2xpYkZpbGVzO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIERlZmluaXRpb25BZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlRGVmaW5pdGlvbiA9IGZ1bmN0aW9uIChtb2RlbCwgcG9zaXRpb24sIHRva2VuKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNvdXJjZSwgb2Zmc2V0LCB3b3JrZXIsIGVudHJpZXMsIHJlc3VsdCwgX2ksIGVudHJpZXNfMSwgZW50cnksIHVyaSwgcmVmTW9kZWw7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IG1vZGVsLmdldE9mZnNldEF0KHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX3dvcmtlcihyZXNvdXJjZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB3b3JrZXIuZ2V0RGVmaW5pdGlvbkF0UG9zaXRpb24ocmVzb3VyY2UudG9TdHJpbmcoKSwgb2Zmc2V0KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVudHJpZXMgfHwgbW9kZWwuaXNEaXNwb3NlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmV0Y2ggbGliIGZpbGVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fbGliRmlsZXMuZmV0Y2hMaWJGaWxlc0lmTmVjZXNzYXJ5KGVudHJpZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkgeyByZXR1cm4gVXJpLnBhcnNlKGVudHJ5LmZpbGVOYW1lKTsgfSkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmV0Y2ggbGliIGZpbGVzIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLmlzRGlzcG9zZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIGVudHJpZXNfMSA9IGVudHJpZXM7IF9pIDwgZW50cmllc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5ID0gZW50cmllc18xW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmkgPSBVcmkucGFyc2UoZW50cnkuZmlsZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZk1vZGVsID0gdGhpcy5fbGliRmlsZXMuZ2V0T3JDcmVhdGVNb2RlbCh1cmkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWZNb2RlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IHVyaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiB0aGlzLl90ZXh0U3BhblRvUmFuZ2UocmVmTW9kZWwsIGVudHJ5LnRleHRTcGFuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzdWx0XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRGVmaW5pdGlvbkFkYXB0ZXI7XG59KEFkYXB0ZXIpKTtcbmV4cG9ydCB7IERlZmluaXRpb25BZGFwdGVyIH07XG4vLyAtLS0gcmVmZXJlbmNlcyAtLS0tLS1cbnZhciBSZWZlcmVuY2VBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSZWZlcmVuY2VBZGFwdGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJlZmVyZW5jZUFkYXB0ZXIoX2xpYkZpbGVzLCB3b3JrZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgd29ya2VyKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fbGliRmlsZXMgPSBfbGliRmlsZXM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUmVmZXJlbmNlQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZVJlZmVyZW5jZXMgPSBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uLCBjb250ZXh0LCB0b2tlbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UsIG9mZnNldCwgd29ya2VyLCBlbnRyaWVzLCByZXN1bHQsIF9pLCBlbnRyaWVzXzIsIGVudHJ5LCB1cmksIHJlZk1vZGVsO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBtb2RlbC5nZXRPZmZzZXRBdChwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl93b3JrZXIocmVzb3VyY2UpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd29ya2VyLmdldFJlZmVyZW5jZXNBdFBvc2l0aW9uKHJlc291cmNlLnRvU3RyaW5nKCksIG9mZnNldCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbnRyaWVzIHx8IG1vZGVsLmlzRGlzcG9zZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZldGNoIGxpYiBmaWxlcyBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX2xpYkZpbGVzLmZldGNoTGliRmlsZXNJZk5lY2Vzc2FyeShlbnRyaWVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHsgcmV0dXJuIFVyaS5wYXJzZShlbnRyeS5maWxlTmFtZSk7IH0pKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZldGNoIGxpYiBmaWxlcyBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC5pc0Rpc3Bvc2VkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2kgPSAwLCBlbnRyaWVzXzIgPSBlbnRyaWVzOyBfaSA8IGVudHJpZXNfMi5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeSA9IGVudHJpZXNfMltfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpID0gVXJpLnBhcnNlKGVudHJ5LmZpbGVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZNb2RlbCA9IHRoaXMuX2xpYkZpbGVzLmdldE9yQ3JlYXRlTW9kZWwodXJpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVmTW9kZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiB1cmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogdGhpcy5fdGV4dFNwYW5Ub1JhbmdlKHJlZk1vZGVsLCBlbnRyeS50ZXh0U3BhbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3VsdF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFJlZmVyZW5jZUFkYXB0ZXI7XG59KEFkYXB0ZXIpKTtcbmV4cG9ydCB7IFJlZmVyZW5jZUFkYXB0ZXIgfTtcbi8vIC0tLSBvdXRsaW5lIC0tLS0tLVxudmFyIE91dGxpbmVBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPdXRsaW5lQWRhcHRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPdXRsaW5lQWRhcHRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPdXRsaW5lQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZURvY3VtZW50U3ltYm9scyA9IGZ1bmN0aW9uIChtb2RlbCwgdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc291cmNlLCB3b3JrZXIsIGl0ZW1zLCBjb252ZXJ0LCByZXN1bHQ7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl93b3JrZXIocmVzb3VyY2UpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd29ya2VyLmdldE5hdmlnYXRpb25CYXJJdGVtcyhyZXNvdXJjZS50b1N0cmluZygpKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtcyB8fCBtb2RlbC5pc0Rpc3Bvc2VkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ID0gZnVuY3Rpb24gKGJ1Y2tldCwgaXRlbSwgY29udGFpbmVyTGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6IChvdXRsaW5lVHlwZVRhYmxlW2l0ZW0ua2luZF0gfHwgbGFuZ3VhZ2VzLlN5bWJvbEtpbmQuVmFyaWFibGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogX3RoaXMuX3RleHRTcGFuVG9SYW5nZShtb2RlbCwgaXRlbS5zcGFuc1swXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblJhbmdlOiBfdGhpcy5fdGV4dFNwYW5Ub1JhbmdlKG1vZGVsLCBpdGVtLnNwYW5zWzBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lck5hbWU6IGNvbnRhaW5lckxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jaGlsZEl0ZW1zICYmIGl0ZW0uY2hpbGRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBpdGVtLmNoaWxkSXRlbXM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0KGJ1Y2tldCwgY2hpbGQsIHJlc3VsdC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWNrZXQucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gY29udmVydChyZXN1bHQsIGl0ZW0pOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXN1bHRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBPdXRsaW5lQWRhcHRlcjtcbn0oQWRhcHRlcikpO1xuZXhwb3J0IHsgT3V0bGluZUFkYXB0ZXIgfTtcbnZhciBLaW5kID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEtpbmQoKSB7XG4gICAgfVxuICAgIEtpbmQudW5rbm93biA9ICcnO1xuICAgIEtpbmQua2V5d29yZCA9ICdrZXl3b3JkJztcbiAgICBLaW5kLnNjcmlwdCA9ICdzY3JpcHQnO1xuICAgIEtpbmQubW9kdWxlID0gJ21vZHVsZSc7XG4gICAgS2luZC5jbGFzcyA9ICdjbGFzcyc7XG4gICAgS2luZC5pbnRlcmZhY2UgPSAnaW50ZXJmYWNlJztcbiAgICBLaW5kLnR5cGUgPSAndHlwZSc7XG4gICAgS2luZC5lbnVtID0gJ2VudW0nO1xuICAgIEtpbmQudmFyaWFibGUgPSAndmFyJztcbiAgICBLaW5kLmxvY2FsVmFyaWFibGUgPSAnbG9jYWwgdmFyJztcbiAgICBLaW5kLmZ1bmN0aW9uID0gJ2Z1bmN0aW9uJztcbiAgICBLaW5kLmxvY2FsRnVuY3Rpb24gPSAnbG9jYWwgZnVuY3Rpb24nO1xuICAgIEtpbmQubWVtYmVyRnVuY3Rpb24gPSAnbWV0aG9kJztcbiAgICBLaW5kLm1lbWJlckdldEFjY2Vzc29yID0gJ2dldHRlcic7XG4gICAgS2luZC5tZW1iZXJTZXRBY2Nlc3NvciA9ICdzZXR0ZXInO1xuICAgIEtpbmQubWVtYmVyVmFyaWFibGUgPSAncHJvcGVydHknO1xuICAgIEtpbmQuY29uc3RydWN0b3JJbXBsZW1lbnRhdGlvbiA9ICdjb25zdHJ1Y3Rvcic7XG4gICAgS2luZC5jYWxsU2lnbmF0dXJlID0gJ2NhbGwnO1xuICAgIEtpbmQuaW5kZXhTaWduYXR1cmUgPSAnaW5kZXgnO1xuICAgIEtpbmQuY29uc3RydWN0U2lnbmF0dXJlID0gJ2NvbnN0cnVjdCc7XG4gICAgS2luZC5wYXJhbWV0ZXIgPSAncGFyYW1ldGVyJztcbiAgICBLaW5kLnR5cGVQYXJhbWV0ZXIgPSAndHlwZSBwYXJhbWV0ZXInO1xuICAgIEtpbmQucHJpbWl0aXZlVHlwZSA9ICdwcmltaXRpdmUgdHlwZSc7XG4gICAgS2luZC5sYWJlbCA9ICdsYWJlbCc7XG4gICAgS2luZC5hbGlhcyA9ICdhbGlhcyc7XG4gICAgS2luZC5jb25zdCA9ICdjb25zdCc7XG4gICAgS2luZC5sZXQgPSAnbGV0JztcbiAgICBLaW5kLndhcm5pbmcgPSAnd2FybmluZyc7XG4gICAgcmV0dXJuIEtpbmQ7XG59KCkpO1xuZXhwb3J0IHsgS2luZCB9O1xudmFyIG91dGxpbmVUeXBlVGFibGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLm1vZHVsZV0gPSBsYW5ndWFnZXMuU3ltYm9sS2luZC5Nb2R1bGU7XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQuY2xhc3NdID0gbGFuZ3VhZ2VzLlN5bWJvbEtpbmQuQ2xhc3M7XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQuZW51bV0gPSBsYW5ndWFnZXMuU3ltYm9sS2luZC5FbnVtO1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLmludGVyZmFjZV0gPSBsYW5ndWFnZXMuU3ltYm9sS2luZC5JbnRlcmZhY2U7XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQubWVtYmVyRnVuY3Rpb25dID0gbGFuZ3VhZ2VzLlN5bWJvbEtpbmQuTWV0aG9kO1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLm1lbWJlclZhcmlhYmxlXSA9IGxhbmd1YWdlcy5TeW1ib2xLaW5kLlByb3BlcnR5O1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLm1lbWJlckdldEFjY2Vzc29yXSA9IGxhbmd1YWdlcy5TeW1ib2xLaW5kLlByb3BlcnR5O1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLm1lbWJlclNldEFjY2Vzc29yXSA9IGxhbmd1YWdlcy5TeW1ib2xLaW5kLlByb3BlcnR5O1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLnZhcmlhYmxlXSA9IGxhbmd1YWdlcy5TeW1ib2xLaW5kLlZhcmlhYmxlO1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLmNvbnN0XSA9IGxhbmd1YWdlcy5TeW1ib2xLaW5kLlZhcmlhYmxlO1xub3V0bGluZVR5cGVUYWJsZVtLaW5kLmxvY2FsVmFyaWFibGVdID0gbGFuZ3VhZ2VzLlN5bWJvbEtpbmQuVmFyaWFibGU7XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQudmFyaWFibGVdID0gbGFuZ3VhZ2VzLlN5bWJvbEtpbmQuVmFyaWFibGU7XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQuZnVuY3Rpb25dID0gbGFuZ3VhZ2VzLlN5bWJvbEtpbmQuRnVuY3Rpb247XG5vdXRsaW5lVHlwZVRhYmxlW0tpbmQubG9jYWxGdW5jdGlvbl0gPSBsYW5ndWFnZXMuU3ltYm9sS2luZC5GdW5jdGlvbjtcbi8vIC0tLSBmb3JtYXR0aW5nIC0tLS1cbnZhciBGb3JtYXRIZWxwZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZvcm1hdEhlbHBlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGb3JtYXRIZWxwZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgRm9ybWF0SGVscGVyLl9jb252ZXJ0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBDb252ZXJ0VGFic1RvU3BhY2VzOiBvcHRpb25zLmluc2VydFNwYWNlcyxcbiAgICAgICAgICAgIFRhYlNpemU6IG9wdGlvbnMudGFiU2l6ZSxcbiAgICAgICAgICAgIEluZGVudFNpemU6IG9wdGlvbnMudGFiU2l6ZSxcbiAgICAgICAgICAgIEluZGVudFN0eWxlOiBJbmRlbnRTdHlsZS5TbWFydCxcbiAgICAgICAgICAgIE5ld0xpbmVDaGFyYWN0ZXI6ICdcXG4nLFxuICAgICAgICAgICAgSW5zZXJ0U3BhY2VBZnRlckNvbW1hRGVsaW1pdGVyOiB0cnVlLFxuICAgICAgICAgICAgSW5zZXJ0U3BhY2VBZnRlclNlbWljb2xvbkluRm9yU3RhdGVtZW50czogdHJ1ZSxcbiAgICAgICAgICAgIEluc2VydFNwYWNlQmVmb3JlQW5kQWZ0ZXJCaW5hcnlPcGVyYXRvcnM6IHRydWUsXG4gICAgICAgICAgICBJbnNlcnRTcGFjZUFmdGVyS2V5d29yZHNJbkNvbnRyb2xGbG93U3RhdGVtZW50czogdHJ1ZSxcbiAgICAgICAgICAgIEluc2VydFNwYWNlQWZ0ZXJGdW5jdGlvbktleXdvcmRGb3JBbm9ueW1vdXNGdW5jdGlvbnM6IHRydWUsXG4gICAgICAgICAgICBJbnNlcnRTcGFjZUFmdGVyT3BlbmluZ0FuZEJlZm9yZUNsb3NpbmdOb25lbXB0eVBhcmVudGhlc2lzOiBmYWxzZSxcbiAgICAgICAgICAgIEluc2VydFNwYWNlQWZ0ZXJPcGVuaW5nQW5kQmVmb3JlQ2xvc2luZ05vbmVtcHR5QnJhY2tldHM6IGZhbHNlLFxuICAgICAgICAgICAgSW5zZXJ0U3BhY2VBZnRlck9wZW5pbmdBbmRCZWZvcmVDbG9zaW5nVGVtcGxhdGVTdHJpbmdCcmFjZXM6IGZhbHNlLFxuICAgICAgICAgICAgUGxhY2VPcGVuQnJhY2VPbk5ld0xpbmVGb3JDb250cm9sQmxvY2tzOiBmYWxzZSxcbiAgICAgICAgICAgIFBsYWNlT3BlbkJyYWNlT25OZXdMaW5lRm9yRnVuY3Rpb25zOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH07XG4gICAgRm9ybWF0SGVscGVyLnByb3RvdHlwZS5fY29udmVydFRleHRDaGFuZ2VzID0gZnVuY3Rpb24gKG1vZGVsLCBjaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRleHQ6IGNoYW5nZS5uZXdUZXh0LFxuICAgICAgICAgICAgcmFuZ2U6IHRoaXMuX3RleHRTcGFuVG9SYW5nZShtb2RlbCwgY2hhbmdlLnNwYW4pXG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gRm9ybWF0SGVscGVyO1xufShBZGFwdGVyKSk7XG5leHBvcnQgeyBGb3JtYXRIZWxwZXIgfTtcbnZhciBGb3JtYXRBZGFwdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGb3JtYXRBZGFwdGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZvcm1hdEFkYXB0ZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgRm9ybWF0QWRhcHRlci5wcm90b3R5cGUucHJvdmlkZURvY3VtZW50UmFuZ2VGb3JtYXR0aW5nRWRpdHMgPSBmdW5jdGlvbiAobW9kZWwsIHJhbmdlLCBvcHRpb25zLCB0b2tlbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UsIHN0YXJ0T2Zmc2V0LCBlbmRPZmZzZXQsIHdvcmtlciwgZWRpdHM7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydE9mZnNldCA9IG1vZGVsLmdldE9mZnNldEF0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiByYW5nZS5zdGFydExpbmVOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uOiByYW5nZS5zdGFydENvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRPZmZzZXQgPSBtb2RlbC5nZXRPZmZzZXRBdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogcmFuZ2UuZW5kTGluZU51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW46IHJhbmdlLmVuZENvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl93b3JrZXIocmVzb3VyY2UpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd29ya2VyLmdldEZvcm1hdHRpbmdFZGl0c0ZvclJhbmdlKHJlc291cmNlLnRvU3RyaW5nKCksIHN0YXJ0T2Zmc2V0LCBlbmRPZmZzZXQsIEZvcm1hdEhlbHBlci5fY29udmVydE9wdGlvbnMob3B0aW9ucykpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdHMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVkaXRzIHx8IG1vZGVsLmlzRGlzcG9zZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBlZGl0cy5tYXAoZnVuY3Rpb24gKGVkaXQpIHsgcmV0dXJuIF90aGlzLl9jb252ZXJ0VGV4dENoYW5nZXMobW9kZWwsIGVkaXQpOyB9KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEZvcm1hdEFkYXB0ZXI7XG59KEZvcm1hdEhlbHBlcikpO1xuZXhwb3J0IHsgRm9ybWF0QWRhcHRlciB9O1xudmFyIEZvcm1hdE9uVHlwZUFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZvcm1hdE9uVHlwZUFkYXB0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRm9ybWF0T25UeXBlQWRhcHRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybWF0T25UeXBlQWRhcHRlci5wcm90b3R5cGUsIFwiYXV0b0Zvcm1hdFRyaWdnZXJDaGFyYWN0ZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gWyc7JywgJ30nLCAnXFxuJ107XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBGb3JtYXRPblR5cGVBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlT25UeXBlRm9ybWF0dGluZ0VkaXRzID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgY2gsIG9wdGlvbnMsIHRva2VuKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNvdXJjZSwgb2Zmc2V0LCB3b3JrZXIsIGVkaXRzO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gbW9kZWwuZ2V0T2Zmc2V0QXQocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fd29ya2VyKHJlc291cmNlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHdvcmtlci5nZXRGb3JtYXR0aW5nRWRpdHNBZnRlcktleXN0cm9rZShyZXNvdXJjZS50b1N0cmluZygpLCBvZmZzZXQsIGNoLCBGb3JtYXRIZWxwZXIuX2NvbnZlcnRPcHRpb25zKG9wdGlvbnMpKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlZGl0cyB8fCBtb2RlbC5pc0Rpc3Bvc2VkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZWRpdHMubWFwKGZ1bmN0aW9uIChlZGl0KSB7IHJldHVybiBfdGhpcy5fY29udmVydFRleHRDaGFuZ2VzKG1vZGVsLCBlZGl0KTsgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBGb3JtYXRPblR5cGVBZGFwdGVyO1xufShGb3JtYXRIZWxwZXIpKTtcbmV4cG9ydCB7IEZvcm1hdE9uVHlwZUFkYXB0ZXIgfTtcbi8vIC0tLSBjb2RlIGFjdGlvbnMgLS0tLS0tXG52YXIgQ29kZUFjdGlvbkFkYXB0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvZGVBY3Rpb25BZGFwdG9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvZGVBY3Rpb25BZGFwdG9yKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIENvZGVBY3Rpb25BZGFwdG9yLnByb3RvdHlwZS5wcm92aWRlQ29kZUFjdGlvbnMgPSBmdW5jdGlvbiAobW9kZWwsIHJhbmdlLCBjb250ZXh0LCB0b2tlbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UsIHN0YXJ0LCBlbmQsIGZvcm1hdE9wdGlvbnMsIGVycm9yQ29kZXMsIHdvcmtlciwgY29kZUZpeGVzLCBhY3Rpb25zO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBtb2RlbC5nZXRPZmZzZXRBdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbjogcmFuZ2Uuc3RhcnRDb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gbW9kZWwuZ2V0T2Zmc2V0QXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IHJhbmdlLmVuZExpbmVOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uOiByYW5nZS5lbmRDb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0T3B0aW9ucyA9IEZvcm1hdEhlbHBlci5fY29udmVydE9wdGlvbnMobW9kZWwuZ2V0T3B0aW9ucygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZXMgPSBjb250ZXh0Lm1hcmtlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtLmNvZGU7IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5jb2RlOyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX3dvcmtlcihyZXNvdXJjZSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB3b3JrZXIuZ2V0Q29kZUZpeGVzQXRQb3NpdGlvbihyZXNvdXJjZS50b1N0cmluZygpLCBzdGFydCwgZW5kLCBlcnJvckNvZGVzLCBmb3JtYXRPcHRpb25zKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVGaXhlcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29kZUZpeGVzIHx8IG1vZGVsLmlzRGlzcG9zZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7IGFjdGlvbnM6IFtdLCBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7IH0gfV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zID0gY29kZUZpeGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZml4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlcyBhbnkgJ21ha2UgYSBuZXcgZmlsZSctdHlwZSBjb2RlIGZpeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaXguY2hhbmdlcy5maWx0ZXIoZnVuY3Rpb24gKGNoYW5nZSkgeyByZXR1cm4gY2hhbmdlLmlzTmV3RmlsZTsgfSkubGVuZ3RoID09PSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuX3RzQ29kZUZpeEFjdGlvblRvTW9uYWNvQ29kZUFjdGlvbihtb2RlbCwgY29udGV4dCwgZml4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogYWN0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcG9zZTogZnVuY3Rpb24gKCkgeyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29kZUFjdGlvbkFkYXB0b3IucHJvdG90eXBlLl90c0NvZGVGaXhBY3Rpb25Ub01vbmFjb0NvZGVBY3Rpb24gPSBmdW5jdGlvbiAobW9kZWwsIGNvbnRleHQsIGNvZGVGaXgpIHtcbiAgICAgICAgdmFyIGVkaXRzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBjb2RlRml4LmNoYW5nZXM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gX2FbX2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBfYyA9IGNoYW5nZS50ZXh0Q2hhbmdlczsgX2IgPCBfYy5sZW5ndGg7IF9iKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dENoYW5nZSA9IF9jW19iXTtcbiAgICAgICAgICAgICAgICBlZGl0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6IG1vZGVsLnVyaSxcbiAgICAgICAgICAgICAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHRoaXMuX3RleHRTcGFuVG9SYW5nZShtb2RlbCwgdGV4dENoYW5nZS5zcGFuKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRleHRDaGFuZ2UubmV3VGV4dFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFjdGlvbiA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBjb2RlRml4LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZWRpdDogeyBlZGl0czogZWRpdHMgfSxcbiAgICAgICAgICAgIGRpYWdub3N0aWNzOiBjb250ZXh0Lm1hcmtlcnMsXG4gICAgICAgICAgICBraW5kOiAncXVpY2tmaXgnXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfTtcbiAgICByZXR1cm4gQ29kZUFjdGlvbkFkYXB0b3I7XG59KEZvcm1hdEhlbHBlcikpO1xuZXhwb3J0IHsgQ29kZUFjdGlvbkFkYXB0b3IgfTtcbi8vIC0tLSByZW5hbWUgLS0tLVxudmFyIFJlbmFtZUFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJlbmFtZUFkYXB0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUmVuYW1lQWRhcHRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBSZW5hbWVBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlUmVuYW1lRWRpdHMgPSBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uLCBuZXdOYW1lLCB0b2tlbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UsIGZpbGVOYW1lLCBvZmZzZXQsIHdvcmtlciwgcmVuYW1lSW5mbywgcmVuYW1lTG9jYXRpb25zLCBlZGl0cywgX2ksIHJlbmFtZUxvY2F0aW9uc18xLCByZW5hbWVMb2NhdGlvbjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWUgPSByZXNvdXJjZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gbW9kZWwuZ2V0T2Zmc2V0QXQocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fd29ya2VyKHJlc291cmNlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHdvcmtlci5nZXRSZW5hbWVJbmZvKGZpbGVOYW1lLCBvZmZzZXQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dSZW5hbWVPZkltcG9ydFBhdGg6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5hbWVJbmZvID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbmFtZUluZm8uY2FuUmVuYW1lID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZSBleHBsaWNpdCBjb21wYXJpc29uIHNvIHRoYXQgdGhlIGRpc2NyaW1pbmF0ZWQgdW5pb24gZ2V0cyByZXNvbHZlZCBwcm9wZXJseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3RSZWFzb246IHJlbmFtZUluZm8ubG9jYWxpemVkRXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbmFtZUluZm8uZmlsZVRvUmVuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbmFtaW5nIGZpbGVzIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB3b3JrZXIuZmluZFJlbmFtZUxvY2F0aW9ucyhmaWxlTmFtZSwgb2Zmc2V0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnN0cmluZ3MqLyBmYWxzZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLypjb21tZW50cyovIGZhbHNlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnByZWZpeEFuZFN1ZmZpeCovIGZhbHNlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmFtZUxvY2F0aW9ucyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVuYW1lTG9jYXRpb25zIHx8IG1vZGVsLmlzRGlzcG9zZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9pID0gMCwgcmVuYW1lTG9jYXRpb25zXzEgPSByZW5hbWVMb2NhdGlvbnM7IF9pIDwgcmVuYW1lTG9jYXRpb25zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuYW1lTG9jYXRpb24gPSByZW5hbWVMb2NhdGlvbnNfMVtfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlOiBVcmkucGFyc2UocmVuYW1lTG9jYXRpb24uZmlsZU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogdGhpcy5fdGV4dFNwYW5Ub1JhbmdlKG1vZGVsLCByZW5hbWVMb2NhdGlvbi50ZXh0U3BhbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBuZXdOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7IGVkaXRzOiBlZGl0cyB9XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVuYW1lQWRhcHRlcjtcbn0oQWRhcHRlcikpO1xuZXhwb3J0IHsgUmVuYW1lQWRhcHRlciB9O1xuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vL1xuLy8gKipOT1RFKio6IERvIG5vdCBlZGl0IGRpcmVjdGx5ISBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIHVzaW5nIGBucG0gcnVuIGltcG9ydC10eXBlc2NyaXB0YFxuLy9cbi8qKiBDb250YWlucyBhbGwgdGhlIGxpYiBmaWxlcyAqL1xuZXhwb3J0IHZhciBsaWJGaWxlU2V0ID0ge307XG5saWJGaWxlU2V0WydsaWIuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5kb20uZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5kb20uaXRlcmFibGUuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTUuY29sbGVjdGlvbi5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxNS5jb3JlLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDE1LmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDE1LmdlbmVyYXRvci5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxNS5pdGVyYWJsZS5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxNS5wcm9taXNlLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDE1LnByb3h5LmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDE1LnJlZmxlY3QuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTUuc3ltYm9sLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDE1LnN5bWJvbC53ZWxsa25vd24uZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTYuYXJyYXkuaW5jbHVkZS5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxNi5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxNi5mdWxsLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDE3LmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDE3LmZ1bGwuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTcuaW50bC5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxNy5vYmplY3QuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTcuc2hhcmVkbWVtb3J5LmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDE3LnN0cmluZy5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxNy50eXBlZGFycmF5cy5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxOC5hc3luY2dlbmVyYXRvci5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxOC5hc3luY2l0ZXJhYmxlLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDE4LmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDE4LmZ1bGwuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTguaW50bC5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxOC5wcm9taXNlLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDE4LnJlZ2V4cC5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxOS5hcnJheS5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxOS5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxOS5mdWxsLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDE5Lm9iamVjdC5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAxOS5zdHJpbmcuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMTkuc3ltYm9sLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDIwLmJpZ2ludC5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAyMC5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAyMC5mdWxsLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXMyMDIwLmludGwuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMjAucHJvbWlzZS5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzMjAyMC5zdHJpbmcuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lczIwMjAuc3ltYm9sLndlbGxrbm93bi5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzNS5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzNi5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzbmV4dC5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzbmV4dC5mdWxsLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIuZXNuZXh0LmludGwuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5lc25leHQucHJvbWlzZS5kLnRzJ10gPSB0cnVlO1xubGliRmlsZVNldFsnbGliLmVzbmV4dC5zdHJpbmcuZC50cyddID0gdHJ1ZTtcbmxpYkZpbGVTZXRbJ2xpYi5zY3JpcHRob3N0LmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIud2Vid29ya2VyLmQudHMnXSA9IHRydWU7XG5saWJGaWxlU2V0WydsaWIud2Vid29ya2VyLmltcG9ydHNjcmlwdHMuZC50cyddID0gdHJ1ZTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgV29ya2VyTWFuYWdlciB9IGZyb20gJy4vd29ya2VyTWFuYWdlci5qcyc7XG5pbXBvcnQgKiBhcyBsYW5ndWFnZUZlYXR1cmVzIGZyb20gJy4vbGFuZ3VhZ2VGZWF0dXJlcy5qcyc7XG5pbXBvcnQgeyBsYW5ndWFnZXMgfSBmcm9tICcuL2ZpbGxlcnMvbW9uYWNvLWVkaXRvci1jb3JlLmpzJztcbnZhciBqYXZhU2NyaXB0V29ya2VyO1xudmFyIHR5cGVTY3JpcHRXb3JrZXI7XG5leHBvcnQgZnVuY3Rpb24gc2V0dXBUeXBlU2NyaXB0KGRlZmF1bHRzKSB7XG4gICAgdHlwZVNjcmlwdFdvcmtlciA9IHNldHVwTW9kZShkZWZhdWx0cywgJ3R5cGVzY3JpcHQnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEphdmFTY3JpcHQoZGVmYXVsdHMpIHtcbiAgICBqYXZhU2NyaXB0V29ya2VyID0gc2V0dXBNb2RlKGRlZmF1bHRzLCAnamF2YXNjcmlwdCcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEphdmFTY3JpcHRXb3JrZXIoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKCFqYXZhU2NyaXB0V29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KCdKYXZhU2NyaXB0IG5vdCByZWdpc3RlcmVkIScpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUoamF2YVNjcmlwdFdvcmtlcik7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZVNjcmlwdFdvcmtlcigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAoIXR5cGVTY3JpcHRXb3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoJ1R5cGVTY3JpcHQgbm90IHJlZ2lzdGVyZWQhJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZSh0eXBlU2NyaXB0V29ya2VyKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNldHVwTW9kZShkZWZhdWx0cywgbW9kZUlkKSB7XG4gICAgdmFyIGNsaWVudCA9IG5ldyBXb3JrZXJNYW5hZ2VyKG1vZGVJZCwgZGVmYXVsdHMpO1xuICAgIHZhciB3b3JrZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB1cmlzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB1cmlzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsaWVudC5nZXRMYW5ndWFnZVNlcnZpY2VXb3JrZXIuYXBwbHkoY2xpZW50LCB1cmlzKTtcbiAgICB9O1xuICAgIHZhciBsaWJGaWxlcyA9IG5ldyBsYW5ndWFnZUZlYXR1cmVzLkxpYkZpbGVzKHdvcmtlcik7XG4gICAgbGFuZ3VhZ2VzLnJlZ2lzdGVyQ29tcGxldGlvbkl0ZW1Qcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLlN1Z2dlc3RBZGFwdGVyKHdvcmtlcikpO1xuICAgIGxhbmd1YWdlcy5yZWdpc3RlclNpZ25hdHVyZUhlbHBQcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLlNpZ25hdHVyZUhlbHBBZGFwdGVyKHdvcmtlcikpO1xuICAgIGxhbmd1YWdlcy5yZWdpc3RlckhvdmVyUHJvdmlkZXIobW9kZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5RdWlja0luZm9BZGFwdGVyKHdvcmtlcikpO1xuICAgIGxhbmd1YWdlcy5yZWdpc3RlckRvY3VtZW50SGlnaGxpZ2h0UHJvdmlkZXIobW9kZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5PY2N1cnJlbmNlc0FkYXB0ZXIod29ya2VyKSk7XG4gICAgbGFuZ3VhZ2VzLnJlZ2lzdGVyRGVmaW5pdGlvblByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuRGVmaW5pdGlvbkFkYXB0ZXIobGliRmlsZXMsIHdvcmtlcikpO1xuICAgIGxhbmd1YWdlcy5yZWdpc3RlclJlZmVyZW5jZVByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuUmVmZXJlbmNlQWRhcHRlcihsaWJGaWxlcywgd29ya2VyKSk7XG4gICAgbGFuZ3VhZ2VzLnJlZ2lzdGVyRG9jdW1lbnRTeW1ib2xQcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLk91dGxpbmVBZGFwdGVyKHdvcmtlcikpO1xuICAgIGxhbmd1YWdlcy5yZWdpc3RlckRvY3VtZW50UmFuZ2VGb3JtYXR0aW5nRWRpdFByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuRm9ybWF0QWRhcHRlcih3b3JrZXIpKTtcbiAgICBsYW5ndWFnZXMucmVnaXN0ZXJPblR5cGVGb3JtYXR0aW5nRWRpdFByb3ZpZGVyKG1vZGVJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuRm9ybWF0T25UeXBlQWRhcHRlcih3b3JrZXIpKTtcbiAgICBsYW5ndWFnZXMucmVnaXN0ZXJDb2RlQWN0aW9uUHJvdmlkZXIobW9kZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5Db2RlQWN0aW9uQWRhcHRvcih3b3JrZXIpKTtcbiAgICBsYW5ndWFnZXMucmVnaXN0ZXJSZW5hbWVQcm92aWRlcihtb2RlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLlJlbmFtZUFkYXB0ZXIod29ya2VyKSk7XG4gICAgbmV3IGxhbmd1YWdlRmVhdHVyZXMuRGlhZ25vc3RpY3NBZGFwdGVyKGxpYkZpbGVzLCBkZWZhdWx0cywgbW9kZUlkLCB3b3JrZXIpO1xuICAgIHJldHVybiB3b3JrZXI7XG59XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBlZGl0b3IgfSBmcm9tICcuL2ZpbGxlcnMvbW9uYWNvLWVkaXRvci1jb3JlLmpzJztcbnZhciBXb3JrZXJNYW5hZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdvcmtlck1hbmFnZXIobW9kZUlkLCBkZWZhdWx0cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLl9tb2RlSWQgPSBtb2RlSWQ7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG4gICAgICAgIHRoaXMuX3dvcmtlciA9IG51bGw7XG4gICAgICAgIHRoaXMuX2NsaWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2NvbmZpZ0NoYW5nZUxpc3RlbmVyID0gdGhpcy5fZGVmYXVsdHMub25EaWRDaGFuZ2UoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX3N0b3BXb3JrZXIoKTsgfSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUV4dHJhTGlic1Rva2VuID0gMDtcbiAgICAgICAgdGhpcy5fZXh0cmFMaWJzQ2hhbmdlTGlzdGVuZXIgPSB0aGlzLl9kZWZhdWx0cy5vbkRpZEV4dHJhTGlic0NoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuX3VwZGF0ZUV4dHJhTGlicygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgV29ya2VyTWFuYWdlci5wcm90b3R5cGUuX3N0b3BXb3JrZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl93b3JrZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3dvcmtlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl93b3JrZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NsaWVudCA9IG51bGw7XG4gICAgfTtcbiAgICBXb3JrZXJNYW5hZ2VyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9jb25maWdDaGFuZ2VMaXN0ZW5lci5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuX2V4dHJhTGlic0NoYW5nZUxpc3RlbmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5fc3RvcFdvcmtlcigpO1xuICAgIH07XG4gICAgV29ya2VyTWFuYWdlci5wcm90b3R5cGUuX3VwZGF0ZUV4dHJhTGlicyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG15VG9rZW4sIHByb3h5O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl93b3JrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBteVRva2VuID0gKyt0aGlzLl91cGRhdGVFeHRyYUxpYnNUb2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX3dvcmtlci5nZXRQcm94eSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHkgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdXBkYXRlRXh0cmFMaWJzVG9rZW4gIT09IG15VG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhdm9pZCBtdWx0aXBsZSBjYWxsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5LnVwZGF0ZUV4dHJhTGlicyh0aGlzLl9kZWZhdWx0cy5nZXRFeHRyYUxpYnMoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV29ya2VyTWFuYWdlci5wcm90b3R5cGUuX2dldENsaWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLl9jbGllbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3dvcmtlciA9IGVkaXRvci5jcmVhdGVXZWJXb3JrZXIoe1xuICAgICAgICAgICAgICAgIC8vIG1vZHVsZSB0aGF0IGV4cG9ydHMgdGhlIGNyZWF0ZSgpIG1ldGhvZCBhbmQgcmV0dXJucyBhIGBUeXBlU2NyaXB0V29ya2VyYCBpbnN0YW5jZVxuICAgICAgICAgICAgICAgIG1vZHVsZUlkOiAndnMvbGFuZ3VhZ2UvdHlwZXNjcmlwdC90c1dvcmtlcicsXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMuX21vZGVJZCxcbiAgICAgICAgICAgICAgICBrZWVwSWRsZU1vZGVsczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyBwYXNzZWQgaW4gdG8gdGhlIGNyZWF0ZSgpIG1ldGhvZFxuICAgICAgICAgICAgICAgIGNyZWF0ZURhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGlsZXJPcHRpb25zOiB0aGlzLl9kZWZhdWx0cy5nZXRDb21waWxlck9wdGlvbnMoKSxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFMaWJzOiB0aGlzLl9kZWZhdWx0cy5nZXRFeHRyYUxpYnMoKSxcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tV29ya2VyUGF0aDogdGhpcy5fZGVmYXVsdHMud29ya2VyT3B0aW9ucy5jdXN0b21Xb3JrZXJQYXRoXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgcCA9IHRoaXMuX3dvcmtlci5nZXRQcm94eSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2RlZmF1bHRzLmdldEVhZ2VyTW9kZWxTeW5jKCkpIHtcbiAgICAgICAgICAgICAgICBwID0gcC50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLl93b3JrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5fd29ya2VyLndpdGhTeW5jZWRSZXNvdXJjZXMoZWRpdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldE1vZGVscygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobW9kZWwpIHsgcmV0dXJuIG1vZGVsLmdldE1vZGVJZCgpID09PSBfdGhpcy5fbW9kZUlkOyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG1vZGVsKSB7IHJldHVybiBtb2RlbC51cmk7IH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY2xpZW50ID0gcDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50O1xuICAgIH07XG4gICAgV29ya2VyTWFuYWdlci5wcm90b3R5cGUuZ2V0TGFuZ3VhZ2VTZXJ2aWNlV29ya2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmVzb3VyY2VzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICByZXNvdXJjZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2NsaWVudDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldENsaWVudCgpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoY2xpZW50KSB7XG4gICAgICAgICAgICBfY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5fd29ya2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLl93b3JrZXIud2l0aFN5bmNlZFJlc291cmNlcyhyZXNvdXJjZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKF8pIHsgcmV0dXJuIF9jbGllbnQ7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFdvcmtlck1hbmFnZXI7XG59KCkpO1xuZXhwb3J0IHsgV29ya2VyTWFuYWdlciB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==