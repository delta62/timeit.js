var configuration = { };
var pitData = [ ];

// Borrowed from underscore
function debounce(func, wait) {
    var timeout, args, context, timestamp, result;

    var later = function() {
        var last = new Date().getTime() - timestamp;

        if (last < wait && last > 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        }
    };

    return function() {
        context = this;
        args = arguments;
        timestamp = new Date().getTime();
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }

        return result;
    };
};

function serializePit(pit) {
    return JSON.stringify(pit);
}

function createURI() {
    return configuration.protocol + '://' +
        configuration.host + ':' +
        configuration.port +
        configuration.path;
}

function xhrLoaded() {
    if (this.status != 200) {
        console.error('Application error attempting to send data');
    }
}

function xhrError() {
    console.error('Network error attempting to send data');
}

function sendXHR() {
    var uri = createURI();
    var serialData = serializePit(pitData);
    var xhr = new XMLHttpRequest();
    xhr.onload = xhrLoaded;
    xhr.onerror = xhrError;
    xhr.open('post', uri);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(serialData);
}

var sendXHRDebounced = debounce(sendXHR, 1000);

module.exports = {
    configure: function(configData) {
        if (!configData) {
            throw new Error('Configuration data is required');
        }
        if (typeof configData !== 'object') {
            throw new Error('Invalid configuration data');
        }
        configuration = configData;
    },
    send: function(pit) {
        pitData.push(pit);
        sendXHRDebounced();
    }
};
