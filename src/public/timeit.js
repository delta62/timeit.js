(function() {

    window.timeit = {
        emit: emitTimer
    };

    function emitTimer(type) {
        console.log('emitting "' + type + '"');
    }

})();

