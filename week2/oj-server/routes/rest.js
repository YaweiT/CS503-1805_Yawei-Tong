const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

//place holder, nee problemService later on, to communicate with Database.
const problemService = require('../services/problemService');


//get all problems
router.get('/problems', (req, res) => {
	//place holder, need method getProblems from ProblemService
	problemService.getProblems()
		// unsynchronized process 
		.then(problems => res.json(problems));
})

//get signle problem
router.get('/problems/:id', (req,res) =>{
	const id = req.params.id;
	//problemService --placeholder
	problemService.getProblem(+id)
		.then(problem => res.json(problem));
});

//post problem
router.post('/problems', jsonParser, (req,res) =>{
	problemService.addProblem(req.body)
		.then(problem => {
			res.json(problem);
		}, error =>{
			res.status(400).send('Error, xxxxxxxx(problem name already exist');
		});
});


module.exports = router;
