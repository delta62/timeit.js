(function() {

    function addEventListener(el, type, callback) {
        if (el.addEventListener) {
            el.addEventListener(type, callback);
        } else {
            el.attachEvent(type, callback);
        }
    }

    addEventListener(document, 'timeit', function() {
        console.log('got a timeit event!');
    });

})();

