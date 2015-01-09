(function() {

    var configure = require('./config'),
        sequence = require('./sequence'),
        xhr = require('./xhr');

    var timeit = function(name, sequence) {
        if (!name) {
            throw new Error('name is required');
        }
        if (!sequence) {
            throw new Error('sequence is required');
        }

        var pit = createPointInTime(name, sequence);
        xhr.send(pit);
    };

    timeit.sequence = function(name) {
        var seq = sequence();
        timeit(name, seq);
        return seq;
    };

    timeit.config = function(configOpts) {
        var config = configure(configOpts);
        xhr.configure(config);
    };

    function createPointInTime(name, sequenceID) {
        var pit = {
            name: name,
            timestamp: new Date().getTime(),
            sequence: sequenceID
        };

        if (timeit.session) {
            pit.session = timeit.session;
        }

        return pit;
    }

    // Register as an AMD module if supported
    if (typeof define === 'function' && define.amd) {
        define(['timeit-config'], function(options) {
            timeit.config(options);
            return timeit;
        });
    }
    window.timeit = timeit;

})();
