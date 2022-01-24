const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/',async(req,res)=> {
	try{
		const aliens = await Alien.find();
		res.json(aliens)
	}
	catch(err){
		console.log('Error ' + err)
	}
	//res.send('Get Request');
})

router.get('/:id',async(req,res)=> {
	try{
		const alien = await Alien.findById(req.params.id);
		res.json(alien)
	}
	catch(err){
		console.log('Error ' + err)
	}
})

router.patch('/:id', async(req,res)=>{
	try{
		const alien = await Alien.findById(req.params.id);
		alien.name = req.body.name;
		const a1 = await alien.save();
		res.json(a1);
	}
	catch(err){
		console.log("Error: " + err)
	}
})
router.post('/', async(req,res) => {
	const alien = new Alien({
		name: req.body.name,
		tech: req.body.tech,
		sub: req.body.sub
	})
	try{
		const a1 = await alien.save();
		res.json(a1);
	}
	catch(err){
		res.send("Error " + err)
	}
})
router.delete('/:id', async(req,res)=>{
	try{
		const alien = await Alien.findById(req.params.id);
		res.json('Product Deleted')
	}
	catch(err){
		console.log("Error: " + err)
	}
})
module.exports = router
