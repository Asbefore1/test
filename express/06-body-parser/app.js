const express=require('express');
const app=express();
const bodyParser = require('body-parser');


// console.log(app);


app.use(express.static('public'));//默认找根目录

/*
app.post('/user',(req,res)=>{
	let body='';
	req.on('data',(chunk)=>{
		body+=chunk;
	})
	req.on('end',()=>{
		console.log(body);//拿到字符串,需要安装querystring插件调用querystring.parse(body)转化成对象
		//步骤很麻烦
	})
})
*/


//用下面两行代码来代替post请求中直接拿到对象
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/user',(req,res)=>{
	console.log(req.body);//直接拿到对象
})

//点击的时候才会走到下面
// app.use('/user',require('./routes/user.js'));
// app.use('/blog',require('./routes/blog.js'));
	
app.listen(3000,()=>{
	console.log('server is running at 127.0.0.1')
})