const express = require('express')

const app = express()

const path = require('path')


app.use(express.static(__dirname+'dist/angulardev'))

app.get('/*', (req, res)=>{
	res.sendFile(path.join(__dirname+'dist/angulardev/index.html'))

})

app.listen(proccess.env.PORT)