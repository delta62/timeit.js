(function() {

    window.timeit = {
        emit: emitTimer
    };

    function emitTimer(type) {
        var timestamp = new Date().getTime();
        console.log('emitting "' + type + '" with timestamp ' + timestamp + '.');
    }

})();

