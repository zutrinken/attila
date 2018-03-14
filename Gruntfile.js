module.exports = function(grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*']
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: {
            'cssSrcDir': 'src/sass',
            'cssTargetDir': 'css',
            'jsSrcDir': 'src/js',
            'jsTargetDir': 'js'
        },
        copy: {
	        dev: {
                files: [{
	                dest: 'assets/font/',
	                src: '*',
                    cwd: 'src/font/',
                    expand: true
                }]
	        },
	        dist: {
                files: [{
	                dest: 'assets/font/',
	                src: '*',
                    cwd: 'src/font/',
                    expand: true
                }]		        
	        } 
        },
        clean: {
            dev: ['dev'],
            dist: ['dist'],
            all: ['dev', 'dist']
        },
        sass: {
            dev: {
                options: {
                    includePaths: ['<%= config.cssSrcDir %>'],
                    sourceMaps: true
                },
                files: {
                    'assets/<%=  config.cssTargetDir %>/style.css': '<%=  config.cssSrcDir %>/style.scss'
                }
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'assets/<%=  config.cssTargetDir %>/style.css': '<%=  config.cssSrcDir %>/style.scss'
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({ browsers: ['last 2 versions'] })
                ]
            },
            dev: {
                src: 'assets/<%=  config.cssTargetDir %>/*.css'
            },
            dist: {
                src: 'assets/<%=  config.cssTargetDir %>/*.css'
            }
        },
		uglify: {
			js: {
				files: {
					'assets/<%=  config.jsTargetDir %>/script.js': ['<%=  config.jsSrcDir %>/libs/jquery-*.js', '<%=  config.jsSrcDir %>/**/*.js']
				}
			}
		},
        watch: {
            css: {
                files: '<%=  config.cssSrcDir %>/**/*.scss',
                tasks: ['sass:dev','copy:dev','postcss:dev']
            }
        },
        compress: {
            package: {
              options: {
                archive: 'attila.zip'
              },
              files: [{
                expand: true,
                dot: true,
                cwd: './',
                src: [
                    './package.json',
                    './*.hbs',
                    './partials/*.hbs',
                    './locales/*.json',
                    './assets/**/*'
                ]
              }]
            }
          }
    });

    grunt.registerTask('build', [
        'sass:dist',
        'postcss:dist',
        'copy:dist',
        'uglify',
        'compress:package'
    ]);
    grunt.registerTask('default', [
        'sass:dev',
        'postcss:dev',
        'copy:dev',
        'uglify',
        'watch'
    ]);
};