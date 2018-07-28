const http=require('http');
const url=require('url');
const formidable = require('formidable');
const querystring=require('querystring');
const util = require('util');
const path=require('path');
const fs=require('fs');

const server=http.createServer((req,res)=>{

	// console.log(req.url);
	
	if(req.method.toUpperCase()=='POST'){
		let form = new formidable.IncomingForm();

		form.uploadDir ="./upload";//新建一个文件夹名字要和引号里面的名字一样
		
		form.keepExtensions = true;//保留扩展名jpg/jnp

		form.parse(req, function(err, fields, files){
			//改名
			
			let oldpath='./'+files.img.path;//获取到原来图片的路径
			// console.log(oldpath);
			let extname=path.extname(oldpath);//获取到原来文件的扩展名
			// console.log(extname);

			//新路径=当前upload+随机的名字+图片拓展名
			let newpath='./upload/'+(new Date()).getTime()+Math.random()+extname;

			fs.rename(oldpath,newpath,(err)=>{
				if(!err){
					res.writeHead(200, {'content-type': 'text/plain'});
     				res.write('received upload:\n\n');
     				res.end(util.inspect({fields: fields, files: files}));
				}
			})

     		
    	});
	}
})


server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1');
})