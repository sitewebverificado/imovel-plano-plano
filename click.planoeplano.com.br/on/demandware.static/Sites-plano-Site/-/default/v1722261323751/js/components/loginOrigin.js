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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./cartridges/app_custom_plano/cartridge/client/default/js/components/loginOrigin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cartridges/app_custom_plano/cartridge/client/default/js/components/loginOrigin.js":
/*!*******************************************************************************************!*\
  !*** ./cartridges/app_custom_plano/cartridge/client/default/js/components/loginOrigin.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var popup = __webpack_require__(/*! ../utils/popup */ \"./cartridges/app_custom_plano/cartridge/client/default/js/utils/popup.js\");\r\n$(document).ready(function () {\r\n    if ($('.origin-page').attr('origin') === 'lostSession') {\r\n        popup.showErrorMessage('Devido à inatividade sua sessão foi perdida, será necessário fazer o login novamente.');\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./cartridges/app_custom_plano/cartridge/client/default/js/components/loginOrigin.js?");

/***/ }),

/***/ "./cartridges/app_custom_plano/cartridge/client/default/js/utils/popup.js":
/*!********************************************************************************!*\
  !*** ./cartridges/app_custom_plano/cartridge/client/default/js/utils/popup.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function showSuccessMessage(content) {\r\n    $('.success-message-notification').css('display', 'block');\r\n    setTimeout(function () {\r\n        $('.success-text').text(content);\r\n        $('.success-message-notification').animate({\r\n            opacity: 1,\r\n            top: '120px'\r\n        });\r\n        setTimeout(function () {\r\n            $('.success-message-notification').animate({\r\n                opacity: 0,\r\n                top: '140px'\r\n            });\r\n        }, 5000);\r\n        setTimeout(function () {\r\n            $('.success-message-notification').animate({\r\n                top: '100px'\r\n            });\r\n            $('.success-message-notification').css('display', 'none');\r\n        }, 5200);\r\n        $.spinner().stop();\r\n    }, 1000);\r\n}\r\n\r\nfunction showErrorMessage(errorMsg) {\r\n    $('.error-message-notification').css('display', 'block');\r\n    setTimeout(function () {\r\n        $('.error-text').text(errorMsg);\r\n        $('.error-message-notification').animate({\r\n            opacity: 1,\r\n            top: '120px'\r\n        });\r\n        setTimeout(function () {\r\n            $('.error-message-notification').animate({\r\n                opacity: 0,\r\n                top: '140px'\r\n            });\r\n        }, 5000);\r\n        setTimeout(function () {\r\n            $('.error-message-notification').animate({\r\n                top: '100px'\r\n            });\r\n            $('.error-message-notification').css('display', 'none');\r\n        }, 5200);\r\n    }, 1000);\r\n}\r\n\r\nmodule.exports = {\r\n    showSuccessMessage,\r\n    showErrorMessage\r\n};\r\n\n\n//# sourceURL=webpack:///./cartridges/app_custom_plano/cartridge/client/default/js/utils/popup.js?");

/***/ })

/******/ });