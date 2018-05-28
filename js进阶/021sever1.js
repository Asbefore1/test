var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
	res.setHeader('Content-type','text/html;charset=UTF-8');                                                                                                                                                                                                                                                                                                                                             
	// res.setHeader('Content-type','text/plain');   
	
	console.log(req.url);
	var filePath='./'+req.url;
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
	// res.end('<h1>hello nodejs,你好</h1>');
});
server.listen(3000,'127.0.0.1',function(){    //告诉服务器监听那个端口(有六万个端口)
	console.log('Server is running at http://127.0.0.1:3000');
})

