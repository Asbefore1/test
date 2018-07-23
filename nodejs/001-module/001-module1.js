
/*
var str1='hello';
console.log(str1);
global.str1=str1;//把str1作为全局变量 
*/



/*
console.log(module);//有id、exports、fillename等属性
console.log(module.exports);//module上带有的属性
console.log(exports);//函数上有的
console.log(module.exports==exports);
*/
//定义
let str='hello';
let obj={name:'Tom',age:18};
let fn=()=>{
	console.log('fn...');
}

// console.log(exports);//是一个对象
// exports.obj=obj;//exports将obj、fn暴露出去
// exports.fn=fn;

module.exports.obj=obj;//module.exports将obj、fn暴露出去
module.exports.fn=fn;

// exports={//暴露不出去
// 	obj:obj,
// 	str:str,
// 	fn:fn
// }
// module.exports={//可以暴露出去
// 	obj:obj,
// 	str:str,
// 	fn:fn
// }






