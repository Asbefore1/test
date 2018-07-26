const http=require('http');
const url=require('url');
const formidable = require('formidable');
const querystring=require('querystring');
const util = require('util');

const server=http.createServer((req,res)=>{

	console.log(req.url);
	
	if(req.method.toUpperCase()=='POST'){
		let form = new formidable.IncomingForm();

		form.uploadDir ="./upload";
		
		form.keepExtensions = true;

		form.parse(req, function(err, fields, files){

     		res.writeHead(200, {'content-type': 'text/plain'});
     		res.write('received upload:\n\n');
     		res.end(util.inspect({fields: fields, files: files}));
    	});
	}
})


server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1');
})