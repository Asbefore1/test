const Router = require('express').Router;
const router=Router();



router.get('/',(req,res)=>{
	res.send('get user data')
})

router.post('/',(req,res)=>{
	res.send('add user data')
	
})

router.put('/',(req,res)=>{
	res.send('emit user data')
})
router.delete('/',(req,res)=>{
	res.send('detele user data')
})

module.exports = router;