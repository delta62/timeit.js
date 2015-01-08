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

    it('should require a name parameter');
    it('should require a sequence parameter');
});

describe('timeit.sequence', function() {
    it('should be callable');
    it('should return an identifier');
    it('should not return the same identifier twice');
});
