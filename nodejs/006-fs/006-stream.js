const fs=require('fs');
let ws=fs.createWriteStream('./ws.txt');
let rs=fs.createReadStream('./rs.txt');
// // console.log(rs);
// // console.log(ws);
// ws.write('dddwwwwww',()=>{
// 	console.log('write file success...');
// })
// ws.on('finish',()=>{
// 	console.log('finish....');
// })
// ws.end();


// let body='';//存放结果的
// rs.on('data',(chunk)=>{
// 	body+=chunk;//buffer和body系统一拼接,相当于字符串拼接,相当于调用了toString
// 	console.log(chunk);//是一个buffer
// })
// rs.on('end',()=>{
// 	console.log(body);//相当于字符串了
// 	console.log('read file end...');
// })


rs.pipe(ws);//将可读流放到可写流中,可写流只能流入不能流出

