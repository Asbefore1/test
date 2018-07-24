const fs=require('fs');
//1.打开文件
let fd=fs.openSync('./001.txt','a');//a是append,追加的意思
// console.log(fd);
//2.写入内容
fs.writeSync(fd,'aaabbb');
//3.保存并退出
fs.closeSync(fd);