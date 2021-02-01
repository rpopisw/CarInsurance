var functions = require('./functions');


const define = (name, value) => {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true,
        writable: false,
        configurable: false
    });
}

define("isTypeRegister", functions.isTypeRegister);
define("normalProduct", functions.normalProduct);
define("degradeSellIn", functions.degradeSellIn);
define("fullCoverage", functions.fullCoverage);
define("megaCoverage", functions.megaCoverage);

