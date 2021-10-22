/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/bundles/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/boot/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _registerComponents = __webpack_require__("./client/src/boot/registerComponents.js");

var _registerComponents2 = _interopRequireDefault(_registerComponents);

__webpack_require__("./client/src/legacy/entwine/injectReact.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.document.addEventListener('DOMContentLoaded', function () {
  (0, _registerComponents2.default)();
});

/***/ }),

/***/ "./client/src/boot/registerComponents.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(1);

var _Injector2 = _interopRequireDefault(_Injector);

var _TaxonomyViewer = __webpack_require__("./client/src/components/TaxonomyViewer.jsx");

var _TaxonomyViewer2 = _interopRequireDefault(_TaxonomyViewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  _Injector2.default.component.registerMany({
    TaxonomyViewer: _TaxonomyViewer2.default
  });
};

/***/ }),

/***/ "./client/src/bundles/bundle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./client/src/boot/index.js");

/***/ }),

/***/ "./client/src/components/SideBar/Term.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = Term;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _useLazyTaxonomyTerms3 = __webpack_require__("./client/src/hooks/useLazyTaxonomyTerms.js");

var _useLazyTaxonomyTerms4 = _interopRequireDefault(_useLazyTaxonomyTerms3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Term(_ref) {
    var id = _ref.id,
        name = _ref.name,
        childCount = _ref.childCount;

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        expanded = _useState2[0],
        setExpanded = _useState2[1];

    var filter = { parentID: { eq: id } };

    var _useLazyTaxonomyTerms = (0, _useLazyTaxonomyTerms4.default)(filter),
        _useLazyTaxonomyTerms2 = _slicedToArray(_useLazyTaxonomyTerms, 2),
        getTerms = _useLazyTaxonomyTerms2[0],
        terms = _useLazyTaxonomyTerms2[1].terms;

    var onClick = (0, _react.useCallback)(function () {
        setExpanded(!expanded);

        if (expanded) {
            return;
        }

        getTerms();
    }, [expanded]);

    var button = null;
    if (childCount > 0) {
        button = _react2.default.createElement(
            'button',
            { onClick: onClick },
            expanded ? 'close' : 'open'
        );
    }
    return _react2.default.createElement(
        'li',
        { className: 'term__item' },
        _react2.default.createElement(
            'h3',
            null,
            name
        ),
        ' children: ',
        childCount,
        ' ',
        button,
        expanded && _react2.default.createElement(
            'ul',
            { className: 'term__list' },
            terms.map(function (term) {
                return _react2.default.createElement(Term, term);
            })
        )
    );
}

/***/ }),

/***/ "./client/src/components/SideBar/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SideBar;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _useTaxonomyTerms2 = __webpack_require__("./client/src/hooks/useTaxonomyTerms.js");

var _useTaxonomyTerms3 = _interopRequireDefault(_useTaxonomyTerms2);

var _Term = __webpack_require__("./client/src/components/SideBar/Term.jsx");

var _Term2 = _interopRequireDefault(_Term);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SideBar() {
    var filter = { parentID: { eq: 0 } };

    var _useTaxonomyTerms = (0, _useTaxonomyTerms3.default)(filter),
        loading = _useTaxonomyTerms.loading,
        error = _useTaxonomyTerms.error,
        terms = _useTaxonomyTerms.terms;

    if (error) {
        return 'error';
    }

    if (loading) {
        return 'loading';
    }

    return _react2.default.createElement(
        'section',
        { className: 'sidebar' },
        _react2.default.createElement(
            'ul',
            { className: 'term__list' },
            terms.map(function (term) {
                return _react2.default.createElement(_Term2.default, term);
            })
        )
    );
}

/***/ }),

/***/ "./client/src/components/TaxonomyViewer.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TaxonomyViewer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SideBar = __webpack_require__("./client/src/components/SideBar/index.jsx");

var _SideBar2 = _interopRequireDefault(_SideBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TaxonomyViewer() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_SideBar2.default, null),
    _react2.default.createElement('section', { className: 'panel' })
  );
}

/***/ }),

/***/ "./client/src/hooks/useLazyQuery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = useLazyQuery;

var _reactApollo = __webpack_require__(3);

var _react = __webpack_require__(0);

function useLazyQuery(query, variables) {
    var _useContext = (0, _react.useContext)(_reactApollo.ApolloContext),
        client = _useContext.client;

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        loading = _useState2[0],
        setLoading = _useState2[1];

    var _useState3 = (0, _react.useState)(null),
        _useState4 = _slicedToArray(_useState3, 2),
        error = _useState4[0],
        setError = _useState4[1];

    var _useState5 = (0, _react.useState)(null),
        _useState6 = _slicedToArray(_useState5, 2),
        data = _useState6[0],
        setData = _useState6[1];

    var runQuery = (0, _react.useCallback)(function () {
        setLoading(true);
        client.query({
            query: query,
            variables: variables
        }).then(function (result) {
            setData(result.data);
            setLoading(false);
        }).catch(function (e) {
            setError(e);
        });
    }, [data]);

    return [runQuery, { loading: loading, data: data, error: error }];
}

/***/ }),

/***/ "./client/src/hooks/useLazyTaxonomyTerms.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = useLazyTaxonomyTerms;

var _useLazyQuery3 = __webpack_require__("./client/src/hooks/useLazyQuery.js");

var _useLazyQuery4 = _interopRequireDefault(_useLazyQuery3);

var _useTaxonomyTerms = __webpack_require__("./client/src/hooks/useTaxonomyTerms.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function useLazyTaxonomyTerms(filter) {
  var _useLazyQuery = (0, _useLazyQuery4.default)(_useTaxonomyTerms.TAXONOMY_TERM_QUERY, { filter: filter }),
      _useLazyQuery2 = _slicedToArray(_useLazyQuery, 2),
      getTerms = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      loading = _useLazyQuery2$.loading,
      data = _useLazyQuery2$.data,
      error = _useLazyQuery2$.error;

  var terms = [];

  if (data) {
    terms = data.readTaxonomyTerms.nodes.map(function (term) {
      var children = term.children,
          rest = _objectWithoutProperties(term, ['children']);

      return _extends({}, rest, { childCount: children.pageInfo.totalCount });
    });
  }

  return [getTerms, { loading: loading, error: error, terms: terms }];
}

/***/ }),

/***/ "./client/src/hooks/useQuery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = useQuery;

var _reactApollo = __webpack_require__(3);

var _react = __webpack_require__(0);

function useQuery(query, variables) {
    var _useContext = (0, _react.useContext)(_reactApollo.ApolloContext),
        client = _useContext.client;

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        loading = _useState2[0],
        setLoading = _useState2[1];

    var _useState3 = (0, _react.useState)(null),
        _useState4 = _slicedToArray(_useState3, 2),
        error = _useState4[0],
        setError = _useState4[1];

    var _useState5 = (0, _react.useState)(null),
        _useState6 = _slicedToArray(_useState5, 2),
        data = _useState6[0],
        setData = _useState6[1];

    (0, _react.useEffect)(function () {
        setLoading(true);
        client.query({
            query: query,
            variables: variables
        }).then(function (result) {
            setData(result.data);
            setLoading(false);
        }).catch(function (e) {
            setError(e);
        });
    }, [data]);

    return { loading: loading, data: data, error: error };
}

/***/ }),

/***/ "./client/src/hooks/useTaxonomyTerms.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TAXONOMY_TERM_QUERY = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\nquery getTaxonomyTerms($filter: TaxonomyTermFilterFields) {\n  readTaxonomyTerms(filter: $filter) {\n    nodes {\n      id\n      name\n      children {\n        pageInfo {\n          totalCount\n        }\n      }\n    }\n  }\n}\n\n'], ['\nquery getTaxonomyTerms($filter: TaxonomyTermFilterFields) {\n  readTaxonomyTerms(filter: $filter) {\n    nodes {\n      id\n      name\n      children {\n        pageInfo {\n          totalCount\n        }\n      }\n    }\n  }\n}\n\n']);

exports.default = useTaxonomyTerms;

var _graphqlTag = __webpack_require__(2);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _useQuery2 = __webpack_require__("./client/src/hooks/useQuery.js");

var _useQuery3 = _interopRequireDefault(_useQuery2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TAXONOMY_TERM_QUERY = exports.TAXONOMY_TERM_QUERY = (0, _graphqlTag2.default)(_templateObject);

function useTaxonomyTerms(filter) {
  var _useQuery = (0, _useQuery3.default)(TAXONOMY_TERM_QUERY, { filter: filter }),
      loading = _useQuery.loading,
      data = _useQuery.data,
      error = _useQuery.error;

  var terms = [];

  if (data) {
    terms = data.readTaxonomyTerms.nodes.map(function (term) {
      var children = term.children,
          rest = _objectWithoutProperties(term, ['children']);

      return _extends({}, rest, { childCount: children.pageInfo.totalCount });
    });
  }

  return { loading: loading, error: error, terms: terms };
}

/***/ }),

/***/ "./client/src/legacy/entwine/injectReact.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(5);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _schemaFieldValues = __webpack_require__(6);

var _Injector = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss', function ($) {
  var componentName = 'TaxonomyViewer';
  $('.js-injector-boot #' + componentName).entwine({
    Timer: null,
    Component: null,
    Root: null,

    onmatch: function onmatch() {
      this._super();

      var context = { context: 'Blueo\\TaxonomyViewer' };

      var Field = (0, _Injector.loadComponent)(componentName, context);
      this.setComponent(Field);

      var reactRoot = $(this)[0];
      this.setRoot(reactRoot);

      this.refresh();
    },
    onunmatch: function onunmatch() {
      this._super();

      var container = this.getRoot();
      if (container) {
        _reactDom2.default.unmountComponentAtNode(container);
      }
    },
    refresh: function refresh() {
      var props = this.getAttributes();

      var Component = this.getComponent();

      _reactDom2.default.render(_react2.default.createElement(Component, props), this.getRoot());
    },
    getAttributes: function getAttributes() {
      var state = $(this).data('state');
      var schema = $(this).data('schema');
      return (0, _schemaFieldValues.schemaMerge)(schema, state);
    }
  });
});

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = Injector;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = GraphQLTag;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = ReactApollo;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = ReactDom;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = schemaFieldValues;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map