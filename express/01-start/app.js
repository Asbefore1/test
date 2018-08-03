const express=require('express');
const app=express();
app.get('/',(req,res)=>{//req请求 res回复
	res.send('hello 你好,世界')
})
app.listen(3000,'127.0.0.1',()=>{
	console.log('server is running on 127.0.0.1')
})