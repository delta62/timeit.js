module.exports = function(grunt) {

    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: 'vendor'
                }
            }
        },
        connect: {
            test: {
                options: {
                    keepalive: true
                }
            }
        },
        browserify: {
            dev: {
                files: {
                    'dist/timeit.js': ['src/**/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['test']);

    grunt.registerTask('test', [
        'bower:install',
        'browserify:dev',
        'connect:test',
    ]);
};
