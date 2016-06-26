module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // concat: {
    //   options: {
    //     separator: ';'
    //   },
    //   dist: {
    //     // объединение всех файлов с расширением js
    //     src: ['js/src/*.js'],
    //     dest: 'js/dist/script.min.js'
    //   }
    // },
    // uglify: {
    //     dist: {
    //     src: ['js/dist/script.min.js'],
    //     dest: 'js/dist/script.min.js'
    //   }
    // },
    babel: {
        options: {
            sourceMap: false,
            presets: ['es2015']
        },
        dist: {
            files: [{
                expand: true,
                cwd: 'js/src',
                src: ['*.js'],
                dest: 'js/dist',
                ext: '.js',
                extDot: 'first'
            }]
        }
    },
    watch: {
      babel: {
        files: 'js/src/*.js',
        tasks: ['babel']
      },
    }
    
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // это задача по умолчанию после запуска в консоли команды grunt
  grunt.registerTask('default', ['babel']);
  // grunt.registerTask('default', ['concat', 'uglify']);
  // это задача по умолчанию после запуска в консоли команды grunt dev
  // grunt.registerTask('dev', ['concat']);

};