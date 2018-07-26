const http=require('http');
const fs=require('fs');
const path=require('path');
const mime=require('./mime.json');//必须要写当前文件下

const server=http.createServer((req,res)=>{
	// console.log(req.url);
	let fileName=req.url;
	if(fileName.lastIndexOf('.')==-1){//文件夹
		fileName=fileName+'/index.html';
		// console.log(fileName);

	}
	let pathName=path.normalize(__dirname+'/static/'+fileName);//绝对路径 normalize去掉多余的/
	// console.log(pathName);
	let houzhui=path.extname(pathName);//取到文件的扩展名
	fs.readFile(pathName,(err,data)=>{
		if(!err){
			res.setHeader("Content-Type",mime[houzhui] + ";charset=UTF-8");
			res.end(data);
		}else{
			console.log('aaa');
			res.setHeader("Content-Type","text/html;charset=UTF-8");
			res.statusCode=404;			
			res.end('出错了...');
		}
	})
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1');
})