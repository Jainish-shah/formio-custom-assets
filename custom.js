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

/***/ "./src/CustomFileUpload.form.js":
/*!**************************************!*\
  !*** ./src/CustomFileUpload.form.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formio/js */ \"@formio/js\");\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_formio_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst baseEditForm = _formio_js__WEBPACK_IMPORTED_MODULE_0__.Formio.Components.baseEditForm;\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(...extend) {\n  return baseEditForm(\n    [\n      {\n        key: \"display\",\n        components: [\n          {\n            type: \"textfield\",\n            key: \"label\",\n            label: \"Label\",\n            input: true,\n          },\n          {\n            type: \"textfield\",\n            key: \"key\",\n            label: \"Field Key\",\n            input: true,\n          },\n          {\n            type: \"checkbox\",\n            key: \"disabled\",\n            label: \"Disabled\",\n            input: true,\n          },\n        ],\n      },\n      {\n        key: \"validation\",\n        ignore: true,\n      },\n      {\n        key: \"logic\",\n        ignore: true,\n      },\n      {\n        key: \"api\",\n        ignore: true,\n      },\n    ],\n    ...extend\n  );\n}\n\n\n//# sourceURL=webpack://file/./src/CustomFileUpload.form.js?");

/***/ }),

/***/ "./src/CustomFileUpload.js":
/*!*********************************!*\
  !*** ./src/CustomFileUpload.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CustomFileUpload)\n/* harmony export */ });\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formio/js */ \"@formio/js\");\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_formio_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CustomFileUpload_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomFileUpload.form.js */ \"./src/CustomFileUpload.form.js\");\n// import { Formio } from \"@formio/js\";\n\n// const FileComponent = Formio.Components.components.file;\n\n// export default class CustomFileUpload extends FileComponent {\n//   static schema(...extend) {\n//     return FileComponent.schema(\n//       {\n//         type: \"customfile\",\n//         label: \"Custom File Upload\",\n//         key: \"customfile\",\n//         storage: \"base64\", // important to disable server upload\n//         url: false,\n//         image: false,\n//       },\n//       ...extend\n//     );\n//   }\n\n//   static get builderInfo() {\n//     return {\n//       title: \"Custom File Upload\",\n//       group: \"basic\",\n//       icon: \"file\",\n//       weight: 10,\n//       schema: CustomFileUpload.schema(),\n//     };\n//   }\n\n//   render() {\n//     return super.render(`\n//       <div ref=\"fileUpload\" class=\"custom-file-upload\">\n//         <input type=\"file\" class=\"form-control\" ref=\"input\" />\n//       </div>\n//     `);\n//   }\n\n//   attach(element) {\n//     this.loadRefs(element, {\n//       fileUpload: \"single\",\n//       input: \"single\",\n//     });\n\n//     // Listen to file input change and upload\n//     this.addEventListener(this.refs.input, \"change\", (event) => {\n//       this.upload(event.target.files);\n//     });\n\n//     return super.attach(element);\n//   }\n\n//   // Override default upload behavior\n//   upload(files) {\n//     const file = files[0];\n//     const submitButton = document.querySelector('[name=\"data[submit]\"]');\n//     if (submitButton) submitButton.disabled = true;\n\n//     return new Promise((resolve, reject) => {\n//       const reader = new FileReader();\n//       reader.onload = async () => {\n//         const base64 = reader.result;\n//         const uploadedFile = {\n//           name: file.name,\n//           originalName: file.name,\n//           size: file.size,\n//           type: file.type,\n//           url: base64,\n//           storage: \"base64\",\n//         };\n\n//         // Set value in form\n//         this.setValue([uploadedFile]);\n\n//         // Trigger virus scan\n//         const isClean = await this.scanFile(uploadedFile);\n//         if (isClean) {\n//           resolve([uploadedFile]);\n//         } else {\n//           this.setValue([]);\n//           reject(new Error(\"File failed virus scan\"));\n//         }\n//       };\n\n//       reader.onerror = reject;\n//       reader.readAsDataURL(file);\n//     });\n//   }\n\n//   async scanFile(fileData) {\n//     const submitButton = document.querySelector('[name=\"data[submit]\"]');\n\n//     if (!fileData || !fileData.url?.startsWith(\"data:\")) {\n//       alert(\"Invalid file format. Must be base64.\");\n//       if (submitButton) submitButton.disabled = true;\n//       return false;\n//     }\n\n//     const base64 = fileData.url.split(\",\")[1];\n//     const byteArray = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));\n//     const blob = new Blob([byteArray], {\n//       type: fileData.type || \"application/octet-stream\",\n//     });\n//     const file = new File(\n//       [blob],\n//       fileData.originalName || fileData.name || \"upload\"\n//     );\n\n//     const formData = new FormData();\n//     formData.append(\"file\", file);\n\n//     try {\n//       const response = await fetch(\n//         \"https://services-uatsmartformslite.health.ny.gov/scanFile\",\n//         {\n//           method: \"POST\",\n//           body: formData,\n//         }\n//       );\n\n//       if (!response.ok) throw new Error(`Scan failed: ${response.status}`);\n//       const resultText = await response.text();\n//       const result = JSON.parse(resultText);\n\n//       if (result === true) {\n//         alert(\"✅ File is safe!\");\n//         if (submitButton) submitButton.disabled = false;\n//         return true;\n//       } else if (result === false) {\n//         alert(\"❌ File is NOT safe. Please upload a clean file.\");\n//         if (submitButton) submitButton.disabled = true;\n//         return false;\n//       } else {\n//         console.warn(\"Unexpected scan result:\", result);\n//         return false;\n//       }\n//     } catch (err) {\n//       console.error(\"Scan error:\", err);\n//       alert(\"⚠️ Virus scan failed. Try again.\");\n//       if (submitButton) submitButton.disabled = true;\n//       return false;\n//     }\n//   }\n\n//   // Optional: for future S3 upload\n//   async uploadToS3(file) {\n//     const s3FormData = new FormData();\n//     s3FormData.append(\"file\", file);\n//     s3FormData.append(\"bucket\", \"uat-doh-formio-uploaded-files\");\n//     s3FormData.append(\"key\", `ishsg-uat/${file.name}`);\n\n//     try {\n//       const response = await fetch(\"https://your-backend/s3Upload\", {\n//         method: \"POST\",\n//         body: s3FormData,\n//       });\n\n//       if (!response.ok) throw new Error(\"S3 upload failed.\");\n//       const result = await response.json();\n//       const s3Url = `https://uat-doh-formio-uploaded-files.s3.amazonaws.com/ishsg-uat/${file.name}`;\n//       alert(\"✅ File uploaded to S3 successfully!\");\n//       console.log(\"S3 URL:\", s3Url);\n//     } catch (err) {\n//       console.error(\"S3 Upload Error:\", err);\n//       alert(\"Failed to upload to S3.\");\n//     }\n//   }\n// }\n\n\n // adjust path as needed\n\nconst FieldComponent = _formio_js__WEBPACK_IMPORTED_MODULE_0__.Formio.Components.components.field;\n\nclass CustomFileUpload extends FieldComponent {\n  static schema(...extend) {\n    return FieldComponent.schema(\n      {\n        type: \"customfile\",\n        label: \"Custom File Upload\",\n        key: \"customfile\",\n        input: false,\n        persistent: true,\n        clearOnHide: true,\n        dataGridLabel: true,\n      },\n      ...extend\n    );\n  }\n\n  static editForm = _CustomFileUpload_form_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n  static get builderInfo() {\n    return {\n      title: \"Custom File Upload\",\n      icon: \"file\",\n      group: \"basic\",\n      weight: 70,\n      schema: CustomFileUpload.schema(),\n    };\n  }\n\n  get emptyValue() {\n    return [];\n  }\n\n  render() {\n    return super.render(`\n      <div class=\"form-group\">\n        <label>${this.component.label}</label>\n        <input type=\"file\" ref=\"input\" class=\"form-control\" />\n        <div ref=\"status\" style=\"margin-top: 10px; font-weight: 500;\"></div>\n      </div>\n    `);\n  }\n\n  attach(element) {\n    this.loadRefs(element, {\n      input: \"single\",\n      status: \"single\",\n    });\n\n    this.addEventListener(this.refs.input, \"change\", async (event) => {\n      const file = event.target.files[0];\n      if (!file) return;\n\n      this.refs.status.innerHTML = \"🔄 Scanning file...\";\n      const base64 = await this.toBase64(file);\n\n      const uploadedFile = {\n        name: file.name,\n        originalName: file.name,\n        size: file.size,\n        type: file.type,\n        url: base64,\n        storage: \"base64\",\n      };\n\n      const clean = await this.scanFile(uploadedFile);\n      if (clean) {\n        this.setValue([uploadedFile]);\n        this.refs.status.innerHTML = \"✅ File is safe!\";\n        const submit = document.querySelector('[name=\"data[submit]\"]');\n        if (submit) submit.disabled = false;\n      } else {\n        this.setValue([]);\n        this.refs.status.innerHTML =\n          \"❌ File is not safe. Please upload another.\";\n        const submit = document.querySelector('[name=\"data[submit]\"]');\n        if (submit) submit.disabled = true;\n      }\n    });\n\n    return super.attach(element);\n  }\n\n  toBase64(file) {\n    return new Promise((resolve, reject) => {\n      const reader = new FileReader();\n      reader.onload = () => resolve(reader.result);\n      reader.onerror = reject;\n      reader.readAsDataURL(file);\n    });\n  }\n\n  async scanFile(fileData) {\n    const base64 = fileData.url.split(\",\")[1];\n    const byteArray = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));\n    const blob = new Blob([byteArray], {\n      type: fileData.type || \"application/octet-stream\",\n    });\n    const file = new File(\n      [blob],\n      fileData.originalName || fileData.name || \"upload\"\n    );\n\n    const formData = new FormData();\n    formData.append(\"file\", file);\n\n    try {\n      const response = await fetch(\n        \"https://services-uatsmartformslite.health.ny.gov/scanFile\",\n        {\n          method: \"POST\",\n          body: formData,\n        }\n      );\n\n      if (!response.ok) throw new Error(`Scan failed: ${response.status}`);\n      const resultText = await response.text();\n      const result = JSON.parse(resultText);\n\n      return result === true;\n    } catch (err) {\n      console.error(\"Scan error:\", err);\n      this.refs.status.innerHTML = \"⚠️ Virus scan failed. Try again.\";\n      return false;\n    }\n  }\n\n  // 🔑 required for form to save properly\n  getValue() {\n    return this.dataValue || [];\n  }\n\n  setValue(value) {\n    if (value && JSON.stringify(value) !== JSON.stringify(this.dataValue)) {\n      this.dataValue = value;\n      return true;\n    }\n    return false;\n  }\n}\n\n\n//# sourceURL=webpack://file/./src/CustomFileUpload.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formio/js */ \"@formio/js\");\n/* harmony import */ var _formio_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_formio_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CustomFileUpload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomFileUpload */ \"./src/CustomFileUpload.js\");\n/* harmony import */ var _templates_file_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/file.js */ \"./src/templates/file.js\");\n\n\n\n\n_formio_js__WEBPACK_IMPORTED_MODULE_0__.Formio.use({\n  components: {\n    customfile: _CustomFileUpload__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  },\n  templates: {\n    bootstrap: {\n      customfile: {\n        form: _templates_file_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      },\n    },\n  },\n});\n\n_formio_js__WEBPACK_IMPORTED_MODULE_0__.Formio.builder(document.getElementById(\"builder\"), {}, {});\n\n\n//# sourceURL=webpack://file/./src/index.js?");

/***/ }),

/***/ "./src/templates/file.js":
/*!*******************************!*\
  !*** ./src/templates/file.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ctx) {\n  return `<div ref=\"fileUpload\">\n    <input type=\"file\" class=\"form-control\" ref=\"input\" />\n  </div>`;\n}\n\n\n//# sourceURL=webpack://file/./src/templates/file.js?");

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
