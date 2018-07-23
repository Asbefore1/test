const EventEmitter =require('events');
class LikeReadableStream extends EventEmitter{
	constructor(dataName,offsetLength){
		super();
		this.dataName=dataName;
		this.offsetLength=offsetLength;
		this.on('newListener',(eventName)=>{
			if(typeof =='data'){
				this.dispach();
			}
		})
		
	}
	_dispach(){
		let start=this.totalLength-this.restLength;
		let end=
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
