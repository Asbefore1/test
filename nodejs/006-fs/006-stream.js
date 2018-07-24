const fs=require('fs');
// let ws=fs.createWriteStream('./ws.txt');
let rs=fs.createReadStream('./rs.txt');
// // console.log(rs);
// // console.log(ws);
// ws.write('ddd',()=>{
// 	console.log('write file success...');
// })
// ws.on('finish',()=>{
// 	console.log('finish....');
// })
// ws.end();
let body='';
rs.on('data',(chunk)=>{
	body+=chunk;
	console.log(chunk);
})
rs.on('end',()=>{
	console.log(body);
	console.log('read file end...');
})
// rs.pipe(ws);

