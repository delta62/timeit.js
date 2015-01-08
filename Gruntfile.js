module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mocha: {
            src: ['test/**/*.html']
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: 'src/public',
		    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-connect');
    
    grunt.registerTask('default', [
        'mocha',
	'connect'
    ]);
};
