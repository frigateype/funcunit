/*funcunit@3.1.0-pre.3#browser/adapters/jasmine2*/
var FuncUnit = require('../core.js');
module.exports = function (jasmine) {
    FuncUnit.timeout = 4900;
    return {
        pauseTest: function () {
        },
        resumeTest: function () {
        },
        assertOK: function (assertion, message) {
            expect(assertion).toBeTruthy();
        },
        equiv: function (expected, actual) {
            return expected == actual;
        }
    };
};