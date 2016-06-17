module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        // объединение всех файлов с расширением js
        src: ['js/*.js'],
        dest: 'js/script.main.js'
      }
    }
    // watch: {
    //   files: ['<%= jshint.files %>'],
    //   tasks: ['jshint']
    // }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  // это задача по умолчанию после запуска в консоли команды grunt
  grunt.registerTask('default', ['concat']);
  // это задача по умолчанию после запуска в консоли команды grunt dev
  // grunt.registerTask('dev', ['concat']);

};