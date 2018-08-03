const mongoose=require('mongoose');
//2.定义Schema
const blogSchema=new mongoose.Schema({
		author:{
			type:mongoose.Schema.Types.ObjectId,
			ref:'User'//必须要告诉程序在哪个集合上找作者
		},
		title:{
			type:String
		},
		content:{
			type:String
		}


});
/*
blogSchema.statics.findblogs=function(query,callback){query就是外面传进来的{title:'I am title'}
	// console.log('findblogs');
	this.findOne(query)
	.populate('author')
	.then((docs)=>{
		console.log(docs)
	})
}
*/

blogSchema.statics.findblogs=function(query){

	let promise=new Promise((resolve,reject)=>{//resolve成功  //reject失败
		this.findOne(query)//返回query,query上有populate方法
		.populate('author')//又返回query,query上有then和catch方法		
		.then((docs)=>{
			resolve(docs)
		})
		.catch((err)=>{
			reject(err)
		})
	})
	return promise;
}






//3.用定义好的Schema去生成model
//注意:model的第一个参数会生成数据库中集合的名称,数据库中把它变成小写加复数
const blogModel=mongoose.model('Blog',blogSchema);//Blog--->在数据库中变成blogs


module.exports=blogModel;