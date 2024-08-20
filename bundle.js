/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst cors = __webpack_require__(/*! cors */ \"cors\");\r\nconst User = __webpack_require__(/*! ./modals/User */ \"./modals/User.js\")\r\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\r\nvar ObjectId = (__webpack_require__(/*! mongoose */ \"mongoose\").Types).ObjectId;\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\nconst axios = __webpack_require__(/*! axios */ \"axios\")\r\nconst router = express.Router();\r\nconst salt = 10;\r\nconst app = express();\r\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\r\nvar secret = \"hjfsjkldfhlksdjhfjskf\";\r\nconst dbURL = \"mongodb+srv://nafeelaaqib:MAFcR3Z2kFIysoXA@cluster0.jtuhg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\"\r\napp.use(cors({\r\n    credentials: true,\r\n    origin: [\"http://localhost:3000\", \"http://sdmailbox.net:4000\", \"http://vmi2000569.contaboserver.net:5050\"]\r\n\r\n}));\r\napp.use(express.json());\r\napp.set('trust proxy', true);\r\nmongoose.connect(dbURL);\r\n\r\nrouter.post(\"/register\", async (req, res) => {\r\n    const { username, password } = req.body\r\n    const userDoc = await User.create({ username: username, password: bcrypt.hashSync(password, salt) })\r\n    res.json(userDoc)\r\n})\r\n\r\nrouter.post('/logout', (req, res) => {\r\n    res.cookie('token', '').json('ok');\r\n})\r\n\r\nrouter.post('/login', async (req, res) => {\r\n    const { username, password } = req.body;\r\n    const userDoc = await User.findOne({ username });\r\n    if (userDoc) {\r\n        const passOk = bcrypt.compareSync(password, userDoc.password);\r\n        if (passOk) {\r\n            jwt.sign({ username, id: userDoc._id, userRole: userDoc.userRole }, secret, {}, (err, token) => {\r\n                if (err) throw err;\r\n                res.cookie('token', token).json({ id: userDoc._id, username, token: token, userRole: userDoc.userRole });\r\n            })\r\n        }\r\n    }\r\n    else {\r\n        res.status(400).json('Wrong credentials')\r\n    }\r\n});\r\n\r\n\r\nrouter.use((req, res, next) => {\r\n    const token = req?.headers?.authorization?.slice(6);\r\n    if (token !== \"\" && token !== undefined) {\r\n        jwt.verify(token, secret, {}, (err, info) => {\r\n            if (info === \"\" || info === undefined) next(res.status(401).json(\"Unauthorized\"));\r\n            else next();\r\n        })\r\n    }\r\n    else next(res.status(401).json(\"Unauthorized\"));\r\n})\r\n\r\nrouter.get('/profile', (req, res) => {\r\n    const token = req?.headers?.authorization?.slice(6);\r\n    jwt.verify(token, secret, {}, (err, info) => {\r\n        res.json(info);\r\n    })\r\n});\r\n\r\n\r\napp.use(\"/api\", router)\r\n\r\napp.use(express.static(path.join(__dirname, 'react-app/build')));\r\napp.use(express.static(path.join(__dirname, '/public/images')));\r\n\r\napp.use((req, res, next) => {\r\n    if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {\r\n        next();\r\n    } else {\r\n        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');\r\n        res.header('Expires', '-1');\r\n        res.header('Pragma', 'no-cache');\r\n        res.sendFile(path.join(__dirname, 'react-app/build', 'index.html'));\r\n    }\r\n\r\n    const data = res.json;\r\n\r\n});\r\n\r\napp.listen(5050, () => {\r\n    console.log(\"app started\");\r\n    // console.log(Register_Route)\r\n})\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modals/User.js":
/*!************************!*\
  !*** ./modals/User.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\")\r\nconst { Schema, model } = mongoose;\r\nconst UserSchema = new Schema({\r\n    username: { type: String, required: true, min: 3, unique: true },\r\n    password: { type: String, required: true, min: 8, },\r\n    userRole: { type: String, required: true, default: \"user\" }\r\n});\r\nconst UserModel = model('User', UserSchema);\r\nmodule.exports = UserModel;\n\n//# sourceURL=webpack:///./modals/User.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;