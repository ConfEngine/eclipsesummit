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
                    'css/build/main.min.css': ['css/build/main.css']
                }
            }
        },
        watch: {
            sasscss: {
                files: ['sass/src/main.scss', 'css/build/main.css'],
                tasks: ['sass', 'cssmin'],
                options: {
                    spawn: false,
                },
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['watch']);
};
