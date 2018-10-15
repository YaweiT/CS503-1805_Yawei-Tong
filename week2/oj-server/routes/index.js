const express = require('express');
const router  = express.Router();
const path = require('path');

router.get('/', (req,res)=>{ 
	res.sendFile('index.html', {rout: path.join(__dirname, '../../public/')});

});

module.exports = router;