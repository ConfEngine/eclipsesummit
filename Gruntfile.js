module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            options: {
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'css/build/main.css': 'sass/src/main.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'css/build/main.min.css': ['css/build/main.css'],
                    'node_modules/normalize.css/normalize.min.css': ['node_modules/normalize.css/normalize.css']
                }
            }
        },
        concat: {
            css: {
                src: ['node_modules/normalize.css/normalize.min.css', 'css/build/main.min.css'],
                dest: 'css/build/main.min.css',
            },
            js: {
                src: ['node_modules/jquery/dist/jquery.min.js', 'js/build/app.min.js'],
                dest: 'js/build/app.min.js'
            }
        },
        watch: {
            sasscss: {
                files: ['sass/src/main.scss', 'css/build/main.css'],
                tasks: ['sass', 'cssmin'],
                options: {
                    spawn: false
                }
            },
            jsuglify: {
                files: ['js/src/app.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/build/app.min.js': ['js/src/app.js']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['watch']);
};
