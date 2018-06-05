//kQuery的基本结构是一个闭包
(function(window,undefined){  //这里的window是参数
var 
	//kQuery的构造函数
	kQuery=function(selector){
		return new kQuery.fn.init(selector);
	};
//kQuery的原型对象
kQuery.fn=kQuery.prototype={
	constructor:kQuery,
	init:function(selector){
		//布尔值是假的情况返回空的jQuery对象
		if(!selector){  //默认是假false非假即真(是真的情况下)
			return this;			
		}else if(kQuery.isFunction(selector)){
							//函数返回一个包含了document的jQuery对象,
							//当页面所有的DOM元素加载完毕后执行传入的函数
			document.addEventListener('DOMContentLoaded',function(){  //绑定事件
				selector(); //在DOM元素加载完毕后执行传进来的函数
			})
			this[0]=document;
			this.length=1;
			return this;  //把函数返回出去,this就是函数
		}else if(kQuery.isString(selector)){
			console.log('string....')
		}
	}
}
kQuery.isFunction=function(str){
	typeof selector=='function'
}
kQuery.isString=function(){
	typeof selector=='string'
}
kQuery.fn.init.prototype=kQuery.fn;
window.kQuery=window.$=kQuery;

})(window)   //此时的window是一个全局