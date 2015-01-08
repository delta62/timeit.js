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

    window.timeit = {
        configure: configureTimeit,
        emit: emitTimer
    };

    var defaultOptions = {
        prot: 'http',
        host: 'localhost',
        port: undefined,
        path: '/'
    };



    function configureTimeit(opts) {

    }

    function emitTimer(type) {
        var pit = createPointInTime(type);
        logPointInTime(pit);
        var xhr = createXHR(pit);
        console.log(xhr);
    }

    // TODO: Debounce this guy
    function sendXHR(XHR) {

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
        // Serialize the data
        // var data = JSON.stringify(pit.data);

        // Create an XHR object
        var xhr = new XMLHttpRequest();
        // Attach the data


        // Attach success callback
        if (success) {
            xhr.onload = success;
        }

        // Attach error callback
        if (error) {
            xhr.onerror = error;
        }

        // return the XHR
        return xhr;
    }

})();

