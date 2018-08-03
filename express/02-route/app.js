const express=require('express');
const app=express();

// app.get('/',(req,res)=>{//req请求 res回复
// 	res.send('get data...')
// })

app.all('/',(req,res,next)=>{//点get,post,put,delete都会走到这
	console.log('all...');
	next()//不写next程序会一直在等待,因为里面没有结束也没有别的命令
})

app.get('/',(req,res,next)=>{//req请求 res回复
	console.log('get1....');
	next()
},(req,res)=>{
	console.log('get2...')
	res.send('get data...');//send代表结束了
})



app.post('/',(req,res)=>{//req请求 res回复
	res.send('post data...')
})

app.put('/',(req,res)=>{//req请求 res回复
	res.send('put data...')
})

app.delete('/',(req,res)=>{//req请求 res回复
	res.send('delete data...')
})

app.use(express.static('public'));//静态文件必须放在路由后面

	

	
app.listen(3000,'127.0.0.1',()=>{
	console.log('server is running on 127.0.0.1')
})