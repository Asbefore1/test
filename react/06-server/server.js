const http=require('http');

const server=http.createServer((req,res)=>{
	res.setHeader("Access-Control-Allow-Origin","*");
	
	let data=['learn react','learn nodejs']
	
	res.end(JSON.stringify(data))//返回字符串
})




server.listen(3001,'127.0.0.1',()=>{
	console.log('server is runing at 127.0.0.1:3001')
})