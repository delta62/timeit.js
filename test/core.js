describe('timeit.js core', function() {
    it('should define timeit globally', function() {
        expect(timeit).to.exist;
    });

    describe('when AMD support is present', function() {
        it('should define an AMD module');
    });

    describe('when AMD support is not present', function() {
        it('should not define an AMD module');
    });
});

describe('timeit', function() {
    it('should be callable', function() {
        expect(timeit).to.be.a('function');
    });

    it('should require a name parameter', function() {
        expect(function() { timeit(); }).to.throw;
    });

    it('should require a sequence parameter', function() {
        expect(function() { timeit('foo'); }).to.throw;
    });

    describe('when no configuration has taken place', function() {

        it('should throw');

    });

    describe('when timeit has been configured', function() {

        it('should log the event to console');

        it('should trigger an XHR event');

    });

    describe('when sending an XHR request', function() {

        it('should include a timestamp');

        it('should include an event name');

        it('should include a sequence number');

    });
});
