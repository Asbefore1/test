const EventEmitter=require('events');
class MyEmitter extends EventEmitter{};//从EventEmitter上继承过来
const myEmitter=new MyEmitter();//自定义new一个实例
// myEmitter.setMaxListeners(12);//设置最大个数,默认是10个
// myEmitter.on('test',()=>{
// 	console.log('test event');
// })
// myEmitter.emit('test');//on会调用两次
// myEmitter.emit('test');

// myEmitter.once('test',()=>{
// 	console.log('test event');
// })
// myEmitter.emit('test');//once只调用一次,会在第一次调用结束之后将事件移除,第二次调用是事件就没有了
// myEmitter.emit('test');

// myEmitter.addListener('test',()=>{//和on一样
// 	console.log('test event');
// })
// myEmitter.emit('test');

	// console.log(myEmitter.on===myEmitter.addListener);

// myEmitter.on('test',(arg1,arg2)=>{//不传ev对象
// 	console.log(this);//空对象,属于外面
// 	console.log('test event',arg1,arg2);
// })
// myEmitter.emit('test','aa','bb');//参数不用[]括住


// myEmitter.on('test',function(arg1,arg2){
// 	console.log(this);//this是emit,谁调用this就是谁
// 	console.log('test event',arg1,arg2);
// })
// myEmitter.emit('test','aa','bb');


 myEmitter.on('test',function(arg1,arg2){
	// console.log(this);//this是emit,谁调用this就是谁
	console.log('test event',arg1,arg2);
})
myEmitter.emit('test',...['aa','bb']);//传数组可以用扩展运算符