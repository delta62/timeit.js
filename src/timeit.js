(function() {

    var sequence = require('./sequence');

    var timeitConfig;
    var timeit = function(name, sequence) {
        if (!name) {
            throw new Error('name is required');
        }
        if (!sequence) {
            throw new Error('sequence is required');
        }

        var pit = createPointInTime(type);
        logPointInTime(pit);
        var xhr = createXHR(pit);
        var serializedPit = JSON.stringify(pit);
        sendXHR(xhr, serializedPit);
    };

    timeit.prototype.sequence = function(name) {
        var seq = sequence();
        timeit(name, seq);
        return seq;
    };

    // TODO: Debounce this guy
    function sendXHR(xhr, body) {
        uri = 'http://localhost:8080/data';
        xhr.open('post', uri, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(body);
    }

    function createPointInTime(name) {
        return {
            name: name,
            timestamp: new Date().getTime()
        };
    }

    function createXHR(pit, success, error) {
        // Create an XHR object
        var xhr = new XMLHttpRequest();
        // Attach the data

        // Attach callbacks
        if (success) {
            xhr.onload = success;
        }
        if (error) {
            xhr.onerror = error;
        }

        // return the XHR
        return xhr;
    }

    configureTimeit();

    // Register as an AMD module if supported, otherwise create a global object
    if (typeof 'define' === 'function' && define.amd) {
        define([], function() {
            return timeit;
        });
    } else {
        console.log('Warning: globally exporting timeit');
        window.timeit = timeit;
    }
})();

