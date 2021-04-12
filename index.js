(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.hlark = factory());
}(this, (function () { 'use strict';

    var hlark;
    (function (hlark) {
        /**
         * object prop copy
         * 用来拷贝对象，不可拷贝class，拷贝class请使用 applyClassMixins
         *
         * @export
         * @param {*} derivedCtor
         * @param {any[]} baseCtors
         */
        function applyMixins(derivedCtor, baseCtors) {
            baseCtors.forEach(function (baseCtor) {
                Object.getOwnPropertyNames(baseCtor).forEach(function (name) {
                    derivedCtor[name] = baseCtor[name];
                });
            });
        }
        hlark.applyMixins = applyMixins;
        /**
         * 用来拷贝class，不可拷贝普通对象，拷贝普通对象请使用 applyMixins
         *
         * @param {*} derivedCtor
         * @param {any[]} baseCtors
         */
        function applyClassMixins(derivedCtor, baseCtors) {
            baseCtors.forEach(function (baseCtor) {
                Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                    derivedCtor.prototype[name] = baseCtor.prototype[name];
                });
            });
        }
        hlark.applyClassMixins = applyClassMixins;
        /**
         *
         *
         * @export
         * @param {Function} fn
         * @param {number} [tryCount=3]
         * @param {number} [timeInterval=1000]
         */
        function ensureFuncSuccess(options) {
            var fn = options.fn, _a = options.tryCount, tryCount = _a === void 0 ? 3 : _a, _b = options.timeInterval, timeInterval = _b === void 0 ? 1000 : _b;
            var runedCount = 0;
            function doFn() {
                var result = fn();
                runedCount += 1;
                console.log("🚀 ~ doFn ~ runedCount", runedCount);
                if (result == true) {
                    return true;
                }
                else {
                    if (runedCount < tryCount) {
                        setTimeout(function () {
                            doFn();
                        }, timeInterval);
                    }
                }
            }
            doFn();
        }
        hlark.ensureFuncSuccess = ensureFuncSuccess;
    })(hlark || (hlark = {}));
    var hlark$1 = hlark;

    return hlark$1;

})));
