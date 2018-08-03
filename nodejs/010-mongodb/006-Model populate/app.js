const mongoose=require('mongoose');
const UserModel=require('./models/user.js');
const blogModel=require('./models/blog.js');
const moment=require('moment');
// console.log(mongoose);
//1.连接数据库
mongoose.connect('mongodb://localhost:27017/kuazhu', { useNewUrlParser: true });
const db=mongoose.connection;
db.on('error',(err)=>{
	throw err;
})
db.once('open',()=>{
	

	/*
	//实例方法

	//findOne找到名字是tom的文档,再去调用findMyblogs走到user.js里面的findMyblogs找到作者的id
	//找到所有的博客,在博客中找到作者对应的id
	UserModel.findOne({name:'tom'},(err,doc)=>{//docs是一个实例对象	

		doc.findMyblogs((err,docs)=>{
			console.log('2:::',docs)

		})
		// console.log('1:::')	//会先打印出1:::,体现出异步,表示findOne先走,到findMyblogs的时候
		//他去user.js里找findMyblogs了,下面的1:::会接着走,不受到异步的影响,等异步走完了就会打印出来2:::和docs
	})
	*/


	/*
	//静态方法
	UserModel.findMyPhone('13581562300',(err,docs)=>{//findMyPhone是自定义的方法
		if(!err){
			console.log(docs);
		}else{
			console.log('findMyPhone error...',err);
		}
	})
	*/


	//通过博客中的一条信息找到整个博客,并找到作者的信息
	/*
	blogModel
	.findOne({title:'I am title'})
	.populate('author','name -_id age')//关联查询
	.then((docs)=>{
		console.log(docs);
	})
	*/


	/*
	blogModel.findblogs({title:'I am title'},(err,docs)=>{
		if(!err){
			console.log(docs);
		}else{
			console.log('findblogs error...',err);
		}
	})
	*/


	/*
	let promise=blogModel.findblogs({title:'I am title'});
	promise
	.then((doc)=>{//成功
		console.log(doc);
	})
	.catch((err)=>{//失败
		console.log(err);
	})
	*/
})