/*
require('./001-module1.js');  //不加./会默认是系统模块
console.log(str1);
*/

//引用-->require--->module.exports引用
const m2=require('./001-module1.js');//调用001,并且有返回值
console.log(m2);//返回对象里面的所有内容
console.log(m2.obj);
m2.fn();
