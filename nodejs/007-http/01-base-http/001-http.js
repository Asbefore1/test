const http=require('http');
const server=http.createServer((req,res)=>{
	//req可读流
	//res可写流
	res.setHeader("Content-Type","text/html;charset=UTF-8");
	res.write('<h1>hello,你好</h1>');
	res.end();
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('server running at 127.0.0.1');
})
