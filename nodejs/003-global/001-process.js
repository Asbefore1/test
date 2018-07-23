//虽然看起来像全局变量，但实际上不是。 它们的作用域只在模块内
// console.log(__dirname);//当前模块的文件夹名次
// console.log(__filename);//当前模块的绝对路径

// console.log(global);
// global.str='hello';//在global上添加的属性在其他地方也可以用
// console.log(str);

// console.log(process);
// console.log(process.argv);//打印出的是数组(一个是命令,一个是绝对路径)
// for(key in process.argv){
// 	console.log(process.argv[key]);
// }
// console.log(process.argv[0]);
// console.log(process.env);
// console.log(process.pid);
// console.log(process.arch);