const fs=require('fs');
const uuidv1 = require('uuid/v1');
let filePath='./data.json';

let add=(name,callBack)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			// console.log(data);//[]--->buffer(5d 5d)系统自动将buffer转化为字符串
			let obj=JSON.parse(data);//将字符串转化为对象
			obj.push({
				id:uuidv1(),
				name:name,
			})
			// console.log(obj); 数组
			let str=JSON.stringify(obj);//将json数组转化为字符串
			// console.log(str);
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
			let obj=JSON.parse(data);//转化为对象
			let result=null;
			// for(key in obj){
			// 	if(obj[key]['id']==id){//obj[key]['id']是传进来的id,后面的id是对象上有的所有的id
			// 		result = obj[key];//返回obj上的key键,id和name
			// 		// console.log(result['id']);
			// 		break;
			// 	}
			// }
			obj.some((val)=>{//只要有一个满足条件就返回真,都不满足返回假
				if(val['id']==id){//val['id']是传进来的id
					return true;
				}
			})
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
let remove=(id,callBack)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			let obj=JSON.parse(data);
			let newObj=obj.filter((val)=>{
				return val['id'] !=id
			})
			// console.log(newObj);//过滤后新的数组
			let str=JSON.stringify(newObj);
			fs.writeFile(filePath,str,(err)=>{
				if(!err){
					callBack(null,newObj);
				}else{
					callBack(err);
				}
			})
		}else{
			callBack(err);
		}
	})
}


// add('Tom',(err,data)=>{
// 	if(!err){
// 		console.log(data);//data就是数据
// 	}else{
// 		console.log('add file fail...',err);
// 	}
// });
// get('95111610-917b-11e8-a8ac-6d2725888afc',(err,data)=>{
// 	if(!err){
// 		console.log(data);
// 	}else{
// 		console.log('get data fail...',err);
// 	}
// })
/*update('95111610-917b-11e8-a8ac-6d2725888afc','leo',(err,data)=>{
	if(!err){
		console.log(data);
	}else{
		console.log('update data fail...',err);
	}
})*/
remove('95111610-917b-11e8-a8ac-6d2725888afc',(err,data)=>{
	if(!err){
		console.log(data);
	}else{
		console.log('remove data fail...',err);
	}
})