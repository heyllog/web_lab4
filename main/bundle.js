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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cv.js":
/*!*******************!*\
  !*** ./src/cv.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getCV; });\nfunction getCV() {\n    return `<p>Hello, on this website you can find information about every pokémon. Just use our search)</p>\n            <p class=\"names\">© 2020 VKGS Ltd. <br>\n            Vakhtang Karchava & Grigory Sumlinsky<br>\n            M3310</p>`;\n}\n\n//# sourceURL=webpack:///./src/cv.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cv */ \"./src/cv.js\");\n/* harmony import */ var _pokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemon */ \"./src/pokemon.js\");\n\n\n\nlet sect = document.querySelector('section');\nlet pokemon = 'pikachu';\n\nfunction fillWithUserData() {\n    sect.innerHTML = Object(_cv__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\nfunction fillWithError() {\n    sect.innerHTML = `<p>Please, enter pokemon name. </p>`;\n}\n\nfunction fillWithPokemon(name) {\n    if (name == '') {\n        fillWithError()\n    }\n    Object(_pokemon__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(name).then(info => sect.innerHTML = info);\n}\n\ndocument.getElementById('home').onclick = fillWithUserData;\ndocument.getElementById('pokemon').onclick = () => {\n    fillWithPokemon(pokemon)\n};\ndocument.getElementById('button').onclick = () => {\n    fillWithPokemon(document.getElementById('input').value)\n};\n\nfillWithUserData();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pokemon.js":
/*!************************!*\
  !*** ./src/pokemon.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getPokemon; });\nasync function getAbilityInfo(abilityUrl) {\n    let response = await fetch(abilityUrl);\n    if (!response.ok) {\n        console.log('ERROR: Request returned error');\n        return null;\n    }\n    const EFFECT_DATA = await response.json();\n    return EFFECT_DATA.effect_entries[0].effect;\n}\n\nfunction capitalize(str) {\n    return str.charAt(0).toUpperCase() + str.slice(1);\n}\n\nasync function getPokemon(pokemonName) {\n    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);\n\n    if (!response.ok) {\n        return `<div class=\"pokemon_page\"><div class=\"polaroid\"><img class=\"sad_pokemon\" alt=\"\" src=\"https://i.pinimg.com/originals/dc/28/f7/dc28f762c803b7aef0d64875712acca9.png\">\n                    <p>Sad Pikachu</p></div>\n                    <p>404: Not found.<br>\n                    There's no such pokémon(</p></div>`;\n    }\n\n    const POKEMON_DATA = await response.json();\n    let pokeInfo = `<div class=\"pokemon_page\"><div class=\"polaroid\"><img class=\"pokemon_image\" alt=\"\" src=\"${POKEMON_DATA.sprites.front_default}\">\n                    <p>${capitalize(pokemonName)}</p></div><p>`;\n\n    for (let i = 0; i < POKEMON_DATA.abilities.length; i++) {\n        let ability = POKEMON_DATA.abilities[i].ability;\n        let abilityUrl = ability.url;\n        let abilityPromise = getAbilityInfo(abilityUrl);\n        let abilityName = capitalize(ability.name);\n        pokeInfo += `<ins>${abilityName}</ins>: ${await abilityPromise}<br><br>`;\n    }\n\n    return `</p>` + pokeInfo + `</div>`;\n}\n\n//# sourceURL=webpack:///./src/pokemon.js?");

/***/ })

/******/ });