const fs=require('fs');
const uuidv1 = require('uuid/v1');
let filePath='./data.json';

let add=(name,callBack)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			let obj=JSON.parse(data);//将字符串转化为对象
			obj.push({
				id:uuidv1(),
				name:name,
			})
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
// let get=(id,callBack)=>{
// 	fs.readFile(filePath,(err,data)=>{
// 		if(!err){
// 			let obj=JSON.parse(data);
// 			let result=null;
// 			for(key in obj){
// 				if(obj[key]['id']==id){
// 					result = obj[key];
// 					break;
// 				}
// 			}
// 			obj.some((val)=>{
// 				if(val['id']==id){
// 					return true;
// 				}
// 			})
// 			callBack(null,result);
// 		}else{
// 			callBack(err);
// 		}
// 	})
// }
// let update=(id,name,callBack)=>{
// 	fs.readFile(filePath,(err,data)=>{
// 		if(!err){
// 			let obj=JSON.parse(data);
// 			let result=null;
// 			obj.some((val)=>{
// 				if(val['id']==id){
// 					val['name']=name;
// 					return true;
// 				}
// 			})
// 			callBack(null,result);
// 			let str=JSON.stringify(obj);//将对象转化为字符串
// 			fs.writeFile(filePath,str,(err)=>{
// 				if(!err){
// 					callBack(null,str);
// 				}else{
// 					callBack(err);
// 				}
// 			})
// 		}else{
// 			callBack(err);
// 		}
// 	})
// }
// let remove=(id,name,callBack)=>{
// 	fs.readFile(filePath,(err,data)=>{
// 		if(!err){
// 			let obj=JSON.parse(data);
// 			let result=null;
// 			obj.filter((val)=>{
// 				if(val['id']==id){
// 					val['name']=name;
// 					return true;
// 				}
// 			})
// 			callBack(null,result);
// 			let str=JSON.stringify(obj);//将对象转化为字符串
// 			fs.writeFile(filePath,str,(err)=>{
// 				if(!err){
// 					callBack(null,str);
// 				}else{
// 					callBack(err);
// 				}
// 			})
// 		}else{
// 			callBack(err);
// 		}
// 	})
// }
add('Tom',(err,data)=>{
	if(!err){
		console.log(data);
	}else{
		console.log('add file fail...',err);
	}
});


// get('a9598236-4c76-4a85-a69c-8340efe122d1',(err,data)=>{
// 	if(!err){
// 		console.log(data);
// 	}else{
// 		console.log('get data fail...',err);
// 	}
// })
// update('a9598236-4c76-4a85-a69c-8340efe122d1','leo',(err,data)=>{
// 	if(!err){
// 		console.log(data);
// 	}else{
// 		console.log('update data fail...',err);
// 	}
// })
// remove('cda0876c-9028-48da-a947-d01edb4b73d5','tom',(err,data)=>{
// 	if(!err){
// 		console.log(data);
// 	}else{
// 		console.log('remove data fail...',err);
// 	}
// })