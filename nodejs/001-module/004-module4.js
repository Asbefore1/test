//路径一
const m4=require('./001-module1.js');//模块标识是指括号里的参数,默认可以不写.js
//先找js文件再找json文件再找node文件,最后找不到会报错

//路径二
// const m4=require('c:/Users/liyuphp/test/nodejs/003-module3');
// const m4=require('c:\\Users\\liyuphp\\test\\nodejs\\003-module3');
console.log(m4);


//const fs=require('fs');//核心模块,区别于./下的文件,./是文件模块
//console.log(fs);



