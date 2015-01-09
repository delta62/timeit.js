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
            
            this.pit = {
                name:      'foo',
                sequence:  'bar',
                timestamp: 12345
            };
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

            beforeEach(function() {
                this.requestBody = JSON.parse(this.lastXHR.requestBody);
            });

            it('should POST the data', function() {
                var method = this.lastXHR.method.toLowerCase();
                expect(method).to.equal('post');
            });

            it('should use the configured endpoint', function() {
                var hostMatcher = /foo\.bar/;
                expect(this.lastXHR.url).to.match(hostMatcher);
            });

            it('should send an array of pit objects', function() {
                expect(this.requestBody).to.be.an('array');
            });

            it("should include each pit's name", function() {
                var requestName = this.requestBody[0].name;
                expect(requestName).to.equal(this.pit.name);
            });

            it("should include each pit's timestamp", function() {
                var requestTimestamp = this.requestBody[0].timestamp;
                expect(requestTimestamp).to.equal(this.pit.timestamp);
            });

            it("should include each pit's sequence id", function() {
                var requestSequence = this.requestBody[0].sequence;
                expect(requestSequence).to.equal(this.pit.sequence);
            });

        });

        describe('when an application failure occurs', function() {

            before(function() {
                this.lastXHR.respond(500, {}, '');
                this.log = sinon.stub(console, 'log');
            });

            after(function() {
                this.log.restore();
            });

            it('should log an error', function() {
                sinon.assert.calledOnce(this.log);
            });

        });

        describe('when a network failure occurs', function() {

            before(function() {
                this.log = sinon.stub(console, 'log');
            });

            after(function() {
                this.log.restore();
            });

            it('should log an error', function() {
                this.lastXHR.onerror();
            });

        });

    });

});
