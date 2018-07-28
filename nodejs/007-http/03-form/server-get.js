const http=require('http');

const url=require('url');
const querystring=require('querystring');
const server=http.createServer((req,res)=>{

	// console.log(req.url); //  /?name=sss&sex=male&hobby=basketball&hobby=football

	/*
	const { URL } = require('url');
	const myURL = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

	console.log(myURL.searchParams.get('query'));
	*/

	// const { URL } = require('url');
	// const myURL = new URL(req.url);

	// console.log(myURL.searchParams.get('query')); //返回了一个无效的地址
	//Invalid URL: /?name=ssss&sex=male&hobby=basketball&hobby=football

	//方法一:
	const myURL = new url.parse(req.url,true);//参数req.url获取到地址 参数req.url是要解析的 URL 字符串
	// console.log(myURL);
	console.log(myURL.query);
	
	//方法二:
	// const myURL = new url.parse(req.url)
	// console.log(querystring.parse(myURL.query));

	res.setHeader("Content-Type","text/html;charset=UTF-8");
	res.end('走丢了...');
})


server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1');
})