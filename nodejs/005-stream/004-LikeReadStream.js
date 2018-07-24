const EventEmitter =require('events');
class LikeReadableStream extends EventEmitter{
	constructor(data,offsetLength){
		super();
		this.data=data;
		this.offsetLength=offsetLength;
		this.on('newListener',(eventName)=>{
			if(eventName ==='data'){
				setImmediate(()=>{
					this._dispatch();
				})				
			}
		})		
	}
	_dispatch(){
		let totalLength=this.data.length;
		let restLength=totalLength;
		while(restLength>0){
			let start=totalLength-restLength;
			let end=start+this.offsetLength;
			let tmp=this.data.slice(start,end);
			let buf=Buffer.from(tmp);
			this.emit('data',buf);
			restLength-=this.offsetLength;
		}
	}
}
let data=`aaaaaaaaaabbbbbbbbbb`;

let rs=new LikeReadableStream(data,10);

rs.on('data',(chunk)=>{
	console.log(chunk.toString());
})
rs.on('end',()=>{
	console.log('end...');
})
