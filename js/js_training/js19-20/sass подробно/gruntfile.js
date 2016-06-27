module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/styles/reset.scss', 'src/styles/variables.scss', 'src/styles/mixins.scss',  'src/styles/style.scss'],
        dest: 'src/styles/main.scss'
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/styles',
          src: ['main.scss'],
          dest: 'dist/styles',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['src/styles/*.scss'],
        tasks: ['concat', 'sass'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // это задача по умолчанию после запуска в консоли команды grunt, здесь мы регистрируем все наши модули
  grunt.registerTask('default', ['concat', 'sass']);

};



// работающий кусок кода(но чуть неправильно) зато работают импорты
// module.exports = function(grunt) {

//   grunt.initConfig({
//     // concat: {
//     //   options: {
//     //     separator: ';'
//     //   },
//     //   dist: {
//     //     // объединение всех файлов с расширением js
//     //     src: ['src/js/*.js'],
//     //     dest: 'dist/js/script.min.js'
//     //   }
//     // },
//     // uglify: {
//     //     dist: {
//     //     src: ['dist/js/script.min.js'],
//     //     dest: 'dist/js/script.min.js'
//     //   }
//     // },
//     // cssmin: {
//     //         with_banner: {
//     //             options: {
//     //                 banner: '/* this is minified CSS */'
//     //             },

//     //             files: {
//     //               // до двоеточия - файл назначения минификации, после - из каких файлов его делать
//     //                 'dist/css/style.min.css' : ['src/css/*.css']                }
//     //         }
//     // },
//     sass: {
//       dist: {
//         files: [{
//           expand: true,
//           cwd: 'src/styles',
//           src: ['*.scss'],
//           dest: 'dist/styles',
//           ext: '.css'
//         }]
//       }
//     },
//     watch: {
//       sass: {
//         // We watch and compile sass files as normal but don't live reload here
//         files: ['src/styles/*.scss'],
//         tasks: ['sass'],
//       }
//     }
//   });

//   // grunt.loadNpmTasks('grunt-contrib-concat');
//   // grunt.loadNpmTasks('grunt-contrib-uglify');
//   // grunt.loadNpmTasks('grunt-contrib-cssmin');
//   grunt.loadNpmTasks('grunt-contrib-sass');
//   grunt.loadNpmTasks('grunt-contrib-watch');
  
//   // это задача по умолчанию после запуска в консоли команды grunt, здесь мы регистрируем все наши модули
//   // grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'sass']);
//   grunt.registerTask('default', ['sass']);

// };