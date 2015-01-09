var configuration = { };

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
        var pitArray = [pit];
        var serializedPit = serializePit(pitArray);
        var uri = createURI();
        var xhr = new XMLHttpRequest();
        xhr.onload = xhrLoaded;
        xhr.onerror = xhrError;
        xhr.open('post', uri);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(serializedPit);
    }
};
