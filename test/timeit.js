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

    it('should log the event to console', function() {
        var consoleStub = sinon.stub(console, 'log');
        timeit('foo', 'bar');
        consoleStub.restore();
        sinon.assert.calledOnce(consoleStub);
    });

    it('should trigger an XHR event', function() {
      var xhr = sinon.useFakeXMLHttpRequest();
      xhr.onCreate = sinon.stub();
      timeit('foo', 'bar');
      xhr.restore();
      sinon.assert.calledOnce(xhr.onCreate);
    });

});
