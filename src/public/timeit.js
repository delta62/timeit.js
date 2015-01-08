(function() {

    /**
     * XHR Format
     * ----------
     *
     * This is a point in time (pit):
     *
     *  {
     *      name: 'eventname',
     *      data: { ... } || null
     *      timestamp: 1234567890
     *  }
     */

    var timeitConfig;
    var timeit = {
        configure: configureTimeit,
        emit: emitTimer
    };

    function configureTimeit(opts) {
        var defaultOptions = {
            prot: 'http',
            host: 'localhost',
            port: undefined,
            path: '/'
        };

        // Publish the settings globally to timeit
        timeitConfig = defaultOptions;
    }

    function emitTimer(type) {
        var pit = createPointInTime(type);
        logPointInTime(pit);
        var xhr = createXHR(pit);
        var serializedPit = JSON.stringify(pit);
        sendXHR(xhr, serializedPit);
    }

    // TODO: Debounce this guy
    function sendXHR(xhr, body) {
        uri = 'http://localhost:8080/data';
        xhr.open('post', uri, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(body);
    }

    function createPointInTime(name, data) {
        if (typeof data === 'undefined') {
            data = null;
        }

        return {
            name: name,
            timestamp: new Date().getTime(),
            data: data
        };
    }

    function logPointInTime(pit) {
        console.log(pit.timestamp + ': ' + pit.name);
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
        console.log('Warning: including timeit as a global.');
        window.timeit = timeit;
    }
})();

