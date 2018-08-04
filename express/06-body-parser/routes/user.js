const Router = require('express').Router;
const router=Router();



router.get('/',(req,res)=>{
	res.send('get user data')
})

router.post('/',(req,res)=>{
	// console.log('post data....')
	
	/*
	body='';
	req.on('data',(chunk)=>{
		body+=chunk;
	})
	req.on('end',()=>{
		console.log(body);
	})
	let obj=querystring.parse(body);//需要装querystring插件
	console.log(obj);
	*/
	
	console.log(req.body);
	//在app.js中写app.use(bodyParser.urlencoded({ extended: false }));
	//app.use(bodyParser.json());来代替写上面的body=''和下面的步骤,直接拿到对象
	
})





router.put('/',(req,res)=>{
	res.send('emit user data')
})
router.delete('/',(req,res)=>{
	res.send('detele user data')
})

module.exports = router;