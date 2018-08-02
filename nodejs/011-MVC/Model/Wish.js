const fs = require('fs');
const uuidv1 = require('uuid/v1');
const path = require('path');

const MongoClient=require('mongodb').MongoClient;
const Url='mongodb://localhost:27017';
const dbName='taobao';

let getRandom = (min,max)=> {   
    return Math.round(min + (max-min)*Math.random());
}

const colorArr = ['red','orange','pink','green','purple','skyblue'];

let getDB=(callback)=>{
    MongoClient.connect(Url, {useNewUrlParser:true},function(err,client){//MongoClient上的静态方法connect

        console.log('连接成功了....');
        //获取数据库
        const db=client.db(dbName);
        // console.log(db);
        callback(db,client);
    })
}

let add=(options,callback)=>{//options是输入的内容content
    getDB((db,client)=>{
        //通过db创建集合
        const col=db.collection('wish');
        options._id = uuidv1();
        options.color = colorArr[getRandom(0,colorArr.length-1)];//调用getRandom函数随机获取颜色
        //insertOne是集合上的方法
        col.insertOne(options,function(err,result){//现在的options既是内容,又有id,又有颜色,是整个对象
            console.log(result);
            if(!err){
                callback(null,options);//去调用Controller里面的2.存储到文件里面的add
            }else{
                callback(err);
            }
        }) 
        client.close();
    })       
}
    
let get=(callback)=>{
    getDB((db,client)=>{
        const col=db.collection('wish');
        col.find({}).toArray(function(err,docs){
            if(!err){
                callback(null,docs);//调用Controller文件里面的get方法
            }else{
                callback(err);
            }
        })
        client.close();       
    })
}

let remove=(id,callback)=>{
    getDB((db,client)=>{
        const col=db.collection('wish');
        col.deleteOne({_id:id},function(err,result){
            if(!err){
                callback(null,result);//调用Controller文件里面的get方法
            }else{
                callback(err);
            }
        })
        client.close();  
    })
}


module.exports = {
    get:get,
    add:add,
    remove:remove
}