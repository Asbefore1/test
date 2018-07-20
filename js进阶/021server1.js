//改js一次,就要在终端上重启一下node js

var http=require('http');
//通过require来引入模块,用模块上的createServer上的方法去创建服务
//createServer上的方法接收一个函数,函数又接收两个参数
var fs=require('fs');
//引入文件系统,就是写这样一句话就支持请求文件了,读取文件是一个一步的程序

var server=http.createServer(function(req,res){//创建方法
  	//req是请求信息,res是返回回来的信息
	res.setHeader('Content-Type','text/html;charset=UTF-8'); 
	//Content-Type是键    text/html和charset=UTF-8是值    
	//text/html代表的是用html格式解析  
	//charset=UTF-8告诉浏览器用UTF-8的格式进行解析中文就不会出现乱码


	// res.setHeader('Content-type','text/plain');
	// 代表的是用纯文本解析   
	
	console.log(req.url);//请求地址(可以在node.js上看到,在后台打印出来的eg:027ajax3.html)
	
	var filePath='./'+req.url;//根目录下
	fs.readFile(filePath,function(err,data){
		//第一个参数是读取文件的路径,第二个参数是一个回调函数
		if(err){//读的有异常
			console.log('read file err::',err);
			res.statusCode=404;
			res.end('file not found');//res提供一个end方法来返回信息
		}else{//正确读到,返回读到的数据
			res.statusCode=200;
			res.end(data);
		}
	})                                                                                                                                                                                                                                                                                                                                          
	// res.end('<h1>hello nodejs,你好</h1>');
});
server.listen(3000,'127.0.0.1',function(){    //告诉服务器监听那个端口(有六万个端口)
	// 第一个是端口号,一般是3000端口,
	// 第二个是本机的ip地址
	// 第三个是回调函数,一般打印提示信息
	console.log('Server is running at http://127.0.0.1:3000');
})

