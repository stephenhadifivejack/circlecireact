"use strict";
(() => {
var exports = {};
exports.id = 403;
exports.ids = [403];
exports.modules = {

/***/ 570:
/***/ ((module) => {


function test() {
    return 2 + 2;
}
module.exports = {
    test
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(570));
module.exports = __webpack_exports__;

})();