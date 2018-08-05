const express=require('express');
const app=express();


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



app.listen(3000,'127.0.0.1',()=>{
	console.log('server is running on 127.0.0.1')
})