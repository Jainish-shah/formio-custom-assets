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

/***/ "./src/custom/fileupload/FileUpload.js":
/*!*********************************************!*\
  !*** ./src/custom/fileupload/FileUpload.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CustomFileUpload)\n/* harmony export */ });\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formio/js */ \"@formio/js\");\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_formio_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst FileComponent = _formio_js__WEBPACK_IMPORTED_MODULE_0__.Formio.Components.components.file;\n\nclass CustomFileUpload extends FileComponent {\n  constructor(component, options, data) {\n    super(component, options, data);\n  }\n\n  static schema(...extend) {\n    return FileComponent.schema(\n      {\n        type: \"customfile\",\n        label: \"Custom File Upload\",\n        key: \"customFile\",\n        input: true,\n        storage: \"base64\", // Default to base64 for submission\n      },\n      ...extend\n    );\n  }\n\n  static get builderInfo() {\n    return {\n      title: \"Custom File\",\n      group: \"basic\",\n      icon: \"file\",\n      documentation: \"/userguide/form-components/file\",\n      weight: FileComponent.builderInfo.weight,\n      schema: CustomFileUpload.schema(),\n    };\n  }\n\n  static editForm = FileComponent.editForm;\n\n  async upload(files) {\n    console.log(\"Starting upload:\", files);\n\n    // Ensure files exist\n    if (!files || !files.length) {\n      this.setError(\"No files selected.\");\n      this.redraw();\n      return;\n    }\n\n    // Handle single file for simplicity\n    const file = files[0];\n\n    // Show scanning status\n    this.statuses = [\n      { fileName: file.name, status: \"info\", message: \"Scanning...\" },\n    ];\n    this.redraw();\n\n    try {\n      // Prepare FormData for scanFile\n      const formData = new FormData();\n      formData.append(\"file\", file);\n\n      // Fetch with timeout for scanFile (10 seconds)\n      const scanController = new AbortController();\n      const scanTimeoutId = setTimeout(() => scanController.abort(), 10000);\n\n      console.log(\"Sending scanFile request for:\", file.name);\n      const scanResponse = await fetch(\n        \"https://services-uatsmartformslite.health.ny.gov/scanFile\",\n        {\n          method: \"POST\",\n          body: formData,\n          signal: scanController.signal,\n        }\n      );\n\n      clearTimeout(scanTimeoutId);\n\n      const result = await scanResponse.json();\n      console.log(\"scanFile response:\", result);\n\n      if (result === true || result === \"true\") {\n        // File is safe, proceed to S3 upload\n        this.statuses = [\n          {\n            fileName: file.name,\n            status: \"info\",\n            message: \"Uploading to S3...\",\n          },\n        ];\n        this.redraw();\n\n        // Fetch with timeout for S3 (10 seconds)\n        const s3Controller = new AbortController();\n        const s3TimeoutId = setTimeout(() => s3Controller.abort(), 10000);\n\n        console.log(\"Sending S3 upload request for:\", file.name);\n        const s3Url = `https://s3.amazonaws.com/uat-doh-formio-uploaded-files/ishsg-uat/${file.name}`;\n        const s3Response = await fetch(s3Url, {\n          method: \"PUT\",\n          body: file,\n          signal: s3Controller.signal,\n          // Note: Add AWS headers or use a pre-signed URL for authentication\n          // headers: { 'Authorization': 'AWS4-HMAC-SHA256 ...' }\n        });\n\n        clearTimeout(s3TimeoutId);\n\n        if (!s3Response.ok) {\n          throw new Error(`S3 upload failed: ${s3Response.statusText}`);\n        }\n\n        console.log(\"S3 upload successful\");\n        this.statuses = [\n          {\n            fileName: file.name,\n            status: \"success\",\n            message: \"File uploaded successfully.\",\n          },\n        ];\n        this.redraw();\n\n        // Call parent upload to store file data in submission\n        super.upload(files);\n        console.log(\"File data set for submission:\", this.dataValue);\n      } else {\n        // File is unsafe\n        console.log(\"File is unsafe\");\n        this.setError(\"File is not safe! Please upload a different file.\");\n        this.statuses = [\n          {\n            fileName: file.name,\n            status: \"error\",\n            message: \"File is not safe.\",\n          },\n        ];\n        this.redraw();\n      }\n    } catch (error) {\n      // Handle errors (scanFile or S3)\n      console.error(\"Upload error:\", error);\n      this.setError(`Error: ${error.message}. Please try again.`);\n      this.statuses = [\n        {\n          fileName: file.name,\n          status: \"error\",\n          message: `Error: ${error.message}`,\n        },\n      ];\n      this.redraw();\n    }\n  }\n\n  setError(message) {\n    this.error = {\n      message,\n      level: \"error\",\n    };\n    this.triggerRedraw();\n  }\n}\n\n\n//# sourceURL=webpack://file/./src/custom/fileupload/FileUpload.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formio/js */ \"@formio/js\");\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_formio_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _custom_fileupload_FileUpload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom/fileupload/FileUpload */ \"./src/custom/fileupload/FileUpload.js\");\n// import { Formio } from \"@formio/js\";\n// import CustomFileUpload from \"./custom/fileupload/FileUpload\";\n\n// // Register the component under its custom type\n// Formio.use({\n//   components: {\n//     customfile: CustomFileUpload,\n//   },\n// });\n\n// // Launch the drag‑and‑drop builder\n// Formio.builder(document.getElementById(\"builder\"), {}, {});\n\n\n\n\n// Register the component under its custom type\ntry {\n  _formio_js__WEBPACK_IMPORTED_MODULE_0__.Formio.use({\n    components: {\n      customfile: _custom_fileupload_FileUpload__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    },\n  });\n  console.log(\"CustomFileUpload component registered successfully\");\n} catch (error) {\n  console.error(\"Error registering CustomFileUpload component:\", error);\n}\n\n// Launch the drag-and-drop builder\n_formio_js__WEBPACK_IMPORTED_MODULE_0__.Formio.builder(document.getElementById(\"builder\"), {}, {})\n  .then(() => {\n    console.log(\"Form.io Builder initialized\");\n  })\n  .catch((error) => {\n    console.error(\"Error initializing Form.io Builder:\", error);\n  });\n\n\n//# sourceURL=webpack://file/./src/index.js?");

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