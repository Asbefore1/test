const http=require('http');


function express(){//一个闭包
	let fns=[];
	
	function app(req,res){

		let i=0;

		function next(){	
			
			let fn=fns[i++];

			if(!fn){//没有函数就终止
				return ;
			}

			fn(req,res,next)		
		}
		next()
	}
	app.use=function(fn){
		fns.push(fn)
	}

	return app;
}

const app=express();


app.use((req,res,next)=>{
	console.log('beforeA::::');
	next();
	console.log('afterA::::');
})
app.use((req,res,next)=>{
	console.log('beforeB::::');
	next();
	console.log('afterB::::');
})

app.use((req,res,next)=>{
	console.log('beforeC::::');
	next();
	console.log('afterC::::');
})


// let server=http.createServer((req,res)=>{
	
// })

let server=http.createServer(app);

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1:3000')
})