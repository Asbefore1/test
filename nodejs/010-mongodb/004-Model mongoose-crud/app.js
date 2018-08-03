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
	

	//增加

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
	//优势:把回调函数放到promise中执行,不用再使用callback回调函数了
	
	let promise=UserModel.insertMany({name:'Tom2',sex:'male',age:18});
	console.log(promise);//Promise { <pending> }
	promise
	.then((doc)=>{//成功
		console.log(doc);
	})
	.catch((err)=>{//失败
		console.log(err);
	})
	*/


	/*
	//save方法是在实例对象上的方法,需要先new一个对象
	let user=new UserModel({name:'Tom3',sex:'male',age:18});
	user.save((err,doc)=>{
		if(!err){
			console.log(doc);
		}else{
			console.log('save err...',err);
		}
	})
	*/


	/*
	let user=new UserModel({name:'Tom4',sex:'male',age:18});
	let promise=user.save();
	promise
	.then((doc)=>{
		console.log(doc);
	}
	.catch((err)=>{//失败
		console.log(err);
	})
	*/

	/*
	new UserModel({name:'Tom5',sex:'male',age:18}).//相当于返回user对象,在user对象上调用save方法
	.save()//返回一个promise
	.then((doc)=>{
		console.log(doc);
	})
	.catch((err)=>{
		console.log('UserModel err...',err);
	})
	*/

	/*
	UserModel.create({name:'Tom1',sex:'male',age:18},(err,doc)=>{
		if(!err){
			console.log(doc);
		}else{
			console.log(err);
		}
	})
	*/



	//查找

	// UserModel.find({age:{$lt:50}},(err,doc)=>{//null不能省略
	// 	if(!err){
	// 		console.log(doc);
	// 	}else{
	// 		console.log(err);
	// 	}
	// })



	/*
	//find返回的是数组
	UserModel.find({age:{$gt:50}},{name:1,age:0},(err,doc)=>{//可选的字段
		if(!err){
			console.log(doc);
		}else{
			console.log(err);
		}
	})
	*/

	/*
	UserModel.find({age:{$gt:50}},'name -_id',(err,doc)=>{//显示name,隐藏id
		if(!err){
			console.log(doc);
		}else{
			console.log(err);
		}
	})
	*/
	

	/*
	UserModel.find({age:{$gt:50}},{skip:2},(err,doc)=>{
		if(!err){
			console.log(doc);
		}else{
			console.log(err);
		}
	})
	*/

	/*
	UserModel.findById('1525f21d5s2sd214',(err,docs)=>{//传进来的id是字符串
		if(!err){
			console.log(doc);
			// console.log(typeof doc._id);  //object  在系统内部自动转化成对象返回回来
			// console.log(doc._id.toString())  //toString后才是字符串

		}else{
			console.log('find error...',err);
		}
	})
	*/

	/*
	UserModel.findOne({age:{$gt:50}},(err,docs)=>{
		if(!err){
			console.log(doc);
		}else{
			console.log(err);
		}
	})
	*/

	//更新

	/*
	UserModel.update({age:{$lt:50}},{age:49},(err,doc)=>{//默认更新一个,并且不用加set:{$lt:50}
		if(!err){
			console.log(doc);
		}else{
			console.log(err);
		}
	})
	*/

	/*
	UserModel.updateMany({age:{$lt:50}},{age:49},(err,doc)=>{
		if(!err){
			console.log(doc);
		}else{
			console.log(err);
		}
	})
	*/

	/*
	UserModel.updateOne({age:49},{age:109},(err,doc)=>{
		if(!err){
			console.log(doc);
		}else{
			console.log(err);
		}
	})
	*/
	


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

			/*
			UserModel.distinct('name',{age:{$lt:70}},(err,result)=>{//输出小于70岁的人的名字
				if(!err){
					console.log(result);
				}else{
					console.log('distinct error...',err);
				}
			})
			*/
})

