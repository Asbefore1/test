//语法:Buffer是一个存储二进制的容器,是一个数组
//语法:Buffer.from(string);
//语法:Buffer.alloc(size);

// const buf=Buffer.from('hello');
// console.log(buf);//返回五个二进制数,对应hello五个字母
// console.log(buf.length);//5

// const buf=Buffer.from('上课');//返回6个二进制数,即在node中,一个汉字等于3个字节
// console.log(buf);
// console.log(buf.length);//6



const buf=Buffer.alloc(10);
buf[1]=10;
console.log(buf);

