const mongoose=require('mongoose');
//2.定义Schema
const blogSchema=new mongoose.Schema({
		author:{
			type:mongoose.Schema.Types.ObjectId
		},
		title:{
			type:String
		},
		content:{
			type:String
		}


});

//3.用定义好的Schema去生成model
//注意:model的第一个参数会生成数据库中集合的名称,数据库中把它变成小写加复数
const blogModel=mongoose.model('Blog',blogSchema);//User--->在数据库中变成users


module.exports=blogModel;