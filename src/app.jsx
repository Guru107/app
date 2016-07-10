import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import Index from './components/Index'

let app = express();

app.get("/",(req,res) => {
	let component  = '<!DOCTYPE html>\n'+ReactDOM.renderToString(<Index/>)
	res.send(component)
})
const PORT = process.env.NODE_ENV === 'development' ? 3000 : process.env.PORT ;
app.listen(PORT,()=>{
	console.log("Listening on port "+PORT)
})