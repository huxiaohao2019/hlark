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
    })(hlark || (hlark = {}));
    var hlark$1 = hlark;

    return hlark$1;

})));
