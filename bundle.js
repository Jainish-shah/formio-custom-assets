/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CustomFileUpload.js":
/*!*********************************!*\
  !*** ./src/CustomFileUpload.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CustomFileUpload)\n/* harmony export */ });\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formio/js */ \"@formio/js\");\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_formio_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst FileComponent = _formio_js__WEBPACK_IMPORTED_MODULE_0__.Formio.Components.components.file;\n\nclass CustomFileUpload extends FileComponent {\n  static schema(...extend) {\n    return FileComponent.schema(\n      {\n        type: \"customfile\",\n        label: \"Custom File Upload\",\n        key: \"customfile\",\n        storage: \"base64\",\n      },\n      ...extend\n    );\n  }\n\n  static get builderInfo() {\n    return {\n      title: \"Custom File Upload\",\n      icon: \"file\",\n      group: \"basic\",\n      weight: 70,\n      schema: CustomFileUpload.schema(),\n    };\n  }\n\n  // Convert File to base64\n  toBase64(file) {\n    return new Promise((resolve, reject) => {\n      const reader = new FileReader();\n      reader.onload = () => resolve(reader.result);\n      reader.onerror = reject;\n      reader.readAsDataURL(file);\n    });\n  }\n\n  // Virus scan logic\n  async scanFile({ url, originalName, type }) {\n    const base64 = url.split(\",\")[1];\n    const byteArray = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));\n    const blob = new Blob([byteArray], {\n      type: type || \"application/octet-stream\",\n    });\n    const scanFile = new File([blob], originalName || \"upload\");\n\n    const formData = new FormData();\n    formData.append(\"file\", scanFile);\n\n    const response = await fetch(\n      \"https://services-uatsmartformslite.health.ny.gov/scanFile\",\n      {\n        method: \"POST\",\n        body: formData,\n      }\n    );\n\n    if (!response.ok) throw new Error(`Scan failed ${response.status}`);\n    const result = await response.json();\n    return result === true;\n  }\n\n  // Override file upload but preserve everything else\n  async uploadFile(file, fileInfo, options, index) {\n    this.setAlert(\"Scanning file...\");\n    let base64 = await this.toBase64(file);\n    const clean = await this.scanFile({\n      url: base64,\n      originalName: file.name,\n      type: file.type,\n    });\n\n    if (!clean) {\n      this.setError(\n        \"danger\",\n        \"File failed virus scan. Please upload a safe file.\"\n      );\n      return Promise.reject(\"Virus scan failed\");\n    }\n\n    this.clearAlerts();\n\n    return super.uploadFile(file, { ...fileInfo, url: base64 }, options, index);\n  }\n}\n\n// Register the new component\n_formio_js__WEBPACK_IMPORTED_MODULE_0__.Formio.Components.addComponent(\"customfile\", CustomFileUpload);\n\n\n//# sourceURL=webpack://file/./src/CustomFileUpload.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formio/js */ \"@formio/js\");\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_formio_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CustomFileUpload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomFileUpload */ \"./src/CustomFileUpload.js\");\n\n\n\n_formio_js__WEBPACK_IMPORTED_MODULE_0__.Formio.use({\n  components: {\n    customfile: _CustomFileUpload__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  },\n});\n\n_formio_js__WEBPACK_IMPORTED_MODULE_0__.Formio.builder(document.getElementById(\"builder\"), {}, {});\n\n\n//# sourceURL=webpack://file/./src/index.js?");

/***/ }),

/***/ "@formio/js":
/*!*************************!*\
  !*** external "Formio" ***!
  \*************************/
/***/ ((module) => {

module.exports = Formio;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;