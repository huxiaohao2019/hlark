import hlark from "../index";

let a = 1;
function fn1() {
    if (a == 7) {
        return true;
    } else {
        a++;
    }
}

hlark.ensureFuncSuccess({
    fn: fn1,
    tryCount: 10
})