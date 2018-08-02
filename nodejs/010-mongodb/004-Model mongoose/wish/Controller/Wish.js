const wish = require('../Model/Wish.js');
const swig = require('swig');
const querystring=require('querystring');

class Wish{

	//显示许愿墙页面
	index(req,res,...args){
		wish.get((err,data)=>{
			if(!err){
				let template = swig.compileFile(__dirname+'/../View/index.html');
				let html = template({
				   data:data
				});
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.end(html);	
			}else{
				console.log(err);
			}
		});	
	}

	add(req,res,...args){
		console.log('ddd')
		//1.获取前端的参数
		let body = '';
		req.on('data',(chunk)=>{
			body += chunk;
		});
		req.on('end',()=>{
			let obj = querystring.parse(body);//转化成对象
			//2.存储到文件
			console.log('1:::',obj)
			wish.add(obj,(err,data)=>{
				let result = {};
				if(!err){
					//3.返回结果到前端
					result = {
						status:0,//成功
						data:data
					}
				}else{
					result = {
						status:10,//失败
						message:'添加失败'
					}
					console.log(err);
				}
				let resultJson = JSON.stringify(result);//字符串
				res.end(resultJson);				
			});
		})
	}

	del(req,res,...args){
		wish.remove(args[0],(err)=>{
			if(!err){
				let resultJson = JSON.stringify({
					status:0
				});
				res.end(resultJson);					
			}
		});
	}
}	

module.exports = new Wish();