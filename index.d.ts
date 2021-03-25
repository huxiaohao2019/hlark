declare namespace hlark {
    /**
     * object prop copy
     * 用来拷贝对象，不可拷贝class，拷贝class请使用 applyClassMixins
     *
     * @export
     * @param {*} derivedCtor
     * @param {any[]} baseCtors
     */
    function applyMixins(derivedCtor: any, baseCtors: any[]): void;
    /**
     * 用来拷贝class，不可拷贝普通对象，拷贝普通对象请使用 applyMixins
     *
     * @param {*} derivedCtor
     * @param {any[]} baseCtors
     */
    function applyClassMixins(derivedCtor: any, baseCtors: any[]): void;
}
export = hlark;
export as namespace hlark;
