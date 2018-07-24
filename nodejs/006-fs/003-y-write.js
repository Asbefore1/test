const fs=require('fs');
let fd=fs.open('./001.txt','w',(err,fd)=>{	
	if(!err){//open success
		fs.write(fd,'bbbbbb',(err)=>{
			if(!err){//write success
				console.log('write success...');
				fs.close(fd,(err)=>{
					if(!err){//close success
						console.log('close success...');
					}else{//close fail
						console.log('close fail...',err);
					}
				})
			}else{//write fail
				console.log('close fail...',err);
			}
		})
	}else{//open fail
		console.log('open fail...',err);
	}
})

console.log('to do something');