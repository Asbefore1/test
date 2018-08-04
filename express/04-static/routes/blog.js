const Router = require('express').Router;
const router=Router();

router.get('/',(req,res)=>{
	res.send('get blog data')
})
router.post('/',(req,res)=>{
	res.send('add blog data')
})
router.put('/',(req,res)=>{
	res.send('emit blog data')
})
router.delete('/:id',(req,res)=>{
	console.log(req.params.id);
	res.send('detele blog data')
})

module.exports = router;