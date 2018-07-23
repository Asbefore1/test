const EventEmitter=require('events');
class MyEmitter extends EventEmitter{};//从EventEmitter上继承过来
const myEmitter=new MyEmitter();//自定义new一个实例
myEmitter.setMaxListeners(12);//设置最大个数,默认是10个
myEmitter.on('test',()=>{//监听事件
	console.log('test event');
})
myEmitter.emit('test');//触发事件