(function() {

    var nop = function() { },
        timeit = nop;

    timeit.configure = nop;
    timeit.sequence = nop;

    if (typeof require === 'function' && require.amd) {
        define(function() {
            return timeit;
        });
    }
    window.timeit = timeit;

})();
