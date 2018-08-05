const express=require('express');
const swig=require('swig');
const app=express();

//开发时不用缓存,上线的时候注掉就好了
swig.setDefaults({//cache缓存
	cache:false
});


//1. 配置应用模板
//第一个参数是模板名称一般是html,同时也是模板文件的扩展名
//第二个参数是解析模板的方法
app.engine('html',swig.renderFile);

//2.配置模板的存放目录
//第一参数必须是views
//第二个参数是模板存放的目录
app.set('views','./views');

//3.注册模板引擎
//第一个参数必须是view engine
//第二个参数是模板名称,也就是app.engine的第一个参数
app.set('view engine','html');
/*
app.get('/',(req,res)=>{
	//4.渲染模板
    //第一个参数是相对于模板目录的文件
    //第二个参数是传递给模板的数据
	res.render('data',{
		title:'你好',
		content:'世界',
		obj:{
			name:'tom',
			age:18
		},
		name:'leo',
		arr:['aa','bb','cc','dd']
	})
})
*/
/*
app.get('/',(req,res)=>{
	res.render('index')
})
*/


app.listen(3000,()=>{
	console.log('server is running on 127.0.0.1')
})