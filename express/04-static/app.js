const express=require('express');

const app=express();
// console.log(app);

// express().use('/index',require('./routes/user.js'))



//处理静态资源一:
app.use(express.static('public'));//默认找public下面的index.html


//走到public的index.html中找到页面了就停止了,不会在往下走了

// app.get('/static',(req,res)=>{//放到public前面的话,返回ok后就停止了,不会再去找index.html了
// 	res.send('ok')
// })

//处理静态资源二:
//虚拟路径
// app.use('/static',express.static('public'));//在地址栏上输入127.0.0.1:3000/static就可以找到


//点击的时候才会走到下面
app.use('/user',require('./routes/user.js'));
app.use('/blog',require('./routes/blog.js'));
	
app.listen(3000,()=>{
	console.log('server is running at 127.0.0.1')
})