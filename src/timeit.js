(function() {

    var configure = require('./config'),
        sequence = require('./sequence');

    var timeitConfig;

    var timeit = function(name, sequence) {
        if (!name) {
            throw new Error('name is required');
        }
        if (!sequence) {
            throw new Error('sequence is required');
        }

        console.log(createPointInTime(name, sequence));
    };

    timeit.sequence = function(name) {
        var seq = sequence();
        timeit(name, seq);
        return seq;
    };

    timeit.config = function(configOpts) {
        timeitConfig = configure(configOpts);
    };

    function createPointInTime(name, sequenceID) {
        return {
            name: name,
            timestamp: new Date().getTime(),
            sequence: sequenceID
        };
    }

    // Register as an AMD module if supported
    if (typeof 'define' === 'function' && define.amd) {
        define([], function() {
            return timeit;
        });
    }
    window.timeit = timeit;

})();
