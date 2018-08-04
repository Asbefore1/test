const express=require('express');
const swig=require('swig');
const app=express();

//开发时不用缓存,上线的时候注掉就好了
swig.setDefaults({
	cache:false
});



app.engine('html',swig.renderFile);
app.set('views','./views');
app.set('view engine','html');
/*
app.get('/',(req,res)=>{
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
/*
app.get('/',(req,res)=>{
	res.render('blog')
})
*/

app.listen(3000,()=>{
	console.log('server is running on 127.0.0.1')
})