const express = require('express')
const app = express()
require("dotenv").config()

app.get(`/`, (req, res) => {
    res.send(`<h2>99 Bottles of beer on the wall</h2>
    <a href = "/98">Take one down, pass it around<a/>`)
})

app.get(`/:numOfButtles`, (req, res) => {
    let numOfButtles = req.params.numOfButtles
    if (numOfButtles > 0) {
    res.send(`<h3>${numOfButtles} Bottles of beer on the wall</h3>
    <a href = "/${numOfButtles -1}">Take one down, pass it around<a/>`)}
    else {
        res.send(`I'm sorry to be the one who has to tell you - there is no more beer. <a href = "/">Buy more beer<a/>`)
    }
})

app.listen(3000, (req, res) => {
    console.log(`lisening to port 3000`)
})

