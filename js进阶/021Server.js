var http=require('http');
var fs=require('fs');  //把fs引进到nodejs中 


	//server指的是一个变量来接受调用http上的createServer方法时的返回结果
var server=http.createServer(function(req,res){   
	// res.end('hello nodejs');
	res.setHeader('Content-Type','text/html;charset=UTF-8');  //(键,值);  返回回来的处理方法

	console.log(req.url);   //拿到文件

    var filePath='./'+req.url;
    
	fs.readFile(filePath,function(err,data){   //readFile读取文件，成功放在data ，读取不到放到err
		if(err){
			res.statusCode=404;
			res.end('file not found');
		}else{
			res.statusCode=200;
			res.end(data);
		}
	})
}); 


		//server上面有一个listen方法,他接受三个参数(第一个是运行的端口号'一般是3000'，
				//第二个运行的地址，一般是本机,127.0.0.1或localhost,第三个参数是一个回调函数,
				//用来打印启动这个服务时的提示信息)


server.listen(3000,'127.0.0.1',function(){    //告诉服务器监听那个端口(有六万个端口)
	console.log('Server is running at http://127.0.0.1:3000');
})