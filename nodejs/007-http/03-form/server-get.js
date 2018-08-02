const http=require('http');

const url=require('url');
const querystring=require('querystring');
const server=http.createServer((req,res)=>{

	console.log(req.url); //  /?name=sss&sex=male&hobby=basketball&hobby=football

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
	console.log(myURL);
	console.log(myURL.query); //去掉/?,返回一个对象 
	
	//方法二:
	// const myURL = new url.parse(req.url)
	// console.log(myURL);
	/*Url {
		protocol: null,
		slashes: null,
		auth: null,
		host: null,
		port: null,
		hostname: null,
		hash: null,
		search: '?name=Tom&sex=male&hobby=basketball&hobby=football',
		query: 'name=Tom&sex=male&hobby=basketball&hobby=football',
		pathname: '/',
		path: '/?name=Tom&sex=male&hobby=basketball&hobby=football',
		href: '/?name=Tom&sex=male&hobby=basketball&hobby=football' }
	*/
	// console.log(querystring.parse(myURL.query));//myURL.query拿出不带/?的参数,然后转化成对象

	res.setHeader("Content-Type","text/html;charset=UTF-8");
	res.end('走丢了...');
})


server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1');
})