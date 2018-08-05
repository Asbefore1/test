const mongoose=require('mongoose');
//2.定义Schema
const UserSchema=new mongoose.Schema({
		name:{
			type:String,
			require:[true,'必须输入用户名']
		},
		age:{
			type:Number,
			default:10,//允许有默认值
			minlength:[2,'最少2个字符'],
			maxlength:[10,'最多10个字符']
		},
		sex:{
			type:String,
			enum:['male','female'],//枚举,只能是这里面的值
			min:[1,'最小1岁'],
			max:[200,'最大200岁']
		},
		phone:{
			type:String,
			validate:{
				validator:function(val){
					return /1[358]\d{9}/.test(val)				
				},
				message:'{VALUE}不是合法电话号码'
			}			
		},
		locked:{//文本是否可以被编辑(修改)
			type:Boolean
		},
		createdAt:{
			type:Date,
			default:Date.now
		},
		friends:{
			type:Array
		}
});
/*
//实例方法

//UserSchema.methods是doc
UserSchema.methods.findMyblogs=function(callback){//UserSchema是一个实例对象
	// console.log(this);//谁调用findMyblogs,this就是谁,这里的this就是doc,包含name,age,sex等
	// console.log(this._id);


	//有Model.prototype.model()方法,该方法返回一个指定的Model,在model上调用方法相当于调用构造函数上的方法
	this.model('Blog').find({author:this._id},(err,docs)=>{
		callback(null,docs);//执行的传进来的回调函数
	})
}
*/


//静态方法
	/*
	UserSchema.statics.findMyPhone=function(phone,callback){
		// console.log(this);//this就是UserSchema这个构造函数
		// console.log(this.model('User')===this);//true
		this.findOne({phone:phone},(err,docs)=>{
			callback(null,docs);
		})
	}
	*/


	/*
	UserSchema.statics.findMyPhone=function({name:name},callback){
		// console.log(this);//this就是UserSchema这个构造函数
		// console.log(this.model('User')===this);//true
		this.findOne({name:name},(err,docs)=>{
			callback(null,docs);
		})
	}
	*/


	

//3.用定义好的Schema去生成model
//注意:model的第一个参数会生成数据库中集合的名称,数据库中把它变成小写加复数
const UserModel=mongoose.model('User',UserSchema);//User--->在数据库中变成users


module.exports=UserModel;//UserModel一个类,也就是构造函数