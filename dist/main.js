/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	__webpack_require__(3);
	var mdLoader = __webpack_require__(10);
	__webpack_require__(12)(mdLoader);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(4);
	__webpack_require__(8);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?-minimize&-url!./../../node_modules/postcss-loader/index.js!./writ.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?-minimize&-url!./../../node_modules/postcss-loader/index.js!./writ.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n * Writ v1.0.3\n *\n * Copyright © 2015, Curtis McEnroe <curtis@cmcenroe.me>\n *\n * https://cmcenroe.me/writ/LICENSE (ISC)\n */dd,hr,ol ol,ol ul,ul ol,ul ul{margin:0}pre,table{overflow-x:auto}a,ins{text-decoration:none}html{font-family:Palatino,Georgia,Lucida Bright,Book Antiqua,serif;font-size:16px;line-height:1.5rem}code,kbd,pre,samp{font-family:Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:.833rem;color:#111}kbd{font-weight:700}h1,h2,h3,h4,h5,h6,th{font-weight:400}h1{font-size:2.488em}h2{font-size:2.074em}h3{font-size:1.728em}h4{font-size:1.44em}h5{font-size:1.2em}h6{font-size:1em}small{font-size:.833em}h1,h2,h3{line-height:3rem}blockquote,dl,h1,h2,h3,h4,h5,h6,ol,p,pre,table,ul{margin:1.5rem 0 0}pre,table{margin-bottom:-1px}hr{border:none;padding:1.5rem 0 0}table{line-height:calc(1.5rem - 1px);width:100%;border-collapse:collapse}pre{margin-top:calc(1.5rem - 1px)}body{color:#222;margin:1.5rem 1ch}a,header nav a:visited{color:#00e}a:visited{color:#60b}mark{color:inherit;background-color:#fe0}code,pre,samp,tfoot,thead{background-color:rgba(0,0,0,.05)}blockquote,ins,main aside{border:rgba(0,0,0,.05) solid}blockquote,main aside{border-width:0 0 0 .5ch}code,pre,samp{border:rgba(0,0,0,.1) solid}td,th{border:solid #dbdbdb}body>header{text-align:center}body>footer,main{display:block;max-width:78ch;margin:auto}main aside,main figure{float:right;margin:1.5rem 0 0 1ch}main aside{max-width:26ch;padding:0 0 0 .5ch}blockquote{margin-right:3ch;margin-left:1.5ch;padding:0 0 0 1ch}pre{border-width:1px;border-radius:2px;padding:0 .5ch}pre code{border:none;padding:0;background-color:transparent;white-space:inherit}code,ins,samp,td,th{border-width:1px}img{max-width:100%}dd,ol,ul{padding:0 0 0 3ch}ul>li{list-style-type:disc}li ul>li{list-style-type:circle}li li ul>li{list-style-type:square}ol>li{list-style-type:decimal}li ol>li{list-style-type:lower-roman}li li ol>li{list-style-type:lower-alpha}nav ul{padding:0;list-style-type:none}nav ul li{display:inline;padding-left:1ch;white-space:nowrap}nav ul li:first-child{padding-left:0}ins,mark{padding:1px}td,th{padding:0 .5ch}sub,sup{font-size:.75em;line-height:1em}code,samp{border-radius:2px;padding:.1em .2em;white-space:nowrap}\n\n", ""]);
	
	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?-minimize&-url!./../../node_modules/postcss-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?-minimize&-url!./../../node_modules/postcss-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "footer {\n  text-align: right;\n  font-style: italic;\n  padding-top: 4rem;\n}\n\nimg {\n  width: 100%;\n  max-width: 25rem;\n}\n\n", ""]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var lebenslauf = __webpack_require__(11);
	var files = { lebenslauf: lebenslauf };
	module.exports = function (x) {
	  return files[x];
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"lebenslauf\">Lebenslauf</h1>\n<h2 id=\"personalien\">Personalien</h2>\n<p>Luca Nils Schmid<br />\n15.12.1995</p>\n<p>Via Giuvs 17<br />\n7013 Domat/Ems<br />\nSwitzerland</p>\n<p><a href=\"mailto:me@lucaschmid.net\">me@lucaschmid.net</a><br />\n<a href=\"tel:+41792334141\">+41 79 233 41 41</a><br />\n<a href=\"https://lucaschmid.net\">lucaschmid.net</a></p>\n<p><img src=\"https://lucaschmid.net/img/resume/small_bright.jpg\" alt=\"Bewerbungsfoto\"></p>\n<h2 id=\"bildung\">Bildung</h2>\n<p>2012 – 2016 – Lehre als <a href=\"http://www.ict-berufsbildung.ch/ict-lehre/mediamatiker-in-efz/ausbildung/\">Mediamatiker EFZ</a> – <a href=\"http://www.somedia-production.ch/home/\">Somedia Production Web</a>, Chur</p>\n<h2 id=\"berufserfahrung\">Berufserfahrung</h2>\n<p>Am Anfang meiner Lehre habe ich verschiedenen Abteilung der <a href=\"http://www.somedia.ch/home/\">Somedia</a> gearbeitet. Es wurde mir schnell klar, dass mein Interesse beim Programmieren liegt. Im grössten Teil meiner Lehre habe ich deshalb als Full-Stack Web Programmierer mit JavaScript, PHP und CSS gearbeitet.</p>\n<p>Das namhafteste Projekt, an dem ich in meiner Lehre gearbeitet habe, war meine Abschlussarbeit, grossrat.suedostschweiz.ch.</p>\n<h2 id=\"kompetenzen-f-higkeiten\">Kompetenzen &amp; Fähigkeiten</h2>\n<h3 id=\"kompetenzen\">Kompetenzen</h3>\n<ul>\n<li>Integriere mich schnell in neue Umgebungen</li>\n<li>Kontaktfreudig und weltoffen</li>\n<li>Teile mein Wissen gerne und bin lehrfreudig</li>\n<li>Bin sehr lernbegierig</li>\n<li>Gutes logisch-abstraktes Denkvermögen</li>\n</ul>\n<h3 id=\"f-higkeiten\">Fähigkeiten</h3>\n<h4 id=\"sprachen\">Sprachen</h4>\n<ul>\n<li>Englisch</li>\n<li>Deutsch</li>\n</ul>\n<h4 id=\"programmiersprachen\">Programmiersprachen</h4>\n<ul>\n<li><a href=\"http://www.ecma-international.org/ecma-262/6.0/\">JavaScript</a> (ES5/ES6)</li>\n<li><a href=\"https://www.w3.org/Style/CSS/\">CSS</a> &amp; <a href=\"http://sass-lang.com/\">SASS</a>/<a href=\"http://lesscss.org/\">LESS</a></li>\n<li><a href=\"http://php.net/\">PHP</a></li>\n</ul>\n<h4 id=\"weitere-technologien\">Weitere Technologien</h4>\n<ul>\n<li><a href=\"https://www.w3.org/DOM/\">DOM</a></li>\n<li><a href=\"https://facebook.github.io/react/\">React</a></li>\n<li><a href=\"https://angular.io/\">Angular</a></li>\n<li><a href=\"http://cycle.js.org/\">Cycle.js</a></li>\n<li><a href=\"http://riotjs.com\">Riot.js</a></li>\n<li><a href=\"http://meteor.com\">Meteor</a></li>\n<li>JavaScript Build Systems (e.g. <a href=\"https://webpack.github.io/\">Webpack</a>, <a href=\"http://gulpjs.com/\">Gulp</a>, <a href=\"http://browserify.org/\">Browserify</a>)</li>\n<li>JavaScript Libraries (e.g. <a href=\"http://jquery.com/\">jQuery</a>, <a href=\"https://lodash.com/\">lodash</a>)</li>\n<li><a href=\"https://bem.info/\">BEM</a></li>\n<li><a href=\"https://mochajs.org/\">Mocha</a></li>\n<li><a href=\"https://karma-runner.github.io\">Karma</a></li>\n<li><a href=\"http://nodejs.org/\">Node.js</a></li>\n<li><a href=\"http://docker.com/\">Docker</a></li>\n<li><a href=\"http://wordpress.org/\">WordPress</a></li>\n<li><a href=\"http://drupal.org/\">Drupal 7, 8</a></li>\n<li><a href=\"http://www.vim.org/\">VIM</a></li>\n<li><a href=\"https://www.git-scm.com/\">Git</a> / Git Flow</li>\n<li><a href=\"https://www.mysql.com/\">MySQL</a></li>\n<li><a href=\"http://www.mongodb.org/\">MongoDB</a></li>\n<li>Mac OS</li>\n<li>Linux</li>\n<li>Windows</li>\n</ul>\n<h2 id=\"referenzen\">Referenzen</h2>\n<h3 id=\"projekte\">Projekte</h3>\n<h4 id=\"-github-https-github-com-kriegslustig-\"><a href=\"https://github.com/Kriegslustig\">Github</a></h4>\n<p>In meiner Freizeit arbeite ich gerne an Open-Source Projekten. Die meisten dieser Projekte sind auf meiner <a href=\"https://github.com/Kriegslustig\">Github-Page</a>.</p>\n<h4 id=\"-grossrat-suedostschweiz-ch-http-www-suedostschweiz-ch-politik-2016-04-19-mehr-transparenz-starker-franken-und-wirte-ohne-pruefung-twitter-widget-2-somedia-production\"><a href=\"http://www.suedostschweiz.ch/politik/2016-04-19/mehr-transparenz-starker-franken-und-wirte-ohne-pruefung#twitter-widget-2\">grossrat.suedostschweiz.ch</a> – Somedia Production</h4>\n<p>In meiner Lehrabschlussarbeit habe ich die Abstimmungsresultate des Grossen Rats in Chur (Graubünden, Schweiz) visualisiert. Dazu habe ich mit <a href=\"https://symfony.com/\">Symfony</a> ein Backend zur Erfassung der Daten erstellt. Dieses hat eine JSON-API aus den die Daten Strukturiert und effizient ausgelesen werden können. Der grösste Teil der Arbeit war es, die Visualisierung umzusetzen. Dabei habe ich mich für <a href=\"http://cycle.js.org/\">Cycle.js</a> (ein Reactive-UI Framework basierend auf <a href=\"https://github.com/Reactive-Extensions/RxJS\">RxJS</a>) entschieden und die Daten dynamich zu rendern.</p>\n<h4 id=\"-suedostschweiz-ch-http-www-suedostschweiz-ch-somedia-production\"><a href=\"http://www.suedostschweiz.ch/\">suedostschweiz.ch</a> – Somedia Production</h4>\n<p>suedostschweiz.ch ist ein News-Portal an dem ich bei Somedia Production gearbeitet habe. Unter anderem war ich dort für das technische Konzept des Front-Ends verantwortlich.</p>\n<h4 id=\"-elm-make-https-github-com-kriegslustig-meteor-elm-make-foss-freizeit-projekt\"><a href=\"https://github.com/Kriegslustig/meteor-elm-make\">elm:make</a> – FOSS/Freizeit Projekt</h4>\n<p>elm:make ist ein Meteor Package, dass <a href=\"http://elm-lang.org/\">Elm</a>-Code in Meteor Projekten kompiliert.</p>\n<p>Zu einigen meiner Open-Source Projekte habe ich <a href=\"https://lucaschmid.net/projects\">hier</a> etwas geschrieben.</p>\n<h3 id=\"personen\">Personen</h3>\n<p><strong>Fabian Dennler</strong><br />\nInformatik-Lehrer, <a href=\"http://gbchur.ch/\">Gewerbliche Berufsschule Chur</a> &amp; Consultant<br />\n<a href=\"mailto:fabian.dennler@gbchur.ch\">fabian.dennler@gbchur.ch</a><br />\n<a href=\"mailto:root@lucaschmid.net\">Telefon Nummer auf Anfrage</a></p>\n<p><strong>Andreas Kemp</strong><br />\nAbteilungsleiter, Somedia Production Web<br />\n<a href=\"mailto:andreas.kemp@somedia.ch\">andreas.kemp@somedia.ch</a><br />\n<a href=\"tel:+41812555582\">+41 81 255 55 82</a></p>\n";

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (getText) {
	  document.querySelector('main').innerHTML = getText('lebenslauf');
	};

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map