/*
 * grunt-potojson
 * https://github.com/numediaweb/grunt-potojson
 *
 * Copyright (c) 2014 Abdessamad Idrissi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        potojson: {
            main: {
                options: {
                    output_header: 'module.exports = {\n',
                    output_body: '',
                    output_footer: '}',
                    output_separator: ':',
                    pretty_print: true,
                    report: true
                },
                files: {
                    'tmp/exported.cofee': ['test/source_complex.po']
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    //grunt.registerTask('test', ['clean', 'potojson', 'nodeunit']);
    grunt.registerTask('test', ['potojson']);

    // By default, lint and run all tests.
    //grunt.registerTask('default', ['jshint', 'test']);
    grunt.registerTask('default', ['test']);

};