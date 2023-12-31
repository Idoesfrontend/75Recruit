module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/3jn":
/***/ (function(module, exports) {

module.exports = require("@formcarry/react");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "1DYk":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RBZ5");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4GSm":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/MengSmallQR-min-74de2ec0893099ac2b93cd0c266e6725.jpg";

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_storyblok_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xKHc");
/* harmony import */ var _assets_images_favicons_apple_touch_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("92EB");
/* harmony import */ var _assets_images_favicons_apple_touch_icon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_favicons_apple_touch_icon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_favicons_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("EAuE");
/* harmony import */ var _assets_images_favicons_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_favicons_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_favicons_favicon_16x16_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Cc6L");
/* harmony import */ var _assets_images_favicons_favicon_16x16_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_favicons_favicon_16x16_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_favicons_android_chrome_512x512_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("dwAT");
/* harmony import */ var _assets_images_favicons_android_chrome_512x512_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_favicons_android_chrome_512x512_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_favicons_android_chrome_192x192_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("z9xo");
/* harmony import */ var _assets_images_favicons_android_chrome_192x192_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_favicons_android_chrome_192x192_png__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Layout = props => {
  const {
    0: scrollTop,
    1: setScrollTop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  });
  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    crossOrigin: "anonymous"
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), __jsx("meta", {
    name: "google-site-verification",
    content: "YQuviCmzUcnl9xkDQ74xO1P8GedBFf9szGJO-P1Fjlk"
  }), __jsx("title", null, props.pageTitle), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: _assets_images_favicons_apple_touch_icon_png__WEBPACK_IMPORTED_MODULE_3___default.a
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: _assets_images_favicons_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_4___default.a
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: _assets_images_favicons_favicon_16x16_png__WEBPACK_IMPORTED_MODULE_5___default.a
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: _assets_images_favicons_android_chrome_192x192_png__WEBPACK_IMPORTED_MODULE_7___default.a
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "512x512",
    href: _assets_images_favicons_android_chrome_512x512_png__WEBPACK_IMPORTED_MODULE_6___default.a
  })), __jsx("div", {
    className: "page-wrapper"
  }, props.children), _utils_storyblok_service__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].bridge());
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "8lYe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_logo_1_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vB+F");
/* harmony import */ var _assets_images_logo_1_1_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_1_1_png__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => {
  return __jsx("div", null, __jsx("footer", {
    className: "site-footer"
  }, __jsx("div", {
    className: "site-footer__bottom"
  }, __jsx("div", {
    className: "text-center"
  }, __jsx("p", null, "\xA9 copyright 2022 by 75Recruit.com")))));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "92EB":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0AQMAAAAHA5RxAAAABlBMVEUdou0ipO0bxIg/AAAAAnRSTlP8AiCUAqUAAAM8SURBVFjDvdhNjuQoEAXgR7Ngac0JvO1b+ChzkzE3mV53X8I3GUaaA7C0WsivF0RA4DT1I426dvXJRQbghBcFPv5k/D7/hj+f/ACwvXoBAP/qB2D+oPkFAEC4e66Ou0fxbXQZpg2kfqq70ZM69sFj89V6G14/QLx099Zzd1hPxnfj0fhq3DCW7sW6735ad91tOUD3NPjePA6+NR8Yi/o18TK6Vz9Hd+pjmYB6+qDv4vHm28RXcfn1yw+pYKl+AX/8w8u1ykL1gpX8iPvq591d9Xx3VE8f9p0Z5PHi25seR4/AygyyvnrFkd8BhNP6TxZX13stwMIM2fXm+wUE46c4KV7uHuGbO+bqjjyqn+Ke/34DPHnANffMnryAQKbquXpyJGPdE1j3JI+6t2BGrSLw8CQTFvJ89Sy+qy/VT6xkqX5Uj57yChRgU1/VN/IaHJ7kZTyKO3UCq/pG4K/w4Jes8U4yYs2ob/N+1fdDfGleZLS3/OjOF9ftHTyIu8GT8fzovvpuvKgHgJe4b57gsxPPzQMTAvngB+r6j77wQJh43d+N5Amfccr2IoxeZHvlWBufV0/iTnxjPQbj7Xn1+hU0z18AyPPu+yVF3fzrcAh3x7se/if3n3T3Scewbnd3si/jpfD4/Gb3ceLLmAfae7KbK8y4s1fk0t23+KOXRfVg78LQvxfB3qm++2LvZnfz3Bdi8HJzireB9vZ9X4bsst28tAmPrlNb5TyJ6lkXIsp5JU6dsJ5jGv7S4Edzyjh6fgbakNjPVW8iKxb1ZJz//d3O7aSZ0CTXRz/bPfIxl/vl1GzZ3T263F/FxGlZV70f1ye/2ga0aBweXe5f9pStmXYR948ex4UomgeO0c+eN3Bbhk1yyzDhpLkljxM+NOfkccJR/Rwn1nJUGSZ2tdxVYAstzS/YQs+W3whbaGo5kNEWevTceNiCYs+ZyRR0mVyaTEHFeDYFZZNvT9MwHSYnF8B+l7zN4b4Pvwy5vQ/f/Wh9ThxyftKBytgXZG0H0thHSCTTKHfrU758743T233NtA+a9U2zPmvWl123j32v75v2ibO+ctaHzvrWaZ8764tnffS075716dO+/vf+n+EXGqABXvJOJFgAAAAASUVORK5CYII="

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "Cc6L":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACbklEQVQ4T32TXUiTYRTH/+d5t9m8KNzEzOY29Uot+rgoqKsuvBHRQghE3AjUCroQIQoi+riIroQgIos0l3YToaDkRV0GRR9EkpcL8p17o/YhgUlz7/OPLSdzjp7LP+f8zjnP+R9BmRccTwezhm4D2SiiSPKr7VAvrd6qb6XhUizUjqeDToceAaULoCoJ1gBmssafYau3bhO0CfBPpo5TcxZAVbmuirSUJjqWw943OS0PCDz83qArnB9Jdc1QOk5KhoKLovVNgazawk6BXN6EEKks5JAV9izlAfWR1DTAk4DMAvxhRj2DvqbkYixU3eyb+HldRHUD2AfyigYXlBjPQc6ZYW+3bFSPFrohcQdKzQjteVHoEI04qbxaOBXr8wQhwvpI4i4g57MZ1Si+yeSAaDzYaI+26GZF4yrAThCvFfBOlB7VNJ6aIc+JXJwvkjgqkLcE+sU3kbgtIpc2AF9Ec4gKc4BkCJ5R4LqGOifAYTPq2YsboutmWWmkU6sQuVUKyABwFsYps/PTSyHvs7rReKXhrvgH8EeSgwRGAYyZOzyDvl+xXeJy94ByFoL9JRBTDOMAbTQB9vv8CIHISoOGHRXi0VLYO1Cc4H9stUK52ig4CI0aEUmB2ftUxikQQ1lKQ/Ea27WoI8t9VZ//ZyT/mNVCh+sDwHkzVN2dB+yZSgcctv4E8Ddpt8fCuxfKQQKRRLOGvACxc4uR8m58kjymmft9uEHcs6Em4+7lxRYAK2s1rQ5l9JC8AMqaRomVC9Vqx62g0+EaAdEFYNsxCTC9ThnOWbiQs+UaC2JuJCOr20SkMacRjNoZ9crq337OfwGlGhgrxRaQ5gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "EAuE":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUdou0cou1ja+cjAAAAAnRSTlPqCavebvoAAACASURBVAgdBYDBCYMwFIY/KdBjRnCIDuAqpR1BoEcfCGSNjhIawDUMWSChF8GQX5AkVJyQDaKDaDBxwEjh68jn7kh/84THGglzzoTXnLHnnLDfp2IxV8zWinGrGENlDVR8IbF13mw6M1GKJMmzS56ydMcxtZF23yc6LMgGoeKEJF1oE1CUhMr51gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "G96P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _BlockTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("R/8b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formcarry_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/3jn");
/* harmony import */ var _formcarry_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_formcarry_react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Contact = () => {
  // const [show, setShow] = useState(false);
  //
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const {
    state,
    submit
  } = Object(_formcarry_react__WEBPACK_IMPORTED_MODULE_2__["useForm"])({
    id: 'vm25FX26qn'
  });

  if (state.submitted) {
    return __jsx("div", null, "Thank you! We received your submission. We will be in contact in 24 hours or less.");
  } // function handleSubmit(event) {
  //   alert("Thank you for submitting");
  //   event.preventDefault();
  // }


  return __jsx("section", {
    className: "contact-one"
  }, __jsx("div", {
    className: "container mx-auto"
  }, __jsx("div", {
    className: "row mx-auto"
  }, __jsx("div", {
    className: "col-lg-12"
  }, __jsx("form", {
    onSubmit: submit,
    className: "contact-form-validated contact-one__form"
  }, __jsx(_BlockTitle__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
    textAlign: "left",
    paraText: "Contact Now",
    titleText: `Have Question? Write \n a Message [Anything!]`
  }), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6"
  }, __jsx("input", {
    type: "text",
    placeholder: "Name",
    name: "name"
  })), __jsx("div", {
    className: "col-lg-6"
  }, __jsx("input", {
    id: "email",
    type: "email",
    placeholder: "Email Address",
    name: "email"
  })), __jsx("div", {
    className: "col-lg-6"
  }, __jsx("input", {
    type: "text",
    placeholder: "Subject",
    name: "subject"
  })), __jsx("div", {
    className: "col-lg-6"
  }, __jsx("input", {
    type: "text",
    placeholder: "Phone Number",
    name: "phone"
  })), __jsx("div", {
    className: "col-lg-12"
  }, __jsx("textarea", {
    placeholder: "Write Message and please tell us the best way to contact you (Skype/WhatsApp/Email/Phone/Telegram)",
    name: "message"
  })), __jsx("div", {
    className: "col-lg-12 text-left"
  }, __jsx("button", {
    type: "submit",
    className: "thm-btn contact-one__btn"
  }, __jsx("span", null, "Send Message")))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Contact);

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "Mae5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NavLinks = () => {
  const {
    0: dropdownStatus,
    1: setDropdownStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleDropdownStatus = () => {
    setDropdownStatus(!dropdownStatus);
    console.log(dropdownStatus);
  };

  return __jsx("ul", {
    className: "main-nav__navigation-box"
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", null, "Home"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/positions"
  }, __jsx("a", null, "Jobs"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contactus"
  }, __jsx("a", null, "Contact Us"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/china"
  }, __jsx("a", null, "Life In China"))));
};

/* harmony default export */ __webpack_exports__["a"] = (NavLinks);

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "OKey":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_loader_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1DYk");
/* harmony import */ var _assets_images_loader_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_loader_png__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Preloader = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handleStart = url => url !== router.pathname && setLoading(true); // handleComplete event was not firing


    const handleComplete = url => url === router.pathname && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return loading && __jsx("div", {
    className: "preloader"
  }, __jsx("img", {
    src: _assets_images_loader_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    width: "250",
    className: "preloader__image",
    alt: ""
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Preloader);

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Ov0G":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/RonSmallQR-min-61dab589dbe84111470567d0b8d701a8.jpg";

/***/ }),

/***/ "R/8b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BlockTitle = props => {
  return __jsx("div", {
    className: `block-title text-${props.textAlign} `
  }, __jsx("p", null, props.paraText), __jsx("h3", null, props.titleText), __jsx("p", {
    style: {
      'color': '#5e5e5e',
      'fontSize': '14px',
      'paddingTop': '5px',
      'fontWeight': '300',
      'lineHeight': '1.4rem'
    }
  }, props.text));
};

/* harmony default export */ __webpack_exports__["a"] = (BlockTitle);

/***/ }),

/***/ "RBZ5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OKey");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5Yp1");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("b0oO");
/* harmony import */ var _components_MobileMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("htHT");
/* harmony import */ var _components_FAQ__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("o4Gv");
/* harmony import */ var _components_Team__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("uUoN");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("8lYe");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("G96P");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const ContactUs = () => __jsx("div", null, __jsx(_components_Preloader__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
  pageTitle: "75Recruit - Contact"
}, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
  btnClass: "main-nav__btn-two",
  extraClassName: "site-header-one__fixed-top"
}), __jsx(_components_MobileMenu__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null), __jsx(_components_FAQ__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null), __jsx(_components_Team__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null)));

/* harmony default export */ __webpack_exports__["default"] = (ContactUs);

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "b0oO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Mae5");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_logo_1_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vB+F");
/* harmony import */ var _assets_images_logo_1_1_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_1_1_png__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const HeaderHome = props => {
  const {
    0: sticky,
    1: setSticky
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: realMobile,
    1: setRealMobile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const realToggle = () => {
    setRealMobile(!realMobile);
  };

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("scroll", handleScroll);
    mobileMenu();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const mobileMenu = () => {
    document.querySelector(".side-menu__toggler, gg-menu").addEventListener("click", function (e) {
      document.querySelector(".side-menu__block").classList.toggle("active");
      e.preventDefault();
    }); //Close Mobile Menu

    let sideMenuCloser = document.querySelectorAll(".side-menu__close-btn, .side-menu__block-overlay");
    sideMenuCloser.forEach(sideMenuCloserBtn => {
      sideMenuCloserBtn.addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.remove("active");
        e.preventDefault();
      });
    });
  };

  return __jsx("header", {
    className: `site-header-one stricky  ${props.extraClassName} ${sticky === true ? "stricky-fixed stricked-menu" : " "}`
  }, __jsx("div", {
    className: "container-fluid"
  }, __jsx("div", {
    className: "site-header-one__logo"
  }, __jsx("a", {
    href: "/"
  }, __jsx("img", {
    src: _assets_images_logo_1_1_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    width: "129",
    alt: ""
  })), __jsx("div", {
    onClick: realToggle,
    className: "side-menu__toggler"
  }, __jsx("i", {
    className: "gg-menu"
  }))), __jsx("div", {
    className: "main-nav__main-navigation"
  }, __jsx(_NavLinks__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)), __jsx("div", {
    className: "main-nav__right"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contactus"
  }, __jsx("a", {
    className: `thm-btn ${props.btnClass}`
  }, __jsx("span", null, "I have questions about China"))))));
};

/* harmony default export */ __webpack_exports__["a"] = (HeaderHome);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  return {
    src: loader({
      src,
      quality,
      width: widths[last]
    }),
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ')
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "dwAT":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, addBasePath(addLocale(resolvedAs, this.locale)), routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (options.scroll ? {
        x: 0,
        y: 0
      } : null)).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "htHT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Mae5");
/* harmony import */ var _assets_images_shapes_close_1_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wLjQ");
/* harmony import */ var _assets_images_shapes_close_1_1_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_shapes_close_1_1_png__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const MobileMenu = () => {
  return __jsx("div", {
    className: "side-menu__block"
  }, __jsx("div", {
    className: "side-menu__block-overlay custom-cursor__overlay"
  }, __jsx("div", {
    className: "cursor"
  }), __jsx("div", {
    className: "cursor-follower"
  })), __jsx("div", {
    className: "side-menu__block-inner "
  }, __jsx("div", {
    className: "side-menu__top justify-content-end"
  }, __jsx("a", {
    href: "#",
    className: "side-menu__toggler side-menu__close-btn"
  }, __jsx("img", {
    src: _assets_images_shapes_close_1_1_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: ""
  }))), __jsx("nav", {
    className: "mobile-nav__container"
  }, __jsx(_NavLinks__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)), __jsx("div", {
    className: "side-menu__sep"
  }), __jsx("div", {
    className: "side-menu__content"
  }, __jsx("p", null, "Come experience consultative recruiting. We answer your questions with real answers - no sugar coating."), __jsx("p", null, __jsx("a", {
    href: "mailto:Apply75Recruit@outlook.com"
  }, "Team@75Recruit.com"), " ", __jsx("br", null), __jsx("a", {
    href: "tel:+86-151-386-93451"
  }, "+86-151-386-93451"), " ", __jsx("br", null), __jsx("a", {
    href: "tel:86-155-155-12405"
  }, "+86-151-386-93451 (Skype/WhatsApp)")))));
};

/* harmony default export */ __webpack_exports__["a"] = (MobileMenu);

/***/ }),

/***/ "iuXR":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAAKhCAMAAADOsiMoAAAAn1BMVEUAAAD29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vv29vt8b2JxAAAANHRSTlMAA/z4Bu4P9Csk6gvl01JMxLEf27idkBQciTHPbVs7cWdBNr+WfKZG4NfJd2Cighj6vKpWEWYtYQAADJNJREFUeNrs2oteokAUx/EjhEgJaIiblZfybrhW/t//2bbdbmuKg6VwhjnfR/h9GDgzA9W81QWJ/fDCcmZ+oxl3HpKgdynJtmGLMx8uO4OwViXxBumcxWS8vpYniwhKs6fR7fSyQgZDRu5NfHtn6grEQWbN8dTAUjhcNOn3zsgk+B670Ql/kSnwA/5obUYo/JDfDsr/ksLPWY1xr9wTAo7DeU5WVFo4GmsxvqZywlHNRtMyLjwcmxOHpRuicALusmSdcBpOXKZ1h5Opt++pJHBK0fiSygCnZQ2TEpza4eTcUY80hzz4fb03wsiHvdT5cUJubgbaHhcgR27bIy0hX61QxxkTeZsP9JsJkD+nc0V6QREelzXSCQrS1GkkQGEWIekCBboJSA8olL/WYiJAweZdDTKhcFHCPhMYiLg/TWDB5/2lAxMNznMT2Gjxvf8FIxOuJyngxBrxPOYFL06f490vuIkY7lXAz5DdGxwMWTGzH8LAkvvA6tUEpuZT4gNsPfP52QJ88Vlz4MxnsqEDbzGLERzMnXepeGCvWfxVJvhzB3QYEyMBQ48OYWYkuP0KZWdoJGBRo8yMjQR7XKGMzI0ELDzKxuRIcG8pE6MjAU9XlIHhkeAEpGZ6JCCukopEQnRPChIJeHyg/STSX60V7SOR/qlPaQ+J9Mr6XaFUEundcEVpJNKH+h2lkEifrD7tJpH+N7mgXSTSBt+jHSTSJiekbRLpqx2zgETa0qrSFxJpW1SjTRJpB2dKGyRSholJIu0Wn9EniZTiqUofJFKauUfvJFKq8x69kUjp7DW9kkgZPnISaa92hV5IpP2ez4hIIikMq0QS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"

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "o4Gv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: ./components/BlockTitle.js
var BlockTitle = __webpack_require__("R/8b");

// CONCATENATED MODULE: ./components/AccordionItem.js
var __jsx = external_react_default.a.createElement;


const AccordionItem = props => {
  const {
    0: status,
    1: setStatus
  } = Object(external_react_["useState"])(props.status);

  const handleClick = () => {
    setStatus(!status);
  };

  return __jsx("div", {
    className: `accrodion ${status === true ? "active" : ""}`
  }, __jsx("div", {
    className: "accrodion-inner"
  }, __jsx("div", {
    className: "accrodion-title",
    onClick: handleClick
  }, __jsx("h4", null, props.title)), status === true ? __jsx("div", {
    className: "accrodion-content"
  }, __jsx("div", {
    className: "inner"
  }, __jsx("p", null, props.content))) : null));
};

/* harmony default export */ var components_AccordionItem = (AccordionItem);
// EXTERNAL MODULE: ./assets/images/shapes/faq-bg-1-1.png
var faq_bg_1_1 = __webpack_require__("tb2O");
var faq_bg_1_1_default = /*#__PURE__*/__webpack_require__.n(faq_bg_1_1);

// CONCATENATED MODULE: ./components/FAQ.js
var FAQ_jsx = external_react_default.a.createElement;






const FAQ = props => {
  return FAQ_jsx("section", {
    className: "faq-one"
  }, FAQ_jsx("img", {
    src: faq_bg_1_1_default.a,
    className: "faq-one__bg-shape-1",
    alt: ""
  }), FAQ_jsx(external_react_bootstrap_["Container"], null, FAQ_jsx(BlockTitle["a" /* default */], {
    textAlign: "center",
    paraText: "Frequently Asked Questions",
    titleText: `Here are some of the most common \n Questions that we get`
  }), FAQ_jsx("div", {
    className: "accrodion-grp faq-accrodion"
  }, FAQ_jsx(components_AccordionItem, {
    title: "Do you hire Non-native english speakers? (Passport not from the US, Ireland, Canada, UK, NZ, Aus, or SA)",
    content: "It is no lie that there are a lot of people working illegaly in China but we do not get involved with that side of the industry. That being said, some schools/provinces can legally get a real teaching visa for non-native speakers if they have a degree from one of the 7 countries listed above. Contact us below to get direct answers",
    status: false
  }), FAQ_jsx(components_AccordionItem, {
    title: "What are the requirements to teach in China with a proper work visa?",
    content: "You must have 3 main things: 1) Bachelors degree in any subject and 2) Clean criminal background 3) Passport from one of the 7 countries and/or degree from one of those countries.",
    status: true
  }), FAQ_jsx(components_AccordionItem, {
    title: "I have no work experience since I just recently finished University - can I still get a job?",
    content: "Yes, we have entry level positions. The nice thing about us is that we have entry level positions in public/private schools and a few universities.",
    status: false
  }), FAQ_jsx(components_AccordionItem, {
    title: "Is there support once I come to China or will I be all alone?",
    content: "We partner with schools based on the support that they provide teachers (or in the cases where they don't have good support like Chinese Universities then we'll be very upfront about what to expect). For the most part, we will go out of our way to make your first 3 months in China as smooth as possible (teaching you how to handle work situations, bank account, Chinese Apps/life, etc). We are always here for questions and the schools that we pick to work with are generally well known for support.",
    status: false
  }), FAQ_jsx(components_AccordionItem, {
    title: "What jobs do you have?",
    content: "Check out our Job page 75Recruit.com/positions",
    status: false
  }))));
};

/* harmony default export */ var components_FAQ = __webpack_exports__["a"] = (FAQ);

/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "tb2O":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "uUoN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BlockTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("R/8b");
/* harmony import */ var _assets_images_shapes_team_1_bg_1_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iuXR");
/* harmony import */ var _assets_images_shapes_team_1_bg_1_1_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_shapes_team_1_bg_1_1_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_shapes_team_1_bg_1_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("yNmV");
/* harmony import */ var _assets_images_shapes_team_1_bg_1_2_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_shapes_team_1_bg_1_2_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Aiso");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_RonSmallQR_min_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Ov0G");
/* harmony import */ var _assets_images_RonSmallQR_min_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_RonSmallQR_min_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_MengSmallQR_min_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4GSm");
/* harmony import */ var _assets_images_MengSmallQR_min_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_MengSmallQR_min_jpg__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Team = () => {
  return __jsx("section", {
    className: "team-one",
    id: "team"
  }, __jsx("img", {
    src: _assets_images_shapes_team_1_bg_1_1_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "team-one__bg-shape-1",
    alt: ""
  }), __jsx("img", {
    src: _assets_images_shapes_team_1_bg_1_2_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "team-one__bg-shape-2",
    alt: ""
  }), __jsx("div", {
    className: "container"
  }, __jsx(_BlockTitle__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    textAlign: "center",
    paraText: "Team Leaders",
    titleText: `Single point contacts will \n provide a better experience for you`
  }), __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-12"
  }, __jsx("div", {
    className: "team-one__single"
  }, __jsx("div", {
    className: "team-one__circle"
  }), __jsx("div", {
    className: "team-one__inner"
  }, __jsx("h3", null, "Teachers"), __jsx("p", null, "English"), __jsx("h6", null, "Ashley@75Recruit.com"), __jsx("h6", null, "+86-151-386-93451", __jsx("span", {
    style: {
      "fontSize": "8px"
    }
  }, "Skype/WhatsApp")), __jsx("h6", null, __jsx("i", {
    className: "gg-phone"
  }), "+86-151-386-93451"), __jsx("div", {
    className: "team-one__image"
  }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
    src: _assets_images_MengSmallQR_min_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    fill: "cover",
    width: 904,
    height: 914
  }))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Team);

/***/ }),

/***/ "vB+F":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-1-1-17d34660a930ad49d70b91efa87f6e4e.png";

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wLjQ":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARBAMAAADJQ1rJAAAAHlBMVEUAAAAIJ0AIJ0AIJ0AIJ0AIJ0AIJ0AIJ0AIJ0AIJ0AWojRZAAAACXRSTlMA1+IoIcqwW07oWMoPAAAAVUlEQVQI12NIdWAAAdcEBkllEINZU4DBaZIBkGU0yQHIE2FgYAHLOAIFjSYCVYMEwUIgwYmFICGQoORMYQYI6JzZwIAQQ1aH0IswD2EHwl6EWxDuAwD4mxT7cz6tTgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xKHc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "storyblok-js-client"
var external_storyblok_js_client_ = __webpack_require__("z38k");
var external_storyblok_js_client_default = /*#__PURE__*/__webpack_require__.n(external_storyblok_js_client_);

// CONCATENATED MODULE: ./lib/storyblok.js

const Storyblok = new external_storyblok_js_client_default.a({
  accessToken: `${process.env.STORYBLOK_75RECRUIT_API_TOKEN}`,
  cache: {
    clear: 'auto',
    type: 'memory'
  }
});
/* harmony default export */ var storyblok = (Storyblok);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./utils/storyblok-service.js
var __jsx = external_react_default.a.createElement;




class storyblok_service_StoryblokService {
  constructor() {
    this.devMode = false; // Always loads draft

    this.token = `${process.env.STORYBLOK_75RECRUIT_API_TOKEN}`;
    this.client = new external_storyblok_js_client_default.a({
      accessToken: this.token,
      cache: {
        clear: 'auto',
        type: 'memory'
      }
    });
    this.query = {};
  }

  getCacheVersion() {
    return this.client.cacheVersion;
  } // ask Storyblok's Content API for content of story


  get(slug, params) {
    params = params || {};

    if (this.getQuery('_storyblok') || this.devMode ||  false && false) {
      params.version = 'draft';
    }

    if (false) {}

    return this.client.get(slug, params);
  } // initialize the connection between Storyblok & Next.js in Visual Editor


  initEditor(reactComponent) {
    if (window.storyblok) {
      window.storyblok.init(); // reload on Next.js page on save or publish event in Storyblok Visual Editor

      window.storyblok.on(['change', 'published'], () => location.reload(true)); // Update state.story on input in Visual Editor
      // this will alter the state and replaces the current story with a current raw story object and resolve relations

      window.storyblok.on('input', event => {
        if (event.story.content._uid === reactComponent.state.story.content._uid) {
          event.story.content = window.storyblok.addComments(event.story.content, event.story.id);
          window.storyblok.resolveRelations(event.story, ['featured-articles.articles'], () => {
            reactComponent.setState({
              story: event.story
            });
          });
        }
      });
    }
  }

  setQuery(query) {
    this.query = query;
  }

  getQuery(param) {
    return this.query[param];
  }

  bridge() {
    if (!this.getQuery('_storyblok') && !this.devMode) {
      return '';
    }

    return __jsx("script", {
      src: '//app.storyblok.com/f/storyblok-latest.js?t=' + this.token
    });
  }

}

const storyblokInstance = new storyblok_service_StoryblokService();
/* harmony default export */ var storyblok_service = __webpack_exports__["a"] = (storyblokInstance);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yNmV":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "z38k":
/***/ (function(module, exports) {

module.exports = require("storyblok-js-client");

/***/ }),

/***/ "z9xo":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADAAQMAAABoEv5EAAAABlBMVEUdou0ipO0bxIg/AAAAAnRSTlP8AiCUAqUAAAN0SURBVFjDxdgxst8oDAfgn9cFRQrKNDvDDXaP4KPBUXKI9PFROAIlBUFbAEICe97LzE7i9ns8EPC3JINeHvxmiF+e4QbME2QAsA8AAMAOuYHb4G5wrlDRH79AHuAWiAPMAuBHQ5ngFaQJTkGcYBSECYeECqyTYJ0buAQkCVZAlGAEBAmnAKhnQtXgGYqGiyFrcAxRg2G43yBoOBiAfb3YV9vWi321bb3YVzshrWA/griC6TDj+/fmjQfH983w4KNDO5q0QW2bk+ycbsC5gicCUekj5r/CRQSivI8YsM3hiECU9hGWCERxHzFgG2GIQHQ3iALOFb4DOMuAwBAAwFbgIEK/CpbuDhe9gKcbIEK/I45CB3qHCHhCvzwMB1ECLoaLYOlHBE6GPMARtRCygtouDQxRARyDr3BEFAQkCRGWqAKWgcoGUUKC6zN1ODrkHbKAAENoN3dAwUXtIDqclGAZbg1ncVQFhHb6CbjPDhHHhAjgoAqvwbbFKRgnKyABC/gN3DsEARkg1H6AQcyhABr8I5QJnoC/OUAJFXDB7EAVcD9/UJlQxsn28/DtlXc1OAbkd7gWyOi3RMM5IH4WDCX0i+MGZAUjFUyI6L+PDg6Zj/ygzmJEuwtfy0h2POKvJQsybFnlf4Hzl+H4AK4NMKA8QH0E/8twfQr+0dmc4ZTJ0wpwMnM3aJfay+xpxG1XGfqccKgqYIUodnHAqUuQBUjsSe4vgJNUDTLB6BLyWkbUuSdJAa/LUeovslOXo3aFEaPhV9+ANEJvcDPUCe29e+gq+eAXMkPtczSIE9qKfX/pR+ii/is9Ad0zf6RZec/a3j5Cz1F5FLIS3CPMBOk26El4gcxgNfTsXFWj0sE/QmylAYmmg/elw7HC0QuWpZkKHe4VZu2jN6sOiMuelFFGxSX0PAqvtITOkJcI0yju8hJhHFCWCMOoEyt0IFxyVqhAKhepBBVImRDUevMshHVPmWbpHNV671lsJ7WsoOt2LxflRAvg5KKcaBqsmJt7gyqb0Fu0GSQbWtmYUJixF84UY7idU0xIsz/kv5kN1sU9mNMtmeHf87U0cZ7o59LEcQselrZP92TnZ1rLtHV9H7WvdWs5P2qR35vq/NaGvzbur63+jN189nPC6weI108W7x855FloSGqA/PSifw3yZ/ntyx/8UqSe/wAncNGnC7nUrQAAAABJRU5ErkJggg=="

/***/ })

/******/ });