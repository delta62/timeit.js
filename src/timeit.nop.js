(function() {

    var nop = function() { },
        timeit = nop;

    timeit.configure = nop;
    timeit.sequence = nop;

    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return timeit;
        });
    }
    window.timeit = timeit;

})();
