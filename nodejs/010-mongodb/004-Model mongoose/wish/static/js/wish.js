const mongoose=require('mongoose');
//2.定义Schema
const WishSchema=new mongoose.Schema({
		name:String,
		age:Number,
		sex:String
});

//3.用定义好的Schema去生成model
//注意:model的第一个参数会生成数据库中集合的名称,数据库中把它变成小写加复数
const WishModel=mongoose.model('User',WishSchema);//User--->在数据库中变成users


module.exports=WishModel;