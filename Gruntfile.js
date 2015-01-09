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
                middleware: require('connect-livereload')()
            }
        },
        browserify: {
            dev: {
                files: {
                    'dist/timeit.js': ['src/**/*.js', 'test/**/*.js']
                }
            },
            dist: {
                files: {
                    'dist/timeit.js': ['src/**/*.js']
                }
            }
        },
        watch: {
            dev: {
                files: ['src/**/*.js', 'test/**/*.js'],
                tasks: ['browserify:dev'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'build'
    ]);

    grunt.registerTask('debug', [
        'browserify:dev',
        'connect:test',
        'watch:dev'
    ]);

    grunt.registerTask('build', [
        'browserify:dist'
    ]);
};
