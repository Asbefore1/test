const Router=require('express').Router;
const router=Router();
const WishModel=require('../models/wish.js')


let getRandom = (min,max)=> {   
    return Math.round(min + (max-min)*Math.random());
}
let getColor=()=>{
	const colorArr = ['red','orange','pink','green','purple','skyblue'];
	return colorArr[getRandom(0,colorArr.length-1)];
}



//增加愿望
router.post('/',(req,res)=>{
	// console.log(req.body);
	let obj=req.body;
	obj.color=getColor();
	WishModel.insertMany(obj,(err,docs)=>{
		let result = {};
		if(!err){
			//3.返回结果到前端
			result = {
				status:0,//成功
				data:docs[0]
			}
		}else{
			result = {
				status:10,//成功
				message:'添加失败'
			}
			console.log(err);
		}
		let resultJson = JSON.stringify(result);
		res.end(resultJson);				
	})
	
})

//删除愿望
router.delete('/:id',(req,res)=>{
	// console.log(req.params.id);
	let id=req.params.id;  
	WishModel.remove({_id:id},(err,result)=>{
		if(!err){
			let resultJson = JSON.stringify({
				status:0
			});
			res.end(resultJson);					
		}			
	})
})



module.exports=router;