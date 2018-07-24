const fs=require('fs');
fs.open('./001.txt','r',(err,fd)=>{
	if(!err){//open success
		let buf=Buffer.alloc(100);
		fs.read(fd,buf,0,100,0,(err)=>{
			if(!err){//read success
				console.log('read success...');
				fs.close(fd,(err)=>{
					if(!err){//close success
						console.log('close sucess...');
						console.log(buf.toString());
					}else{//close fail
						console.log('close fail...',err);
					}
				})				
			}else{//read fail
				console.log('read fail...',err);
			}
		})		
	}else{//open fail
		console.log('open fail...',err);
	}
})