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
	//核心函数
	init:function(selector){
		selector=kQuery.tirm(selector); //先判断selector有没有空格
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
			this.length=1;  //把函数返回出去,this就是函数
		}//处理字符串
		else if(kQuery.isString(selector)){
			//html代码返回dom节点的jquery对象
			if(kQuery.isHTML(selector)){  //把html代码包装成jQuery对象
				// console.log('ishtml....')
				var temDom=document.createElement('div'); 
				temDom.innerHTML=selector;
				// console.log(temDom.children); //创建一个DOM元素,把两个div放到DOM元素中
				/*for(var i=0;i<temDom.children.length;i++){  //循环把里面的两个div转化成jQuery对象
					this[i]=temDom.children[i];
				}
				this.length=temDom.children.length;*/
				[].push.apply(this,temDom.children); //this就是DOM元素(temDom)
			}//选择器返回的是选择器选中的dom节点的jquery对象
			else{
				var doms=document.querySelectorAll(selector);
				// console.log(doms);  //doms是一个对象
				/*for(var i=0;i<doms.length;i++){
					this[i]=doms[i];
				}
				// this.length=doms.length;*/
				[].push.apply(this,doms);  //this是谁？
			}
		}//真伪数组返回数组中的内容的jquery对象
		else if(kQuery.isArr(selector)){
			// console.log('arr....')
			//由于apply转伪数组有兼容性问题(IE8以下不兼容)
			//
			所以把伪数组转化成真数组
			var remArr=[].slice.call(selector);
			//把真数组转化成伪数组
			[].push.apply(this,selector);
		}//返回参数对应的内容
		else{
			this[0]=selector;
			this.length=1;		
		}
		return this;
	},
	selector:'',
	length:0,
	//一下方法在调用时是kQuery对象调用,所以谁调this就是谁
	push:[].push,  //一个实例在调,谁调this就是谁
	sort:[].sort,
	splice:[].splice, //(截取数组)
	toArray:function(){  //返回数组
		return [].slice.call(this); //this代表谁来调用他,this就是谁
	},
	get:function(num){  //返回DOM元素
		if(arguments.length==1){ 	//判断输入参数的长度,等于1--->有参数,不等于1---->没参数	
			//正数
			if(num>=0){
				return this[num];
			}
			//负数
			else{
				//-1 4=3(-1就是长度为3的)
				return this[num+this.length];
			}
		}else{
			return this.toArray();  //直接把其转化成真数组返回回去
		}
	},
	eq:function(num){  //返回jQuery对象
		if(arguments.length==1){
			return this.get(num);  //this就是$li
		}else{
			return new $();   //返回一个空对象即new一个空对象
		}
	},
	first:function(){  //返回jQuery对象
		return this.eq(0);
	},
	last:function(){  //返回jQuery对象
		return this.eq(-1);
	},
	each:function(fn){
		// console.log(this);   //this是jQuery对象(jQuery对象本身就是一个伪数组)
		return kQuery.each(this,fn); 
		//$li来调用,$li就是this,
		//fn里面的this就是每一个DOM节点,因为调用了each方法,改变了this的指向
	},
	map:function(fn){ 
		return kQuery(kQuery.map(this,fn));  //fn返回一个jQuery对象,由数组包装成
	} 
	

}

kQuery.extend=kQuery.fn.extend=function(obj){
	// console.log(this);
	for(key in obj){
		this[key]=obj[key];  //key就是test1,test2
	}
}
//kQuery的静态方法
//this是构造函数kQuery
kQuery.extend({
	isFunction:function(str){
		return typeof str=='function';
	},

	isString:function(str){
		return typeof str=='string';
	},

	isHTML:function(str){  //charAt(0)取出第0个元素
		return str.charAt(0)=='<' && str.charAt(str.length-1)=='>' && str.length>=3;
	},

	isObject:function(str){
		typeof str=='object';
	},

	isArr:function(str){
		return kQuery.isObject && length in str;  
				//数组要同时满足两个条件:一、数据类型要是object,二、要有length属性
	},
	tirm:function(str){
		if(kQuery.isString(str)){
			return str.replace(/^\s+|\s+$/g,'');  
						//以多个空格开头并以多个空格结尾的去除掉空格
		}else{ 
			return str;
		}
	},
	each:function(arr,fn){
		if(kQuery.isArr(arr)){  //判断是不是数组
			for(var i=0;i<arr.length;i++){
				// console.log(i,arr[i]);
				var res=fn.call(arr[i],i,arr[i]); 
							//fn接收两个参数:index和value(下标和里面的内容)
							//call把this指向改变了,原来指向window,现在指向具体的DOM元素里面的内容
				if(res==false){
					break; //结束整个循环
				}else if(res==true){
					continue; //结束本次循环
				}
			} 
		}else{  //否则是对象
			for(key in arr){
				// console.log(key,arr[key]);
				var res=fn.call(arr[key],key,arr[key]);
				if(res==false){
					break;
				}else if(res==true){
					continue;
				}
			}
		}
	},
	map:function(arr,fn){
		var retArr=[];
		if(kQuery.isArr(arr)){
			for(var i=0;i<arr.length;i++){
				var res=fn(arr[i],i);
				if(res){
					retArr.push(res);
				}				
			}
		}else{
			for(key in arr){
				var res=fn(arr[key],key);
				if(res){
					retArr.push(res);
				}				
			}
		}
		return retArr;
	}

})

//kQuery对象上的属性相关的操作方法
kQuery.fn.extend({ //this是kQuery.fn原型对象
	html:function(content){
		// console.log('html....');
		if(content){
			//设置所有DOM原始的innerhtml;
				//this就是传进来的li返回出去的jQuery,通过each方法改变其中的this指向,将ths指向DOM元素
			this.each(function(){ 
				this.innerHTML=content; //里面的this是DOM元素
			});
			return this;
		}else{
			return this[0].innerHTML;
		}
	},
	text:function(content){
		if(content){
			this.each(function(){
				this.innerText=content;
			});
			return this;
		}else{
			var str='';
			this.each(function(){
				str+=this.innerText;
			})
			return str;
		}
	},
	attr:function(arg1,arg2){
		if(kQuery.isObject(arg1)){//是对象的情况
			//设置所有的DOM属性值为对象中的值
			this.each(function(){
				var dom=this;//此时的this是DOM元素
				kQuery.each(arg1,function(attr,val){//循环DOM元素去改变里面的参数和值
					dom.setAttribute(attr,val);
				})
			})
		}else{//不是对象
			if(arguments.length==1){//参数为一个的情况
				return this[0].getAttribute(arg1);
			}else if(arguments.length==2){//参数为两个
				this.each(function(){
					this.setAttribute(arg1,arg2);
				})
			}
		}
		return this;
	},
	removeAttr:function(arg1){
		if(arg1){//传参数就删除
			this.each(function(){
				this.removeAttr(arg1);
			})
		}//不传就返回本身的jQuery对象,可以直接不写
		return this;
	},
	val:function(arg1){
		if(arg1){
			this.each(function(){
				this.value=arg1;
			})
			return this;
		}else{
			return this[0].value;
		}
	},
	css:function(arg1,arg2){
		if(kQuery.isString(arg1)){//是字符串的情况
			if(arguments.length==1){
				// return this[0].style[arg1];//只能获取行间样式
				// return getComputedStyle(this[0],false)[arg1];  //存在兼容性问题
			}else if(arguments.length==2){

			}
		}else if(kQuery.isObject(arg1)){//不是字符串的情况,也就是对象的情况

		}	
	}

})

kQuery.fn.init.prototype=kQuery.fn;
window.kQuery=window.$=kQuery;

})(window)   //此时的window是一个全局