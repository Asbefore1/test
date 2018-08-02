const fs = require('fs');
const uuidv1 = require('uuid/v1');

const filePath = './data.json';

let getRandom = (min,max)=> {   
    return Math.round(min + (max-min)*Math.random());
}

const colorArr = ['#f10','#ff0','#ff5600','#0f1'];

let add = (options,callback)=>{//options是一个对象
    fs.readFile(filePath,(err,data)=>{
        if(!err){
            let obj = JSON.parse(data);
            options.id = uuidv1();//获取随机的id
            //获取随机的颜色
            options.color = colorArr[getRandom(0,colorArr.length-1)];
            //把对象push到[]中
            obj.push(options);
            let str = JSON.stringify(obj);

            //把对象放到data.json文件中
            fs.writeFile(filePath,str,(err)=>{
                if(!err){
                    callback(null,options);
                }else{
                    callback(err);
                }
            })

        }else{
            callback(err);
        }
    })
}

let get = (callback)=>{
    fs.readFile(filePath,(err,data)=>{
        if(!err){
            let obj = JSON.parse(data);
            // console.log(obj);
            /*[{content: '3333',id:'86ba9df0-9231-11e8-b6ef-83f72c8478d5',color:'#ff0'}]*/
            callback(null,obj);
        }else{
            callback(err);
        }
    });
}

let remove = (id,callback)=>{
    fs.readFile(filePath,(err,data)=>{
        if(!err){
            let obj = JSON.parse(data);
            let newObj = obj.filter((val)=>{
                return val['id'] != id
            });
            let str = JSON.stringify(newObj);
            fs.writeFile(filePath,str,(err)=>{
                if(!err){
                    callback(null);
                }else{
                    callback(err);
                }
            })      
        }else{
            callback(err);
        }
    });
}

module.exports = {
    get:get,
    add:add,
    remove:remove
}