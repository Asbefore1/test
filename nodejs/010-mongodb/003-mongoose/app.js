const mongoose=require('mongoose');
//1.连接数据库
mongoose.connect('mongodb://localhost:27017/kuazhu', { useNewUrlParser: true });
const db=mongoose.connection;
db.on('error',(err)=>{
	throw err;
})
db.once('open',()=>{
	console.log('连接成功了.....');
	//2.定义Schema
	const UserSchema=new mongoose.Schema({
		name:String,
		age:Number,
		sex:String
	});
	//3.用定义好的Schema去生成model
	//注意:model的第一个参数会生成数据库中集合的名称,数据库中把它变成小写加复数
	//类
	const User=mongoose.model('User',UserSchema);//User--->在数据库中变成users

	//4.用model操作数据库
	//插入
	const user=new User({name:'Tom',sex:'male',age:20});//类new一个实例
	//存到数据库中
	// user.save((err,docs)=>{
	// 	if(!err){
	// 		console.log(docs);
	// 	}else{
	// 		console.log('save data error...',err);
	// 	}
	// })

	//获取
	// User.find({name:'Tom'},(err,docs)=>{
	// 	if(!err){
	// 		console.log(docs);
	// 	}else{
	// 		console.log('find data error...',err);
	// 	}
	// })

	//更新
	// User.update({name:'Tom'},{$set:{age:99}},(err,result)=>{
	// 	if(!err){
	// 		console.log(result);
	// 	}else{
	// 		console.log('update data error...',err);
	// 	}
	// })

	// //删除
	// User.remove({name:'Tom'},(err,result)=>{
	// 	if(!err){
	// 		console.log(result);
	// 	}else{
	// 		console.log('delete data error...',err);
	// 	}
	// })
})

