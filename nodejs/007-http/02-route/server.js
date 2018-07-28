const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
	let pathName=req.url;
	// console.log(pathName);//返回在浏览器输入的地址
	if(pathName=='/index.html'){//在浏览器里输入的名字,找不到会出现文件走丢了....
		fs.readFile('./index.html',(err,data)=>{//去读当前文件夹里面的文件,找不到会出现index 出错了...
			if(!err){
				res.setHeader("Content-Type","text/html;charset=UTF-8");//请求头不一样			
				res.end(data);
			}else{
				res.setHeader("Content-Type","text/html;charset=UTF-8");
				res.statusCode=404;			
				res.end('index 出错了。。。。');
			}
		})
	}else if(pathName=='/list.html'){//在浏览器里输入的名字,找不到会出现文件走丢了....
		fs.readFile('./list.html',(err,data)=>{//去读当前文件夹里面的文件,找不到会出现list 出错了...
			if(!err){
				res.setHeader("Content-Type","text/html;charset=UTF-8");			
				res.end(data);
			}else{
				res.setHeader("Content-Type","text/html;charset=UTF-8");
				res.statusCode=404;					
				res.end('list出错了。。。。');
			}
		})
	}else if(pathName=='/index.css'){//在浏览器里输入的名字,找不到会出现文件走丢了....
		fs.readFile('./index.css',(err,data)=>{//去读当前文件夹里面的文件,找不到会出现list 出错了...
			if(!err){
				res.setHeader("Content-Type","text/css;charset=UTF-8");//请求头不一样			
				res.end(data);
			}else{
				res.setHeader("Content-Type","text/html;charset=UTF-8");
				res.statusCode=404;					
				res.end('list出错了。。。。');
			}
		})
	}else if(pathName=='/index.js'){//在浏览器里输入的名字,找不到会出现文件走丢了....
		fs.readFile('./index.js',(err,data)=>{//去读当前文件夹里面的文件,找不到会出现list 出错了...
			if(!err){
				res.setHeader("Content-Type","application/x-javascript;charset=UTF-8");//请求头不一样		
				res.end(data);
			}else{
				res.setHeader("Content-Type","text/html;charset=UTF-8");
				res.statusCode=404;					
				res.end('list出错了。。。。');
			}
		})
	}else{
		res.setHeader("Content-Type","text/html;charset=UTF-8");			
		res.end('文件走丢了。。。。');
	}
	
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('server running at 127.0.0.1');
})