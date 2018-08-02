const MongoClient=require('mongodb').MongoClient;

// console.log(MongoClient);

//collection url

const Url='mongodb://localhost:27017';

//Database Name

const dbName='kuazhu';

MongoClient.connect(Url, {useNewUrlParser:true},function(err,client){//MongoClient上的静态方法connect

	// console.log('连接成功了....');

	//获取数据库对象
	const db=client.db(dbName);
	// console.log(db);

	//创建集合
	const col=db.collection('wish');
	
	/*
	//创建对象
	col.insertMany([{a:1},{b:2}],function(err,result){
		if(!err){
			console.log(result);
		}else{
			console.log('insert err...',err);
		}
	})
	client.close();
	*/

	
	//查询
	/*
	col.find({a:1}).toArray(function(err,docs){
		if(!err){
			console.log(docs);
		}else{
			console.log('find err...',err);
		}
		client.close();
	})
	*/

	/*
	//更新
	col.updateOne({a:3},{$set:{c:3}},function(err,result){
		if(!err){
			console.log(result.result);
		}else{
			console.log('updateOne err...',err);
		}
		client.close();
	})
	*/

	/*
	//删除
	col.deleteOne({a:3},function(err,result){
		if(!err){
			console.log(result.result);
		}else{
			console.log('deleteOne err...',err);
		}
		client.close();
	})
	*/
})