var sequence = require('../src/sequence');

describe('Sequence Module', function() {

    it('should be callable', function() {
        expect(sequence).to.be.a('function');
    });

    it('should return an identifier', function() {
        var uid = sequence();
        var uidMatcher = /........-....-4...-....-............/;
        expect(uid).to.match(uidMatcher);
    });

    it('should not return the same identifier twice', function() {
        var uid1 = sequence();
        var uid2 = sequence();
        expect(uid1).not.to.equal(uid2);
    });

    it('should implicitly call timeit()');

});
