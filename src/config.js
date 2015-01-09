var defaults = {
    protocol: 'http',
    host:     'localhost',
    port:     8080,
    path:     '/'
};

module.exports = function(config) {
    for (var option in defaults) {
        if (!config.hasOwnProperty(option)) {
            config[option] = defaults[option];
        }
    }
    return config;
};
