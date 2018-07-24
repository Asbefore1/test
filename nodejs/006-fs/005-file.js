const fs=require('fs');
// fs.writeFileSync('./001.txt','vvvv',{flag:'a'});

// let data=fs.readFileSync('./001.txt');
// console.log(data.toString());

fs.writeFile('./001.txt','eeee\n',{flag:'a'},(err)=>{ // \n换行
	if(!err){
		console.log('write file success...');
	}else{
		console.log('write file fail...',err);
	}
});

fs.readFile('./001.txt',(err,data)=>{
	if(!err){
		console.log('read file success...');
		console.log(data.toString());
	}else{
		console.log('read file fail...',err);
	}
})

