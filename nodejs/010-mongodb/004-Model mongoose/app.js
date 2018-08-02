const mongoose=require('mongoose');
const UserModel=require('./models/user.js');
// console.log(mongoose);
//1.连接数据库
mongoose.connect('mongodb://localhost:27017/kuazhu', { useNewUrlParser: true });
const db=mongoose.connection;
db.on('error',(err)=>{
	throw err;
})
db.once('open',()=>{
	/*随机生成
	//类
	let getRandom = (min,max)=> {   
	    return Math.round(min + (max-min)*Math.random());
	}
	
	const Names=['tom','amy','mike','aaa','cccc','bbbb','nnnn'];
	
	let getName=()=>{
		return Names[getRandom(0,Names.length-1)];
	}
	
	let getSex=()=>{
		if(Math.random()>0.5){//Math.random()在0-1之间随机取
			return 'male';
		}else{
			return 'famale';
		}
	}
	var arr=[];
	for(var i=0;i<10;i++){
		
		arr.push({name:getName(),sex:getSex(),age:getRandom(10,99)});
			
	}
	UserModel.insertMany(arr,(err,doc)=>{
		if(!err){
			console.log(doc);
		}else{
			console.log(err);
		}
	});
	*/
	

	//4.用model操作数据库
	
	/*
	UserModel.insertMany([{name:'Tom1',sex:'male',age:18},{name:'Tom2',sex:'male',age:18}],(err,doc)=>{
		if(!err){
			console.log(doc);
		}else{
			console.log(err);
		}
	})
	console.log('aaaa');//程序会先走下面的打印,再回去判断数据库插入数据是否成功,体现出回调
	*/
	/*
	let promise=UserModel.insertMany({name:'Tom1',sex:'male',age:18});
	// console.log(promise);
	promise
	.then((doc)=>{//成功
		console.log(doc);
	})
	.catch((err)=>{//失败
		console.log(err);
	})
	*/


	// UserModel.find({age:{$lt:50}},(err,doc)=>{//null不能省略
	// 	if(!err){
	// 		console.log(doc);
	// 	}else{
	// 		console.log(err);
	// 	}
	// })

	// UserModel.find({age:{$gt:50}},{age:0},(err,doc)=>{
	// 	if(!err){
	// 		console.log(doc);
	// 	}else{
	// 		console.log(err);
	// 	}
	// })
	// UserModel.find({age:{$gt:50}},'name:1,age:0',(err,doc)=>{//可选的字段
	// 	if(!err){
	// 		console.log(doc);
	// 	}else{
	// 		console.log(err);
	// 	}
	// })
	// UserModel.find({age:{$gt:50}},'name,-_id',(err,doc)=>{//显示name,隐藏id
	// 	if(!err){
	// 		console.log(doc);
	// 	}else{
	// 		console.log(err);
	// 	}
	// })
	// UserModel.find({age:{$gt:50}},{skip:2},(err,doc)=>{
	// 	if(!err){
	// 		console.log(doc);
	// 	}else{
	// 		console.log(err);
	// 	}
	// })




	// UserModel.update({age:{$lt:50}},{age:49},(err,doc)=>{//默认更新一个,并且不用加set:{$lt:50}
	// 	if(!err){
	// 		console.log(doc);
	// 	}else{
	// 		console.log(err);
	// 	}
	// })
	// UserModel.updateMany({age:{$lt:50}},{age:49},(err,doc)=>{
	// 	if(!err){
	// 		console.log(doc);
	// 	}else{
	// 		console.log(err);
	// 	}
	// })
	// UserModel.updateOne({age:49},{age:109},(err,doc)=>{
	// 	if(!err){
	// 		console.log(doc);
	// 	}else{
	// 		console.log(err);
	// 	}
	// })

	


	//删除
			/*
			UserModel.remove({age:{$lt:50}},(err,result)=>{//默认删除所有
				if(!err){
					console.log(result);
				}else{
					console.log(err);
				}
			})
			*/

			/*
			UserModel.remove()
			.setOptions({single:true})
			.then((doc)=>{//成功
				console.log(doc);
			})
			.catch((err)=>{//失败
				console.log(err);
			})
			*/


			/*
			UserModel.deleteOne({age:51},(err,result)=>{//默认删除所有
				if(!err){
					console.log(result);
				}else{
					console.log(err);
				}
			})
			*/

			/*
			UserModel.deleteMany({age:{$lte:57}},(err,result)=>{//默认删除所有
				if(!err){
					console.log(result);
				}else{
					console.log(err);
				}
			})
			*/
			UserModel.distinct('name',{age:{$lt:70}},(err,result)=>{//输出小于70岁的人的名字
				if(!err){
					console.log(result);
				}else{
					console.log('distinct error...',err);
				}
			})
})

