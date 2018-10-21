const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const nodeRestClient = require('node-rest-client').Client;
const restClient = new nodeRestClient()

//python service to do executor
//EXECUTOR_SERVER_URL = 'http://localhost:5000/build_and_run';

//nginx kicked in and allocate server
EXECUTOR_SERVER_URL = 'http://executor/build_and_run';


restClient.registerMethod('build_and_run', EXECUTOR_SERVER_URL, 'POST');

//for mongoDEB
const mongoose = require('mongoose');
mongoose.connect('mongodb://Yawei:tyw901018@ds227243.mlab.com:27243/yawei-cs1805')

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

router.post('/build_and_run', jsonParser, (req, res) =>{
	const code = req.body.code;
	const lang = req.body.lang;

	console.log('lang:', lang, 'code: ', code);
	restClient.methods.build_and_run(
	{
		data: {code: code, lang: lang},
		headers: {'Content-Type': 'application/json'}
	},
	(data)=>{
		
		const text = `Build output: ${data['build']}, execute output: ${data['run']}`;
		res.json(text);
	}
	)
});


module.exports = router;
