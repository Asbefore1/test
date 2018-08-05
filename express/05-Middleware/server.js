const http=require('http');


function express(){//一个闭包

	//存放需要执行的中间件
	let fns=[];
	
	let app=function (req,res){

		let i=0;

		function next(){	
			
			let fn=fns[i++];//i++先执行代码在自增,第一次进来i=0,走完一次在增加

			if(!fn){//没有函数就终止
				return ;   
			}

			fn(req,res,next)		
		}
		next()//调用next函数
	}
	app.use=function(fn){
		fns.push(fn)
	}

	return app;
}

const app=express();

//app.use()相当于调用use方法,只是里面传进来了一个回调函数作为参数fn
app.use((req,res,next)=>{
	console.log('before A::::');
	next();
	console.log('after A::::');
})
app.use((req,res,next)=>{
	console.log('before B::::');
	next();
	console.log('after B::::');
})

app.use((req,res,next)=>{
	console.log('before C::::');
	// next();
	console.log('after C::::');
})


// let server=http.createServer((req,res)=>{
	
// })

let server=http.createServer(app);

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1:3000')
})