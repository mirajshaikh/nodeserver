var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
var response =
		{name: "Abhsihek Sharma", ID: 1,city:"Dabra"}
		
app.get('/api', (req,res) => {
	res.json(response);
})

app.listen(3000);