describe('timeit', function() {
    it('should be defined globally', function() {
        expect(timeit).to.exist;
    });

    it('should be callable', function() {
        expect(timeit).to.be.a('function');
    });

    it('should require a name parameter', function() {
        expect(function() { timeit(); }).to.throw;
    });

    it('should require a sequence parameter', function() {
        expect(function() { timeit('foo'); }).to.throw;
    });

    describe('when timeit has been configured', function() {

        it('should log the event to console');

        it('should trigger an XHR event');

    });

});
