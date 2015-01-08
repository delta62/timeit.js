module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mocha: {
            src: ['test/**/*.html']
        }
    });

    grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('default', [
        'mocha'
    ]);
};
