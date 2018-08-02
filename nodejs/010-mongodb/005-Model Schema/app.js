const mongoose=require('mongoose');
const UserModel=require('./models/user.js');
// const blogModel=require('./models/blog.js');
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

	UserModel.findOne({name:'tom'},(err,doc)=>{//docs是一个实例对象
		doc.findMyblogs((err,docs)=>{
			console.log(docs)
		})
	})
})