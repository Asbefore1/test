const EventEmitter=require('events');
class MyEmitter extends EventEmitter{};
const myEmitter=new MyEmitter();
let fn1=()=>{
	console.log('test1 event');
}
let fn2=()=>{
	console.log('test2 event');
}
myEmitter.on('newListener',(eventName,callBack)=>{//有on事件就会被触发,与有没有emit无关
	console.log('newListener...','事件名'+ eventName, '函数'+callBack);
	callBack();
})

// myEmitter.on('test',fn1);
myEmitter.on('test',fn2);


// myEmitter.emit('test');