const http=require('http');
const path=require('path');
const fs=require('fs');
const mime=require('./mime.json');//必须要写当前文件下

const server=http.createServer((req,res)=>{
	// console.log(req.url);
	let fileName=req.url;

	//如果是带.的就不会走到if里面
	if(fileName.lastIndexOf('.')==-1){//文件夹,没有找到.则返回-1(是文件夹的话就会报错,因为本身就没有这个文件)
		fileName=fileName+'/index.html';
	}

	let filePath=path.normalize(__dirname+'/static/blog'+fileName);//绝对路径 normalize去掉多余的/
	// console.log(filePath);

	let fileExtName=path.extname(filePath);//取到文件的扩展名

	fs.readFile(filePath,(err,data)=>{
		if(!err){
			let mimeType=mime[fileExtName] || 'text/plain';
			res.setHeader("Content-Type",mimeType + ";charset=UTF-8");
			res.end(data);
		}else{
			// console.log('aaa');
			res.setHeader("Content-Type","text/html;charset=UTF-8");
			res.statusCode=404;			
			res.end('出错了...');
		}
	})
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1');
})