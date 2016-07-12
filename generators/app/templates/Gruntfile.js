'use strict';
module.exports = function(grunt) {
  // 自动加载插件
  require('load-grunt-tasks')(grunt);
  // 显示任务花费时间
  require('time-grunt')(grunt);
  // 应用程序路径配置
  var appConfig = {
    app: 'src', //源码目录
    dist: 'dist', //最终代码目录
    tmp: 'tmp'
  };
  // 定义插件
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    yeoman: appConfig,

  
   
  
    // 静态服务器
    connect: {
      options: {
        port: 9000,
        hostname: '*', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
        livereload: 35729 //声明给 watch 监听的端口
      },
      server: {
        options: {
          open: true, //自动打开网页 http://
          base: [
            '<%=yeoman.app%>/' //主目录
          ]
        }
      }
    },
// 监控
    watch: {
      livereload: {
        options: {
          livereload: '<%=connect.options.livereload%>' //监听前面声明的端口  35729
        },
        files: [ //下面文件的改变就会实时刷新网页
          '<%=yeoman.app%>/{,*/,*/*/,*/*/*/,*/*/*/*/}*.html',
          '<%=yeoman.app%>/html/{,*/,*/*/,*/*/*/,*/*/*/*/}*.html',
          '<%=yeoman.app%>/css/{,*/,*/*/,*/*/*/,*/*/*/*/}*.css',
          '<%=yeoman.app%>/js/{,*/,*/*/,*/*/*/,*/*/*/*/,*/*/*/*/*/}*.js',
          '<%=yeoman.app%>/images/{,*/,*/*/,*/*/*/,*/*/*/*/}*.{png,jpg}',
          '<%=yeoman.app%>/package/{,*/,*/*/,*/*/*/,*/*/*/*/}**'
        ]
      }
    }

   


});


//静态服务器任务
  grunt.registerTask('serve', [
        'connect:server',
        'watch'
  ]);

};