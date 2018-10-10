 const express = require('express');

const app = express();
const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');

// app.get('/', (req,res) =>{
// 	res.send('Hello world from express here!!!!!!');
// 	console.log("consol, here");
// });


app.use('/api/v1', restRouter);

app.listen(3000, ()=>{
	console.log('App is listening to port 3000');
});