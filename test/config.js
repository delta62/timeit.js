var config = require('../src/config');

describe('Configuration Module', function() {

    it('should be callable', function() {
        expect(config).to.be.a('function');
    });

    it('should throw when no config is given', function() {
        expect(function() { config(); }).to.throw;
    });

    it('should throw when an invalid config is given', function() {
        expect(function() { config('foo'); }).to.throw;
    });

    it('should return a settings hash', function() {
        expect(config({})).to.be.a('object');
    });


    describe('when a config value is not specified', function() {

        beforeEach(function() {
            this.config = config({});
        });

        it('should default protocol', function() {
            expect(this.config.protocol).to.equal('http');
        });

        it('should default hostname', function() {
            expect(this.config.host).to.equal('localhost');
        });

        it('should default port', function() {
            expect(this.config.port).to.equal(8080);
        });

        it('should default path', function() {
            expect(this.config.path).to.equal('/');
        });

    });

    describe('when a config value is specified', function() {

        beforeEach(function() {
            this.customConfig = {
                protocol: 'fooprot',
                host:     'foohost',
                port:     'fooport',
                path:     'foopath'
            };

            this.config = config(this.customConfig);
        });

        it('should allow overriding the default protocol', function() {
            expect(this.config.protocol).to.equal(this.customConfig.protocol);
        });

        it('should allow overriding the default hostname', function() {
            expect(this.config.host).to.equal(this.customConfig.host);
        });

        it('should allow overriding the default port', function() {
            expect(this.config.port).to.equal(this.customConfig.port);
        });

        it('should allow overriding the default path', function() {
            expect(this.config.path).to.equal(this.customConfig.path);
        });

    });

});
