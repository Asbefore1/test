//流(stream)在node中是一个用于处理流数据的抽象接口
//所有流都是EventEmitter的实例
// const {Writable} = require('stream');
// class Mywriter extends Writable{//Mywriter继承Writable上的方法,Writable上有write这样一个方法
// 	constructor(){
// 		super();
// 	}
// 	_write(chunk,encoding,callBack){//参数一:要写的块(表示要写入的数据),参数二:字符编码,可写可不写,参数三:回调函数
// 		console.log(chunk.toString());
// 		callBack();
// 	}
// }
//可读流和可写流都将数据存储在内部缓冲区buffer中
// const writer =new Mywriter();//new了一个实例
// writer.on('finish',()=>{
// 	console.log('这是结束...')
// })
// writer.write('aa',()=>{
// 	console.log('11');
// })
// writer.end();//通过end进行结束

//可读流
// process.stdin.pipe(writer);//通过管道流入到可写流

const stream =require('stream');
console.log(stream);//上面有很多方法,只获取到Writable