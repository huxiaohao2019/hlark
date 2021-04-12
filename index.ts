namespace hlark {
    /**
     * object prop copy
     * 用来拷贝对象，不可拷贝class，拷贝class请使用 applyClassMixins
     *
     * @export
     * @param {*} derivedCtor
     * @param {any[]} baseCtors
     */
    export function applyMixins(derivedCtor: any, baseCtors: any[]) {
        baseCtors.forEach(baseCtor => {
            Object.getOwnPropertyNames(baseCtor).forEach(name => {
                derivedCtor[name] = baseCtor[name];
            })
        });
    }

    /**
     * 用来拷贝class，不可拷贝普通对象，拷贝普通对象请使用 applyMixins
     *
     * @param {*} derivedCtor
     * @param {any[]} baseCtors
     */
    export function applyClassMixins(derivedCtor: any, baseCtors: any[]) {
        baseCtors.forEach(baseCtor => {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            })
        });
    }

    export interface EnsureFuncOptions {
        fn: Function;
        tryCount?: number;
        timeInterval?: number;
    }


    /**
     * 
     *
     * @export
     * @param {Function} fn
     * @param {number} [tryCount=3]
     * @param {number} [timeInterval=1000]
     */
    export function ensureFuncSuccess(options: EnsureFuncOptions) {
        let { fn, tryCount = 3, timeInterval = 1000 } = options;
        let runedCount = 0;
        function doFn() {
            let result = fn();
            runedCount += 1;
            console.log("🚀 ~ doFn ~ runedCount", runedCount);
            if (result == true) {
                return true;
            } else {
                if (runedCount < tryCount) {
                    setTimeout(() => {
                        doFn();
                    }, timeInterval);
                }
            }
        }
        doFn();
    }
}

export default hlark;