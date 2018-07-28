const fs=require('fs');
const uuidv1 = require('uuid/v1');
let filePath='./data.json';

let add=(name,callBack)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			let json=JSON.parse(data);//将字符串转化为json数组
			json.push({
				id:uuidv1(),
				name:name,
			})
			let str=JSON.stringify(json);//将json数组转化为字符串
			fs.writeFile(filePath,str,(err)=>{
				if(!err){
					callBack(null,str);
				}else{
					callBack(err);
				}
			})
		}else{
			callBack(err);
		}	
	})	
}
let get=(id,callBack)=>{//获取时通过id进行获取
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			// console.log(data);//没转化之前的data是一个buffer,类似于字符串
			let obj=JSON.parse(data);
			let result=null;
			for(key in obj){
				if(obj[key]['id']==id){//obj[key]['id']是传进来的id,后面的id是对象上有的所有的id
					result = obj[key];//返回obj上的key键,id和name
					break;
				}
			}
			// obj.some((val)=>{
			// 	if(val['id']==id){
			// 		return true;
			// 	}
			// })
			callBack(null,result);
		}else{
			callBack(err);
		}
	})
}
let update=(id,name,callBack)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			let obj=JSON.parse(data);
			let result=null;
			obj.some((val)=>{
				if(val['id']==id){
					val['name']=name;
					return true;
				}
			})
			callBack(null,result);
			let str=JSON.stringify(obj);//将对象转化为字符串
			fs.writeFile(filePath,str,(err)=>{
				if(!err){
					callBack(null,str);
				}else{
					callBack(err);
				}
			})
		}else{
			callBack(err);
		}
	})
}

add('Tom',(err,data)=>{
	if(!err){
		console.log(data);
	}else{
		console.log('add file fail...',err);
	}
});


get('faa1d600-8fdb-11e8-bf05-f1d8ee1a90fc',(err,data)=>{
	if(!err){
		console.log(data);
	}else{
		console.log('get data fail...',err);
	}
})
remove('cda0876c-9028-48da-a947-d01edb4b73d5','tom',(err,data)=>{
	if(!err){
		console.log(data);
	}else{
		console.log('remove data fail...',err);
	}
})