// console.log(1);
// let timer1=setTimeout(()=>{//相当于异步,在同步执行完之后再去执行异步的
// 	console.log(2);
// },500)
// clearTimeout(timer1);
// console.log(3);




// console.log(1);
// let timer2=setInterval(()=>{
// 	console.log(2);
// },500)
// clearInterval(timer2);
// console.log(3);


console.log(1);//立即型定时器
let timer3=setImmediate(()=>{//不需要传时间
	console.log(2);
})
clearImmediate(timer3);
console.log(3);


