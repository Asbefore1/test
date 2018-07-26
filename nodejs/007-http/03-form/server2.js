const http=require('http');
const url=require('url');
const querystring=require('querystring');
const formidable = require('formidable');
const util = require('util');
const server=http.createServer((req,res)=>{
	console.log(req.url);
	// /?name=Tom&sex=male&hobby=basketball&hobby=football
	// const myURL=new url.parse(req.url,true);
	console.log(req.method);
	res.setHeader("Content-Type","text/html;charset=UTF-8");
	let body='';
	if(req.method.toUpperCase()=='POST'){
		req.on('data',(chunk)=>{
			body+=chunk;
		})
		req.on('end',()=>{
			let query=querystring.parse(body);
			console.log('query...',query);
		})
		req.end('ok');
	}
})


server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1');
})