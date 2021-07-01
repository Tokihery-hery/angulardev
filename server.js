const express = require('express')

const app = express()

const path = require('path')
const port = process.env.PORT || '4200';

app.use(express.static(__dirname+'/dist/angular'))

app.get('/*', (req, res)=>{
	res.sendFile(path.join(__dirname+'/dist/angular/index.html'))

})

app.listen(port, ()=>{
	console.log("started")
})