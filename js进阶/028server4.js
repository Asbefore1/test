var http=require('http');
var fs=require('fs');
var url=require('url');
var server=http.createServer(function(req,res){
	res.setHeader('Content-type','text/html;charset=UTF-8');                                                                                                                                                                                                                                                                                                                                             
	// res.setHeader('Access-Control-Allow-Origin','http://www.a.com:3000');                                                                                                                                                                                                                                                                                                                                             
	// res.setHeader('Content-type','text/plain');   
	var urlStr=req.url;
	console.log(urlStr);//请求地址(可以在node.js上看到,在后台打印出来的eg:027ajax3.html)
	
	//如果请求的是/favicon.ico直接返回
	if(urlStr=='/favicon.ico'){//处理页面前面的图标,如果请求到就直接返回(不去处理)
		res.statusCode=404;
		res.end();
	}
	//如果请求中有参数,把参数返回给前端页面
	if(urlStr.search(/\?/) !=-1){
		var prams=url.parse(urlStr,true).query;
		//通常拿到参数后需要根据参数作相应的处理
		var parmStr=JSON.stringify(prams);
		res.statusCode=200;
		res.end(parmStr);
	}
	//如果没有参数,打开文件读取并且返回
	var filePath='./'+urlStr;
	fs.readFile(filePath,function(err,data){
		if(err){
			console.log('read file err::',err);
			res.statusCode=404;
			res.end('file not found');
		}else{
			res.statusCode=200;
			res.end(data);
		}
	})                                                                                                                                                                                                                                                                                                                                          
});
server.listen(3000,'127.0.0.1',function(){    //告诉服务器监听那个端口(有六万个端口)
	console.log('Server is running at http://127.0.0.1:3000');
})