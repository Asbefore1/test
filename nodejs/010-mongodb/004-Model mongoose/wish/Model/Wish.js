const mongoose=require('mongoose');
const fs = require('fs');
const uuidv1 = require('uuid/v1');
const path = require('path');


const WishModel=require('../static/js/wish.js');

mongoose.connect('mongodb://localhost:27017/taobao', { useNewUrlParser: true });


let get=(callback)=>{
    db.on('error',(err)=>{
        throw err;
    })
    db.on('open',()=>{
        WishModel.find({},(err,doc)=>{
            if(!err){
                callback(null,doc);
            }else{
                callback(err);
            }
        })
    })      
}
let add=(options,callback)=>{//options是输入的内容content
    // console.log('ddd');
    
    let getRandom = (min,max)=> {   
            return Math.round(min + (max-min)*Math.random());
        }           
        const colorArr = ['red','orange','pink','green','purple','skyblue'];                       
        options.color = colorArr[getRandom(0,colorArr.length-1)];

        WishModel.insertMany(options,(err,doc)=>{
            if(!err){
                callback(null,options);
            }else{
                console.log(err);
                callback(err);
            }
        })  
}

// let remove=(id,callback)=>{
//         getDB((db,client)=>{
//             const col=db.collection('wish');
//             col.deleteOne({_id:id},function(err,result){
//                 if(!err){
//                     callback(null,result);//调用Controller文件里面的get方法
//                 }else{
//                     callback(err);
//                 }
//             })
//             client.close();  
//         })
//     }



module.exports = {
    get:get,
    add:add,
    // remove:remove
}