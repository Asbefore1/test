const http=require('http');

const server=http.createServer((req,res)=>{
	res.setHeader("Access-Control-Allow-Origin","*");
	req.end()
})




server.listen(3001,'127.0.0.1',()=>{
	console.log('server id runing at 127.0.0.1:3000')
})