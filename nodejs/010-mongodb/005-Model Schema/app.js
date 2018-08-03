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
	UserModel.insertMany({
		name:'tom',
		// age:18,
		sex:'male',
		phone:13581562300,
		locked:false,
		createdAt:Date(),
		friends:['mike','amy','leo']
	},(err,docs)=>{
		if(!err){
			console.log(docs);
		}else{
			console.log('insertMany error...',err);
		}
	})
	*/

	/*
	UserModel.findById('',(err,docs)=>{//GMT时间
		console.log(moment(docs.createdAt).format('YYYY-MM-DD HH:mm:ss'))
	})
	*/

	/*
	blogModel.insertMany({
		author:'5b62cf04a92af308846046ef',
		title:'I am title2',
		content:'I am content2'
	},(err,docs)=>{
		if(!err){
			console.log(docs);
		}else{
			console.log('insertMany error...',err)
		}
	})
	*/

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

	//静态方法
	UserModel.findMyPhone('13581562300',(err,docs)=>{//findMyPhone是自定义的方法
		if(!err){
			console.log(docs);
		}else{
			console.log('findMyPhone error...',err);
		}
	})
})