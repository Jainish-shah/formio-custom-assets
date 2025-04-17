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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CustomFileUpload)\n/* harmony export */ });\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formio/js */ \"@formio/js\");\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_formio_js__WEBPACK_IMPORTED_MODULE_0__);\n// import { Formio } from \"@formio/js\";\n// import editForm from \"./CustomFileUpload.form.js\";\n\n// const FieldComponent = Formio.Components.components.field;\n\n// export default class CustomFileUpload extends FieldComponent {\n//   static schema(...extend) {\n//     return FieldComponent.schema(\n//       {\n//         type: \"customfile\",\n//         label: \"Custom File Upload\",\n//         key: \"customfile\",\n//         input: true,\n//         persistent: true,\n//         clearOnHide: true,\n//         dataGridLabel: true,\n//       },\n//       ...extend\n//     );\n//   }\n\n//   static editForm = editForm;\n\n//   static get builderInfo() {\n//     return {\n//       title: \"Custom File Upload\",\n//       icon: \"file\",\n//       group: \"basic\",\n//       weight: 70,\n//       schema: CustomFileUpload.schema(),\n//     };\n//   }\n\n//   get emptyValue() {\n//     return [];\n//   }\n\n//   render() {\n//     return super.render(`\n//       <div class=\"form-group\">\n//         <input type=\"file\" ref=\"input\" class=\"form-control\" />\n//         <div ref=\"status\" style=\"margin-top: 10px; font-weight: 500;\"></div>\n//       </div>\n//     `);\n//   }\n\n//   attach(element) {\n//     this.loadRefs(element, {\n//       input: \"single\",\n//       status: \"single\",\n//     });\n\n//     this.addEventListener(this.refs.input, \"change\", async (event) => {\n//       const file = event.target.files[0];\n//       if (!file) return;\n\n//       this.refs.status.innerHTML = \"Scanning file...\";\n//       const base64 = await this.toBase64(file);\n\n//       const uploadedFile = {\n//         name: file.name,\n//         originalName: file.name,\n//         size: file.size,\n//         type: file.type,\n//         url: base64,\n//         storage: \"base64\",\n//       };\n\n//       const clean = await this.scanFile(uploadedFile);\n//       if (clean) {\n//         this.updateValue([uploadedFile]);\n//         this.setValue([uploadedFile]);\n//         this.refs.status.innerHTML = \"File is safe!\";\n//         const submit = document.querySelector('[name=\"data[submit]\"]');\n//         if (submit) submit.disabled = false;\n//       } else {\n//         this.setValue([]);\n//         this.refs.status.innerHTML = \"File is not safe. Please upload another.\";\n//         const submit = document.querySelector('[name=\"data[submit]\"]');\n//         if (submit) submit.disabled = true;\n//       }\n//     });\n\n//     return super.attach(element);\n//   }\n\n//   toBase64(file) {\n//     return new Promise((resolve, reject) => {\n//       const reader = new FileReader();\n//       reader.onload = () => resolve(reader.result);\n//       reader.onerror = reject;\n//       reader.readAsDataURL(file);\n//     });\n//   }\n\n//   async scanFile(fileData) {\n//     const base64 = fileData.url.split(\",\")[1];\n//     const byteArray = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));\n//     const blob = new Blob([byteArray], {\n//       type: fileData.type || \"application/octet-stream\",\n//     });\n//     const file = new File(\n//       [blob],\n//       fileData.originalName || fileData.name || \"upload\"\n//     );\n\n//     const formData = new FormData();\n//     formData.append(\"file\", file);\n\n//     try {\n//       const response = await fetch(\n//         \"https://services-uatsmartformslite.health.ny.gov/scanFile\",\n//         {\n//           method: \"POST\",\n//           body: formData,\n//         }\n//       );\n\n//       if (!response.ok) throw new Error(`Scan failed: ${response.status}`);\n//       const resultText = await response.text();\n//       const result = JSON.parse(resultText);\n\n//       return result === true;\n//     } catch (err) {\n//       console.error(\"Scan error:\", err);\n//       this.refs.status.innerHTML = \"Virus scan failed. Try again.\";\n//       return false;\n//     }\n//   }\n\n//   getValue() {\n//     return this.dataValue || [];\n//   }\n\n//   setValue(value, flags = {}) {\n//     this.dataValue = value;\n//     return true;\n//   }\n\n//   updateValue(value, flags = {}) {\n//     const changed = this.setValue(value, flags);\n//     if (changed) {\n//       this.triggerChange(flags);\n//     }\n//     return changed;\n//   }\n// }\n// Formio.Components.addComponent(\"customfile\", CustomFileUpload);\n\n// src/CustomFileUpload.js\n// src/CustomFileUpload.js\n\n\n// Grab the core FileComponent (with full DnD & table UI)\nconst FileComponent = _formio_js__WEBPACK_IMPORTED_MODULE_0__.Formio.Components.components.file;\n\nclass CustomFileUpload extends FileComponent {\n  // 1) Inherit FileComponent’s schema, just change type/key\n  static schema(...extend) {\n    return FileComponent.schema(\n      {\n        type: \"customfile\",\n        label: \"Custom File Upload\",\n        key: \"customfile\",\n        storage: \"base64\", // or whatever your default is\n        clearOnHide: true,\n        persistent: true,\n      },\n      ...extend\n    );\n  }\n\n  // 2) Make it show up in the builder\n  static get builderInfo() {\n    return {\n      title: \"Custom File Upload\",\n      icon: \"file-upload\",\n      group: \"advanced\",\n      weight: 70,\n      schema: CustomFileUpload.schema(),\n    };\n  }\n\n  /**\n   * uploadFile is called for every file the user drops/browses.\n   * We intercept here, run scanFile(), then if clean call super.uploadFile().\n   */\n  uploadFile(file, fileName) {\n    // disable the submit button until done\n    const submitBtn = this.root?.disableSubmit\n      ? null\n      : document.querySelector('[name=\"data[submit]\"]');\n    if (submitBtn) {\n      submitBtn.disabled = true;\n    }\n\n    // show a little status\n    this.setAlert(\"Scanning file for viruses…\");\n    return this.scanFile(file)\n      .then((isClean) => {\n        if (!isClean) {\n          this.setAlert(\"⚠️ This file failed the virus scan.\");\n          return Promise.reject(new Error(\"Virus scan failed\"));\n        }\n        // clear alert & delegate to the built‑in uploader\n        this.setAlert(null);\n        return super.uploadFile(file, fileName);\n      })\n      .then((uploadResult) => {\n        if (submitBtn) {\n          submitBtn.disabled = false;\n        }\n        return uploadResult;\n      })\n      .catch((err) => {\n        if (submitBtn) {\n          submitBtn.disabled = true;\n        }\n        // propagate the error so the component marks that file as errored\n        throw err;\n      });\n  }\n\n  /**\n   * Your existing scan logic, taking a File and returning Promise<boolean>.\n   */\n  scanFile(file) {\n    // const formData = new FormData();\n    // formData.append(\"file\", file);\n    // return fetch(\"https://services-uatsmartformslite.health.ny.gov/scanFile\", {\n    //   method: \"POST\",\n    //   body: formData,\n    // })\n    //   .then((res) => {\n    //     if (!res.ok) {\n    //       console.error(\"Scan API error\", res.status);\n    //       return false;\n    //     }\n    //     return res.json();\n    //   })\n    //   .then((result) => result === true)\n    //   .catch((err) => {\n    //     console.error(\"Scan exception\", err);\n    //     return false;\n    //   });\n    return Promise.resolve(true);\n  }\n}\n\n// Register it under your new type\n_formio_js__WEBPACK_IMPORTED_MODULE_0__.Formio.Components.addComponent(\"customfile\", CustomFileUpload);\n\n\n//# sourceURL=webpack://file/./src/CustomFileUpload.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formio/js */ \"@formio/js\");\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_formio_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CustomFileUpload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomFileUpload */ \"./src/CustomFileUpload.js\");\n// import { Formio } from \"@formio/js\";\n// import CustomFileUpload from \"./CustomFileUpload.js\";\n// import customTemplate from \"./templates/file.js\";\n\n// Formio.use({\n//   components: {\n//     customfile: CustomFileUpload,\n//   },\n//   templates: {\n//     bootstrap: {\n//       customfile: {\n//         form: customTemplate,\n//       },\n//     },\n//   },\n// });\n\n// Formio.builder(document.getElementById(\"builder\"), {}, {});\n\n// src/index.js\n\n\n\n_formio_js__WEBPACK_IMPORTED_MODULE_0__.Formio.use({\n  components: {\n    customfile: _CustomFileUpload__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  },\n});\n\n// Launch the builder (or change to Formio.createForm for runtime form)\n_formio_js__WEBPACK_IMPORTED_MODULE_0__.Formio.builder(document.getElementById(\"builder\"), {}, {});\n\n\n//# sourceURL=webpack://file/./src/index.js?");

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