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

module.exports = {
    configure: function(configData) {
        if (!configData) {
            throw new Error('Configuration data is required');
        }
        if (typeof configData !== 'object') {
            throw new Error('Invalid configuration data');
        }
    },
    send: function(pit) {
        var serializedPit = serializePit(pit);
        var uri = createURI();
        var xhr = new XMLHttpRequest();
        xhr.open('post', uri);
        xhr.send(serializedPit);
    }
};
