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
                    'dist/timeit.js': ['src/**/*.js', '!src/timeit.nop.js', 'test/**/*.js']
                }
            },
            dist: {
                files: {
                    'dist/timeit.js': ['src/**/*.js', '!src/timeit.nop.js']
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
        },
        copy: {
            nop: {
                files: {
                    'dist/timeit.nop.js': ['src/timeit.nop.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
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
        'copy:nop',
        'browserify:dist'
    ]);
};
