/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "../dist/bundle.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(6);

undefined;

__webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(8), __webpack_require__(9), __webpack_require__(10), __webpack_require__(11), __webpack_require__(12), __webpack_require__(13), __webpack_require__(14)]; (function (avReset, tabs, loadSongs, loadPage, loadHotSongs, search) {
  avReset();
  tabs('.tabs');
  loadSongs();
  loadPage();
  loadHotSongs();
  search();
}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/autoprefixer-loader/index.js!./home.css", function() {
			var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/autoprefixer-loader/index.js!./home.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "body{\n    font-size: 15px;\n}\ninput[type=search] {\n    -webkit-appearance: none;\n    border: 0;\n    border-radius: 0;\n    outline: 0;\n}\ninput::-webkit-search-decoration,\ninput::-webkit-search-cancel-button {\n    display: none;\n}\n.sectionTitle{\n    font-size: 17px;\n    line-height: 1;\n    padding-left: 8px;\n    margin: 20px 0 8px;\n    color: rgb(51, 51, 51);\n    position:relative;\n}\n.sectionTitle::before{\n    content:'';\n    position:absolute;\n    border-left: 2px solid #D43C33;\n    height: 16px;\n    top: -1px;\n    left: 0\n}\n.sticky{\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 4;\n    background: white;\n}\nsection.topbar{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #D43C33;\n    padding: 17px 10px;\n}\nsection.topbar .logo>svg{\n    width: 142px;height: 25px;\n    vertical-align: top;\n}\nsection.topbar > a{\n    color: white;\n    display: inline-block;\n    padding: 5px 11px;\n    line-height: 20px;\n    position: relative;\n    font-size: 15px;\n}\nsection.topbar > a::after{\n    content:'';\n    position: absolute;\n    top:0;\n    left: 0;\n    width: 200%;\n    height: 200%;\n    border: 1px solid rgba(255,255,255,.7);\n    border-radius: 35%/100%;\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n}\n\n/* tabs-nav */\n.tabs-nav{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    border-bottom: 1px solid rgba(204,204,204,.3);\n}\n.tabs-nav>li{\n    width: 33.333333%;\n    text-align: center;\n    line-height: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.tabs-nav>li>.text{\n    padding: 10px 5px;\n    position: relative;\n    top: 1px;\n}\n.tabs-nav >li.active{\n    color: #D43C33;\n}\n.tabs-nav >li.active>.text::after{\n    content: '';\n    position: absolute;\n    height: 2px;\n    background: #D43C33;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n}\n\nol.tabContent{\n    margin-top:103px;\n}\nol.tabContent>li{\n    display: none;\n}\nol.tabContent>li.active{\n    display: block;\n}\n.noCollapse::before{\n    content:'';\n    display: table;\n}\n.noCollapse::after{\n    content:'';\n    display: table;\n}\n.loading-img {\n    text-align: center;\n}\n.loading-img img{\n    vertical-align: middle;\n}\n\nsection.playLists{\n}\nsection.playLists > ol.songs{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\nsection.playLists > ol.songs > li{\n    width: 32.8%;\n    margin: 8px 0;\n    position: relative;\n}\nsection.playLists > ol.songs > li p{\n    font-size: 13px;\n    padding: 1px 2px 0 6px;\n    line-height: 1.2;\n    color: #333;\n    text-overflow: -o-ellipsis-lastline;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n}\nsection.playLists > ol.songs > li img{\n    width: 100%;\n}\nsection.playLists > ol.songs .cover::after {\n    content: \" \";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 20px;\n    z-index: 2;\n    background-image: linear-gradient(180deg,rgba(0,0,0,.2),transparent);\n}\nsection.playLists > ol.songs .cover >span{\n    position: absolute;\n    right: 5px;\n    top: 2px;\n    z-index: 3;\n    padding-left: 13px;\n    color: #fff;\n    font-size: 12px;\n    background-position: 0;\n    background-repeat: no-repeat;\n    background-size: 11px 10px;\n    text-shadow: 1px 0 0 rgba(0,0,0,.15);\n    background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PGcgb3BhY2l0eT0iLjE1Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwNDAwMDAiIGQ9Im0yMiAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvZz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZmYiIGQ9Im0yMCAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvc3ZnPg==);\n}\n\nsection.songs{\n}\nsection.songs > .list >li{\n    position: relative;\n    border-bottom: 1px solid #f4f4f5;\n    margin-left: 10px;\n    padding-bottom: 6px;\n    padding-top: 5px;\n}\nsection.songs > .list >li >a >h3{\n    font-size: 17px;\n    padding-top: 1px;\n}\nsection.songs > .list >li >a >p{\n    font-size: 12px;\n    color: #888;\n    position: relative;\n    padding-bottom: 1px;\n}\nsection.songs > .list .sq>svg{\n    vertical-align: bottom;\n}\nsection.songs > .list .playButton{\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    -webkit-transform:translateY(-50%);\n            transform:translateY(-50%);\n}\nsection.songs > .list .playButton >svg{\n    width: 22px;\n    height: 22px;\n    color:#aaa;\n}\n\n\nsection.art{\n    padding-top: 69px;\n    padding-bottom: 18px;\n    background: transparent url(https://i.loli.net/2017/08/25/599f862b9c98d.png) no-repeat center;\n    background-size: cover;\n    text-align: center;\n}\nsection.art svg{\n    width: 230px;\n    height: 44px;\n}\nsection.art .link-wrapper > .openapp{\n    display: inline-block;\n    border: 1px solid;\n    line-height: 38px;\n    font-size: 16px;\n    width:80%;\n    border-radius: 20px;\n    color:#D43C33;\n    margin-top: 10px;\n    margin-bottom: 2px;\n}\nsection.art >p{\n    font-size: 12px;\n    color: #888;\n    -webkit-transform: scale(.75);\n            transform: scale(.75);\n    padding-bottom: 15px;\n\n}\n\n/*page2*/\n.page-2 .hot{\n}\n.hottop{\n    position: relative;\n    padding-top: 38.9%;\n    background-size: contain;\n    background-image: url(https://i.loli.net/2017/08/27/59a2ba0edd1dc.jpg);\n}\n.hottop >.hotopct{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding-left: 20px;\n    background: rgba(0,0,0,.2);\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n}\n.hotopct >.hoticon{\n    width: 142px;\n    height: 67px;\n    background: transparent url(https://i.loli.net/2017/08/24/599db480dee4c.png) no-repeat -24px -30px;\n    background-size: 166px 97px;\n}\n.hotopct >.hottime{\n    margin-top: 10px;\n    color: hsla(0,0%,100%,.8);\n    font-size: 12px;\n    -webkit-transform: scale(.91);\n            transform: scale(.91);\n    -webkit-transform-origin: left top;\n            transform-origin: left top;\n}\n\n.hotcont ol >li >a{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding-left: 10px;\n}\n.hotcont >ol >li >a .number{\n    font-family: Helvetica, sans-serif, monospace\n}\n.hotcont >ol >li:nth-child(1) > a > .number,\n.hotcont >ol >li:nth-child(2) > a > .number,\n.hotcont >ol >li:nth-child(3) > a > .number{\n    color:#d33a31;\n}\n.hotcont ol >li >a .number{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n        align-items: center;\n    width: 28px;\n    font-size: 17px;\n    color: #999;\n}\n.hotcont ol >li >a .songinfo{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    border-bottom: 1px solid #f4f4f5;\n}\n.hotcont ol >li >a .songinfo::after{\n    position: absolute;\n    z-index: 2;\n    content: \"\";\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    border: 0 solid rgba(0,0,0,.1);\n}\n.hotcont .content{\n    padding-top: 6px;\n    padding-bottom: 7px;\n}\n.hotcont .songinfo .title{\n    font-size: 17px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    word-break: normal;\n}\n.hotcont .songinfo .info{\n    font-size: 12px;\n    color: #888;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    word-break: normal;\n}\n.hotcont .songinfo .info .sq{\n    display: inline-block;\n    width: 12px;\n    height: 8px;\n    margin-right: 5px;\n    vertical-align: -0.22em;\n}\n.hotcont .playbutton{\n    display: -webkit-box;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n        align-items: center;\n    padding: 0 10px;\n}\n.hotcont .btn{\n    display: inline-block;\n    width: 22px;\n    height: 22px;\n    background: url(//s3.music.126.net/m/s/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880) no-repeat;\n    background-size: 166px 97px;\n    background-image:url(//s3.music.126.net/m/s/img/index_icon_3x.png?49a82fee3e0fc602e9c8b25df2bda159);\n    background-position: -24px 0;\n}\n.hotend{\n    height: 55px;\n    line-height: 55px;\n    text-align: center;\n}\n.hotend >span{\n    display: inline-block;\n    color: #999;\n    padding-right: 14px;\n    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNCAyMiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSJub25lIiBzdHJva2U9IiNjY2MiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJtMSAxbDEwIDEwLTEwIDEwIi8+PC9zdmc+) 100% no-repeat;\n    background-size: 7px 12px;\n    font: 14px/1.5 Helvetica,sans-serif;\n    outline: 0;\n}\n\n\n\n/*page3*/\n.page-3 .seek{\n    padding: 15px 10px;\n    border-bottom: 1px solid #e8e8e8;\n}\n.seek .inputCover{\n    position: relative;\n    width: 100%;\n    height: 30px;\n    padding: 0 30px;\n    background: #ebecec;\n    border-radius: 30px;\n}\n.seek .u-svg{\n    display: inline-block;\n    vertical-align: middle;\n    background-position: 0 0;\n    background-size: contain;\n    background-repeat: no-repeat;\n}\n.seek .u-svg-search{\n    position: absolute;\n    left: 0;\n    top: 9px;\n    margin: 0 8px;\n    vertical-align: middle;\n}\n.u-svg-search{\n    width: 13px;\n    height: 13px;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxLDIzLjUzNWwtMS40MTQsMS40MTRsLTcuMzE1LTcuMzE0CgkJQzE0LjcwOSwxOS4xMDcsMTIuNDYsMjAsMTAsMjBDNC40NzcsMjAsMCwxNS41MjMsMCwxMEMwLDQuNDc3LDQuNDc3LDAsMTAsMGM1LjUyMywwLDEwLDQuNDc3LDEwLDEwYzAsMi4zNDItMC44MTEsNC40OS0yLjE2LDYuMTk1CgkJTDI1LjE4MSwyMy41MzV6IE0xMCwyYy00LjQxOCwwLTgsMy41ODItOCw4czMuNTgyLDgsOCw4YzQuNDE4LDAsOC0zLjU4Miw4LThTMTQuNDE4LDIsMTAsMnoiLz48L3N2Zz4=);\n}\n.seek > .inputCover > input {\n    width: 100%;\n    height: 30px;\n    line-height: 18px;\n    background: transparent;\n    font-size: 14px;\n    color: #333;\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text;\n    cursor: auto;\n}\ninput {\n    font: 14px/1.5 Helvetica,sans-serif;\n    outline: 0;\n    border: none;\n}\n.seek >  .inputCover > ::-webkit-input-placeholder{\n    font-size:14px;\n    color:#c9c9c9;\n}\n.inputCover .close{\n    display: block;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 30px;\n    height: 30px;\n    line-height: 28px;\n    text-align: center;\n}\n.u-svg-empty{\n    width: 14px;\n    height: 14px;\n    background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjYmNiZGJkIiBkPSJNMTQsMGM3LjczMiwwLDE0LDYuMjY4LDE0LDE0YzAsNy43MzItNi4yNjgsMTQtMTQsMTQKCVMwLDIxLjczMiwwLDE0QzAsNi4yNjgsNi4yNjgsMCwxNCwweiIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ViZWNlYiIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0ibTE5IDlsLTEwIDEwIi8+PHBhdGggZD0ibTkgOWwxMCAxMCIvPjwvZz48L2c+PC9zdmc+)\n}\n.close .u-svg-empty{\n    display: none;\n    vertical-align: middle ;\n}\n.close .u-svg-empty.active{\n    display: inline-block;\n}\n\n.searchPage .searchContent{\n    display: none;\n}\n.searchPage .searchContent.active{\n    border-bottom:1px solid #e8e8e8;\n    display: block;\n}\n.searchPage .searchContent >h3{\n    position: relative;\n    height: 50px;\n    margin-left: 10px;\n    padding-right: 10px;\n    font-size: 15px;\n    line-height: 50px;\n    color: #507daf;\n    border-bottom: 1px solid #f3f4f5;\n}\n\n.searchPage .result >li{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n        align-items: center;\n    height: 45px;\n    padding-left: 10px;\n    position: relative;\n}\n.searchPage .result >li::after{\n    content:'';\n    display: block;\n    position: absolute;\n    height:1px;\n    width:100%;\n    background:rgb(243, 244, 245);\n    bottom: 0;\n    left: 32px;\n}\n.searchPage .result >li >a{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n}\n.searchPage .result >li >a >i{\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n        flex: 0 0 auto;\n    margin-right: 7px;\n}\n.searchPage .result >li >a >i.u-svg-search{\n    width: 15px;\n    height: 15px;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxLDIzLjUzNWwtMS40MTQsMS40MTRsLTcuMzE1LTcuMzE0CgkJQzE0LjcwOSwxOS4xMDcsMTIuNDYsMjAsMTAsMjBDNC40NzcsMjAsMCwxNS41MjMsMCwxMEMwLDQuNDc3LDQuNDc3LDAsMTAsMGM1LjUyMywwLDEwLDQuNDc3LDEwLDEwYzAsMi4zNDItMC44MTEsNC40OS0yLjE2LDYuMTk1CgkJTDI1LjE4MSwyMy41MzV6IE0xMCwyYy00LjQxOCwwLTgsMy41ODItOCw4czMuNTgyLDgsOCw4YzQuNDE4LDAsOC0zLjU4Miw4LThTMTQuNDE4LDIsMTAsMnoiLz48L3N2Zz4=);\n}\n.searchPage .result >li >span{\n    display: inline-block;\n    -webkit-box-flex: 1;\n    -ms-flex: 1;\n        flex: 1;\n    width: 1%;\n    padding-right: 10px;\n    font-size: 15px;\n    line-height: 45px;\n    color: #333;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    word-break: normal;\n}\n\n.searchPage .hotResearch{\n    padding:15px 10px 0;\n    margin-top:-1px;\n}\n.searchPage .hotResearch >h3{\n    font-size:12px;\n    line-height:12px;\n    color:#666;\n}\n.searchPage .hotResearch >ul{\n    margin:10px 0 7px;\n}\n.searchPage .hotResearch >ul >li{\n    display:inline-block;\n    height:32px;\n    margin-right: 4px;\n    margin-bottom: 8px;\n    padding: 0 14px;\n    font-size: 14px;\n    line-height: 32px;\n    color: #333;\n    position:relative;\n    cursor:pointer;\n}\n.searchPage .hotResearch >ul >li:after{\n    content:'';\n    width: 200%;\n    height: 200%;\n    border-radius:32px;\n    -webkit-transform:scale(.5);\n            transform:scale(.5);\n    border:1px solid #d3d4da;\n    position:absolute;\n    top: 0;\n    left: 0;\n    -webkit-transform-origin: top left;\n            transform-origin: top left;\n}\n\n#searchResult div{\n    padding:20px 0;\n    text-align:center;\n}\n\n.hot-list >ol >li >a{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding-left: 10px;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n.hot-list .song-info{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    border-bottom: 1px solid #f4f4f5;\n}\n.hot-list >ol >li >a .song-info::after{\n    position: absolute;\n    z-index: 2;\n    content: \"\";\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    border: 0 solid rgba(0,0,0,.1);\n}\n.hot-list >ol >li >a .song-info{\n    padding-top:6px;\n    padding-bottom: 7px;\n}\n.song-info .hot-title{\n    font-size: 17px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    word-break: normal;\n}\n.song-info .hot-cont .hot-info{\n    font-size: 12px;\n    color: #888;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    word-break: normal;\n}\n.song-info .hot-cont .hot-info .sq{\n    display: inline-block;\n    width: 12px;\n    height: 8px;\n    margin-right: 5px;\n    vertical-align: -0.22em;\n}\n.song-info .play-button{\n    display: -webkit-box;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n        align-items: center;\n    padding: 0 10px;\n}\n.play-button .btn{\n    display: inline-block;\n    width: 22px;\n    height: 22px;\n    background: url(//s3.music.126.net/m/s/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880) no-repeat;\n    background-size: 166px 97px;\n    background-image:url(//s3.music.126.net/m/s/img/index_icon_3x.png?49a82fee3e0fc602e9c8b25df2bda159);\n    background-position: -24px 0;\n}\n\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/autoprefixer-loader/index.js!./reset.css", function() {
			var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/autoprefixer-loader/index.js!./reset.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n*{margin:0;padding:0;}\n*{box-sizing: border-box;}\n*::after{box-sizing: border-box;}\n*::before{box-sizing: border-box;}\n\na{color: inherit; text-decoration: none;}\nul,ol{list-style: none;}\nh1,h2,h3,h4,h5,h6{ font-weight: normal; }\n.icon {\n    width: 1em; height: 1em;\n    vertical-align: -0.15em;\n    fill: currentColor;\n    overflow: hidden;\n}\n", ""]);

// exports


/***/ })
/******/ ]);