const fs=require('fs');
const fd=fs.openSync('./001.txt','r');
let buf=Buffer.alloc(100);
fs.readSync(fd,buf,0,100,0);//读取的文件放到buf中
console.log(buf);