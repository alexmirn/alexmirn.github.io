module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        // объединение всех файлов с расширением js
        src: ['js/src/*.js'],
        dest: 'js/dist/script.min.js'
      }
    },
    uglify: {
        dist: {
        src: ['js/dist/script.min.js'],
        dest: 'js/dist/script.min.js'
      }
    }
    
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // это задача по умолчанию после запуска в консоли команды grunt
  grunt.registerTask('default', ['concat', 'uglify']);
  // это задача по умолчанию после запуска в консоли команды grunt dev
  // grunt.registerTask('dev', ['concat']);

};