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
/******/ 	return __webpack_require__(__webpack_require__.s = "./cartridges/app_custom_plano/cartridge/client/default/js/planoScripts/discountCoupon.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cartridges/app_custom_plano/cartridge/client/default/js/planoScripts/discountCoupon.js":
/*!************************************************************************************************!*\
  !*** ./cartridges/app_custom_plano/cartridge/client/default/js/planoScripts/discountCoupon.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $input = $('.couponCode');\r\nvar url = $('#discount-url').attr('url');\r\nvar typingTimer;                // timer identifier\r\nvar doneTypingInterval = 2700;  // time in ms, 5 seconds for example\r\nvar popup = __webpack_require__(/*! ../utils/popup */ \"./cartridges/app_custom_plano/cartridge/client/default/js/utils/popup.js\");\r\n\r\n\r\nfunction getPrice() {\r\n    var couponCode = $input.val();\r\n    $.spinner().start();\r\n    $.ajax({\r\n        url: url,\r\n        data: { couponCode },\r\n        method: 'GET',\r\n        success: function (response) {\r\n            $.spinner().stop();\r\n            if (response.success) {\r\n                $input.addClass('is-valid');\r\n                popup.showSuccessMessage(response.sucessMessage);\r\n                location.reload();\r\n            } else {\r\n                $input.addClass('is-invalid');\r\n                popup.showErrorMessage(response.errorMessage);\r\n            }\r\n        },\r\n        error: function (e) {\r\n            $.spinner().stop();\r\n            // eslint-disable-next-line no-console\r\n            console.log(e);\r\n        }\r\n    });\r\n}\r\n\r\n// user is \"finished typing,\" do something\r\nfunction doneTyping() {\r\n    $.spinner().start();\r\n    getPrice();\r\n}\r\n\r\n// on keyup, start the countdown\r\n$input.on('keyup', function () {\r\n    clearTimeout(typingTimer);\r\n    if (event.keyCode === 13) {\r\n        getPrice();\r\n    } else {\r\n        typingTimer = setTimeout(doneTyping, doneTypingInterval);\r\n    }\r\n});\r\n\r\n// on keydown, clear the countdown\r\n$input.on('keydown', function () {\r\n    clearTimeout(typingTimer);\r\n});\r\n\r\n// coupon code for mobile\r\nvar $inputMobile = $('#couponCodeMobile');\r\n\r\n$('.promo-code-form-mobile').off('submit').on('submit', function (e) {\r\n    e.preventDefault();\r\n    e.stopPropagation();\r\n    var couponCode = $inputMobile.val();\r\n    var url = $('#discount-url-mobile').attr('url');\r\n    $.spinner().start();\r\n    $.ajax({\r\n        url: url,\r\n        data: { couponCode },\r\n        method: 'GET',\r\n        success: function (response) {\r\n            $.spinner().stop();\r\n            if (response.success) {\r\n                $inputMobile.addClass('is-valid');\r\n                $('.js-cupom-title-mobile').html('De:');\r\n                $('.js-unity-price-bp-mobile').remove();\r\n                $('.js-unity-price-mobile').attr('class', 'text-body');\r\n                $('.js-unity-price-promo-title-mobile').html('Por: ');\r\n                $('.js-unity-price-promo-mobile').html(response.price);\r\n                $('.js-url-simulation-mobile').attr('href', response.newUrl);\r\n                popup.showSuccessMessage(response.sucessMessage);\r\n            } else {\r\n                $inputMobile.addClass('is-invalid');\r\n                popup.showErrorMessage(response.errorMessage);\r\n            }\r\n        },\r\n        error: function () {\r\n            $.spinner().stop();\r\n        }\r\n    });\r\n});\r\n\r\n$('.removeCoupon').on('click', function () {\r\n    let $target = $(this);\r\n    let url = $target.data('url');\r\n    $.spinner().start();\r\n\r\n    $.ajax({\r\n        url: url,\r\n        method: 'GET',\r\n        success: function (response) {\r\n            $.spinner().stop();\r\n            if (response.success) {\r\n                location.reload();\r\n            }\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./cartridges/app_custom_plano/cartridge/client/default/js/planoScripts/discountCoupon.js?");

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