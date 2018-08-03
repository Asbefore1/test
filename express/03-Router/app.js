const express=require('express');

const app=express();
// console.log(app);

// express().use('/index',require('./routes/user.js'))

app.use(express.static('public'));//默认找根目录

//点击的时候才会走到下面
app.use('/user',require('./routes/user.js'));
app.use('/blog',require('./routes/blog.js'));
	
app.listen(3000,()=>{
	console.log('server is running at 127.0.0.1')
})