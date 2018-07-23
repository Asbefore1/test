const EventEmitter=require('events');
class MyEmitter extends EventEmitter{};
const myEmitter=new MyEmitter();
let fn1=()=>{
	console.log('test1 event');
}
let fn2=()=>{
	console.log('test2 event');
}
myEmitter.on('test',fn1);
myEmitter.on('test',fn2);
console.log(myEmitter.listeners('test'));//是一个数组,有几个事件就有几个

// console.log(myEmitter.off===myEmitter.removeListener);//在10.0版本上是true
// myEmitter.removeListener('test',fn1);
// myEmitter.off('test',fn1);//必须在10.0以上的版本才可以用
myEmitter.emit('test');