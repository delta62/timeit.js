var xhr = require('../src/xhr');

describe('XHR Module', function() {

    before(function() {
        this.xhr = sinon.useFakeXMLHttpRequest();
        this.xhr.onCreate = function(xhr) {
            this.lastXHR = xhr;
        }.bind(this);
    });

    after(function() {
      this.xhr.restore();
    });
    
    describe('configure', function() {

        it('should throw when no configuration data is given', function() {
            expect(function() { xhr.configure(); }).to.throw;
        });

        it('should throw when invalid configuration data is given', function() {
            expect(function() { xhr.configure('foo'); }).to.throw;
        });

    });

    describe('send', function() {

        before(function() {
            xhr.configure({
                protocol: 'http',
                host:     'foo.bar',
                port:     9001,
                path:     '/baz'
            });
        });

        it('should throw when no pit is given', function() {
            expect(function() { xhr.send(); }).to.throw;
        });

        it('should throw when an invalid pit is given', function() {
            expect(function() { xhr.send('foo'); }).to.throw;
        });

        it('should send an XHR', function() {
            xhr.send(this.pit);
            expect(this.lastXHR).to.exist;
        });

        describe('when sending an XHR', function() {

            it('should use the configured endpoint');

            it('should send an array of pit objects');

            it("should include each pit's name");

            it("should include each pit's timestamp");

            it("should include each pit's sequence id");

        });

        desrcribe('when an application failure occurs', function() {

            it('should log an error');

        });

        describe('when a network failure occurs', function() {

            it('should log an error');

        });

    });

});
