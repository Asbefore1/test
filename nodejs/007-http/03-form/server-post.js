const http=require('http');

const url=require('url');
const querystring=require('querystring');
const server=http.createServer((req,res)=>{

	// console.log(req.url);
	// console.log(req.method);    //POST
	if(req.method.toUpperCase()=='POST'){
		let body='';
		req.on('data',(chunk)=>{
			body+=chunk;
		})
		req.on('end',()=>{
			// console.log(body);//name=Tom&sex=male&hobby=basketball&hobby=football
			let obj=querystring.parse(body);//转化为对象
			console.log(obj);
			res.setHeader("Content-Type","text/html;charset=UTF-8");
			res.end('走丢了...');
		})
	}	
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1');
})