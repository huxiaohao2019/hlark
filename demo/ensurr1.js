import hlark from "../index";
var a = 1;
function fn1() {
    if (a == 7) {
        return true;
    }
    else {
        a++;
    }
}
hlark.ensureFuncSuccess({
    fn: fn1,
    tryCount: 10
});
